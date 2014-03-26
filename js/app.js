/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }
  
  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }

  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
(function($){function Placeholder(input){this.input=input;this.placeholder=this.input.attr('placeholder').replace(/\\n/g,"\n");if(input.attr('type')=='password'){this.handlePassword();}
$(input[0].form).submit(function(){if(input.hasClass('placeholder')&&input[0].value==input.attr('placeholder')){input[0].value='';}});}
Placeholder.prototype={show:function(loading){if(this.input[0].value===''||(loading&&this.valueIsPlaceholder())){if(this.isPassword){try{this.input[0].setAttribute('type','text');}catch(e){this.input.before(this.fakePassword.show()).hide();}}
this.input.addClass('placeholder');this.input[0].value=this.placeholder;this.input.attr('placeholder','');}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass('placeholder')){this.input.removeClass('placeholder');this.input[0].value='';if(this.isPassword){try{this.input[0].setAttribute('type','password');}catch(e){}
this.input.show();this.input[0].focus();}}},valueIsPlaceholder:function(){return this.input[0].value==this.placeholder;},handlePassword:function(){var input=this.input;input.attr('realType','password');this.isPassword=true;if((navigator.appName == 'Microsoft Internet Explorer')&&input[0].outerHTML){var fakeHTML=$(input[0].outerHTML.replace(/type=(['"])?password\1/gi,'type=$1text$1'));this.fakePassword=fakeHTML.val(input.attr('placeholder')).addClass('placeholder').focus(function(){input.trigger('focus');$(this).hide();});$(input[0].form).submit(function(){fakeHTML.remove();input.show()});}}};$.fn.placeholder=function(){return this.each(function(){var input=$(this);var placeholder=new Placeholder(input);placeholder.show(true);input.focus(function(){placeholder.hide();});input.blur(function(){placeholder.show(false);});input.closest('form').submit(function(){if(input.hasClass('placeholder')){input.removeClass('placeholder');input.val('');}});if(navigator.appName == 'Microsoft Internet Explorer'){$(window).load(function(){if(input.val()){input.removeClass("placeholder");}
placeholder.show(true);});input.focus(function(){if(this.value==""){var range=this.createTextRange();range.collapse(true);range.moveStart('character',0);range.select();}});}});}})(jQuery);


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
Modernizr.addTest('android',function(){return!!navigator.userAgent.match(/Android/i)});
Modernizr.addTest('chrome',function(){return!!navigator.userAgent.match(/Chrome/i)});
Modernizr.addTest('firefox',function(){return!!navigator.userAgent.match(/Firefox/i)});
Modernizr.addTest('iemobile',function(){return!!navigator.userAgent.match(/IEMobile/i)});
Modernizr.addTest('ie',function(){return!!navigator.userAgent.match(/MSIE/i)});
Modernizr.addTest('ie10',function(){return!!navigator.userAgent.match(/MSIE 10/i)});
Modernizr.addTest('ie11',function(){return!!navigator.userAgent.match(/Trident.*rv:11\./)});
Modernizr.addTest('ios',function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)});


+function ($) {

  $(function(){
	
    // class (*)
  	$(document).on('click', '[data-toggle^="class"]', function(e){
  		e && e.preventDefault();
  		var $this = $(e.target), $class , $target, $tmp, $classes, $targets;
  		!$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
    	$class = $this.data()['toggle'];
    	$target = $this.data('target') || $this.attr('href');
      $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
      $target && ($targets = $target.split(','));
      $targets && $targets.length && $.each($targets, function( index, value ) {
        ($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]);
      });
    	$this.toggleClass('active');
  	});

    var scrollToTop = function(){
  		!location.hash && setTimeout(function () {
  		    if (!pageYOffset) window.scrollTo(0, 0);
  		}, 1000);
  	};
  
	// set height of .vbox > header ~ section 
	var logoHeight = $('.navbar-brand img').height();
	var headerLineHeight = logoHeight * 1.5;
	$('.navbar-brand').css('line-height', headerLineHeight +'px');
	$('.navbar').height(headerLineHeight);
	$('.header > .btn').css('line-height', logoHeight + 'px');
	$('.breadcrumb').css('line-height', logoHeight +'px');
	$('.vbox section#start').css('top', headerLineHeight);
	
	
	
	
	// Nav load content + breadcrumb
	$('.nav-primary ul.nav li a').click(function(){
		$('.sec-content, .sec-content.home').hide();
		$('.sec-content').scrollTop();
		$('.nav-primary ul.nav li a').removeClass('active');
		$(this).addClass('active');
		var className = $(this).attr('href').split('#')[1];
		var showClass = '.sec-content.' + className;
		$(showClass).show();
		// breadcrumb 
		var pageName = $(this).find('span').text();
		var activeBreadcrumb = $('ul.breadcrumb li.active');
		if (!activeBreadcrumb.length) {
			$('ul.breadcrumb').append('<li class="active"></li>');
		} 
		$('ul.breadcrumb li.active').text(pageName);
	});
	
	// home button
	$('.home-link').click(function(){
		$('.sec-content').hide();
		$('.sec-content.home').fadeIn(500);
	});
	
	// placeholder
  	$('input[placeholder], textarea[placeholder]').placeholder();
	
	// timeout for input fields (determine whether user is done typing/time out)
	var timeoutReference;
	$(document).ready(function() {
		$('.user-input').keypress(function() {
			var el = this; // copy of this object for further usage
	
			if (timeoutReference) clearTimeout(timeoutReference);
			timeoutReference = setTimeout(function() {
				doneTyping.call(el);
			}, 3000);
			
			
		});
		$('.user-input').blur(function(){
			doneTyping.call(this);
		});
	});
	function doneTyping(){
		// execute only if timer is pending
		if (!timeoutReference){
			return;
		}
		// reset the timeout then continue on with the code
		timeoutReference = null;
		// "fake" save input
		$(this).addClass('user-input-done');
		// Re-size to fit initial content.
		var $textArea = $(this);
		resizeTextArea($textArea);
		function resizeTextArea($element) {
			$element.height($element[0].scrollHeight);
		}
		
	}
    $('.user-input').focus(function(){
		$(this).removeClass('user-input-done');
	});
	
	
	
	

  });
}(jQuery);