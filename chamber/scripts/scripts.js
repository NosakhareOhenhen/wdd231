const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const copyrightYear = document.getElementById('copyright-year');
const lastModified = document.getElementById('last-modified');
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

gridViewBtn.addEventListener('click', () => {
    membersContainer.classList.remove('list-view');
    membersContainer.classList.add('grid-view');
});

listViewBtn.addEventListener('click', () => {
    membersContainer.classList.remove('grid-view');
    membersContainer.classList.add('list-view');
});

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        let membershipLevel;
        switch(member.membership) {
            case 1: membershipLevel = 'Member'; break;
            case 2: membershipLevel = 'Silver'; break;
            case 3: membershipLevel = 'Gold'; break;
            default: membershipLevel = 'Member';
        }
        
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="membership">${membershipLevel} Member</p>
        `;
        
        membersContainer.appendChild(card);
    });
}

getMembers();