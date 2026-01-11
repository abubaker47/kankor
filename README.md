# Kankor Results System

A web application for checking Afghanistan's Ministry of Higher Education (MoHE) Kankor examination results. Students can search and view their university entrance exam results by entering their unique ID number.

## About Kankor

Kankor is the national university entrance examination in Afghanistan, conducted by the Ministry of Higher Education. This system allows students to easily access their exam results and admission information.

## Features

- **Search by ID**: Students can search their results using their 9-digit ID number
- **Detailed Results**: View comprehensive result information including:
  - Student name and family details
  - School and province information
  - Kankor score
  - Admission result and department
- **User-friendly Interface**: Clean, responsive design with Persian/Dari language support
- **Real-time Loading**: Visual loading indicators for better user experience

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abubaker47/kankor.git
cd kankor
```

2. Install dependencies:
```bash
npm install
```

3. Install MongoDB driver (if not already included):
```bash
npm install mongodb
```

4. Make sure MongoDB is running on your local machine:
```bash
# Start MongoDB service
mongod
```

5. Import the Kankor data into MongoDB:
```bash
# Import the CSV data into MongoDB
mongoimport --db kankor --collection kankor_res --type csv --headerline --file kankor.csv
```

## Usage

1. Start the server:
```bash
node server.js
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

3. Enter a 9-digit student ID to search for results

## Project Structure

```
kankor/
├── img/                    # Images and icons
│   ├── mohe.png           # Ministry of Higher Education logo
│   └── search.svg         # Search icon
├── node_modules/          # Node.js dependencies
├── index.html             # Main HTML page
├── server.js              # Express server and API endpoints
├── kankor.csv             # Kankor results data (CSV format)
├── package.json           # Project dependencies and metadata
└── README.md              # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Server**: Express.js (port 3000)

## API Endpoints

### GET `/`
Returns the main HTML page

### GET `/results/:id`
Retrieves student results by ID
- **Parameters**: `id` - 9-digit student ID
- **Response**: JSON object with student information

## Database Schema

The MongoDB collection `kankor_res` in the `kankor` database stores student records with the following fields:

- `id` - Student ID (9 digits)
- `name` - Student's first name
- `father_name` - Father's name
- `grand_father_name` - Grandfather's name
- `school` - School name
- `province` - Province name
- `score` - Kankor exam score
- `result` - Admission result and department

## Configuration

The application uses the following default configurations:

- **MongoDB URL**: `mongodb://localhost:27017`
- **Database Name**: `kankor`
- **Collection Name**: `kankor_res`
- **Server Port**: `3000`

To modify these settings, edit the `server.js` file.

## License

Copyright © 2019 Ministry of Higher Education, Kankor Department, All Rights Reserved.

Powered by [Elitech](http://elitech.af)

## Contributing

This is an official government project for the Afghanistan Ministry of Higher Education. For any issues or suggestions, please contact the relevant authorities.

## Support

For technical support or inquiries, please contact the Kankor Department at the Ministry of Higher Education.
