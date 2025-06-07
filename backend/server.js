// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://bjyothsnalatha:RSPDjrEmC8lL52os@cluster0.bilmpo6.mongodb.net';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Define a simple Mongoose schema
const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    
});

// Create Mongoose model
const DataModel = mongoose.model('Data', DataSchema);

// Define API endpoint to receive data
app.post('/api/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Create new document
        const newData = new DataModel({
            name,
            email,
            message
        });

        // Save to database
        await newData.save();

        res.status(201).json({ success: true, data: newData });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});