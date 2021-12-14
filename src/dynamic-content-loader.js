const RESOURCES_JSON_PATH = "resources/resources.json";

async function _INJECT_SITE_CONTENT() {
    const webDevContainer = document.querySelector("#web-dev-exp-container");
    const softwareDevContainer = document.querySelector("#software-dev-exp-container");
    const skillsContainer = document.querySelector("#skills-container");
    const empCardContainer = document.querySelector("#employment-card-container");

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
            <p>${skill.description}</p>\n<span style=\"background: linear-gradient(to right, var(--skill-bar-color) ${skill.proficiency}%,
                ${skill.proficiency}%, transparent ${100 - skill.proficiency}%);\"
            class=\"progress-span\"></span>`;
        skillsContainer.appendChild(expContainer);
    }

    for(const workExp of skillsJSON.workExperience) {
        const empCard = document.createElement("div");
        empCard.classList.add("employment-card", "active-card");
        empCard.innerHTML = `<div class=\"employer-info-container\">
            <h1>${workExp.title}</h1>
            <h2>${workExp.employer}</h2>
            <p>${workExp.date.startDate} - ${workExp.isCurrentJob ?
                'present' : workExp.date.endDate}</p>
            </div>
            <div class=\"overlay-container\">
                <div class=\"overlay-container-inner\">
                    <div class=\"overlay-text-container\">
                        <ul>
                            <li><p>${workExp.descriptions[0]}</p></li>
                            <li><p>${workExp.descriptions[1]}</p></li>
                            <li><p>${workExp.descriptions[2]}</p></li>
                        </ul>
                    </div>
                    <a href=\"${workExp.homePageUrl}\" role=\"button\" class=\"link-btn\" id=\"website-btn\">
                        <div class=\"btn-content\">
                            <p>Visit Homepage</p>
                        </div>
                    </a>
                    <a class=\"link-btn ${workExp.linkedInUrl != undefined ? "" : "hide-work-exp-link"}\" href=\"${workExp.linkedInUrl}\" role=\"button\" class=\"link-btn\" id=\"linkedin-btn\">
                        <div class=\"btn-content\">
                            <p>LinkedIn Profile</p>
                        </div>
                    </a>
                    <a class=\"link-btn ${workExp.employerUrl != undefined ? "" : "hide-work-exp-link"}\" href=\"${workExp.supervisorUrl}\" role=\"button\" class=\"link-btn\" id=\"employer-btn\">
                        <div class=\"btn-content\">
                            <p>Employer Profile</p>
                        </div>
                    </a>
                </div>
            </div>`;
        empCardContainer.appendChild(empCard);
    }

    populateButtonIcons();

    // Populate LinkedIn, homepage, GitHub, and person headshot icons
    function populateButtonIcons() {
        const linkedInBtns = document.querySelectorAll(".link-btn#linkedin-btn .btn-content");
        const homePageBtns = document.querySelectorAll(".link-btn#website-btn .btn-content");
        const gitHubBtns = document.querySelectorAll(".link-btn#github-btn .btn-content");
        const employerBtns = document.querySelectorAll(".link-btn#employer-btn .btn-content");
        
        for(const linkedInBtn of linkedInBtns) {
            const linkedInBtnP = linkedInBtn.querySelector("p");
            const linkedInSvg = document.createElement("svg");
            linkedInSvg.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">
                <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"></path>
            </svg>`;
            linkedInBtn.insertBefore(linkedInSvg, linkedInBtnP);
        }

        for(const homePageBtn of homePageBtns) {
            const homePageBtnP = homePageBtn.querySelector("p");
            const homePageSvg = document.createElement("svg");
            homePageSvg.innerHTML = `<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">
                <path d=\"M512 128c-212.077 0-384 171.923-384 384s171.923 384 384 384c25.953 0 51.303-2.582 75.812-7.49-9.879-4.725-10.957-40.174-1.188-60.385 10.875-22.5 45-79.5 11.25-98.625s-24.375-27.75-45-49.875-12.19-25.451-13.5-31.125c-4.5-19.5 19.875-48.75 21-51.75s1.125-14.25 0.75-17.625S545.75 566.75 542 566.375s-5.625 6-10.875 6.375-28.125-13.875-33-17.625-7.125-12.75-13.875-19.5-7.5-1.5-18-5.625-44.25-16.5-70.125-27-28.125-25.219-28.5-35.625-15.75-25.5-22.961-36.375c-7.209-10.875-8.539-25.875-11.164-22.5s13.5 42.75 10.875 43.875-8.25-10.875-15.75-20.625 7.875-4.5-16.125-51.75 7.5-71.344 9-96 20.25 9 10.5-6.75 0.75-48.75-6.75-60.75S275 230 275 230c1.125-11.625 37.5-31.5 63.75-49.875s42.281-4.125 63.375 2.625 22.5 4.5 15.375-2.25 3-10.125 19.5-7.5 21 22.5 46.125 20.625 2.625 4.875 6 11.25-3.75 5.625-20.25 16.875S469.25 233 498.5 254.375s20.25-14.25 17.25-30S537.125 221 537.125 221c18 12 14.674 0.66 27.799 4.785S613.625 260 613.625 260c-44.625 24.375-16.5 27-9 32.625s-15.375 16.5-15.375 16.5c-9.375-9.375-10.875 0.375-16.875 3.75s-0.375 12-0.375 12c-31.031 4.875-24 37.5-23.625 45.375s-19.875 19.875-25.125 31.125S536.75 437 527 438.5s-19.5-36.75-72-22.5c-15.828 4.297-51 22.5-32.25 59.625s49.875-10.5 60.375-5.25-3 28.875-0.75 29.25 29.625 1.031 31.125 33 41.625 29.25 50.25 30 37.5-23.625 41.625-24.75S626 522.875 662 543.5s54.375 17.625 66.75 26.25 3.75 25.875 15.375 31.5 58.125-1.875 69.75 17.25-48 115.125-66.75 125.625S719.75 778.625 701 794s-45 34.406-69.75 49.125c-21.908 13.027-25.85 36.365-35.609 43.732C767.496 848.68 896 695.35 896 512 896 299.923 724.077 128 512 128zM602 488.375c-5.25 1.5-16.125 11.25-42.75-4.5s-45-12.75-47.25-15.375c0 0-2.25-6.375 9.375-7.5 23.871-2.311 54 22.125 60.75 22.5s10.125-6.75 22.125-2.883C616.25 484.48 607.25 486.875 602 488.375zM476.375 166.25c-2.615-1.902 2.166-4.092 5.016-7.875 1.645-2.186 0.425-5.815 2.484-7.875 5.625-5.625 33.375-13.5 27.949 1.875C506.4 167.75 480.5 169.25 476.375 166.25zM543.5 215c-9.375-0.375-31.443-2.707-27.375-6.75 15.844-15.75-6-20.25-19.5-21.375S477.5 178.25 484.25 177.5s33.75 0.375 38.25 4.125 28.875 13.5 30.375 20.625S552.875 215.375 543.5 215zM624.875 212.375c-7.5 6-45.24-21.529-52.5-27.75-31.5-27-48.375-18-54.99-22.5-6.617-4.5-4.26-10.5 5.865-19.5s38.625 3 55.125 4.875 35.625 14.625 36 29.781C614.75 192.43600000000004 632.375 206.375 624.875 212.375z\"></path>
            </svg>`;
            homePageBtn.insertBefore(homePageSvg, homePageBtnP);
        }

        for(const gitHubBtn of gitHubBtns) {
            const gitHubBtnP = gitHubBtn.querySelector("p");
            const gitHubSvg = document.createElement("svg");
            gitHubSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>`;
            gitHubBtn.insertBefore(gitHubSvg, gitHubBtnP);
        }

        for(const employerBtn of employerBtns) {
            const employerBtnP = employerBtn.querySelector("p");
            const employerSvg = document.createElement("svg");
            employerSvg.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><path d="M497.3,703.9"/><path d="M201.8,474.2c-2.7,0-4.8,0.4-6.4,1.1c2.2-0.7,4.6-1.1,7.1-1.1H201.8L201.8,474.2z M940.7,768.6c0.1-1.4,0.2-2.7,0.5-4C940.9,765.2,940.8,766.4,940.7,768.6L940.7,768.6z M990,224.8c0-0.1,0-0.1,0-0.2v-0.6C990,224.2,990,224.5,990,224.8L990,224.8z M940.7,224.7c0,0.1,0,0.1,0,0.2c0-0.3,0-0.6,0-0.9V224.7L940.7,224.7z"/><path d="M970.4,964.3c-6.9-51.7-22.1-101.5-45.1-148.3c-4.5-9.1-9.3-18.1-14.3-26.9c0,0,0-0.1-0.1-0.1c-21.9-37.1-48.7-71.5-80-102.2l0,0c-6.8-6.7-13.8-13.2-21-19.5c-51.4-45.1-110.8-78.5-174.2-98.8c11.5-6.4,22.6-13.5,33.2-21.3c12.1-8.9,23.7-18.9,34.5-29.7c57.1-57.1,88.5-133,88.5-213.8c0-80.8-31.5-156.7-88.5-213.8C647.4,33.9,573.2,2.5,494.1,1.4c-1.3,0-2.5,0-3.8,0c-1.3,0-2.5,0-3.8,0c-79.1,1.1-153.3,32.5-209.4,88.5c-57.1,57.1-88.5,133-88.5,213.8c0,80.8,31.5,156.7,88.5,213.8c10.9,10.9,22.4,20.8,34.5,29.7c10.6,7.9,21.7,15,33.2,21.3c-63.3,20.3-122.7,53.8-174.2,98.8c-7.2,6.3-14.2,12.8-21,19.5c-31.3,30.7-58.2,65.2-80.1,102.3c-5,8.8-9.8,17.8-14.3,26.9c-23,46.7-38.2,96.6-45.1,148.3c-2.2,16.6,9.4,31.8,25.9,34c1.4,0.2,2.7,0.3,4.1,0.3c1.2,0,2.4-0.1,3.6-0.2c12-2.6,21.6-12.4,23.5-25.2c13.9-95.6,59.5-182.5,125-248.7C270.2,646,376,596.6,490.3,596.4h0.6c114.1,0.4,219.7,49.7,297.3,128.1c65.5,66.2,111.1,153.1,125,248.7c1.9,12.8,11.5,22.5,23.4,25.2c0,0,0,0,0.1,0c1.2,0.2,2.4,0.2,3.6,0.2c1.3,0,2.7-0.1,4.1-0.3C961,996.1,972.6,980.9,970.4,964.3L970.4,964.3z M489.7,545.6c-0.6,0-1.2,0-1.8,0c-112.8-0.8-213.4-79.2-240.9-184.4c-0.3-1.1-0.6-2.3-0.9-3.5c-4.3-17.4-6.6-35.4-6.6-54c0-18.6,2.3-36.8,6.6-54.5c0.3-1.2,0.6-2.4,0.9-3.5C274.6,137.9,376.1,52.2,489.7,52.2h1.3c113.6,0,215.1,85.7,242.8,193.5c0.3,1.2,0.6,2.3,0.9,3.5c4.3,17.7,6.6,36,6.6,54.5c0,18.6-2.3,36.6-6.6,54c-0.3,1.2-0.6,2.3-0.9,3.5c-27.5,105.2-128.1,183.6-240.9,184.4C491.8,545.6,490.7,545.6,489.7,545.6L489.7,545.6z"/></g>
            </svg>`;
            employerBtn.insertBefore(employerSvg, employerBtnP);
        }
    }
}
_INJECT_SITE_CONTENT();

/* WEBSITE SVG
<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">
<path d=\"M512 128c-212.077 0-384 171.923-384 384s171.923 384 384 384c25.953 0 51.303-2.582 75.812-7.49-9.879-4.725-10.957-40.174-1.188-60.385 10.875-22.5 45-79.5 11.25-98.625s-24.375-27.75-45-49.875-12.19-25.451-13.5-31.125c-4.5-19.5 19.875-48.75 21-51.75s1.125-14.25 0.75-17.625S545.75 566.75 542 566.375s-5.625 6-10.875 6.375-28.125-13.875-33-17.625-7.125-12.75-13.875-19.5-7.5-1.5-18-5.625-44.25-16.5-70.125-27-28.125-25.219-28.5-35.625-15.75-25.5-22.961-36.375c-7.209-10.875-8.539-25.875-11.164-22.5s13.5 42.75 10.875 43.875-8.25-10.875-15.75-20.625 7.875-4.5-16.125-51.75 7.5-71.344 9-96 20.25 9 10.5-6.75 0.75-48.75-6.75-60.75S275 230 275 230c1.125-11.625 37.5-31.5 63.75-49.875s42.281-4.125 63.375 2.625 22.5 4.5 15.375-2.25 3-10.125 19.5-7.5 21 22.5 46.125 20.625 2.625 4.875 6 11.25-3.75 5.625-20.25 16.875S469.25 233 498.5 254.375s20.25-14.25 17.25-30S537.125 221 537.125 221c18 12 14.674 0.66 27.799 4.785S613.625 260 613.625 260c-44.625 24.375-16.5 27-9 32.625s-15.375 16.5-15.375 16.5c-9.375-9.375-10.875 0.375-16.875 3.75s-0.375 12-0.375 12c-31.031 4.875-24 37.5-23.625 45.375s-19.875 19.875-25.125 31.125S536.75 437 527 438.5s-19.5-36.75-72-22.5c-15.828 4.297-51 22.5-32.25 59.625s49.875-10.5 60.375-5.25-3 28.875-0.75 29.25 29.625 1.031 31.125 33 41.625 29.25 50.25 30 37.5-23.625 41.625-24.75S626 522.875 662 543.5s54.375 17.625 66.75 26.25 3.75 25.875 15.375 31.5 58.125-1.875 69.75 17.25-48 115.125-66.75 125.625S719.75 778.625 701 794s-45 34.406-69.75 49.125c-21.908 13.027-25.85 36.365-35.609 43.732C767.496 848.68 896 695.35 896 512 896 299.923 724.077 128 512 128zM602 488.375c-5.25 1.5-16.125 11.25-42.75-4.5s-45-12.75-47.25-15.375c0 0-2.25-6.375 9.375-7.5 23.871-2.311 54 22.125 60.75 22.5s10.125-6.75 22.125-2.883C616.25 484.48 607.25 486.875 602 488.375zM476.375 166.25c-2.615-1.902 2.166-4.092 5.016-7.875 1.645-2.186 0.425-5.815 2.484-7.875 5.625-5.625 33.375-13.5 27.949 1.875C506.4 167.75 480.5 169.25 476.375 166.25zM543.5 215c-9.375-0.375-31.443-2.707-27.375-6.75 15.844-15.75-6-20.25-19.5-21.375S477.5 178.25 484.25 177.5s33.75 0.375 38.25 4.125 28.875 13.5 30.375 20.625S552.875 215.375 543.5 215zM624.875 212.375c-7.5 6-45.24-21.529-52.5-27.75-31.5-27-48.375-18-54.99-22.5-6.617-4.5-4.26-10.5 5.865-19.5s38.625 3 55.125 4.875 35.625 14.625 36 29.781C614.75 192.43600000000004 632.375 206.375 624.875 212.375z\"></path>
</svg>
*/

/* LINKEDIN SVG
<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">
    <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"></path>
</svg>
*/