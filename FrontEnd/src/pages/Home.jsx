import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-4 p-4 w-10/12 mx-auto">
      <div className="rounded-lg shadow-md w-2/4">
        <TaskForm />
      </div>
      <div className="w-2/4">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
