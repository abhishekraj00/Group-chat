## Group-chat

## Project Setup

1. Install the necessary dependencies:
   - Run `npm i` to install the required packages.
   - Run `npm link mongoose` to link the mongoose package.
   - Run `npm start` to start the backend.

2. Set up environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:

     ```
     PORT=8080
     MONGO_URI=mongodb+srv://admin:12345@cluster0.5oy1kwl.mongodb.net/?retryWrites=true&w=majority
     JWT_SECRET=abhishek
     NODE_ENV=production
     ```

3. Start the frontend:
   - Change to the frontend directory using the command `cd ./frontend/`.
   - Run `npm i` to install the required packages for the frontend.
   - Run `npm start` to start the frontend.



