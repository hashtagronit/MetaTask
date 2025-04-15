const employees = [
  {
    "id": 1,
    "emailId": "pranjana@gmail.com",
    "password": "123",
    "name": "Pranjana Dwivedi",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Plan Social Media Series",
        "taskDescription": "Outline the content and schedule for the upcoming social media series.",
        "taskDate": "2024-11-01",
        "category": "Planning",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Coordinate with Design Team",
        "taskDescription": "Collaborate with design to finalize the theme for the social media series.",
        "taskDate": "2024-11-02",
        "category": "Coordination",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Review Final Content Plan",
        "taskDescription": "Review and approve the final plan for the social media series before execution.",
        "taskDate": "2024-11-03",
        "category": "Review",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "emailId": "aniket@gmail.com",
    "password": "123",
    "name": "Aniket Pathak",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Write Content for Social Media Series",
        "taskDescription": "Draft engaging content for each post in the planned social media series.",
        "taskDate": "2024-11-01",
        "category": "Content Creation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Edit and Proofread",
        "taskDescription": "Review content for grammar, spelling, and adherence to brand guidelines.",
        "taskDate": "2024-11-02",
        "category": "Editing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit Final Content",
        "taskDescription": "Submit the final content drafts for approval.",
        "taskDate": "2024-11-03",
        "category": "Submission",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "emailId": "priyanshu@gmail.com",
    "password": "123",
    "name": "Priyanshu Pandey",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Tenure Report",
        "taskDescription": "Compile a report summarizing work completed up to the current date.",
        "taskDate": "2024-11-01",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Analyze Project Milestones",
        "taskDescription": "Evaluate milestones reached during the current tenure.",
        "taskDate": "2024-11-02",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit Final Report",
        "taskDescription": "Submit the compiled tenure report to the management team.",
        "taskDate": "2024-11-03",
        "category": "Submission",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "emailId": "pawan@gmail.com",
    "password": "123",
    "name": "Pawan Yadav",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design Posters for Social Media Series",
        "taskDescription": "Create visually appealing posters for each post in the series.",
        "taskDate": "2024-11-01",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Refine Poster Designs",
        "taskDescription": "Make adjustments to posters based on feedback.",
        "taskDate": "2024-11-02",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit Final Posters",
        "taskDescription": "Submit finalized poster designs for the social media series.",
        "taskDate": "2024-11-03",
        "category": "Submission",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "emailId": "anushree@gmail.com",
    "password": "123",
    "name": "Anushree Singh",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Write Captions for Social Media Posts",
        "taskDescription": "Craft engaging captions for each post in the social media series.",
        "taskDate": "2024-11-01",
        "category": "Content Creation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Proofread Captions",
        "taskDescription": "Review captions for clarity, conciseness, and brand voice.",
        "taskDate": "2024-11-02",
        "category": "Editing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit Final Captions",
        "taskDescription": "Submit the finalized captions for social media posts.",
        "taskDate": "2024-11-03",
        "category": "Submission",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];


  

const admin = [{
    "id": 6,
    "emailId": "ronit@gmail.com",
    "password": "1812",
    "name": "Ronit Raj"
  },

  {
    "id": 7,
    "emailId": "aryan@gmail.com",
    "password": "1812",
    "name": "Aryan Pandit"
  }   
];



export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin')) 
    return {employees,admin}
}