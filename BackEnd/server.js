const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const ConnectTodoAppDB = require("./database/db");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

///middleware
app.use(express.json());
app.use(cors());

//database connection
ConnectTodoAppDB();

//routes
app.use(todoRoutes);

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
