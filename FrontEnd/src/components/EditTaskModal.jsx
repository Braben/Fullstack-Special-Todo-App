import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, setEditModalClose } from "../redux/taskSlice";
import {
  Input,
  Button,
  Select,
  Option,
  Card,
  Typography,
} from "@material-tailwind/react";

const EditTaskModal = ({ task }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(editTask(updatedTask));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <form>
          {/* <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
          type="text"
          name="priority"
          value={updatedTask.priority}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />

          <input
            type="date"
            name="deadline"
            value={updatedTask.deadline}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          /> */}
        </form>

        <Card color="transparent" shadow={false}>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-6">
                Your Name
              </Typography>
              <Input
                type="text"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
                size="md"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-6">
                Priority
              </Typography>
              <Select
                label="Select Version"
                type="text"
                name="priority"
                value={updatedTask.priority}
                onChange={handleChange}
              >
                {/* <Option value="High">High</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Low">Low</Option> */}
              </Select>

              <Typography variant="h6" color="blue-gray" className="-mb-6">
                Deadline
              </Typography>
              <Input
                type="date"
                size="md"
                placeholder="Deadline"
                name="deadline"
                value={updatedTask.deadline}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => dispatch(setEditModalClose())}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                fullWidth
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                fullWidth
              >
                Update
              </Button>
            </div>
          </form>
        </Card>
        {/* <form action="">
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
        </form> */}
      </div>
    </div>
  );
};

export default EditTaskModal;
