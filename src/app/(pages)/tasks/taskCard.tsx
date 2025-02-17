import React from 'react';
import { ITask } from '@/types';
const taskCard = ({task}:{task:ITask}) => {
    return (
        <div>
             <div
            key={task.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {task.priority}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex justify-between items-center">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                  task.isCompleted === true
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {task.isCompleted ? "Completed" : "Pending"}
              </span>
              <button
                className="text-red-600 hover:text-red-800 transition-colors"
                onClick={() => alert("Delete functionality to be added")}
              >
                <svg
                  className="w-5 h-5 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
    );
};

export default taskCard;