import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { Input, Button, Select, Option } from "@material-tailwind/react";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", priority: "", deadline: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ title: "", priority: "", deadline: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md space-y-4 mt-10 "
    >
      <h2 className="text-sm text-green-700 font-light">
        Fill the form to add your task
      </h2>
      <Input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <Select
        name="priority"
        value={task.priority}
        onChange={(value) => setTask({ ...task, priority: value })}
      >
        <Option value="High">🔥 High</Option>
        <Option value="Medium">⚡ Medium</Option>
        <Option value="Low">🌿 Low</Option>
      </Select>
      <Input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
      />
      <Button type="submit" className="bg-blue-600 w-full">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
