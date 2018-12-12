# FoodPrint Companion API

## API Proposal
This app stores food with their CO2e output so that users that track their intake of these foods and see how much CO2 each food produces. It fulfills the need for those who care about or want to learn more about their personal environmental impact when it comes to their food intake.

## What is FoodPrint?
This is a companion API to the FoodPrint app. If you would like to check out the current, live version of FoodPrint, go to https://know-your-foodprint.herokuapp.com/.

## Content
Have you ever wanted to improve your overall carbon output, but were not sure how to do it? Use the FoodPrint API! This API is a food tracker that tells your your carbon output based each food you have eaten.

## Who are you?
I'm Faith Chikwekwe 👋🏾, a back-end web developer learning and growing at Make School (Github@MakeSchool).

## Why did you make FoodPrint in the first place?
Food is a huge contributor to CO2 emissions and its also a very personal way to help prevent global warming. We feel that if people are aware of how much each individual food item contributes in CO2 output to climate change, they will be more able to make positive changes to their diet that help the environment.

## Back-End Design
This project was developed using MongoDB, Node.js and Express.js in the back-end. We used resourceful and RESTful routing throughout and integrated authentication concepts. It also has test coverage with Mocha and Chai.

## Running
This API can be accessed at http://localhost:3000/. To check it out, type the command 'npm start' into your console from the root folder.

If you would like to check out the current, live version of the original FoodPrint, go to https://know-your-foodprint.herokuapp.com/.

## Testing
We used Mocha and Chai for testing. Tests are stored in /test. To run tests for this project, type the command 'npm test' or 'mocha' into your console from the root folder.

## Are there other ways to learn more about Foodprint?
Me (Github@fchikwekwe 👩🏾‍💻) and Javier Mendoza (Github@javiermms 👨🏽‍💻) were the developers on the original FoodPrint application from which this API is derived. We also published a blog series (https://bit.ly/2GaQSa1) about our development process on this app.

If you would like more insight on how the app that we developed works, you can see a live user demo here https://vimeo.com/305850006.

# Food Model

| Key | Type | Description |
|-----|-------|---------------------|
| name | String | The name of the food. |
| description | String | The description of the food, ideally including some nutritional info. |
| CO2e | Number | The estimated carbon equivalent output. |

# Profile Model
| Key | Type | Description |
|-----|------|-------|
| Username | String | This is a required field. The user's identifier. |
| Password | String | This is a required field. The user's authentication credentials. |
| Foods | Array | This is an embedded document with a list of foods that the user has eaten. |

# Endpoints
