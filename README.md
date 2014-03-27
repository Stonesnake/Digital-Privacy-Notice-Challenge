# Digital Privacy Notice Challenge

## Overview

Extremely readable and visually-appeaing, this is a web-based model notice of privacy practices built using HTML, CSS, and jQuery. This solution adapts the content of the paper-based notice to the web while retaining the overall design aesthetics already established by the paper version. It is responsive (i.e. it works across various screen resolutions and devices) and standards-compliant.

### System Recommendations
Below are the recommendations for running this solution.

#### Hardware

* 1 GHz CPU
* 1 GB RAM
* 500 MB of available disk space  

#### Operating System

* WindowsXP
* Windows 7
* Windows 8
* Windows 8.1
* Windows Phone 8.1
* OS X
* iOS 6.0+

#### Browsers

* Internet Explorer 9+
* Firefox 10+
* Chrome 13+
* Safari 5+ 

### Usage

Usage instructions for both Healthcare Providers and Health Plans are identical except for the HTML file that you will be using.

```
If you are a Healthcare Provider:
Use index_hc-provider.html
```
```
If you are a Health Plan:
Use index_hc-provider.html
```
#### Required files
This web-based solution requires the following files (provided) to run properly:

* 1 HTML file pertinent to your organization
	- index_hc-provider.html, OR;
	- index_health-plan.html
* 4 CSS files (must appear in this order) 
 	- bootstrap.css
 	- animate.css
 	- font-awesome.min.css
 	- and app.css)
* 2 javascript files
	- jquery.min.js (jQuery v.1.10.2 - feel free to use the Google hosted CDN version)
	- app.js
* Image files
	- replace logo.png with your organization's logo
	- imagwa for triangular section separator
* Font files
	- icon fonts provded by [FontAwesome](http://fontawesome.io/)

#### Entering custom content

A total of **7** sections **(Instructions A-G)** might require you to enter custom content pertaining to your organization. These sections are clearly marked with comments in each HTML file. Each one begins with this:

	<!-- **ACTION:
	
For example, the section for Instruction A for a Health Plan looks like:
	
	<h3><!-- **ACTION: INSERT INSTRUCTION A TEXT HERE. Instruction A: Insert the health plan's name --></h3>
	
You will simply replace the comment with your health plan's name and save the HTML file.