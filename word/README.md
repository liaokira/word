# Vite React Supabase Project

This project is a full-stack application built with Vite, React, and Supabase. It consists of a frontend and a backend, with the backend hosted on Vercel.

## Project Structure

```
vite-react-supabase-project
├── backend          # Contains the backend API
│   ├── api         # API routes for authentication and data operations
│   ├── vercel.json  # Vercel deployment configuration
│   └── package.json  # Backend dependencies and scripts
├── frontend         # Contains the frontend application
│   ├── public       # Public assets
│   ├── src          # Source code for the React application
│   ├── package.json  # Frontend dependencies and scripts
│   └── vite.config.js # Vite configuration
└── README.md        # Overall project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd vite-react-supabase-project
   ```

2. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```
   cd ../frontend
   npm install
   ```

### Running the Project

#### Backend

To start the backend server, navigate to the `backend` directory and run:
```
npm start
```

#### Frontend

To start the frontend development server, navigate to the `frontend` directory and run:
```
npm run dev
```

### Deployment

The backend is configured to be deployed on Vercel. Ensure you have the Vercel CLI installed and run:
```
vercel --prod
```

### API Routes

- **Authentication**: The backend provides API routes for user authentication (login, signup, session management).
- **Data Operations**: The backend also includes routes for CRUD operations on data stored in Supabase.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.