// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Section definitions
const sections = [
    { id: 'call', title: 'BROS TO CALL', icon: 'phone' },
    { id: 'defs', title: 'DEFINITIONS', icon: 'book' },
    { id: 'info', title: 'INFO', icon: 'info' },
    { id: 'otherchapters', title: 'OTHER CHAPTERS', icon: 'users' },
    { id: 'bios', title: 'AGENT PROFILES', icon: 'user' },
];

// Content for each section
const sectionContent = {
    call: `
        <h3>Bros to Call</h3>
        <ul>
            ${[
                "Adams: 4", "Bond: 7", "Burke: 0", "Christopher Hylton: 17",
                "Donte Peters: 4, 14", "Frantz Sabbat: 11", "Frazier: 3", "Ghost",
                "Harold Lamour: 0", "Hunte: 0", "Jaron Williams: 6 (call after 6)",
                "Justin Vasquez: 3", "Menace: 1", "Orion Robinson: 0", "Pitts: 15",
                "Shawn Goins Jr: 9", "Wes: 8", "Wilks: 1", "Woody: 5", "Hash 5",
                "Keith 6", "Clinton 4", "Fuentes 8", "Ragland 9",
                "Shawn Elliot 7 (AFTER 5)", "Zakee Roberts 3 (AFTER 4)", "Jiair 4",
                "Harvey 10", "Kadeem Myrie 13", "Cherif 8", "Cherrod Roberts 18",
                "Brown 3", "Enitan 12", "Marquis Smith 5 (After 5; No weekends)",
                "Shane Mitchell 12", "Simp (TIC TOC)", "Fall 13", "Fall 18",
                "Akeem Croft 4", "Trumane Lawrence", "Javan Stewart",
                "Michael Bowry (After 5)", "Carl Michel", "Horton",
                "Rasheem Williams", "Anthony Prescott", "Gumbs", "Diara Woodard",
                "Darrel Walker", "Big Brother Motherland", "Tducks",
                "Anthony Showell", "Ronald Goodman"
            ].map(item => `<li>${item}</li>`).join('')}
        </ul>
    `,
    defs: `
        <h3>Key Definitions</h3>
        <dl>
            <dt>Bam Bam Proclamation</dt>
            <dd>Must we endure these physical pains and mental gains to obtain social fame. No, If we get hurt who are we to blame, ourselves! I know the difference between right and wrong but to build our self confidence I will go on, I will weather the storm. I must be strong, I must be strong.</dd>
            
            <dt>HAZE HAZE???</dt>
            <dd>Haze, haze, Kappas don't haze. Kappa Alpha Psi is a non hazing fraternity. All Kappas do is discipline and teach. We can't believe you asked us that. We oughta haze you. Who? You! Who? You! Who? You!!! However, due to the current state of pledging. Our Grand Polemarch Jimmy McMickle has given us the opportunity to exercise our right to snitch. But, since we're all here. Let's get this party started!</dd>
            
            <dt>We dont know</dt>
            <dd>Fear we deviate, Fear we articulate, For we do not know at this present date, brother name</dd>
            
            <dt>Fraternalism</dt>
            <dd>The proper attitude to take towards an errant brother is one of tolerance and sympathetic understanding. Condemnation and desertion are the last words of a true fraternity's man vocabulary. Traditionally, differences are settled within the bond. Never carried to nor discussed with non-members of the fraternity.</dd>
            
            <dt>Chilling</dt>
            <dd>Chilling, chilling, chilling. Words that describe we. Chilling, chilling, chilling. Not the way to be. Some say we bake, some say we skate but. fall 24 STRIVESSS to be great. With the guidance of Ser, adp, polemarch of ai and woody, we'll progress and excel and earn our way once back from hell. Until the day we cross those burning sands, on our way to Kappa land.</dd>
        </dl>
    `,
    info: `
        <h3>Invicutus</h3>
        <div class="poem">
            <p>Out of the night that covers me,</p>
            <p>Black as the pit from pole to pole,</p>
            <p>I thank whatever gods may be</p>
            <p>For my unconquerable soul.</p>
            <br>
            <p>In the fell clutch of circumstance</p>
            <p>I have not winced nor cried aloud.</p>
            <p>Under the bludgeonings of chance</p>
            <p>My head is bloody, but unbowed.</p>
            <br>
            <p>Beyond this place of wrath and tears</p>
            <p>Looms but the Horror of the shade,</p>
            <p>And yet the menace of the years</p>
            <p>Finds and shall find me unafraid.</p>
            <br>
            <p>It matters not how strait the gate,</p>
            <p>How charged with punishments the scroll,</p>
            <p>I am the master of my fate,</p>
            <p>I am the captain of my soul.</p>
        </div>
    `,
    otherchapters: `
        <h3>Chapter Information</h3>
        <div class="contact-info">
            <h4>Xi Kappa Chapter</h4>
            <p><strong>Name:</strong> Bruno Kalogi</p>
            <p><strong>Phone:</strong> (860) 629-9640</p>
            <p><strong>Big Brother:</strong> Primetime</p>
            <p><strong>Initiated:</strong> Spring 2019</p>
            <p><strong>Line Number:</strong> 8 (Tail)</p>
        </div>
        <hr class="contact-separator">
        <div class="contact-info">
            <h4>Pi Psi</h4>
            <p><strong>Name:</strong> Sevon</p>
            <p><strong>Phone:</strong> (347) 595-3688</p>
            <p><strong>Big Brother:</strong> Tre Rokk</p>
            <p><strong>Initiated:</strong> Spr 14</p>
            <p><strong>Line Number:</strong> 3</p>
        </div>
        <hr class="contact-separator">
        <div class="contact-info">
            <h4>QA</h4>
            <p><strong>Name:</strong> Japhan Lupuku</p>
            <p><strong>Phone:</strong> (347) 645-0522</p>
            <p><strong>Big Brother:</strong> Pooks</p>
            <p><strong>Initiated:</strong> Spr 24</p>
            <p><strong>Line Number:</strong> 4</p>
        </div>
        <hr class="contact-separator">
        <div class="contact-info">
            <h4>Xi Kappa</h4>
            <p><strong>Name:</strong> Mikey</p>
            <p><strong>Phone:</strong> (947) 686-5266</p>
            <p><strong>Big Brother:</strong> N/A</p>
            <p><strong>Initiated:</strong> Spr 24</p>
            <p><strong>Line Number:</strong> 3</p>
        </div>
        <hr class="contact-separator">
        <div class="contact-info">
            <h4>Xi Kappa</h4>
            <p><strong>Name:</strong> Kian</p>
            <p><strong>Phone:</strong> (202) 590-3586</p>
            <p><strong>Big Brother:</strong> Too Smooth</p>
            <p><strong>Initiated:</strong> Spr 22</p>
            <p><strong>Line Number:</strong> 3</p>
        </div>
        <hr class="contact-separator">
        <div class="contact-info">
            <h4>Rho Phi</h4>
            <p><strong>Name:</strong> Kelvin</p>
            <p><strong>Phone:</strong> (443) 905-2383</p>
            <p><strong>Big Brother:</strong> Kwiet Storm</p>
            <p><strong>Initiated:</strong> N/A</p>
            <p><strong>Line Number:</strong> N/A</p>
        </div>
    `
};

