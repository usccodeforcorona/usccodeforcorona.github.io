// # Settings

const MEMBERS_FILE = "members.json";

// # Listeners

window.addEventListener("DOMContentLoaded", createMemberCards);

// # Functions 

// ## Member cards

async function createMemberCards() {
    let membersFile = await fetch(MEMBERS_FILE);
    let members = await membersFile.json();
    for (let member of members) {
        addMemberCard(member);
    }
}

function addMemberCard(member) {
    /*
    <div class="flex-container card">
        <img src="member-images/member-photo.png" alt="Firstname Lastname's photo">
        <div class="content">
            <div class="info">
                <h1>Firstname Lastname</h1>
                <h2>Role1</h2>
            </div>
            <p>Description</p>
        </div>
    </div>
    */

    // # Create container

    let container = document.createElement("div");
    container.classList = "flex-container card";

    // ## Create member image

    let memberImg = document.createElement("img"); 
    memberImg.src = member.photo;
    memberImg.alt = `${member.name}'s photo`;

    // ## Create content

    let content = document.createElement("div");
    content.className = "content";

    // ### Info

    let info = document.createElement("div");
    info.className = "info";

    let memberName = document.createElement("h1");
    memberName.textContent = member.name;

    // ### Description

    let memberDescription = document.createElement("p");
    memberDescription.textContent = member.description;

    // # Connect elements

    container.appendChild(memberImg);
    info.appendChild(memberName);


    let memberPosition = document.createElement("h2");
    memberPosition.textContent = member.position;
    info.appendChild(memberPosition);

    content.appendChild(info);
    content.appendChild(memberDescription);
    container.appendChild(content);

    let cardsContainer = document.getElementById("members");
    cardsContainer.appendChild(container);

}