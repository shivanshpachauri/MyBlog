const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Serve the React app
app.get("*", (req, res) => {
  res.render("index", { title: "My React App" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
