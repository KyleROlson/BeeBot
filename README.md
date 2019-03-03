# BeeBot
Kyle R. Olson

Objective: The goal of this project is to retrieve values from sensors and present them to the end user. The sensors will be connected to a computer (Raspberry Pi) that will retrieve values from the sensors. The values from the sensor will then be uploaded to the users account using a Node.js application. The database will be hosted using Amazon Web Services(AWS). The user will be able to retrieve this information from an HTML web app. 

Task List:
* Design UI for Web App
* Create AWS Database
* Sync Database with Web App
* Setup sensors
* Write Node.js app that uploads sensor values with AWS Database(Replaced by using ESP8266 Wifi Module Arduino)

Sources:
- https://philiprogers.com/svgpatterns/#subtledots
- https://firebase.google.com/docs/auth/web/start


Work Overview:

1/29/2019- Begin working on the web app. Basic prototype of design established. Features card based layout as well as incorporates honeycomb background. 

2/1/2019- Finish web app design by adding content to cards, including labels as well as placeholder values.

2/3/2019- Created login page for app. Began looking into using Firebase instead of AWS for app authorization and database due to the better and more freely available documentation.

2/4/2019- Moved forward implementing Google’s Firebase database service. Created a sign up page and finished the login page with its respective functions. Linked user’s display name to bottom navbar on dashboard. Will update objectives and task list to reflect the change from AWS to Firebase. 

2/19/2019- Updated website to reflect dummy values stored in database.

2/24/2019- Linked ESP8266 chip to Firebase so now account database is updated real time with actual sensor values.

