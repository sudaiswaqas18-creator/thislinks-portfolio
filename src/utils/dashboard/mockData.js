 export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', joinDate: '2024-02-20' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive', joinDate: '2024-03-10' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Manager', status: 'Active', joinDate: '2024-01-25' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'User', status: 'Active', joinDate: '2024-04-05' },
];

export const mockProjects = [
  { id: 1, name: 'Website Redesign', client: 'ABC Corp', status: 'In Progress', progress: 65, deadline: '2024-06-30', budget: '$25,000' },
  { id: 2, name: 'Mobile App Development', client: 'XYZ Ltd', status: 'Planning', progress: 20, deadline: '2024-08-15', budget: '$50,000' },
  { id: 3, name: 'E-commerce Platform', client: 'Shop Plus', status: 'In Progress', progress: 80, deadline: '2024-05-20', budget: '$35,000' },
  { id: 4, name: 'CRM System', client: 'Tech Solutions', status: 'Completed', progress: 100, deadline: '2024-03-15', budget: '$40,000' },
];

export const mockStats = [
  { id: 1, title: 'Total Users', value: '1,234', change: '+12%', trend: 'up', icon: 'users', color: '#3b82f6' },
  { id: 2, title: 'Active Projects', value: '56', change: '+8%', trend: 'up', icon: 'projects', color: '#10b981' },
  { id: 3, title: 'Revenue', value: '$45,678', change: '+23%', trend: 'up', icon: 'revenue', color: '#f59e0b' },
  { id: 4, title: 'Completion Rate', value: '87%', change: '-3%', trend: 'down', icon: 'chart', color: '#ef4444' },
];

export const mockActivity = [
  { id: 1, user: 'John Doe', action: 'created a new project', target: 'Website Redesign', time: '2 hours ago' },
  { id: 2, user: 'Jane Smith', action: 'updated', target: 'Mobile App Development', time: '4 hours ago' },
  { id: 3, user: 'Mike Johnson', action: 'completed', target: 'CRM System', time: '1 day ago' },
];