## Project Structure
    public / temp                  # Contains static assets like images
    src /                          # Main source code directory.

| --config /                   # Configuration - related files libe db and payment configurations.
| --constants /                # Constants like db name and other fixed constraints.
| --controllers /              # Contains individual controllers.Handles incoming requests and generates responses.
    | --user.controller.js     # Controls user - related requests.
| --docs /                     # Swagger documentation for API endpoints.
| --jobs /                     # Background jobs or scheduled tasks.
| --middlewares /              # Custom Express middlewares.
| --loaders /                  # Lodash routes and configurations; also validates configurations.
| --models /                   # Database models; ORM files for the data layer.
   | --seeders /               # MongoDB custom seeders.
| --routes /                   # Defines API routes.
| --services /                 # Contains business logic and service functions
| --utils /                    # Utility classes and functions.
   | --ApiError.js /           # API error class.
   | --ApiResponse.js /        # API response class.
   | --asyncHandler.js /       # Higher order function to wrap asynchronous functions and handle potential errors gracefully
   | --generateToken.js /      # Access and refresh tokens.
| --validators /               # Schema validation functions like Joi / AJV.
| --app.js                     # Express app setup.
| --server.js                  # Entry point for the application.

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