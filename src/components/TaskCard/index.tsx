import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4 hover:bg-gray-100">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
