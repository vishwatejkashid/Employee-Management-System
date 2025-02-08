localStorage.clear()
const employees = [
  { 
      "id": 1, 
      "firstname": "Amit", 
      "email": "employee1@example.com", 
      "password": "123",
      "tasks": [
      { "title": "Task 1", "description": "Complete module A", "date": "2025-02-05", "category": "Development", "active": true, "new_task": true, "completed": false, "failed": false },
      { "title": "Task 2", "description": "Fix bug in login page", "date": "2025-02-06", "category": "Bug Fixing", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Task 3", "description": "Write API documentation", "date": "2025-02-07", "category": "Documentation", "active": false, "new_task": false, "completed": true, "failed": false }
      ],
      "task_counts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  },
  { 
      "id": 2, 
      "firstname": "Rohit", 
      "email": "employee2@example.com", 
      "password": "123", 
      "tasks": [
      { "title": "Task A", "description": "Optimize database queries", "date": "2025-02-05", "category": "Optimization", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Task B", "description": "Review pull requests", "date": "2025-02-06", "category": "Code Review", "active": false, "new_task": true, "completed": false, "failed": false },
      { "title": "Task C", "description": "Update UI design", "date": "2025-02-07", "category": "Design", "active": false, "new_task": false, "completed": true, "failed": false }
      ],
      "task_counts": { "active": 1, "new_task": 1, "completed": 1, "failed": 0 }
  },
  { 
      "id": 3, 
      "firstname": "Vikram", 
      "email": "employee3@example.com", 
      "password": "123", 
      "tasks": [
      { "title": "Task X", "description": "Implement authentication", "date": "2025-02-08", "category": "Security", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Task Y", "description": "Run unit tests", "date": "2025-02-09", "category": "Testing", "active": false, "new_task": false, "completed": false, "failed": true },
      { "title": "Task Z", "description": "Refactor dashboard component", "date": "2025-02-10", "category": "Refactoring", "active": true, "new_task": true, "completed": false, "failed": false }
      ],
      "task_counts": { "active": 2, "new_task": 1, "completed": 0, "failed": 1 }
  },
  { 
      "id": 4, 
      "firstname": "Rajesh", 
      "email": "employee4@example.com", 
      "password": "123", 
      "tasks": [
      { "title": "Task M", "description": "Deploy new feature", "date": "2025-02-09", "category": "Deployment", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Task N", "description": "Check server logs", "date": "2025-02-10", "category": "Monitoring", "active": false, "new_task": false, "completed": true, "failed": false },
      { "title": "Task O", "description": "Write test cases", "date": "2025-02-11", "category": "Testing", "active": true, "new_task": true, "completed": false, "failed": false }
      ],
      "task_counts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  },
  { 
      "id": 5, 
      "firstname": "Suresh", 
      "email": "employee5@example.com", 
      "password": "123", 
      "tasks": [
      { "title": "Task U", "description": "Migrate database", "date": "2025-02-12", "category": "Database", "active": true, "new_task": true, "completed": false, "failed": false },
      { "title": "Task V", "description": "Improve load balancing", "date": "2025-02-13", "category": "Infrastructure", "active": false, "new_task": false, "completed": false, "failed": true },
      { "title": "Task W", "description": "Optimize frontend performance", "date": "2025-02-14", "category": "Optimization", "active": true, "new_task": false, "completed": false, "failed": false }
      ],
      "task_counts": { "active": 2, "new_task": 1, "completed": 0, "failed": 1 }
  }
]
const admin = [ {
  "id": 1, 
  "email": "admin@example.com", 
  "password": "123"
}
]
  
export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees =JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}