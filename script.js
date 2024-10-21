// script.js
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

const sections = [
    { id: 'call', title: 'BROS TO CALL', icon: 'cpu' },
    { id: 'defs', title: 'DEFINITIONS', icon: 'network' },
    { id: 'info', title: 'INFO', icon: 'file-text' },
    { id: 'otherchapters', title: 'OTHER CHAPTERS', icon: 'database' },
    { id: 'bios', title: 'AGENT PROFILES', icon: 'users' },
];

const bios = [
    { number: 0, name: "Agent (Kam) Kamron Hampton", origin: "Baltimore", major: "Engineering Physics", siblings: "Bri, Dre, Shawn, Vonsha (2 sis, 2 bros)", mother: "Ms. Tiffany" },
    { number: .5, name: "Agent (Kofi) Jaden Koranteng", origin: "Laurel", major: "Computer Science", siblings: "Kori (1 bro) ", mother: "Ms. Debra" },
    { number: 1.5, name: "Agent (Lez) Leslie Ofosu", origin: "Baltimore", major: "Arch", siblings: "Lawrence, Lauren (1 bro, 1 sis)", mother: "Ms. Linda" },
    { number: 2.5, name: "Agent (Moe) Mohammed Cole", origin: "Bowie", major: "INSS", siblings: "Ridwan, Abass (Passed)", mother: "???" },
    { number: 3.5, name: "Agent (Chris) Christian Sampson", origin: "PG", major: "Nursing", siblings: "Camryn, Ariana (2 sis)", mother: "Ms. Marsha" },
    { number: 4.5, name: "Agent (Ant) Anthony Noakes", origin: "Philly", major: "Bio", siblings: "Nysear, Aaliyah", mother: "Ms. Farrar" },
    { number: 5.5, name: "Agent (Davo) David Osadiaye", origin: "Bowie", major: "INSS", siblings: "Kenneth, Lucky, Nate, Nancy (1 sis, 3 bros)", mother: "Ms. Julie" },
    { number: 6.5, name: "Agent (Sey) Seydina Salla ", origin: "Houston", major: "Accounting", siblings: "Fatou, Naya, Issa, Aminata, Adja, Ibrahima, El Hadji", mother: "Ms. Kone" },
    { number: 7.5, name: "Agent (Reezy) Terell Reed", origin: "DC", major: "Computer Science", siblings: "Randi, Que (2 sis)", mother: "Ms. Ebony" },
    { number: 8.5, name: "Agent (Marc) Marcus Mclean", origin: "Atlanta", major: "Mech. Eng", siblings: "???", mother: "???" },
    { number: 9.5, name: "Agent (Ship) Demeir Shipley", origin: "Tuskegee, AL", major: "BA", siblings: "???", mother: "Ms. Gail" },
   
  

    
];

function authenticate() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');

    if (password === 'ayebull11') {
        loginContainer.classList.add('hidden');
        content.classList.remove('hidden');
        renderSections();
    } else {
        errorMessage.textContent = 'ACCESS DENIED: UNAUTHORIZED ATTEMPT LOGGED';
    }
}

function renderSections() {
    const sectionList = document.getElementById('section-list');
    sections.forEach(section => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button onclick="toggleSection('${section.id}')">
                <span><i data-lucide="${section.icon}"></i> ${section.title}</span>
                <i data-lucide="chevron-down" class="toggle-icon"></i>
            </button>
        `;
        sectionList.appendChild(li);
    });
    lucide.createIcons();
}

function toggleSection(sectionId) {
    const sectionContent = document.getElementById('section-content');
    const section = sections.find(s => s.id === sectionId);
    
    if (sectionContent.dataset.activeSection === sectionId) {
        sectionContent.innerHTML = '';
        sectionContent.dataset.activeSection = '';
    } else {
        if (sectionId === 'bios') {
            renderBios(sectionContent);
        } else {
            sectionContent.innerHTML = `
                <div class="section-content">
                    <h2><i data-lucide="${section.icon}"></i> ${section.title}</h2>
                    <p>Classified AI information for ${section.title}</p>
                </div>
            `;
        }
        sectionContent.dataset.activeSection = sectionId;
        lucide.createIcons();
    }

    // Toggle chevron icon
    const buttons = document.querySelectorAll('#section-list button');
    buttons.forEach(button => {
        const icon = button.querySelector('.toggle-icon');
        if (button.textContent.includes(section.title)) {
            icon.setAttribute('data-lucide', sectionContent.dataset.activeSection === sectionId ? 'chevron-up' : 'chevron-down');
        } else {
            icon.setAttribute('data-lucide', 'chevron-down');
        }
    });
    lucide.createIcons();
}

function renderBios(container) {
    let bioHTML = `
        <div class="section-content">
            <h2><i data-lucide="users"></i> AGENT PROFILES</h2>
            <div class="bio-grid">
    `;
    
    bios.forEach(bio => {
        bioHTML += `
            <div class="bio-card">
                <h3>${bio.name}</h3>
                <p><strong>Number:</strong> ${bio.number}</p>
                <p><strong>Origin:</strong> ${bio.origin}</p>
                <p><strong>Major:</strong> ${bio.major}</p>
                <p><strong>Siblings:</strong> ${bio.siblings}</p>
                <p><strong>Mother:</strong> ${bio.mother}</p>

            </div>
        `;
    });

    bioHTML += `
            </div>
        </div>
    `;

    container.innerHTML = bioHTML;
}