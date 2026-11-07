
/* ============================
   1. RESPONSIVE NAVIGATION
============================ */

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


/* ============================
   2. DYNAMIC FOOTER DATES
============================ */

// Current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


/* ============================
   3. COURSE ARRAY
============================ */

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces programming concepts including variables, decisions, calculations, loops, arrays and input/output.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web, website design and web development.",
        technology: ["HTML", "CSS"],
        completed: false
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students learn to write, call, debug and test functions to solve programming problems.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces classes, objects, encapsulation, inheritance and polymorphism.",
        technology: ["C#"],
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students learn to create dynamic websites using JavaScript and responsive design.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students focus on user experience, accessibility, performance optimization and API usage.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];


/* ============================
   4. SELECT HTML ELEMENTS
============================ */

const courseContainer = document.querySelector("#course-container");

const totalCredits = document.querySelector("#total-credits");

const allButton = document.querySelector("#all-courses");

const wddButton = document.querySelector("#wdd-courses");

const cseButton = document.querySelector("#cse-courses");


/* ============================
   5. DISPLAY COURSES
============================ */

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


    /* Calculate total credits using reduce() */

    const credits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredits.textContent = credits;

}


/* ============================
   6. ACTIVE BUTTON
============================ */

function setActiveButton(activeButton) {

    allButton.classList.remove("active");

    wddButton.classList.remove("active");

    cseButton.classList.remove("active");

    activeButton.classList.add("active");

}


/* ============================
   7. ALL COURSES FILTER
============================ */

allButton.addEventListener("click", () => {

    displayCourses(courses);

    setActiveButton(allButton);

});


/* ============================
   8. WDD COURSES FILTER
============================ */

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course => {
        return course.subject === "WDD";
    });

    displayCourses(wddCourses);

    setActiveButton(wddButton);

});


/* ============================
   9. CSE COURSES FILTER
============================ */

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course => {
        return course.subject === "CSE";
    });

    displayCourses(cseCourses);

    setActiveButton(cseButton);

});


/* ============================
   10. INITIAL COURSE DISPLAY
============================ */

displayCourses(courses);
