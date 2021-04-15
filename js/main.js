// Constants

const MEMBERS_FILE = "members.json";

// Listeners

window.addEventListener("DOMContentLoaded", createMemberCards);

// Member cards

async function createMemberCards() {
    let membersFile = await fetch(MEMBERS_FILE);
    let members = await membersFile.json();
    for (let member of members) {
        addMemberCard(member);
    }
}

function addMemberCard(member) {
    // Container for cards
    let cardsContainer = document.querySelector("#members");

    // Template
    let template = document.querySelector("#member");
    let clone = template.content.cloneNode(true);

    // Photo
    let photo = clone.querySelector(".member-photo");
    photo.src = member.photo;
    photo.alt = `${member.name}'s photo`;

    // Content
    let content = clone.querySelector(".content");

    // Info
    let info = content.querySelector(".info");

    // Name
    let name = info.querySelector(".member-name");
    name.textContent = member.name;

    // Position
    let position = info.querySelector(".member-position");
    position.textContent = member.position;

    // Description
    let description = content.querySelector(".member-description");
    description.textContent = member.description;

    // Add to container
    cardsContainer.appendChild(clone);
}