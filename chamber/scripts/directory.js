const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");
const displayArea = document.querySelector("#directoryDisplay");

// Toggle Views
gridButton.addEventListener("click", () => {
    displayArea.classList.add("grid");
    displayArea.classList.remove("list");
});

listButton.addEventListener("click", () => {
    displayArea.classList.add("list");
    displayArea.classList.remove("grid");
});

// Fetch Members Data
const url = "data/members.json";

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Failed to fetch members:", error);
    }
}

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;
        img.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const level = document.createElement("p");
        level.textContent = `Membership Level: ${member.membership}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        displayArea.appendChild(card);
    });
}

getMemberData();
