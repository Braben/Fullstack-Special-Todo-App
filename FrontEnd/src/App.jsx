import "./App.css";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
// import { getTodos } from "../API/APIs";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, taskName: "" });

  //get all tasks
  //useEffect hook

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8000/todos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Data:", data);
        setTasks(data.data); // Set the tasks state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array: runs only once on mount

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  //add task
  //create a function that adds a task to the list
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("Please enter a task name");
      return;
    }
    const task = {
      id: uuid(),
      taskName: newTask,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  //delete task
  //create a function that deletes a task from the list
  const DeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const EditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setNewTask(task.taskName);
  };

  //update task
  //create a function that updates a task in the list
  const updateTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("Please enter a task name");
      return;
    }
    setTasks(
      tasks.map((task) =>
        task.id === currentTask.id ? { ...task, taskName: newTask } : task
      )
    );
    setIsEditing(false);
    setNewTask("");
    setCurrentTask({ id: null, taskName: "" });
  };

  return (
    <div className="flex flex-col items-center">
      <Card
        color="transparent"
        className="bg-green-600 px-5 py-3 text-white card-container shadow-lg"
        shadow={false}
      >
        <Typography className="text-center" variant="h4" color="white">
          SPECIAL TO-DO APP
        </Typography>
        <form
          onSubmit={isEditing ? updateTask : addTask}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <Input
            value={newTask}
            onChange={handleChange}
            size="lg"
            placeholder="Enter task name"
            className=" !border-blue-500 focus:!border-blue-500  bg-white"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />
          <Button type="submit" className="bg-blue-600 mt-2">
            {isEditing ? "Update Task" : "Add Task"}
          </Button>
        </form>
      </Card>

      {/* TASK LIST */}
      <h1 className="bg-blue-700 w-[400px] text-white m-5 p-4 bold">TASKS</h1>
      {console.log("Map Tasks:", tasks)}
      {tasks.map((task) => (
        <Card
          key={task._id}
          size="lg"
          color="transparent"
          className="flex flex-row justify-between gap-4 px-4 py-3 border bg-white border-orange-900 m-2 w-[400px] flex-wrap"
          shadow={true}
        >
          {task.title}
          <div>
            <button
              onClick={() => EditTask(task)}
              className="text-white bg-blue-600 p-2 rounded mr-3"
            >
              Edit
            </button>
            <button
              onClick={() => DeleteTask(task.id)}
              className="text-white bg-red-600 p-2 rounded"
            >
              Delete
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default App;
