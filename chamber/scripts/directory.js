// Select view toggle buttons and container
const gridButton = document.querySelector("#grid-view-btn");
const listButton = document.querySelector("#list-view-btn");
const displayArea = document.querySelector("#members-container");

// Toggle to Grid View
gridButton.addEventListener("click", () => {
    displayArea.classList.add("grid");
    displayArea.classList.remove("list");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

// Toggle to List View
listButton.addEventListener("click", () => {
    displayArea.classList.add("list");
    displayArea.classList.remove("grid");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

// Path to the JSON data file
const url = "data/members.json";

// Fetch and display member data
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

// Dynamically create and add member cards to the container
function displayMembers(members) {
    displayArea.innerHTML = ""; // Clear any previous content

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

        // Append all child elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        // Append card to the display area
        displayArea.appendChild(card);
    });
}

// Initialize on page load
getMemberData();
