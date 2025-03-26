import React from 'react';
import TaskCard from '../TaskCard';

const TaskBoard: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <div className="flex flex-col w-1/3">
        <h2 className="text-center text-xl font-semibold">To-Do</h2>
        <TaskCard title="Task 1" description="This is task 1" />
        <TaskCard title="Task 2" description="This is task 2" />
      </div>
      <div className="flex flex-col w-1/3">
        <h2 className="text-center text-xl font-semibold">In Progress</h2>
        <TaskCard title="Task 3" description="This is task 3" />
      </div>
      <div className="flex flex-col w-1/3">
        <h2 className="text-center text-xl font-semibold">Done</h2>
        <TaskCard title="Task 4" description="This is task 4" />
      </div>
    </div>
  );
};

export default TaskBoard;
