# Kattraan LMS

**Kattraan LMS** is a cutting-edge Learning Management System designed and developed by the **Urbancode IT Team**. It offers a seamless learning experience for students, trainers, and administrators, with robust features to manage courses, batches, and user roles efficiently.

---

## Features

### General Features
- User authentication and authorization.
- Role-based access: **Master Admin**, **Admin**, **Instructor**, and **Learner**.
- Responsive design for web and mobile devices.
- Dashboard for personalized views based on roles.

### Master Admin Features
- Manage all admins, trainers, and students.
- Access and control over all system data.
- Generate advanced analytics and reports.
- Full access to course and batch management.

### Admin Features
- Create, update, and delete courses and batches.
- Manage user roles (trainers and students).
- View and track user activity and progress.

### Trainer Features
- Create and manage course content.
- Track student progress and provide feedback.
- Schedule and manage batches.

### Student Features
- Enroll in courses and view progress.
- Access learning materials and assignments.
- Participate in discussions and assessments.

---

## Project Structure

### Client (Frontend)
- Built with **React.js** for a dynamic and interactive user interface.
- Styled using **Tailwind CSS** for responsive and modern designs.
- State management with **Context API** or **Redux**.

### Server (Backend)
- Built with **Express.js** for a scalable RESTful API.
- Database integration using **MongoDB**.
- Secure authentication with **JWT** (JSON Web Tokens).

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/urbancode-it/kattraan.git
   ```
2. Navigate to the project folder:
   ```bash
   cd kattraan
   ```
3. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Set up environment variables in `.env` files for both client and server:
   - Client: `client/.env`
   - Server: `server/.env`

5. Start the development environment:
   ```bash
   # Start client
   cd client
   npm start

   # Start server
   cd ../server
   npm run dev
   ```

---

## Technologies Used

### Client (Frontend)
- **React.js**
- **Tailwind CSS**
- **Axios** for API communication

### Server (Backend)
- **Express.js**
- **MongoDB**
- **JWT** for authentication

---

## Contact

**Urbancode IT Team**  
**Email:** [urbancodeitteam@gmail.com](mailto:urbancodeitteam@gmail.com)
