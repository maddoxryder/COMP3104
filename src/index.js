// Debugging: Check if script is loaded
console.log("Student Information System script loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    const addStudentBtn = document.getElementById('addStudentBtn');
    const studentList = document.getElementById('studentList');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const majorInput = document.getElementById('major');

    // Debugging: Check if elements are found
    console.log("Add Student Button:", addStudentBtn);
    console.log("Student List:", studentList);
    console.log("Name Input:", nameInput);

    let students = [];
    let studentId = 1;

    // Initialize with empty message
    updateStudentList();

    // Add event listener to the button
    addStudentBtn.addEventListener('click', function() {
        console.log("Add Student button clicked");

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const major = majorInput.value.trim();

        console.log("Form values:", { name, age, major });

        if (name && age && major) {
            // Add student to array
            students.push({
                id: studentId++,
                name: name,
                age: age,
                major: major
            });

            console.log("Student added:", students[students.length - 1]);

            // Clear form
            nameInput.value = '';
            ageInput.value = '';
            majorInput.value = '';

            // Update the display
            updateStudentList();
        } else {
            alert('Please fill in all fields');
        }
    });

    // Also allow form submission with Enter key
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addStudentBtn.click();
        }
    });

    function updateStudentList() {
        console.log("Updating student list, current students:", students);

        if (students.length === 0) {
            studentList.innerHTML = '<div class="empty-message">No students added yet</div>';
            return;
        }

        // Create header
        let html = `
            <div class="student-list-header">
                <div>ID</div>
                <div>Name</div>
                <div>Major</div>
                <div>Age</div>
            </div>
        `;

        // Add each student
        students.forEach(student => {
            html += `
                <div class="student-item">
                    <div>${student.id}</div>
                    <div>${student.name}</div>
                    <div>${student.major}</div>
                    <div>${student.age}</div>
                </div>
            `;
        });

        studentList.innerHTML = html;
    }
});