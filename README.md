angularjs-ngview
================

a quick app with angularjs that uses ng-view

## View Live Demo

    http://angularjs-ngview-quickstart.herokuapp.com/

    # Setup

    Install nodejs from http://nodejs.org

    Download this project and CD to it's directory

    ``` bash

    git clone https://github.com/patchapps/angularjs-ngview.git
    cd angularjs-ngview.git
    ```

    To install dependencies run the command:

    ``` bash
      npm install 
      ```

      To start the web server run

      ``` bash
        node web.js
        ```

        Browse to the application (default is http://localhost:3000)


        ## Deploy to Heroku

        ``` bash
        git init
        git add .
        git commit -m "deploy"
        heroku create
        git push heroku master
        heroku ps:scale web=1
        heroku open
        ```

