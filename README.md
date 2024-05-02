### :heavy_check_mark: FINISHED
#### :notebook: [Interface] Event Scheduling
# :airplane: Viajerando

## :mag: Objective
Viajerando is a website for purchasing and booking travel through itineraries. It has the ability to create new itineraries and destinations. It lists, edits, and deletes existing destinations. It also lists, edits, and deletes existing itineraries. Users must be logged in to access system functionalities such as creating itineraries, listing their itineraries, editing their itineraries, and deleting itineraries. Destinations are registered by an internal administrator.

## :computer: Development
Its database works as follows:
1 to N Relationship

User Creates at least 0 and at most n Itineraries and an Itinerary is created by a single user:

Table: Itinerary

id - (PK) int

accumulatedPrice - double

startDate - date

endDate - date

idUser - (FK from user) int

Table: User

username - string

email – string

id – (PK) int

cpf - string

phone - string

N to N Relationship

Itinerary has at least 0 and at most n Destinations and Destinations can be in 0 or n Itineraries

Table: Destination

id - (PK) int

city - string

state - string

price - double

boarding - string

description - string

Table Possesses

fkItinerary - int

fkDestination - int

The collection of Endpoints is in a file here in the folder, it can be submitted in the POSTMAN application where you can see all the routes created. It is also available at the link: https://www.getpostman.com/collections/625aad9fbd4a4937907c.

Frontend GitHub Repository: https://github.com/bielborgesc/front-end-viajerando.
Backend GitHub Repository: https://github.com/bielborgesc/backend-viajerando.

## :arrow_forward: Run the code

* To run the project, first open the Backend in the IntelliJ IDE and execute the DemoApplication file which will start running on port 8080.

* Then you need to open the Frontend in Visual Studio Code IDE, open your terminal, and with Node installed on your machine, run the command "npm install" to install Angular dependencies on your machine. Once the installation is complete, just type the command "npm start" and the application will start running on port 4200 of your localhost.

* With both services running, you will be able to execute commands on the platform.

## :heavy_check_mark: Concluding

This application demonstrates how a full-stack application works, with a simple example of travel itineraries.

## :raising_hand_man: Developers

Gabriel Carvalho
Fagner Viana
Jackson de Almeida
