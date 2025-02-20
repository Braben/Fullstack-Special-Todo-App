import "./App.css";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
    deadline: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const [currentTask, setCurrentTask] = useState({
    id: null,
    title: "",
    priority: "",
    deadline: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8000/todos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Handle Change Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add Task Function
  const addTask = async (e) => {
    e.preventDefault();

    if (
      !newTask.title.trim() ||
      !newTask.priority.trim() ||
      !newTask.deadline.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      console.log("New Task Payload:", JSON.stringify(newTask, null, 2));
      const response = await fetch("http://localhost:8000/createtodos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Update tasks state to show the new task on frontend
      setTasks([...tasks, data.data]);

      // Reset the input fields
      setNewTask({ title: "", priority: "", deadline: "" });

      alert("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task.");
    }
  };

  // Edit Task Function
  const handleEdit = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setNewTask({
      title: task.title,
      priority: task.priority,
      deadline: task.deadline,
    });
  };

  //update
  const updateTask = async (e) => {
    e.preventDefault();
    console.log(newTask);
    if (!newTask.title.trim() || !newTask.priority || !newTask.deadline) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/todos/${currentTask._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to update task.");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }

    setTasks(
      tasks.map((task) =>
        task._id === currentTask._id ? { ...task, ...newTask } : task
      )
    );

    setIsEditing(false);
    setNewTask({ title: "", priority: "", deadline: "" });
    setCurrentTask({ id: null, title: "", priority: "", deadline: "" });
  };

  //delete task function
  const DeleteTask = async (id) => {
    const taskToDelete = tasks.find((task) => task._id === id);
    if (!taskToDelete) {
      alert("Task not found!");
      return;
    }
    const taskToUpper = taskToDelete.title.toUpperCase();
    if (
      !window.confirm(
        `Are you sure you want to delete this task "${taskToUpper}"?`
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error: ${response.statusText}`);
      }

      // Update UI: Remove the deleted task from the state
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      console.log(taskToDelete.title);
      // Show success message
      alert(`Task with title: ${taskToUpper} deleted successfully!`);
    } catch (error) {
      console.error("Error deleting task:", error);
      alert(`Failed to delete task: ${error.message}`);
    }
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

        <div className="flex gap-4">
          <form
            onSubmit={isEditing ? updateTask : addTask}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col items-center space-y-4"
          >
            {/* Task Name Input */}
            <Input
              label="Task Name"
              name="title"
              value={newTask.title}
              onChange={handleChange}
              size="lg"
              placeholder="Enter task name"
              className="border border-gray-300 p-3 rounded-lg bg-white 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 hover:border-blue-400 transition-all duration-300"
            />

            {/* Priority Select */}
            <Select
              label="Priority"
              name="priority"
              value={newTask.priority}
              onChange={(value) => setNewTask({ ...newTask, priority: value })}
              className="border border-gray-300 p-3 rounded-lg bg-white 
                 focus:border-green-500 focus:ring-2 focus:ring-green-300 
                 hover:border-green-400 transition-all duration-300"
              placeholder="Select Priority"
              size="lg"
            >
              <Option value="High">🔥 High</Option>
              <Option value="Medium">⚡ Medium</Option>
              <Option value="Low">🌿 Low</Option>
            </Select>

            {/* Deadline Input */}
            <Input
              label="Deadline"
              type="date"
              name="deadline"
              value={newTask.deadline}
              onChange={handleChange}
              size="lg"
              className="border border-gray-300 p-3 rounded-lg bg-white 
                 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 
                 hover:border-purple-400 transition-all duration-300"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 
                 transition-all duration-300 p-3 rounded-lg mt-4"
            >
              {isEditing ? "Update Task" : "Add Task"}
            </Button>
          </form>
        </div>
      </Card>

      <h1 className="bg-blue-700 w-[400px] text-white m-5 p-4 bold">TASKS</h1>
      {tasks.map((task) => (
        <Card
          key={task._id}
          size="lg"
          color="transparent"
          className="flex flex-col gap-2 px-4 py-3 border bg-white border-orange-900 m-2 w-[400px]"
          shadow={true}
        >
          <Typography className="font-bold">{task.title}</Typography>
          <Typography
            className={`text-sm ${
              task.priority === "High"
                ? "text-red-500"
                : task.priority === "Medium"
                ? "text-orange-500"
                : "text-green-500"
            }`}
          >
            Priority: {task.priority}
          </Typography>
          <Typography className="text-sm text-gray-500">
            Deadline: {task.deadline}
          </Typography>
          <div className="flex justify-around gap-2">
            <button
              onClick={() => handleEdit(task)}
              className="text-white bg-blue-600 p-2 w-full rounded"
            >
              Edit
            </button>
            <button
              onClick={() => DeleteTask(task._id)}
              className="text-white bg-red-600 p-2 w-full rounded"
              key={task._id}
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
