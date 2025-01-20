import { Router } from "express";

const router = Router();

// Middleware to simulate authentication
const auth = (req, res, next) => {
  console.log("inside auth middleware");
  req.user = {
    userId: 1,
    role: "admin", // Simulating a logged-in user
  };
  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "You are not authorized to view this page.",
    });
  }
};

// Middleware to check if the user is a student
const isStudent = (req, res, next) => {
  console.log("inside isStudent middleware");

  if (req.user?.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "You are not a student.",
    });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  console.log("inside isAdmin middleware");

  if (req.user?.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "You are not an admin.",
    });
  }
};

// Route for students
router.get("/student", auth, isStudent, (req, res) => {
  console.log("inside getStudent Route");
  res.send("Student Page");
});

// Route for admins
router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("inside admin Route");
  res.send("Admin Page");
});

// Define the about route
router.get("/about", (req, res) => {
  res.send("About page");
});

export default router;
