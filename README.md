# Sketch - Bag Selling Website

A full-stack e-commerce platform for selling premium bags, built with Node.js, Express.js, MongoDB, EJS, and Tailwind CSS.

![Sketch Bags](https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Database Schema](#database-schema)
7. [API Endpoints](#api-endpoints)
8. [Screenshots](#screenshots)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)

## Project Overview

Sketch is a full-featured e-commerce website specializing in premium bags. The platform allows customers to browse products, apply filters, manage their shopping cart, and complete secure purchases. Administrators have access to a dedicated dashboard for managing products, categories, pricing, and order tracking.

## 🖼️ Screenshots Preview

### 🏠 LoginPage
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5d830c5d-f33d-40d6-a320-0c4edd8eba85" />

### 🎒 Product Feature
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/974a0941-f769-49fe-8921-53a373bc4788" />

## User Profile
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/155067c7-0821-466e-980a-4f74159e5513" />

### 🛒 Order Page
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/cc12e662-35b8-4764-ba0c-b886758d8022" />

## Features

### Customer Features
- User registration and authentication
- Product browsing with filtering capabilities
- Advanced search functionality
- Shopping cart management
- Secure checkout process
- Order history and tracking
- Wishlist functionality
- Product reviews and ratings
- Discount code application

### Admin Features
- Role-based access control
- Product management (CRUD operations)
- Category management
- Inventory tracking
- Order management
- User management
- Sales analytics dashboard
- Image upload and management

### Technical Features
- Responsive design with Tailwind CSS
- Server-side rendering with EJS
- Secure authentication with bcrypt
- Session management
- MongoDB for data persistence
- RESTful API architecture

## Technology Stack

### Frontend
- **EJS** - Templating engine
- **Tailwind CSS** - Styling framework
- **JavaScript** - Client-side functionality
- **Font Awesome** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Authentication & Security
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **environment variables** - Secure configuration

### Development Tools
- **Nodemon** - Development server
- **Multer** - File uploads
- **Dotenv** - Environment variables

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-username/sketch-bags.git
cd sketch-bags

2. Install dependencies:
```bash
npm install

3. Set up environment variables:
Create a .env file in the root directory:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/sketch-bags
SESSION_SECRET=your-session-secret-here
NODE_ENV=development

4. Start the development server:
```bash
npm run dev

5. Open your browser and navigate to http://localhost:3000



