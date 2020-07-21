
# PDF Viewer Web Application
PDF Viewer is a simple web application that uses the Adobe DC View SDK to allow users to read and manipulate PDF files easily while maintaining quality.    

## Run
1. Change into the root directory and run `npm install` to install dependencies. 
2. Run `node main.js` to start up very basic local server.
3. Point to `localhost:3000` to interact with the application.    

## Local File Access Feature
Now, it is possible to access local files through the application by choosing via the *Choose a PDF File:* option.

## Structure
The web app consists of a single `index.html` file and corresponding stylesheet `style.css` and scripting file `script.js` in the root directory. 

The core functionality is contained in `script.js` which makes appropriate call to the **View SDK**, configures the `adobeDCView` object and supports *Embed View Mode switching*.

## View SDK Credentials    
̥As per discussions in the forum, the credentials used during development have been left intact so as to facilitate the reviewers during review.

## Google Analytics
The analytics tracking code is placed under the `<head>` tag in `index.html`.
> To setup your own google analytics, please swap the tracking code in `index.html` under the `<head>` tag with your own.

## Changing the PDF to render 
See **Local File Access Feature**