const bios = [
    { number: 0, name: "Agent (Kam) Kamron Hampton", origin: "Baltimore", major: "Engineering Physics", siblings: "Bri, Dre, Shawn, Vonsha (2 sis, 2 bros)", mother: "Ms. Tiffany", birthday: "Aug 24, 2005", age: "19", classification: ""},
    { number: 0.5, name: "Agent (Kofi) Jaden Koranteng", origin: "Laurel", major: "Computer Science", siblings: "Kori (1 bro)", mother: "Ms. Debra", birthday: "", age: "20", classification: ""},
    { number: 1.5, name: "Agent (Lez) Lesley Ofosu", origin: "Baltimore", major: "Arch", siblings: "Lawrence, Lauren (1 bro, 1 sis)", mother: "Ms. Linda", birthday: "", age: "19", classification: ""},
    { number: 2.5, name: "Agent (Moe) Mohamed Cole", origin: "Bowie", major: "INSS", siblings: "Ridwan, Abass (Passed)", mother: "Alima", birthday: "", age: "21", classification: ""},
    { number: 3.5, name: "Agent (Chris) Christian Sampson", origin: "PG", major: "Nursing", siblings: "Camryn, Ariana (2 sis)", mother: "Ms. Marsha", age: "18", classification: ""},
    { number: 4.5, name: "Agent (Ant) Anthony Noakes", origin: "Philly", major: "Chem", siblings: "Nysear, Aaliyah", mother: "Ms. Farrar", birthday: "", age: "20", classification: ""},
    { number: 5.5, name: "Agent (Davo) David Osadiaye", origin: "Bowie", major: "INSS", siblings: "Kenneth, Lucky, Nate, Nancy (1 sis, 3 bros)", mother: "Ms. Julie", birthday: "", classification: ""},
    { number: 6.5, name: "Agent (Sey) Seydina Salla", origin: "Senegal, Africa/ Houston", major: "Accounting", siblings: "Fatou, Naya, Issa, Aminata, Adja, Ibrahima, El Hadji", mother: "Ms. Kone", birthday: "", classification: "Senior"},
    { number: 7.5, name: "Agent (Reezy) Terell Reed", origin: "DC", major: "Computer Science", siblings: "Randi, Que (2 sis)", mother: "Ms. Ebony", birthday: "Jun 16, 2004", age: "20", classification: "Senior"},
    { number: 8.5, name: "Agent (Marc) Marcus Mclean", origin: "Atlanta", major: "Mech. Eng", siblings: "???", mother: "???", birthday: "Sep 19, 2001", age: "23", classification: ""},
    { number: 9.5, name: "Agent (Ship) Demeir Shipley", origin: "Tuskegee, AL", major: "BA", siblings: "???", mother: "Ms. Gail", birthday: "", age: "", classification: "Senior"}
];

