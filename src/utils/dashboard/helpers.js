export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
export const getInitials = (name) => name.split(' ').map((n) => n[0]).join('').toUpperCase();
export const getStatusColor = (status) => {
  const colors = { Active: '#10b981', Inactive: '#ef4444', 'In Progress': '#10b981', Completed: '#6b7280' };
  return colors[status] || '#6b7280';
};