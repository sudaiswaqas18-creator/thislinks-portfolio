import React, { useState } from 'react';
import '../../../styles/dashboard/components/AddTaskModal.css';

const AddTaskModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    taskTitle: '',
    dueDate: '',
    priority: 'Medium',
    status: 'InActive',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'taskTitle':
        return value.trim() === '' ? 'Task title is required' : '';
      case 'dueDate':
        return value === '' ? 'Due date is required' : '';
      case 'priority':
        return value === '' ? 'Priority is required' : '';
      case 'status':
        return value === '' ? 'Status is required' : '';
      case 'description':
        return value.trim() === '' ? 'Description is required' : '';
      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  // Handle blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    handleClose();
  };

  // Handle close
  const handleClose = () => {
    setFormData({
      taskTitle: '',
      dueDate: '',
      priority: 'Medium',
      status: 'InActive',
      description: '',
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      {/* Single Parent Container */}
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Title and Close Button */}
        <h2 className="modal-title">Add Personal Task</h2>
        <button className="modal-close-btn" onClick={handleClose}>
          ✕
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="task-form">
          {/* Row 1: Task Title & Due Date */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Task Title <span className="required">*</span>
              </label>
              <input
                type="text"
                name="taskTitle"
                value={formData.taskTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Add Title"
                className={`form-input ${errors.taskTitle && touched.taskTitle ? 'error' : ''}`}
              />
              {errors.taskTitle && touched.taskTitle && (
                <span className="error-message">{errors.taskTitle}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Due Date<span className="required">*</span>
              </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                onBlur={handleBlur}
                min={new Date().toISOString().split('T')[0]}
                className={`form-input ${errors.dueDate && touched.dueDate ? 'error' : ''}`}
              />
              {errors.dueDate && touched.dueDate && (
                <span className="error-message">{errors.dueDate}</span>
              )}
            </div>
          </div>

          {/* Row 2: Priority & Status */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Priority<span className="required">*</span>
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select ${errors.priority && touched.priority ? 'error' : ''}`}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && touched.priority && (
                <span className="error-message">{errors.priority}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Status<span className="required">*</span>
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select ${errors.status && touched.status ? 'error' : ''}`}
              >
                <option value="InActive">InActive</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.status && touched.status && (
                <span className="error-message">{errors.status}</span>
              )}
            </div>
          </div>

          {/* Row 3: Description */}
          <div className="form-group full-width">
            <label className="form-label">
              Description<span className="required">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter task description"
              rows="4"
              className={`form-textarea ${errors.description && touched.description ? 'error' : ''}`}
            />
            {errors.description && touched.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;