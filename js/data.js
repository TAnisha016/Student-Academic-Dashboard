
// ==========================================
// STUDENT ACADEMIC DASHBOARD - SAMPLE DATA
// ==========================================


// 1. STUDENT INFORMATION

const student = {
    name: "Tanisha",
    department: "Electronics and Communication Engineering - AI",
    semester: "7th Semester",
    studentId: "13901182023",
    email: "student@example.com",
    college: "IGDTUW"
};


// 2. COURSE INFORMATION

const courses = [
    {
        id: 1,
        name: "Cloud Computing",
        description: "Learn cloud infrastructure, AWS services and deployment.",
        instructor: "Cloud Computing Faculty",
        progress: 85,
        icon: "☁️",
        category: "Technology"
    },

    {
        id: 2,
        name: "Data Structures and Algorithms",
        description: "Understand algorithms, data structures and problem solving.",
        instructor: "Computer Science Faculty",
        progress: 70,
        icon: "💻",
        category: "Computer Science"
    },

    {
        id: 3,
        name: "Database Management Systems",
        description: "Explore database design, SQL and data management.",
        instructor: "Database Faculty",
        progress: 65,
        icon: "🗄️",
        category: "Technology"
    },

    {
        id: 4,
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript and modern web development.",
        instructor: "Web Development Faculty",
        progress: 84,
        icon: "🌐",
        category: "Development"
    }
];


// 3. ASSIGNMENT INFORMATION

const assignments = [
    {
        id: 1,
        title: "AWS EC2 Deployment",
        subject: "Cloud Computing",
        dueDate: "2026-11-12",
        status: "Pending"
    },

    {
        id: 2,
        title: "SQL Database Design",
        subject: "Database Management",
        dueDate: "2026-11-15",
        status: "Pending"
    },

    {
        id: 3,
        title: "HTML and CSS Project",
        subject: "Web Development",
        dueDate: "2026-11-18",
        status: "Pending"
    },

    {
        id: 4,
        title: "Sorting Algorithms",
        subject: "Data Structures",
        dueDate: "2026-11-05",
        status: "Completed"
    },

    {
        id: 5,
        title: "Database Normalization",
        subject: "Database Management",
        dueDate: "2026-11-02",
        status: "Completed"
    },

    {
        id: 6,
        title: "Cloud Computing Basics",
        subject: "Cloud Computing",
        dueDate: "2026-10-28",
        status: "Completed"
    }
];


// 4. ANNOUNCEMENTS

const announcements = [
    {
        id: 1,
        title: "Course Update",
        message: "New learning materials have been added.",
        type: "blue"
    },

    {
        id: 2,
        title: "Academic Reminder",
        message: "Check your upcoming assignment deadlines.",
        type: "green"
    },

    {
        id: 3,
        title: "Project Work",
        message: "Continue working on your semester projects.",
        type: "orange"
    }
];
