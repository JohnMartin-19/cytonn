# cytonn
#Internship Interview

This project encompases of 2 parts:
1) Frontend
The frontend UI is built in ReactJS and its dependencies. It consumes the data from the API endpoints from the backend. 
To get the application running, change directory to src by following the steps:
cytonn/Internship/frontend/ticketing/src. While in this directory, on your terminal write(npm install), to install all the required dependencies of the application.
Once done, write npm start to start the server. This will get you up and running.It will run on port 3000.

2) Backend.
The backend is built in Python's backend Framework:Django and Django REST Framework. This enabled me to create the events and tickets apis consumed by the React Frontend. 
To get the application up and running,change directory to backend by following the following steps:
on your terminal cd cytonn/Internship/backend.
While in the backend directory, ensure you have the latest version of Python3 installed. Then in your command line, type: source .venv/bin/activate to get into the development env. Then type pip install to install all the required dependencies for the application. Then its complete, write python3 manage.py runserver to get the application server running. The application will run on port 8000. Proceed to your browser and open (http://127.0.0.1:8000/admin/) to navigate to the admin panel. Here you will be required to provide login credentials. Once logged in, you can perform all the admin roles.
#Database Used: SQLITE3