# Form Submission App

This is a simple form submission app built with React, Express, and MongoDB.

## Features
- Users can submit their name, email, and message through a form.
- Email validation is included to ensure correct email formats.
- Data is sent to a backend Express server and stored in MongoDB.
- A success message is displayed upon successful submission.

## Technologies Used
- **Frontend:** React, Axios
- **Backend:** Express, Mongoose, MongoDB Atlas
- **Styling:** CSS-in-JS (inline styles)
- **Middleware:** CORS, Body-parser

## Installation

### 1. Clone the repository
```bash
git clone (https://github.com/Jyothsna-latha/formdata.git)
cd formdata
**### 2. Install dependencies**
##Frontend
```bash
cd frontend
npm install
##Backend
```bash
cd backend
npm install
###Run the app
##Start the backend server
```bash
node server.js
or

bash
npm start
Start the frontend
bash

Submit the Form
Open http://localhost:3000 in your browser.

Fill in the form fields and click the submit button.

Your data will be saved in MongoDB.

Environment Variables
Ensure you set up your MongoDB URI correctly in your backend code
Notes
Make sure MongoDB Atlas is set up with correct credentials.

The backend server runs on http://localhost:5000.

The frontend is configured to send requests to the backend using Axios
License
This project is open-source under the MIT License
Let me know if you need any modifications or enhancements!
