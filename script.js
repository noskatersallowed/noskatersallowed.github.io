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

