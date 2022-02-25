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

- Link to the frontend: [Click here](https://github.com/Lambertyubin/marketplace_frontend)

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.

### Backend

- I choose Node.js due to it does a great job at handling concurrent requests due to its asynchronous event-driven IO. A backend that is fast at processing requests and providing responses without blocking incoming requests was critical for a marketplace service.
- I also used Express.js due to its popularity at managing middleware needed to manipulate the request and response objects during a request-response cycle. With express, I was able to build a fast RESTful API with all CRUD operations linking to the database.
- MongoDB was used because I needed some flexibility in type of data to store for each product, as well as scalability as the system grow.

Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-responsive UI based on some cool Figma designs
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress

## Available Scripts

### Frontend

- `npm start` to run the application
- `npm test` to run tests

### Backend

- `npm start` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017
