# TweetHub

## Overview

TweetHub is a full-stack social media web application inspired by Twitter. It allows users to share thoughts, follow other users, and interact with posts. This project demonstrates proficiency in both frontend and backend development, API integration, and state management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Highlights](#project-highlights)
- [Key Competencies Demonstrated](#key-competencies-demonstrated)
- [Conclusion](#conclusion)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Features

 ### User Authentication and Authorization
- **JWT-Based Authentication:**
  
  Secure login and registration processes using JSON Web Tokens (JWT).
  
  Protected routes to ensure only authenticated users can access specific functionalities.

- **Password Encryption:**

  Utilized bcrypt for hashing and securely storing passwords.

  Enhanced user data security with hashed password storage and validation.

### User Profile Management

- **Comprehensive Profile Features:**

  Enabled users to create, update, and personalize their profiles with profile pictures and cover images stored securely via Cloudinary.

- **Form Validation:**

  Integrated thorough form validation and error handling mechanisms to ensure data integrity and user experience.

### Tweet Functionality

- **CRUD Operations:**

  Developed full CRUD (Create, Read, Update, Delete) functionality for tweets, allowing users to manage their posts efficiently.

- **Interactive Features:**

  Incorporated like, comment, and retweet features to foster user interaction and engagement.

### Follow System

 - **Dynamic Feed:**
 
   Designed a following system where users can follow or unfollow others, creating a dynamic and personalized content feed.

 - **User Engagement:**

  Added notification features for follow events to enhance user interaction and engagement.

### Real-time Data Updates

 - **Efficient Data Handling:**

   Leveraged React Query for real-time data fetching, caching, and synchronization, ensuring that the application remains responsive and up-to-date.

 - **Optimized State Management:**

   Implemented advanced state management techniques to handle large datasets efficiently.

### Responsive Design

  - **Cross-Device Compatibility:**

    Crafted a fully responsive UI using TailwindCSS, ensuring a consistent and seamless user experience across various devices.
    
  - **User Preferences:**

    Incorporated dark mode and light mode options to cater to user preferences.
    
### Image Handling

  - **Media Management:**

    Integrated Cloudinary for efficient image upload, storage, and retrieval, ensuring optimized media handling and fast loading times.

  - **Flexible Image Processing:**

    Managed various image formats and optimized delivery for performance.

### Testing and API Development

  - **API Reliability:**

    Extensively tested all API endpoints using Postman, ensuring reliability, performance, and robustness.

  - **Error Handling:**

    Implemented comprehensive error handling and logging to facilitate debugging and maintain application stability.
    
## Tech Stack:

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Testing:** Postman
- **Image Storage:** Cloudinary
- **State Management and Data Fetching:** React Query

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **MongoDB Shell or MongoDB Atlas** installed and running
- **Git** installed on your machine
- **Postman** installed on your machine
- **Cloudinary Account** have a cloudinary Account
- **Development Environment** Any integrated development environment (IDE) or text editor
- **Web Browser** Any modern web browser (like Chrome, Firefox, or Edge)
  
## Project Highlights:

- **Scalability:** Architected the application with scalability in mind, leveraging MongoDB’s flexible schema and React Query’s efficient state management capabilities. <br>
- **Performance Optimization:** Employed best practices to optimize performance, including code splitting, lazy loading, and efficient database queries. <br>
- **Code Quality:** Adhered to industry standards for writing clean, maintainable, and well-documented code, ensuring long-term maintainability and scalability. <br>

## Key Competencies Demonstrated:

- **Frontend Development:** Expertise in React.js, including component-based architecture, hooks, and state management. <br>
- **Backend Development:** Proficiency in Node.js and Express.js for building and managing RESTful APIs. <br>
- **Database Management:** Strong skills in MongoDB for data modeling, indexing, and handling complex queries. <br>
- **API Integration:** Experience in using Postman for API testing, ensuring robust and reliable endpoints. <br>
- **Image Handling:** Competency in using Cloudinary for efficient image storage and management. <br>
- **State Management:** Advanced use of React Query for managing server state and real-time data synchronization. <br>

## Conclusion

TweetHub is a testament to my capabilities in developing scalable, performant, and user-centric web applications. It highlights my expertise in modern web technologies and my ability to deliver high-quality software solutions, making me an ideal candidate for high-paying roles in the tech industry.

## Installation

Follow these steps to clone and set up the project locally.

### Clone the Repository

1. **Clone the repository:**
   ```bash
   git clone https://github.com/teja-86/TweetHub.git
   cd TweetHub
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the environment variables:**
   ```bash
   MONGO_URI="Your MongoDB URI"
   PORT=5000
   JWT_SECRET=Your JWT Secret Token
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=Your Cloudinary Cloud Name
   CLOUDINARY_API_KEY=Your Cloudinary API Key
   CLOUDINARY_API_SECRET=Your Cloudinary API Secret

## Running the Application

1. **Start the development Client:**
   ```bash
   cd frontend
   npm run dev
2. **Start the development Server:**
   Start the server in root app folder
   ```bash
   npm run dev
3. **Access the development Client:**
   Open your browser and navigate to
   ```bash
   http://localhost:Your_Client_Port
3. **Access the development Server:**
   Open your browser and navigate to
   ```bash
   http://localhost:5000
   
## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add Your Feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

