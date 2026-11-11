
// ==========================================
// STUDENT ACADEMIC DASHBOARD - MAIN SCRIPT
// ==========================================


// 1. LOAD STUDENT INFORMATION

const studentName = document.querySelector(".welcome-section h1");

if (studentName) {
    studentName.innerHTML = `Welcome back, ${student.name}! 👋`;
}


// 2. CALCULATE DASHBOARD STATISTICS

const totalCourses = courses.length;

const completedAssignments = assignments.filter(
    assignment => assignment.status === "Completed"
).length;

const pendingAssignments = assignments.filter(
    assignment => assignment.status === "Pending"
).length;

const overallProgress = Math.round(
    courses.reduce((total, course) => total + course.progress, 0)
    / totalCourses
);


// DISPLAY STATISTICS


const totalCoursesElement = document.getElementById("totalCourses");
const completedAssignmentsElement = document.getElementById("completedAssignments");
const pendingAssignmentsElement = document.getElementById("pendingAssignments");
const overallProgressElement = document.getElementById("overallProgress");

if (totalCoursesElement) {
    totalCoursesElement.textContent = totalCourses;
}

if (completedAssignmentsElement) {
    completedAssignmentsElement.textContent = completedAssignments;
}

if (pendingAssignmentsElement) {
    pendingAssignmentsElement.textContent = pendingAssignments;
}

if (overallProgressElement) {
    overallProgressElement.textContent = overallProgress + "%";
}


// 3. DISPLAY COURSE CARDS

const courseContainer = document.getElementById("courseContainer");

if (courseContainer) {

    courseContainer.innerHTML = courses.map(course => `

        <div class="course-card">

            <div class="course-top">

                <div class="course-icon">
                    ${course.icon}
                </div>

                <span class="course-tag">
                    ${course.category}
                </span>

            </div>

            <h3>${course.name}</h3>

            <p>${course.description}</p>

            <div class="progress-info">

                <span>Course Progress</span>

                <span>${course.progress}%</span>

            </div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${course.progress}%">
                </div>

            </div>

        </div>

    `).join("");

}


// 4. DISPLAY UPCOMING ASSIGNMENTS

const assignmentContainer =
    document.getElementById("assignmentContainer");

if (assignmentContainer) {

    const upcomingAssignments = assignments
        .filter(assignment => assignment.status === "Pending")
        .slice(0, 3);

    assignmentContainer.innerHTML = upcomingAssignments.map(assignment => `

        <div class="assignment-item">

            <div>

                <strong>${assignment.title}</strong>

                <small>
                    ${assignment.subject} • Due:
                    ${new Date(
                        assignment.dueDate + "T00:00:00"
                    ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short"
                    })}
                </small>

            </div>

            <span class="status pending">
                ${assignment.status}
            </span>

        </div>

    `).join("");

}

console.log("Student Academic Dashboard loaded successfully!");


// ==========================================
// 5. DISPLAY ALL COURSES PAGE
// ==========================================

const allCoursesContainer =
    document.getElementById("allCoursesContainer");

if (allCoursesContainer) {

    allCoursesContainer.innerHTML = courses.map(course => `

        <div class="course-card">

            <div class="course-top">

                <div class="course-icon">${course.icon}</div>

                <span class="course-tag">${course.category}</span>

            </div>

            <h3>${course.name}</h3>

            <p>${course.description}</p>

            <p style="margin-top: 10px;">
                Instructor: ${course.instructor}
            </p>

            <div class="progress-info">
                <span>Course Progress</span>
                <span>${course.progress}%</span>
            </div>

            <div class="progress-bar">
                <div class="progress-fill"
                     style="width: ${course.progress}%">
                </div>
            </div>

        </div>

    `).join("");

}


// ==========================================
// 6. DISPLAY ALL ASSIGNMENTS PAGE
// ==========================================

const allAssignmentsContainer =
    document.getElementById("allAssignmentsContainer");

if (allAssignmentsContainer) {

    allAssignmentsContainer.innerHTML = assignments.map(assignment => `

        <div class="assignment-item">

            <div>
                <strong>${assignment.title}</strong>

                <small>
                    ${assignment.subject} |
                    Due: ${new Date(
                        assignment.dueDate + "T00:00:00"
                    ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })}
                </small>
            </div>

            <span class="status ${
                assignment.status === "Completed"
                    ? "completed"
                    : "pending"
            }">
                ${assignment.status}
            </span>

        </div>

    `).join("");

}


// ==========================================
// 7. DISPLAY STUDENT PROFILE
// ==========================================

const profileName = document.getElementById("profileName");

if (profileName) {

    document.getElementById("profileName").textContent =
        student.name;

    document.getElementById("profileId").textContent =
        student.studentId;

    document.getElementById("profileDepartment").textContent =
        student.department;

    document.getElementById("profileSemester").textContent =
        student.semester;

    document.getElementById("profileEmail").textContent =
        student.email;

    document.getElementById("profileCollege").textContent =
        student.college;

}

