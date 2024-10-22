// script.js
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

const sections = [
    { id: 'call', title: 'BROS TO CALL', icon: 'phone' },
    { id: 'defs', title: 'DEFINITIONS', icon: 'book' },
    { id: 'info', title: 'INFO', icon: 'info' },
    { id: 'otherchapters', title: 'OTHER CHAPTERS', icon: 'users' },
    { id: 'bios', title: 'AGENT PROFILES', icon: 'user' },
];

const sectionContent = {
    call: `
        <h3>Bros to Call</h3>
        <ul>
            <li>Adams: 4</li>
            <li>Bond: 7</li>
            <li>Burke: 0</li>
            <li>Christopher Hylton: 17</li>
            <li>Donte Peters: 4, 14</li>
            <li>Frantz Sabbat: 11</li>
            <li>Frazier: 3</li>
            <li>Ghost</li>
            <li>Harold Lamour: 0</li>
            <li>Hunte: 0</li>
            <li>Jaron Williams: 6 (call after 6)</li>
            <li>Justin Vasquez: 3</li>
            <li>Menace: 1</li>
            <li>Orion Robinson: 0</li>
            <li>Pitts: 15</li>
            <li>Shawn Goins Jr: 9</li>
            <li>Wes: 8</li>
            <li>Wilks: 1</li>
            <li>Woody: 5</li>
            <li>Hash 5</li>
            <li>Keith 6</li>
            <li>Clinton 4</li>
            <li>Fuentes 8</li>
            <li>Ragland 9</li>
            <li>Shawn Elliot 7 (AFTER 5)</li>
            <li>Zakee Roberts 3 (AFTER 4)</li>
            <li>Jiair 4</li>
            <li>Harvey 10</li>
            <li>Kadeem Myrie 13</li>
            <li>Cherif 8</li>
            <li>Cherrod Roberts 18</li>
            <li>Brown 3</li>
            <li>Enitan 12</li>
            <li>Marquis Smith 5 (After 5; No weekends)</li>
            <li>Shane Mitchell 12</li>
            <li>Simp (TIC TOC)</li>
            <li>Fall 13</li>
            <li>Fall 18</li>
            <li>Akeem Croft 4</li>
            <li>Trumane Lawrence</li>
            <li>Javan Stewart</li>
            <li>Michael Bowry (After 5)</li>
            <li>Carl Michel</li>
            <li>Horton</li>
            <li>Rasheem Williams</li>
            <li>Anthony Prescott</li>
            <li>Gumbs</li>
            <li>Diara Woodard</li>
            <li>Darrel Walker</li>
            <li>Big Brother Motherland</li>
            <li>Tducks</li>
            <li>Anthony Showell</li>
            <li>Ronald Goodman</li>
        </ul>
    `,
    defs: `
        <h3>Key Definitions</h3>
        <dl>
            <dt>Bam Bam Proclamation</dt>
            <dd>Must we endure these physical pains and mental gains to obtain social fame. No, If we get hurt who are we to blame, ourselves! I know the difference between right and wrong but to build our self confidence I will go on, I will weather the storm. I must be strong, I must be strong.</dd>
        </dl>
        <dl>
        <dt>HAZE HAZE???</dt>
        <dd>Haze, haze, Kappas don’t haze. Kappa Alpha Psi is a non hazing fraternity. All Kappas do is discipline and teach. We can’t believe you asked us that. We oughta haze you. Who? You! Who? You! Who? You!!! However, due to the current state of pledging. Our Grand Polemarch Jimmy McMickle has given us the opportunity to exercise our right to snitch. But, since we’re all here. Let’s get this party started!</dd>
    </dl>
    <dl>
    <dt>We dont know</dt>
    <dd>Fear we deviate, Fear we articulate, For we do not know at this present date, brother name</dd>
</dl>
    
    `,
    info: `
        <h3>Invicutus: Out of the night that covers me,
        Black as the pit from pole to pole,
  I thank whatever gods may be
        For my unconquerable soul.
  
  In the fell clutch of circumstance
        I have not winced nor cried aloud.
  Under the bludgeonings of chance
        My head is bloody, but unbowed.
  
  Beyond this place of wrath and tears
        Looms but the Horror of the shade,
  And yet the menace of the years
        Finds and shall find me unafraid.
  
  It matters not how strait the gate,
        How charged with punishments the scroll,
  I am the master of my fate,
        I am the captain of my soul.</h3>
       
    `,
    otherchapters: `
        <h3>Chapter Chapters</h3>

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
<p><strong>Big Brother:</strong>na</p>
<p><strong>Initiated:</strong> Spr 24</p>
<p><strong>Line Number:</strong> 3</p>
</div>
<hr class="contact-separator">
<div class="contact-info">
<h4>Xi Kappa</h4>
<p><strong>Name:</strong> Kian</p>
<p><strong>Phone:</strong> (202) 590-3586</p>
<p><strong>Big Brother:</strong>Too Smooth</p>
<p><strong>Initiated:</strong> Spr 22</p>
<p><strong>Line Number:</strong> 3</p>
</div> `
};

