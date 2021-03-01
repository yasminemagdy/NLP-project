# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The meaningCloud API is a software service product that make the user enable to embed text analytics and semantic processing in any application or system. Previously, it was branded as 'Textalytice'

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/create-account).By signing up you will be given a license key to start using the API.


### Step 2: Environment Variables
Next we need to declare our API keys, which we want it to be secret because it is our personal key  , so we need to make a secret file that no one can see:

This secret file called .env file which will not be shown on github of course after putting it on .gitignore file which you will find on the starter code , or you can make it easy , by adding new file in the root of your project and name it like this".env")
Here the steps to make this file :

1- make .env file 
2- put your key to be like this (API_KEY =**************************) NOTE: you don't have to put it inside quotes
```
Now we made the file , After this we need to make it usable ! , stay with me in these steps:

1- Use "npm install dotnev" OR "yarn install dotnev" which will allow u to use the .env variables(by the way , "env" stands for environment)

2- Now go to your "index.js' which located on server folder and type this on the top 
       const dotnev = require("dotnev");
       dotnev.config();
            OR 
        const dotnev =require("dotnev").config(); (as a short method)    

3- Now we need to tell the file that u will use the API_KEY on the ".env" file , to do this we need to make a reference:
-->first method
 cosnt key = process.env.API_KEY
now if u want to see it printed on the console --> console.log(`Your API key is ${key}`)
-->second method (To be honest it's a short method)
console.log(`Your API key is ${process.env.API_KEY}`)

```
## After the meaningCloud API

Once you are hooked up to the meaningCloud API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers. 
- Test that the site is now available even when you stop your local server

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

