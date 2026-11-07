
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes, objects, encapsulation, inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];


/* SELECT HTML ELEMENTS */

const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#total-credits");

const allButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd-courses");
const cseButton = document.querySelector("#cse-courses");


/* DISPLAY COURSES */

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <h4>${course.title}</h4>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technology:</strong> ${course.technology.join(", ")}</p>
            <p class="completion-status">
                ${course.completed ? "✓ Completed" : "Not Completed"}
            </p>
        `;

        courseContainer.appendChild(courseCard);

    });

    // Calculate credits dynamically using reduce()
    const credits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredits.textContent = credits;

}


/* ACTIVE BUTTON */

function setActiveButton(activeButton) {

    allButton.classList.remove("active");
    wddButton.classList.remove("active");
    cseButton.classList.remove("active");

    activeButton.classList.add("active");

}


/* ALL COURSES BUTTON */

allButton.addEventListener("click", () => {

    displayCourses(courses);
    setActiveButton(allButton);

});


/* WDD COURSES BUTTON */

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course => {
        return course.subject === "WDD";
    });

    displayCourses(wddCourses);
    setActiveButton(wddButton);

});


/* CSE COURSES BUTTON */

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course => {
        return course.subject === "CSE";
    });

    displayCourses(cseCourses);
    setActiveButton(cseButton);

});


/* INITIAL DISPLAY */

displayCourses(courses);