const bios = [
    { number: 0, name: "Agent (Kam) Kamron Hampton", origin: "Baltimore", major: "Engineering Physics", siblings: "Bri, Dre, Shawn, Vonsha (2 sis, 2 bros)", mother: "Ms. Tiffany", birthday: "Aug 24, 2005", age: "19",  classification: ""},
    { number: .5, name: "Agent (Kofi) Jaden Koranteng", origin: "Laurel", major: "Computer Science", siblings: "Kori (1 bro) ", mother: "Ms. Debra",  birthday: "", age: "20", classification: ""},
    { number: 1.5, name: "Agent (Lez) Lesley Ofosu", origin: "Baltimore", major: "Arch", siblings: "Lawrence, Lauren (1 bro, 1 sis)", mother: "Ms. Linda",  birthday: "", age: "19", classification: "" },
    { number: 2.5, name: "Agent (Moe) Mohamed Cole", origin: "Bowie", major: "INSS", siblings: "Ridwan, Abass (Passed)", mother: "Alima",  birthday: "", age: "21", classification: "" },
    { number: 3.5, name: "Agent (Chris) Christian Sampson", origin: "PG", major: "Nursing", siblings: "Camryn, Ariana (2 sis)", mother: "Ms. Marsha", age: "18", classification: "" },
    { number: 4.5, name: "Agent (Ant) Anthony Noakes", origin: "Philly", major: "Chem", siblings: "Nysear, Aaliyah", mother: "Ms. Farrar",  birthday: "", age: "", classification: "" },
    { number: 5.5, name: "Agent (Davo) David Osadiaye", origin: "Bowie", major: "INSS", siblings: "Kenneth, Lucky, Nate, Nancy (1 sis, 3 bros)", mother: "Ms. Julie",  birthday: "", classification: "" },
    { number: 6.5, name: "Agent (Sey) Seydina Salla ", origin: "Senegal, Africa/ Houston", major: "Accounting", siblings: "Fatou, Naya, Issa, Aminata, Adja, Ibrahima, El Hadji", mother: "Ms. Kone", birthday: "", classification: "Senior"},
    { number: 7.5, name: "Agent (Reezy) Terell Reed", origin: "DC", major: "Computer Science", siblings: "Randi, Que (2 sis)", mother: "Ms. Ebony",  birthday: "Jun 16, 2004", age: "20", classification: "Senior"},
    { number: 8.5, name: "Agent (Marc) Marcus Mclean", origin: "Atlanta", major: "Mech. Eng", siblings: "???", mother: "???",  birthday: "Sep 19, 2001", age: "23", classification: ""},
    { number: 9.5, name: "Agent (Ship) Demeir Shipley", origin: "Tuskegee, AL", major: "BA", siblings: "???", mother: "Ms. Gail", birthday: "", age: "", classification: "Senior"},
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
    console.log('Toggling section:', sectionId);
    const sectionContentDiv = document.getElementById('section-content');
    const section = sections.find(s => s.id === sectionId);
    
    console.log('Section found:', section);
    console.log('Content for section:', sectionContent[sectionId]);

    if (sectionContentDiv.dataset.activeSection === sectionId) {
        sectionContentDiv.innerHTML = '';
        sectionContentDiv.dataset.activeSection = '';
    } else {
        let content = '';
        if (sectionId === 'bios') {
            renderBios(sectionContentDiv);
        } else {
            content = sectionContent[sectionId] || `<p>Classified information for ${section.title}</p>`;
            console.log('Content to be displayed:', content);
            sectionContentDiv.innerHTML = `
                <div class="section-content">
                    <h2><i data-lucide="${section.icon}"></i> ${section.title}</h2>
                    ${content}
                </div>
            `;
        }
        sectionContentDiv.dataset.activeSection = sectionId;
        lucide.createIcons();
    }

    // Toggle chevron icon
    const buttons = document.querySelectorAll('#section-list button');
    buttons.forEach(button => {
        const icon = button.querySelector('.toggle-icon');
        if (button.textContent.includes(section.title)) {
            icon.setAttribute('data-lucide', sectionContentDiv.dataset.activeSection === sectionId ? 'chevron-up' : 'chevron-down');
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
                <p><strong>Birthday:</strong> ${bio.birthday}</p>
                <p><strong>Age:</strong> ${bio.age}</p>
                <p><strong>Classification:</strong> ${bio.classification}</p>
            </div>
        `;
    });

    bioHTML += `
            </div>
        </div>
    `;

    container.innerHTML = bioHTML;
}

// For debugging
console.log('Sections:', sections);
console.log('Section content:', sectionContent);
