# assignment-api
Go to https://assignmentapi.herokuapp.com for consume it!

These API contains 2 endpoints.

# 1) Get All Records
You can send GET request to https://assignmentapi.herokuapp.com/api/records/all for see all records. (It is designed to verify the 2nd endpoint.)

# 2) Get Records By Filter
You can send POST request to https://assignmentapi.herokuapp.com/api/records for see filtered records.
The response is returned according to the intervals of the posted date and count values.

Sample Request Body

{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "startDate": "2016-01-26", 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "endDate": "2018-02-02", 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "minCount": 2700, 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "maxCount": 3000
}

#  Use Locally
- git clone git@github.com:gokalpgursoy/assignment-api.git
- create an .env file at root (it must contains variables which named DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, PORT, NODE_ENV)
- npm install
- npm run dev