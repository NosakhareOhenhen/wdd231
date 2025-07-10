const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'CSE 111 students become more organized...', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce the notion of classes...', technology: ['C#'], completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience in Web Fundamentals...', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience with Dynamic Web Fundamentals...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

const courseContainer = document.getElementById('course-list-container');
const creditTotal = document.getElementById('total-credits');

function filterCourses(subject) {
    courseContainer.innerHTML = '';
    let filteredCourses = [];
    if (subject === 'All') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    displayCourses(filteredCourses);
}

function displayCourses(coursesToDisplay) {
    coursesToDisplay.forEach(course => {
        const div = document.createElement('div');
        div.classList.add('course-card');
        if (course.completed) div.classList.add('completed');
        div.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${course.description.substring(0, 50)}...</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseContainer.appendChild(div);
    });
    const totalCredits = coursesToDisplay.reduce((sum, course) => sum + course.credits, 0);
    creditTotal.textContent = totalCredits;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allBtn').addEventListener('click', () => filterCourses('All'));
    document.getElementById('wddBtn').addEventListener('click', () => filterCourses('WDD'));
    document.getElementById('cseBtn').addEventListener('click', () => filterCourses('CSE'));
    filterCourses('All');
});