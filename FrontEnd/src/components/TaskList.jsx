import { useSelector, useDispatch } from "react-redux";
import EditTaskModal from "./EditTaskModal";
import { fetchTasks, deleteTask, setEditModalClose } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import { useEffect } from "react";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Redux-Managed Edit Modal
  const isEditModalOpen = useSelector((state) => state.tasks.isEditModalOpen);
  const taskToEdit = useSelector((state) => state.tasks.taskToEdit);

  return (
    <div className="mt-4 space-y-2 w-full ">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={() => dispatch(deleteTask(task._id))}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}

      {/* Redux-Managed Edit Modal */}
      {isEditModalOpen && (
        <EditTaskModal
          task={taskToEdit}
          onClose={() => dispatch(setEditModalClose())}
        />
      )}
    </div>
  );
};

export default TaskList;
