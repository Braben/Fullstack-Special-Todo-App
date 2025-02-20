const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="p-3 border rounded bg-white shadow-md flex justify-between max-w-screen-lg">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm">Priority: {task.priority}</p>
        <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-600 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
