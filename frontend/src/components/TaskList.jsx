import React from "react";

const TaskList = ({ tasks, toggleComplete }) => {
  return (
    <div className="shadow-md rounded-lg border border-[#653F00] bg-white p-6 pb-8 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-[#653F00]">Tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-md border border-gray-200 shadow-sm ${
              task.completed ? "bg-green-50" : "bg-white hover:bg-[#FFF5E6]"
            }`}
          >
            <span
              className={`font-medium block ${
                task.completed ? "line-through text-gray-400" : "text-[#653F00]"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => toggleComplete(task.id)}
              className={`px-3 py-1 rounded-md font-medium border transition-colors duration-200 ${
                task.completed
                 ? "bg-red-500 border-red-500 text-white hover:bg-red-600" 
                 : "bg-[#653F00] border-[#653F00] text-white hover:bg-[#805020]"
              }`}



            >
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
