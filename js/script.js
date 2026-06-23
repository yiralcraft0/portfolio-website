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

openArrow.onclick = function() {
    openArrow.style.position = "relative";
    openArrow.style.top = "-10px";

    if (phoneul.style.display === "none" || phoneul.style.display === "") {
        // If hidden, show the menu and hide the logo
        weblogo.style.display = "none";
        phoneul.style.display = "flex";
    } else {
        // If already showing, hide the menu and show the logo
        weblogo.style.display = "block";
        phoneul.style.display = "none";
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
                }
            }
        }, 500); // 500ms delay per dot (1.5 seconds total)
    }
});

const projects = ["projectsDayCraft", "projectsPasManager", "projectsBot", "projectsCalc", "projectsPotfolio"];

function openProject(selectedProjectID) {
    projects.forEach(projectID => {
        const projectElement = document.getElementById(projectID);
        
        if (projectElement) {
            if (projectID === selectedProjectID) {
                projectElement.style.display = "block"; // Show the selected project
            } else {
                projectElement.style.display = "none";  // Hide the others
            }
        }
    });
}

