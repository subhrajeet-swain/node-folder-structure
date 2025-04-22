## Installation
```bash
npx node-folder-structure
```

## Project Structure
```
public/temp                     # Contains static assets like images
src/                            # Main source code directory
├── config/                     # Configuration-related files like db configurations
├── constants/                  # Constants like db name and other fixed constraints
├── controllers/                # Contains individual controllers for handling requests
│ └── user.controller.js        # Controls user-related requests
├── docs/                       # Swagger documentation for API endpoints
├── jobs/                       # Background jobs or scheduled tasks
├── middlewares/                # Custom Express middlewares
├── loaders/                    # Lodash routes and configurations
├── models/                     # Database models; ORM files for the data layer
│ └── seeders/                  # MongoDB custom seeders
├── routes/                     # Defines API routes
├── services/                   # Contains business logic and service functions
│ └── user.service.js           # User-related business logic
├── utils/                      # Utility classes and functions
│ ├── ApiError.js               # API error class
│ ├── ApiResponse.js            # API response class
│ ├── asyncHandler.js           # Higher order function for error handling
│ └── generateToken.js          # Access and refresh tokens
├── validators/                 # Schema validation functions using AJV
├── app.js                      # Express app setup
└── server.js                   # Entry point for the application
```

# Node Folder Structure Generator

A CLI tool to generate an express app with a 3-layer approach folder structure.

## Installation & Usage

You can use this package in two ways:

### Using npx (Recommended)
```bash
npx node-folder-structure
```

### Global Installation
1. Install the package globally:
```bash
npm install -g node-folder-structure
```

2. Run in your project directory:
```bash
create-express-app
```

This will generate a complete Express.js project structure with:
- MVC architecture
- Middleware setup
- Validation middleware
- Error handling
- Database configuration
- And more...