import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import UsersTable from "./components/UserTable";
import TaskList from "./components/TaskList";
import MouseFollower from "./components/MouseFollower";
import axios from "axios";

function App() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
        setTotalUsers(res.data.length);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch tasks
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Toggle task completed state
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="container mx-auto p-6 bg-[#FFEEDD]">
      <MouseFollower />

      <Header />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard title="Total Users" value={totalUsers} iconType="users" />
        <StatsCard
          title="Completed Tasks"
          value={completedCount}
          iconType="completed"
        />
        <StatsCard title="Pending Tasks" value={pendingCount} iconType="pending" />
      </div>

      {/* Users Table */}
      <UsersTable users={users} />

      {/* Task List */}
      <TaskList tasks={tasks} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