function renderSections() {
    const sectionList = document.getElementById('section-list');
    sectionList.innerHTML = '';
    
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
    const sectionContentDiv = document.getElementById('section-content');
    const section = sections.find(s => s.id === sectionId);
    
    if (sectionContentDiv.dataset.activeSection === sectionId) {
        sectionContentDiv.innerHTML = '';
        sectionContentDiv.dataset.activeSection = '';
    } else {
        if (sectionId === 'bios') {
            renderBios(sectionContentDiv);
        } else {
            const content = sectionContent[sectionId] || `<p>Content for ${section.title}</p>`;
            sectionContentDiv.innerHTML = `
                <div class="section-content">
                    <h2><i data-lucide="${section.icon}"></i> ${section.title}</h2>
                    ${content}
                </div>
            `;
        }
        sectionContentDiv.dataset.activeSection = sectionId;
    }

    const buttons = document.querySelectorAll('#section-list button');
    buttons.forEach(button => {
        const icon = button.querySelector('.toggle-icon');
        if (button.textContent.includes(section.title)) {
            icon.setAttribute('data-lucide', 
                sectionContentDiv.dataset.activeSection === sectionId ? 'chevron-up' : 'chevron-down');
        } else {
            icon.setAttribute('data-lucide', 'chevron-down');
        }
    });
    lucide.createIcons();
}

function renderBios(container) {
    let bioHTML = `
        <div class="section-content">
            <h2><i data-lucide="user"></i> AGENT PROFILES</h2>
            <div class="bio-grid">
    `;
    
    bios.sort((a, b) => a.number - b.number).forEach(bio => {
        bioHTML += `
            <div class="bio-card">
                <h3>${bio.name}</h3>
                <p><strong>Number:</strong> ${bio.number}</p>
                <p><strong>Origin:</strong> ${bio.origin}</p>
                <p><strong>Major:</strong> ${bio.major}</p>
                <p><strong>Siblings:</strong> ${bio.siblings}</p>
                <p><strong>Mother:</strong> ${bio.mother}</p>
                ${bio.birthday ? `<p><strong>Birthday:</strong> ${bio.birthday}</p>` : ''}
                ${bio.age ? `<p><strong>Age:</strong> ${bio.age}</p>` : ''}
                ${bio.classification ? `<p><strong>Classification:</strong> ${bio.classification}</p>` : ''}
            </div>
        `;
    });

    bioHTML += `
            </div>
        </div>
    `;

    container.innerHTML = bioHTML;
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderSections();
    toggleSection('call'); // Show first section by default
});

