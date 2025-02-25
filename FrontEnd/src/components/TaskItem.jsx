import { useDispatch } from "react-redux";
import { setEditModalOpen } from "../redux/taskSlice";

const TaskItem = ({ task, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-3 border rounded bg-white shadow-md flex justify-between max-w-screen-lg">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm">Priority: {task.priority}</p>
        <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(setEditModalOpen(task))}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
