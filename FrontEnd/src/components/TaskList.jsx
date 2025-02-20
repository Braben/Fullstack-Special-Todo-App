import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 space-y-2 w-full ">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={() => dispatch(deleteTask(task._id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
