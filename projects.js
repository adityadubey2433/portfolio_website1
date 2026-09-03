const projectList = [
    {
        id: 1,
        number: "01",
        title: "AND Portfolio",
        description:
            "A personal responsive portfolio website created to showcase my skills, projects, education, and professional information with a modern and attractive user interface.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "AND_portfolio.png",
        liveLink: "https://adityadubey2433.github.io/portfolio_website1/",
        githubLink: "https://github.com/adityadubey2433"
    },
    {
        id: 2,
        number: "02",
        title: "Forest Fire Prediction",
        description:
            "A responsive Forest Fire Prediction web application built using HTML, CSS, and JavaScript. The project provides a simple and user-friendly interface to predict the possibility of forest fire based on the provided input.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "forest-fire.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    },

    {
        id: 3,
        number: "03",
        title: "Age Calculator",
        description:
            "A simple and responsive Age Calculator that calculates a user's exact age based on their date of birth. It provides the result instantly with a clean and user-friendly interface.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "age-calculator.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    },

    {
        id: 4,
        number: "04",
        title: "Calculator",
        description:
            "A responsive calculator application built using HTML, CSS, and JavaScript. It performs basic arithmetic operations with an interactive and easy-to-use interface.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "calculator.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    },

    {
        id: 5,
        number: "05",
        title: "Image Gallery",
        description:
            "A responsive Image Gallery website that displays multiple images in an attractive layout. Users can browse images through a simple and interactive interface.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "image-gallery.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    },


    {
        id: 6,
        number: "06",
        title: "Portfolio Website",
        description:
            "A personal responsive portfolio website created to showcase my skills, projects, education, and professional information with a modern and attractive user interface.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "portfolio.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    },

    {
        id: 7,
        number: "07",
        title: "To-Do List",
        description:
            "A responsive To-Do List application that allows users to add, complete, and delete tasks. It provides a simple interface for managing daily tasks efficiently.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "to-do-list.png",
        liveLink: "#",
        githubLink: "https://github.com/adityadubey2433"
    }
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = 
    `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>${projectContent?.description}</p>
            <div class="tech-stack">
                ${projectContent?.techStack?.map((tech)=>{
                    return`
                    <span>${tech}</span>
                    
                    `;
                }).join(",")}
            </div>
            <hr>
            <div class="links">
                <a href="${projectContent?.liveLink}"><i class="ph ph-arrow-right"></i></a>
                <a href="${projectContent?.githubLink}"><i class="ph ph-github-logo"></i></a>
            </div>
        </div>

        <div class="carousel">
            <img src="${projectContent?.image}" alt="${projectContent?.title}">

                <div class="arrow">
                    <a href="#" id = "previous" class="${previousDisabled?"disabled-btn" : ""}">
                        <i class="ph ph-caret-left"></i>
                    </a>
                    <a href="#" id="next" class="${nextDisabled?"disabled-btn" : ""}">
                        <i class="ph ph-caret-right"></i>
                    </a>
                </div>
        </div>
    `;


    document.getElementById("previous").addEventListener("click",(e)=>{
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click",(e)=>{
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);
