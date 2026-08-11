const toggle = document.getElementById('menu-toggle');

if(toggle){
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = [
    "Developer",
    "Designer",
    "Freelancer",
    "Mentor",
    "Youtuber"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingDelay = 100;
const erasingDelay = 100;
const nextWordDelay = 1000;

function type() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }

    } else {

        charIndex--;
        typingText.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }

    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        type();
    }
});


const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        navlinks.forEach((l) => {
            l.classList.remove("active");
        });

        link.classList.add("active");

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {

            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }

        });
        
        if (tabName === "services") {
            const serviceList = [{
                id:1,
                icon:"ph-code",
                text:"Web Development",
                para:"I develop modern, responsive, and high-performance websites tailored to your specific needs.I focus on clean code, attractive layouts, and smooth user experiences.Every website is designed to work seamlessly across different devices. My goal is to build websites that are both visually appealing and functionally powerful.",

            },

            {
                id:2,
                icon:"",
                text:"Frontend Development",
                para:"I create interactive and engaging user interfaces using modern frontend technologies. I focus on responsive layouts, intuitive navigation, and smooth user interactions. My development approach combines clean design with optimized performance. I ensure every interface provides a consistent experience across all screen sizes.",
            },

            {
                id:3,
                icon:"",
                text:"Backend Development",
                para:"I build secure, scalable, and reliable backend applications for modern web projects. I work with server-side technologies, REST APIs, authentication, and database integration. I focus on writing structured and maintainable backend code. My solutions are designed to handle application requirements efficiently.",
            },
                
            {
                id:4,
                icon:"",
                text:"Database Management",
                para:"I design and manage databases to store, organize, and retrieve application data efficiently. I work with technologies such as MongoDB and focus on creating well-structured data models. I prioritize data consistency, security, and reliable performance. My database solutions are built to support scalable applications.",
            },

            {
                id:5,
                icon:"",
                text:"Responsive Design",
                para:"I create responsive websites that adapt perfectly to desktops, tablets, and mobile devices. I focus on flexible layouts, readable content, and consistent user experiences. Every interface is tested across different screen sizes and resolutions. My goal is to make websites accessible and easy to use on every device.",
            },

            {
                id:6,
                icon:"",
                text:"Technical Content Creation",
                para:"I create programming and technology-focused content that makes complex concepts easier to understand. I share practical tutorials, coding tips, project ideas, and development techniques. My content focuses on real-world learning and hands-on implementation. The goal is to help aspiring developers improve their technical skills.",
            },

            ];

            const services = document.
            getElementsByClassName
            ("service-list");


            // const innerContent = serviceList.
            // map(() => {
            //     return `
                
            //     `;
            // }).join("");

            // Array.from(services).forEach
            // ((ele)=>{
            //     ele.innerHTML = innerContent;
            // });
        }



        toggle.checked = false;  // ye jb hm commentout krenge tb ye kam krega ye 3bar on , off krne ke liye hai smoll devices me 
        document.body.classList.remove("no-scroll")
    });

});
