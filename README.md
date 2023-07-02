## How I worked on this project

My goal was to build an online marketplace for used items. This would include a single-page web application and a mobile application for iOS and Android platforms.

- I used React and React Native for the frontends of web and mobile apps respectively.
- And I used Node.js, Express.js and MongoDB for the backend
- I also used Stripe to manage payments

## How to navigate this project

### Backend

- Express.js middleware mounting: [Click here](https://github.com/Lambertyubin/marketplace_backend/blob/main/app.js#L34)
- Example API routes: [Product routes](https://github.com/Lambertyubin/marketplace_backend/blob/main/routes/product.routes.js#L8)
- Server-side logic to handle CRUD operations with MongoDB: [Click here](https://github.com/Lambertyubin/marketplace_backend/blob/main/routes/product.routes.js#L8)
- Product model with Mongoose: [Click here](https://github.com/Lambertyubin/marketplace_backend/blob/main/models/product.model.js#L3)
- The API was tested with Postman

### Frontend

- Link to the frontend repo: [Click here](https://github.com/Lambertyubin/marketplace_frontend)


## Usage Scripts

### Frontend

- `npm start` to run the application
- `npm test` to run tests

### Backend

- `npm start` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017
