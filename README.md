# HeadStarter AI Apprenticeship Project-2: Pantry Tracking App

A dynamic web application built with **React** and **Firebase** to manage pantry items, track inventory, and calculate the total value of stored items. This app is designed with a vibrant and interactive user interface, including a 3D-styled header and dynamic live background.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Pantry Tracking App** is designed to help users manage their pantry items efficiently. Users can:
- Add items to their pantry with a name and price.
- Track the total price of all items.
- Delete items from the list.
- Aesthetic design with a 3D-styled heading and dynamic gradient background.

## Features

### 1. **Real-time Database Integration**
   - Uses Firebase Firestore for real-time data storage and retrieval.
   - Items are dynamically fetched and displayed, with automatic updates upon any database changes.

### 2. **Add/Delete Items**
   - Users can add new items with a name and price.
   - Items can be removed from the list, and the total price is recalculated automatically.

### 3. **Live Total Calculation**
   - The total price of all pantry items is displayed and updated in real-time.

### 4. **Modern UI**
   - Vibrant, gradient background with a 3D-styled title.
   - Responsive layout for seamless experience on any device.
   - Interactive UI elements using Tailwind CSS for modern styling.

## Technologies Used

### **Frontend:**
   - **Next.js**: A React framework for server-side rendering and static site generation.
   - **React.js**: For building interactive UI components.
   - **Tailwind CSS**: A utility-first CSS framework for styling.

### **Backend:**
   - **Firebase Firestore**: A NoSQL cloud database used to store, fetch, and delete pantry items in real-time.

### **Tools:**
   - **Firebase SDK**: To integrate Firebase Firestore with the React app.
   - **JavaScript/JSX**: For frontend logic and rendering.

## Installation

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine. You’ll also need a Firebase account with a Firestore database set up.

### Steps
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/SumitRodrigues/HeadStarter-AI-Apprenticeship-Project-2-Pantry-Tracking-App.git
   cd pantry-tracking-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore for the project.
   - Copy the Firebase configuration details (`apiKey`, `authDomain`, etc.) and paste them into your `firebase.js` file in the project.

   Example Firebase configuration:
   ```js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

### Adding Items:
1. Enter the item name in the "Enter Item" field.
2. Input the price in the "Enter $" field.
3. Click the **"+" button** to add the item.

### Deleting Items:
- Click the **"X button"** next to any item to remove it from the pantry.

### Viewing Total:
- The total value of all pantry items will automatically be displayed at the bottom of the item list.

## Screenshots

### Home Page

<img width="1424" alt="image" src="https://github.com/user-attachments/assets/12d3b80d-526b-48ac-acf5-73268f912a94">

## Contributing

If you’d like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further by adding any additional details about your project or features that you may implement in the future. This should provide a clear and professional overview of your Pantry Tracking App for any visitors to your GitHub repository.
