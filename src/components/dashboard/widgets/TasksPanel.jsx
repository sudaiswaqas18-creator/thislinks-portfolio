import React, { useState } from 'react';
import AddTaskModal from '../common/AddTaskModal';
import '../../../styles/dashboard/components/TasksPanel.css';

const TasksPanel = () => {
  const [activeTab, setActiveTab] = useState('assigned');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskData) => {
    console.log('New task:', taskData);
    // Add task to state
    setTasks(prev => [...prev, { ...taskData, id: Date.now() }]);
    // You can also make an API call here
  };

  return (
    <>
      <div className="tasks-panel">
        {/* Tasks Header */}
        <div className="tasks-header">
          <div className="tasks-header-left">
            <h2 className="tasks-title">Tasks</h2>
            <div className="tasks-date">
              <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Friday, Jan 09, 2026</span>
            </div>
          </div>
          <select className="tasks-select">
            <option>Select Option</option>
          </select>
        </div>

        {/* Search Bar and Add Button */}
        <div className="tasks-actions">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button 
            className="add-task-btn"
            onClick={() => setIsModalOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Task
          </button>
        </div>

        {/* Tabs */}
        <div className="tasks-tabs">
          <button
            className={`task-tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Tasks
          </button>
          <button
            className={`task-tab ${activeTab === 'assigned' ? 'active' : ''}`}
            onClick={() => setActiveTab('assigned')}
          >
            Assigned Tasks
          </button>
        </div>

        {/* Tasks Content */}
        <div className="tasks-content">
          {tasks.length === 0 ? (
            <p className="no-tasks-message">No assigned tasks found.</p>
          ) : (
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className="task-item">
                  <h4>{task.taskTitle}</h4>
                  <p>{task.description}</p>
                  <span>Due: {task.dueDate}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </>
  );
};

export default TasksPanel;