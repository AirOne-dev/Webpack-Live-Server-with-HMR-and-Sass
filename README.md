# Webpack Live Server with HMR and Sass

This project is a template for all your small projects, it includes
webpack with a live & hot server. 

It means when you start the project (``npm run dev``). You can directly go in your browser (``https://127.0.0.1:8080``) and start coding. 

It also allow you to automatically refresh the browser when you update js / html files.

And finally it reload the all the CSS of the page when you modify a scss file (it reload the style of the page, not the browser ;) ) 

## Initial Setup
Download the project, and in the project folder run ``npm install``, it's all you need to do !

## Usage (live server) :
To start the project and code, run the command ``npm run dev`` in the project folder, it will launch a live server (``http://localhost:8080``). 

Now you're ready to code ! (you can modify ``public/index.html`` and every files in ``public/src``)

## Publish your project :
To publish your project and use your website without running the live server, just run ``npm run prod``. 

All the compiled css and js is now on the ``public/dist`` folder.