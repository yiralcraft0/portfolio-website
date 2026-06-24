// For Skills Tech--------------------------------------------------
const techDisplayNumber = document.getElementById("techDisplayNumber");
const techDisplayBar = document.getElementById("techDisplayBar");
// For Project Terminal--------------------------------------------
const projectsContentInput = document.getElementById('projectsContentInput');
const projectsContentOutput = document.getElementById('projectsContentOutput')
const loadingElement = document.getElementById("loadingText");
// For NavBar ------------------------------------------------------
const openArrow = document.getElementById("openArrow");
const weblogo = document.getElementById("weblogo");
const phoneul = document.getElementById("phoneul");
console.log(phoneul.style.display)

openArrow.onclick = function () {
    openArrow.style.position = "relative";


    if (phoneul.style.display === "none" || phoneul.style.display === "") {
        // If hidden, show the menu and hide the logo
        weblogo.style.display = "none";
        phoneul.style.display = "flex";//
        openArrow.style.rotate = '180deg';
    } else {
        // If already showing, hide the menu and show the logo
        weblogo.style.display = "block";
        phoneul.style.display = "none";
        openArrow.style.rotate = '0deg';
    }
};



// Skills Tech code----------------------------------------
const skills = [
    { id: "stackPython", score: '90%' },
    { id: "stackJava", score: '70%' },
    { id: "stackHTML", score: '95%' },
    { id: "stackCSS", score: '90%' },
    { id: "stackJS", score: '20%' },
    { id: "stackAndriod", score: '60%' },
    { id: "stackDSA", score: '20%' }
];

skills.forEach(skill => {
    const element = document.getElementById(skill.id);

    if (element) {
        element.addEventListener("mouseenter", () => {
            techDisplayNumber.textContent = skill.score;
            techDisplayBar.style.width = skill.score;
        });

        element.addEventListener("mouseleave", () => {
            techDisplayNumber.textContent = 0 + '%';
            techDisplayBar.style.width = '0%';
        });
    }
});

// Terminal Project---------------------------------------------

projectsContentInput.addEventListener("keydown", function (event) {

    if (event.key == 'Enter') {
        event.preventDefault(); // Stop default form submissions early

        const commandValue = event.target.value.toLowerCase(); // Store value before input gets locked
        let dotCount = 0;

        // Reset text and show the loader
        loadingElement.textContent = "Loading";
        loadingElement.style.display = "block";

        // Start the animation loop
        const loadingInterval = setInterval(() => {
            if (dotCount < 3) {
                loadingElement.textContent += " ●";
                dotCount++;
            } else {
                clearInterval(loadingInterval); // Stop the animation timer
                loadingElement.style.display = "none"; // Hide loading animation

                // Output text only triggers AFTER loading completes
                if (commandValue === "ls") {
                    projectsContentOutput.style.display = 'block';
                    projectsContentInput.readOnly = true;
                    loadingElement.nextElementSibling.style.display = "none";
                } else {
                    loadingElement.nextElementSibling.style.color = "Red";
                    loadingElement.nextElementSibling.textContent = `'${commandValue}' is not recognized as a command`;
                }
            }
        }, 500); // 500ms delay per dot (1.5 seconds total)
    }
});

const projects = ["projectsDayCraft", "projectsPasManager", "projectsBot", "projectsCalc", "projectsPotfolio"];
const projectIDsNames = {
    "projectsDayCraft": "DayCraft-App",
    "projectsPasManager": "PassWord-Manager",
    "projectsBot": "Voice-Control-Bot",
    "projectsCalc": "Calculator-App",
    "projectsPotfolio": "My-Portfolio-Website"
}
function openProject(selectedProjectID) {
    const projectName = projectIDsNames[selectedProjectID];
    let charIndex = 0;
    const baseText = "C:/user/yiralcraft$>";
    const animateText = `open /${projectName}`;
    projectsContentOutput.nextElementSibling.textContent = baseText;

    // 1. Create a timed animation loop
    const animation = setInterval(() => {
        if (charIndex < animateText.length) {
            projectsContentOutput.nextElementSibling.textContent += animateText[charIndex] ;
            charIndex++;
        } else {
            // 2. STOP the interval immediately so it doesn't loop forever
            clearInterval(animation);

            // 3. Direct dictionary lookup (No loops needed!)
            

            if (projectName) {
                projectsContentOutput.nextElementSibling.textContent = `C:/user/yiralcraft$>open /${projectName}`;
            }

            // 4. Toggle visibility of elements safely
            projects.forEach(projectID => {
                const projectElement = document.getElementById(projectID);
                if (projectElement) {
                    projectElement.style.display = (projectID === selectedProjectID) ? "block" : "none";
                }
            });
        }
    }, 150);
}



