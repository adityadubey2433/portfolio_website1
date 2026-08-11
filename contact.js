const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+91 8757405162",
        href: "tel:+918757405162"
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "Email",
        value: "adityadubey@example.com",
        href: "mailto:adityadubey@example.com"
    },
    {
        id: 3,
        icon: "ph ph-linkedin-logo",
        name: "LinkedIn",
        value: "Aditya Dubey",
        href: "https://www.linkedin.com/"
    },
    {
        id: 4,
        icon: "ph ph-github-logo",
        name: "GitHub",
        value: "Aditya Dubey",
        href: "https://github.com/"
    },
    {
        id: 5,
        icon: "ph ph-map-pin-area",
        name: "Location",
        value: "Bihar, India",
        href: "#"
    }
];

const contactContent = contactList.map((ele)=>{
    return`
    <div class="media"key=${ele?.id}>
        <span>
            <i class="${ele?.icon}"></i>
        </span>
    </div>

    <div class="contact-value">
        <p>${ele?.name}</p>
        <a href=${ele?.href}>${ele?.value}</a>
    </div>
    `;
}).join("");

if (media) media.innerHTML = contactContent;


// send Contact Message

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyle = {
    backgroundColor:sendBtn.style.backgroundColor,
    color:sendBtn.style.color,
    border:sendBtn.style.border,
    boxShadow:sendBtn.style.boxShadow,
}

document.getElementById('contact-form').addEventListener('submit',(event)=>{
    event.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = false;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message){
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style,originalStyle);
        
        return Toastify({
            text: "All Fields are Mandatory !",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            close:true,
            style: {
              background: "rgb(206,16,16)",
            },
        }).showToast();
        // return alert("All Fields are Mandatory !");
    }


    emailjs.send("service_gfxfjyz","template_czzyccv",{
        name,
        email,
        phone,
        message,
    }).then(() => {
         Toastify({
            text: "Message Sent !",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            close:true,
            style: {
              background: "rgb(9, 222, 38)",
            },
        }).showToast();

        setTimeout(()=>{
            sendBtn.innerHTML = originalText;

            Object.assign(sendBtn.style, originalStyle);

            sendBtn.disabled = false;
        },2000)
        }, (error) => {
            Toastify({
            text: "Message Failed !",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            close:true,
            style: {
              background: "rgb(206, 16, 16)",
            },
        }).showToast();
        setTimeout(()=>{
            sendBtn.innerHTML = originalText;

            Object.assign(sendBtn.style, originalStyle);

            sendBtn.disabled = false;
        },2000)
            console.log('FAILED...', error);
    });
});