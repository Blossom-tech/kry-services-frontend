# Kry Code Assignment (Service Poller)

Links to the repos


Backend repo:   https://github.com/Blossom-tech/kry-services-frontend.git

Frontend repo:  https://github.com/Blossom-tech/kry-services-frontend.git

## How to run the Application 
### 1. It's online at the following link on Heroku

https://kry-services-frontend.herokuapp.com/

The Application will show the list of services if there are any present in the database or you can add few services and it will display them on the screen.
- It might take few seconds for the application to start up for the first time. Also, first db interaction could take few seconds.

- Add some users and you are good to go.
Note: make sure to add valid urls for OK status.

For example: https://www.facebook.com this will give OK status

             www.facebook.com this will give FAIL status

### 2. Run locally

Make sure java 8/maven is installed and added into classpath.

In case node/npm are not installed by maven, install them manually.

- Run the backend application.

Backend repo:   https://github.com/Blossom-tech/kry-services-frontend.git

Download the project on your system.

Open terminal and navigate to the root folder of the project and run the following commands

### 'mvn clean install'

### 'mvn spring-boot:run'

This will start the web app/backend on the http://localhost:8080/

Note: It will use a remote clearDB Mysql database add-on from Heroku and create an empty table called 'service' there.

You can find the database name and credentials in application.properties files in here:
https://github.com/Blossom-tech/kry-services-backend/blob/main/src/main/resources/application.properties

You can check by visiting http://localhost:8080/service/getAll that a empty table has been created.

- Run the frontend Application.

Link to frontend repo: https://github.com/Blossom-tech/kry-services-frontend.git

Download the project on your system.

Navigate to the frontend folder of the project in the Command Line and run the following commands

### 'npm install'

### 'npm start'

This will run the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- Add some users and you are good to go.
Note: make sure to add valid urls for OK status.

For example: https://www.facebook.com this will give OK status

             www.facebook.com this will give FAIL status

## Details about the functionality
- This App will show the list of services added to the database. It will show following fields for each service:
  - Name: Name of the service
  - URL: URL of the service
  - Creation Time: Date and Time when the services were created to the list
  - Status: OK or FAIL status of the service.
  - Edit: for editing and updated any existng service
  - Delete: for deleting the service
- The Application will do periodic(60 seconds) polling on each service in the list by hitting their urls and store their status (OK if status is 200 else FAIL status)
- Services can be added, deleted and updated.
- The Application also fetches data from the api using axios GET request in every 60 secs.
- It shows OK status only when the URL is a a valid URL. Follow this format "https://www.example.com"

For example: https://www.facebook.com this will give OK status

             www.facebook.com this will give FAIL status

## Technologies used
For Backend project: Java, Maven, Spring Boot(MVC, JPA, Hibernate) using IntelliJ as a IDE

For Frontend project: Reactjs using Visual Studio Code as a IDE.

Material UI for designing the UI.

