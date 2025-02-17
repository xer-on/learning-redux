"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { selectTask } from "@/redux/features/task/taskSlice";
import TaskCard from "./taskCard";
const TaskPage = () => {
  const task = useAppSelector(selectTask);

  // Example static tasks (replace with Redux data later)


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Task List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {task.map((task) => (
            <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
