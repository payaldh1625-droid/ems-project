localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile sales and expenses for the monthly report.",
        date: "2025-08-25",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Team meeting",
        description: "Discuss project milestones and upcoming deadlines.",
        date: "2025-08-27",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false
      },
      {
        title: "Update client records",
        description: "Ensure all client records are up-to-date in CRM.",
        date: "2025-08-20",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Inventory check",
        description: "Check warehouse inventory levels.",
        date: "2025-08-22",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true
      },
      {
        title: "Customer follow-ups",
        description: "Call customers who placed orders last week.",
        date: "2025-08-28",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Create promotional emails",
        description: "Design and schedule promotional email campaign.",
        date: "2025-09-01",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false
      },
      {
        title: "Product feedback analysis",
        description: "Analyze survey responses from last product launch.",
        date: "2025-08-26",
        category: "Product",
        active: false,
        newTask: false,
        completed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Raj",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Bug fixing sprint",
        description: "Fix reported bugs in the dashboard module.",
        date: "2025-08-23",
        category: "Development",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Code review",
        description: "Review code submissions from junior developers.",
        date: "2025-08-24",
        category: "Development",
        active: true,
        newTask: false,
        completed: false
      },
      {
        title: "Security audit",
        description: "Conduct security review on authentication module.",
        date: "2025-08-29",
        category: "Security",
        active: false,
        newTask: false,
        completed: true
      },
      {
        title: "Write unit tests",
        description: "Increase code coverage for backend APIs.",
        date: "2025-08-30",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Update documentation",
        description: "Update README and developer setup guides.",
        date: "2025-09-01",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Schedule interviews",
        description: "Coordinate interviews with shortlisted candidates.",
        date: "2025-08-26",
        category: "HR",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Update job postings",
        description: "Revise and publish job descriptions for open roles.",
        date: "2025-08-20",
        category: "HR",
        active: false,
        newTask: false,
        completed: true
      },
      {
        title: "Team onboarding",
        description: "Organize onboarding session for new hires.",
        date: "2025-08-28",
        category: "HR",
        active: true,
        newTask: true,
        completed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage layout",
        description: "Redesign the homepage for better UX.",
        date: "2025-08-21",
        category: "Design",
        active: false,
        newTask: false,
        completed: true
      },
      {
        title: "Prototype mobile app",
        description: "Create interactive prototype for iOS app.",
        date: "2025-08-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Review design system",
        description: "Audit and update the current design system.",
        date: "2025-08-30",
        category: "Design",
        active: true,
        newTask: false,
        completed: false
      },
      {
        title: "Client design review",
        description: "Present design updates to the client.",
        date: "2025-08-29",
        category: "Design",
        active: false,
        newTask: false,
        completed: true
      },
      {
        title: "Design QA",
        description: "Check final designs before handoff to dev team.",
        date: "2025-09-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false
      },
      {
        title: "Logo refresh",
        description: "Update company logo for new branding.",
        date: "2025-08-22",
        category: "Design",
        active: false,
        newTask: false,
        completed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

 export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
 } 
 export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
     
 } 