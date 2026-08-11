const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () => {
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click', (e)=>{
        e.preventDefault();

        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });

        tab.classList.add('active');

        aboutContent.forEach((c)=>{
            c.classList.remove('active');
        });

        
        const activeTab = tab.dataset.section;
        
        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList =[
                {
                    id: 1,
                    date: "2026 - Present",
                    position: "Software & Web Developer",
                    company: "Freelance",
                    details: "Developing responsive and user-friendly web applications using modern web technologies. Focused on clean code, performance, responsive design, and delivering practical digital solutions."
                },
                    
                {
                    id: 2,
                    date: "2025 - 2026",
                    position: "MERN Stack Developer",
                    company: "Personal Projects",
                    details: "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Implemented authentication, CRUD operations, REST APIs, dashboards, and responsive user interfaces."
                },
                
                {
                    id: 3,
                    date: "2025 - 2026",
                    position: "Frontend Developer",
                    company: "Personal Projects",
                    details: "Created modern and responsive websites using HTML, CSS, and JavaScript. Worked on interactive UI components, navigation systems, animations, forms, and mobile-friendly layouts."
                },
                
                {
                    id: 4,
                    date: "2025 - 2026",
                    position: "Project Developer",
                    company: "Academic & Personal Projects",
                    details: "Designed and developed projects including task management systems, portfolio websites, CRUD applications, and other web-based solutions while focusing on functionality, usability, and maintainable code."
                },
                
                {
                    id: 5,
                    date: "2025 - Present",
                    position: "Technical Content Creator",
                    company: "YouTube",
                    details: "Creating educational and technical content related to programming, web development, software development, and coding. Sharing practical knowledge, development tips, and project-based learning."
                },
                
                {
                    id: 6,
                    date: "2026",
                    position: "Marketing Executive",
                    company: "Jio Financial Services Limited",
                    details: "Worked as a Marketing Executive, gaining professional experience in communication, customer interaction, business operations, and understanding real-world organizational workflows."
                },
            ];

            const experienceContent = experienceList.map((ele) => {
                return`
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;

            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        }
        else if(activeTab === "education"){
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2022 - 2026",
                    degree: "B.Tech in Computer Science & Engineering (Data Science & AI)",
                    institution: "Shri Ramswaroop Memorial University , LUCKNOW",
                    details: "Built a strong foundation in software development, data science, artificial intelligence, databases, and modern web technologies through academic learning and practical projects."
                },
                
                {
                    id: 2,
                    date: "2019 - 2021",
                    degree: "12th (Senior Secondary)",
                    institution: "P.P.G.College, Chamukha, Vijaipur, Gopalganj",
                    details: "Completed senior secondary education with a focus on developing strong fundamentals in Physics, Chemistry, and mathematics, logical reasoning, and problem-solving."
                },
                
                {
                    id: 3,
                    date: "2017 - 2019",
                    degree: "10th (Secondary)",
                    institution: "Paras Dubey Smarak Janta High School Majhwalia, Vijaipur, Gopalganj",
                    details: "Completed secondary education and developed a strong foundation in mathematics, science, communication, and analytical thinking."
                },
                
            ];

            const educationContent = educationList.map((ele) => {
                return`
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            }).join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        }
        else if (activeTab === "skills") {

          const skills = document.querySelector(".skill-list");

            const skillList = [
                {
                    id: 1,
                    name: "HTML5",
                    icon: "html.png"
                },
                {
                    id: 2,
                    name: "CSS3",
                    icon: "CSS.png"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "Javascript.png"
                },
                {
                    id: 4,
                    name: "Express.js",
                    icon: "expressjs.png"
                },
                {
                    id: 5,
                    name: "Node.js",
                    icon: "nodejs.png"
                },
                {
                    id: 6,
                    name: "React.js",
                    icon: "Reactjs.jpg"
                },
               {
                   id: 7,
                   name: "MongoDB",
                   icon: "mongoDB.webp"
               },
               {
                   id: 8,
                   name: "Git",
                   icon: "git.png"
               },
               {
                   id: 9,
                   name: "GitHub",
                   icon: "github.jpg"
               },
               {
                   id: 10,
                   name: "Microsoft Excel",
                   icon: "excel.png"
               },
               {
                   id: 11,
                   name: "Canva",
                   icon: "canva.jpg"
               },
               {
                   id: 12,
                   name: "Microsoft PowerPoint",
                   icon: "PowerPoint.jpeg"
               }
            ];
                const skillContent = skillList.map((ele) => {
                   return `
                       <div class="skill-box">
                         <img 
                           src="${ele.icon}" 
                           alt="${ele.name}"
                           title="${ele.name}"
                           loading="lazy"
                         />
                        </div>
                    `;
                }).join("");

                if (skills) {
                    skills.innerHTML = skillContent;
                }
        }
        else if (activeTab === "about-me"){
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    title: "Name : ",
                    value: "Aditya Dubey",
                },

                {
                    id: 2,
                    title: "Contact Number : ",
                    value: "8757405192 , 9234587916",
                },

                {
                    id: 3,
                    title: "Email : ",
                    value: "adityadubey2433@gmail.com",
                },

                {
                    id: 4,
                    title: "Industry : ",
                    value: "Information Technology",
                },

                {
                    id: 5,
                    title: "Experience : ",
                    value: "Fresher",
                },

                {
                    id: 6,
                    title: "Role : ",
                    value: "Software and Web. Developer",
                },

                {
                    id: 7,
                    title: "Location : ",
                    value: "Majhwalia , Matiyari , Vijaipur , Gopalganj Bihar, India",
                },
                
                {
                    id: 8,
                    title: "Country : ",
                    value: "India",
                },
            ];

            const infoContent = infoList.map((ele)=>{
                return`
                <div class = "info-box" key=${ele?.id}>
                   <span>${ele?.title}</span>
                   <span>${ele?.value}</span>
                </div>
                `;
            }).join("");

            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }

    });
});