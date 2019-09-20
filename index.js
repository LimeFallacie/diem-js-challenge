//name
const name = document.querySelector("#name");
const nameOut = document.querySelector("#nameOutput");

name.addEventListener("focus", nameFocus);
name.addEventListener("blur", nameBlur);

function nameFocus() {
        if (name.value === ""){
                nameOutput.innerHTML = "Hello there! What's your name?";
        }
}

function nameBlur() {
        if(name.value === ""){
                nameOutput.innerHTML = "oi give name";
        } else {
                nameOutput.innerHTML = `Hi, ${name.value}!`;
        }
}

//age
const date = document.querySelector("#date");
const ageOut = document.querySelector("#ageOutput");

date.addEventListener("focus", guess);
date.addEventListener("blur", giveAge);

function guess() {
        if (date.value === ""){
                ageOut.innerHTML = "what ur age";
        }
}

function giveAge() {
        if (date.value === ""){
                ageOut.innerHTML = "oi give birthday"
        } else {
                const today = new Date();
                const birthday = new Date(date.value);
                let age = today.getFullYear() - birthday.getFullYear();
                age = (birthday.getMonth() > today.getMonth()) ? (age-1) : age; 
                ageOutput.innerHTML = `You are ${age} years old`;
        }
}

//theme
const white = document.querySelector("#light");
const black = document.querySelector("#dark");
const color = document.querySelector("#themeOutput").parentNode.parentNode;
const theme = document.querySelector("#themeOutput")

white.addEventListener("click", toWhite);
black.addEventListener("click", toBlack);

function toWhite(){
        color.classList.remove("bg-dark", "text-white");
        color.classList.add("bg-light", "text-black");
        theme.innerHTML = "ew bad choice";
}

function toBlack(){
        color.classList.remove("bg-light", "text-black");
        color.classList.add("bg-dark", "text-white");
        theme.innerHTML = "that's more like it";
}

//skill
const skillsInput = document.querySelector("#html").parentNode;
const skillsOutput = document.querySelector("#skillsOutput");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javascript = document.querySelector("#javascript");

function toggleSkill(event) {
        const element = event.currentTarget;
        if (element.parentNode === skillsInput) {
                skillsOutput.appendChild(element);
        } else if (element.parentNode === skillsOutput) {
                skillsInput.appendChild(element);
        }
}
function makeRed(event) {
        const element = event.currentTarget;
        element.classList.remove("btn-success");
        element.classList.add("btn-danger");
        console.log(event);
}
function makeGreen(event) {
        const element = event.currentTarget;
        element.classList.remove("btn-danger");
        element.classList.add("btn-success");
        console.log(event)
}
for (skill of [html, css, javascript]) {
        skill.addEventListener("click", toggleSkill);
        skill.addEventListener("mouseover", makeRed);
        skill.addEventListener("mouseout", makeGreen);
}