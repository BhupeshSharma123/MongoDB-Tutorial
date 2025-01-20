import { Router } from "express";
const router = Router();

// middleware that is specific to this router

// define the home page route
router.get("/", (req, res) => {
  res.send("GET request", (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error occurred while sending the file.");
    }
  });
});
router.post("/items", (req, res) => {
  res.send("Got a POST request!"); // changed to "
});

router.put("/items/:id", (req, res) => {
  res.send(`Got a POST request to /items/${req.params.id}`); // added this line for the third route
});
router.delete("/items/:id", (req, res) => {
  res.send(`Got a DELETE request to /items/${req.params.id}`); // added this line for the third route
});

export default router;
