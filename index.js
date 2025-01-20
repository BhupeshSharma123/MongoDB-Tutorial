/* eslint-disable no-unused-vars */
import express from "express"; // Use ES Modules consistently
import item from "./routes/items.js"; // Change to `import` and include .js extension
import route from "./routes/route.js"; // Change to `import` and include .js extension

const app = express(); // Initialize Express
const port = 3000; // Default port

// Middleware to parse JSON request bodies

// Use the items router for "/api" routes

// const loggingMiddleware = (req, res, next) => {
//   console.log("Logging Middleware");
//   next();
// };
// const authMiddleware = (req, res, next) => {
//   console.log("Auth Middleware");
//   next();
// };
// const validationMiddleware = (req, res, next) => {
//   console.log("validation Middleware");
//   next();
// };
// app.use(loggingMiddleware);
// app.use(validationMiddleware);
// app.use(authMiddleware);
app.use("/api", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
