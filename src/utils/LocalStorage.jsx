const employees = [
    { 
        "id": 1, 
        "firstname": "Amit", 
        "email": "employee1@example.com", 
        "password": "123",
        "tasks": [
        { "title": "Complete Module A", "description": "Work on completing all pending features in Module A for the project.", "date": "2025-02-05", "category": "Development", "active": true, "new_task": true, "completed": false, "failed": false },
        { "title": "Fix Login Page Bug", "description": "Identify and resolve the issue preventing users from logging in.", "date": "2025-02-06", "category": "Bug Fixing", "active": true, "new_task": false, "completed": false, "failed": false },
        { "title": "API Documentation", "description": "Write detailed documentation for all backend API endpoints.", "date": "2025-02-07", "category": "Documentation", "active": false, "new_task": false, "completed": true, "failed": false }
        ],
        "task_counts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
    },
    { 
        "id": 2, 
        "firstname": "Rohit", 
        "email": "employee2@example.com", 
        "password": "123", 
        "tasks": [
        { "title": "Optimize Database Queries", "description": "Improve database queries to enhance performance and reduce load time.", "date": "2025-02-05", "category": "Optimization", "active": true, "new_task": false, "completed": false, "failed": false },
        { "title": "Review Pull Requests", "description": "Go through open pull requests, provide feedback, and approve if they meet standards.", "date": "2025-02-06", "category": "Code Review", "active": false, "new_task": true, "completed": false, "failed": false },
        { "title": "Update UI Design", "description": "Redesign UI elements for better user experience based on latest design guidelines.", "date": "2025-02-07", "category": "Design", "active": false, "new_task": false, "completed": true, "failed": false }
        ],
        "task_counts": { "active": 1, "new_task": 1, "completed": 1, "failed": 0 }
    },
    { 
        "id": 3, 
        "firstname": "Vikram", 
        "email": "employee3@example.com", 
        "password": "123", 
        "tasks": [
        { "title": "Implement Authentication", "description": "Develop and integrate a secure authentication system for user login.", "date": "2025-02-08", "category": "Security", "active": true, "new_task": false, "completed": false, "failed": false },
        { "title": "Run Unit Tests", "description": "Execute and validate unit tests for all newly added features.", "date": "2025-02-09", "category": "Testing", "active": false, "new_task": false, "completed": false, "failed": true },
        { "title": "Refactor Dashboard Component", "description": "Optimize and clean up the dashboard component to improve maintainability.", "date": "2025-02-10", "category": "Refactoring", "active": true, "new_task": true, "completed": false, "failed": false }
        ],
        "task_counts": { "active": 2, "new_task": 1, "completed": 0, "failed": 1 }
    },
    { 
        "id": 4, 
        "firstname": "Rajesh", 
        "email": "employee4@example.com", 
        "password": "123", 
        "tasks": [
        { "title": "Deploy New Feature", "description": "Deploy the latest feature to the production environment and monitor its performance.", "date": "2025-02-09", "category": "Deployment", "active": true, "new_task": false, "completed": false, "failed": false },
        { "title": "Monitor Server Logs", "description": "Check server logs for any errors or warnings and address issues accordingly.", "date": "2025-02-10", "category": "Monitoring", "active": false, "new_task": false, "completed": true, "failed": false },
        { "title": "Write Test Cases", "description": "Develop test cases to cover all possible scenarios for the new feature.", "date": "2025-02-11", "category": "Testing", "active": true, "new_task": true, "completed": false, "failed": false }
        ],
        "task_counts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
    },
    { 
        "id": 5, 
        "firstname": "Suresh", 
        "email": "employee5@example.com", 
        "password": "123", 
        "tasks": [
        { "title": "Migrate Database", "description": "Move the current database to a new server while ensuring minimal downtime.", "date": "2025-02-12", "category": "Database", "active": true, "new_task": true, "completed": false, "failed": false },
        { "title": "Improve Load Balancing", "description": "Enhance load balancing strategies to distribute traffic efficiently across servers.", "date": "2025-02-13", "category": "Infrastructure", "active": false, "new_task": false, "completed": false, "failed": true },
        { "title": "Optimize Frontend Performance", "description": "Analyze and improve frontend performance by reducing asset size and improving rendering speed.", "date": "2025-02-14", "category": "Optimization", "active": true, "new_task": false, "completed": false, "failed": false }
        ],
        "task_counts": { "active": 2, "new_task": 1, "completed": 0, "failed": 1 }
    }
  ];
  
  const admin = [
    { 
        "id": 1, 
        "email": "admin@example.com", 
        "password": "123"
    }
  ];
  
  export const setLocalStorage = () => {
      localStorage.setItem('employees', JSON.stringify(employees));
      localStorage.setItem('admin', JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      const admin = JSON.parse(localStorage.getItem('admin')) || [];
      return { employees, admin };
  };
  