
# PDF Viewer Web Application
PDF Viewer is a simple web application that uses the Adobe PDF View SDK to allow users to read and manipulate PDF files easily while maintaining quality.    

## Structure
The web app consists of a single `index.html` file and corresponding stylesheet `style.css` and scripting file `script.js` in the root directory. 

The core functionality is contained in `script.js` which makes appropriate call to the **View SDK**, configures the `adobeDCView` object and supports *Embed View Mode switching*.

## PDF View SDK Credentials    
̥The credentials used during development have been left intact so as to facilitate the reviewers during review.

## Google Analytics
The analytics tracking code is placed under the `<head>` tag in `index.html`.
> To setup your own google analytics, please swap the tracking code in `index.html` under the `<head>` tag with your own.   
To know what is google analytics and how to set-up your own google analytics account, see [this article](https://analytics.google.com/analytics/academy/course/6)

## Rendered PDF   
As given in the description, the PDF rendered on the application is the one created by the `pdf_creator` tool. The ZIP needed to create the PDF is also included as `arms.zip`

## Live App
Visit [here](https://a-nisa.github.io/PDFViewer) to check out the application.