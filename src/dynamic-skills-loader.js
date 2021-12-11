const RESOURCES_JSON_PATH = "resources/resources.json";

async function _INJECT_SKILLS_CONTENT() {
    const webDevContainer = document.querySelector("#web-dev-exp-container");
    const softwareDevContainer = document.querySelector("#software-dev-exp-container");
    const skillsContainer = document.querySelector("#skills-container");

    const skillsData = await fetch(RESOURCES_JSON_PATH);
    const skillsJSON = await skillsData.json();

    for(const webSkill of skillsJSON.experience.webDevStack) {
        const expContainer = document.createElement("div");
        expContainer.classList.add("exp-container");
        expContainer.innerHTML = `
            <p>${webSkill.name}</p>
            <div class=\"exp-gauge-container\">
                <div class=\"exp-gauge-content\">
                    <svg class="${webSkill.proficiency >= 1 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${webSkill.proficiency >= 2 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${webSkill.proficiency >= 3 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${webSkill.proficiency >= 4 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${webSkill.proficiency === 5 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                </div>
            </div>
        `;
        webDevContainer.appendChild(expContainer);
    }

    for(const softwareSkill of skillsJSON.experience.softwareDevelopment) {
        const expContainer = document.createElement("div");
        expContainer.classList.add("exp-container");
        expContainer.innerHTML = `
            <p>${softwareSkill.name}</p>
            <div class=\"exp-gauge-container\">
                <div class=\"exp-gauge-content\">
                    <svg class="${softwareSkill.proficiency >= 1 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${softwareSkill.proficiency >= 2 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${softwareSkill.proficiency >= 3 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${softwareSkill.proficiency >= 4 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                    <svg class="${softwareSkill.proficiency === 5 ? 'skill-met': ''}" viewBox=\"0 0 25 25\">
                        <circle cx=\"12.5\" cy=\"12.5\" r=\"10\"></circle>
                    </svg>
                </div>
            </div>
        `;
        softwareDevContainer.appendChild(expContainer);
    }

    for(const skill of skillsJSON.skills) {
        const expContainer = document.createElement("div");
        expContainer.classList.add("skills-gauge-container");
        expContainer.innerHTML = `
            <p>${skill.description}</p>\n<span style=\"background: linear-gradient(to right, #000 ${skill.proficiency}%,
                ${skill.proficiency}%, transparent ${100 - skill.proficiency}%);\"
            class=\"progress-span\"></span>`;
        skillsContainer.appendChild(expContainer);
    }
}
_INJECT_SKILLS_CONTENT();