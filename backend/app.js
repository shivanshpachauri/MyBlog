const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg");
var morgan = require("morgan");

const PORT = process.env.port || 5173;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const pool1 = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "myblog",
  password: "shivansh",
  port: 5433,
});
pool1
  .connect()
  .then((client) => {
    console.log("Connected to database");
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
pool1.query("create table if not exists Login(email text,password text)");
app.post("/api/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const insert = await pool1.query(
      "INSERT INTO Login (email,password) VALUES ($1,$2)",
      [email, password]
    );

    console.log(insert);
  } catch (err) {
    console.log(err);
  }

  res.send("Login successful");
});

pool1.query("create table if not exists Blog(title text,body text)");
app.get("/api/view", async (req, res) => {
  const result = await pool1.query("select * from Blog");

  res.send(result.rows);
});
app.put("/api/update", async (req, res) => {
  const { title, body } = req.body;
  try {
    const result = await pool1.query(
      "UPDATE Blog SET body = $2 WHERE title = $1",
      [title, body]
    );

    res.send("updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating blog");
  }
});

app.post("/api/create", async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const result = await pool1.query(
    "insert into Blog(title,body) values($1,$2)",
    [title, body]
  );

  res.send("Blog created");
});
app.delete("/api/delete", async (req, res) => {
  const { title, body } = req.body;

  const result = await pool1.query("DELETE FROM BLOG WHERE TITLE = ($1)", [
    title,
  ]);
  res.send("Row deleted");
});

pool1.query(
  "create table if not exists register(fullname text,dob text,username text,gender text,email text,password text)"
);
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, fullname, gender, dob, username } = req.body;

    const result = await pool1.query(
      "insert into register(fullname,dob,username,gender,email,password) VALUES($1,$2,$3,$4,$5,$6)",
      [fullname, dob, username, gender, email, password]
    );

    res.send("registered successfully");
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
