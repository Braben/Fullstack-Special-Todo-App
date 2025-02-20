import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-4 bg-gray-200 p-4">
      <div className="rounded-lg shadow-md w-1/4">
        <TaskForm />
      </div>
      <div className="w-2/4">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
