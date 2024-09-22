document.addEventListener('DOMContentLoaded', function() {
    const brothersData = [
        {
            name: "Xavier Johnson (Z) SaZuKe",
            phone: "443-599-2715",
            social: "@__xavierrr",
            city: "Baltimore",
            hobby: "",
            classification: "Junior",
            major: "Civil Engineering",
            funFact: "Had a programming internship at Google, first job was at Pizza Hut",
            birthday: "",
            sports: "Basketball",
            religion: "",
            favoriteFood: "Wings, Salmon",
            linkedIn: "https://www.linkedin.com/in/xavier-johnson-197937226/",
            reachOutCount: 3
        },
        {
            name: "Mohammed Nafiu (Ace) KnucKles",
            phone: "202-878-2221",
            social: "",
            city: "Nigeria",
            hobby: "world bank",
            major: "Computer Science",
            funFact: "Comp sci but doesn't like coding; only in it for the money, ran track at Flowers, work at World Bank",
            birthday: "",
            sports: "Track",
            religion: "",
            linkedIn: "https://md.milesplit.com/athletes/6180680-mohammed-nafiu/photos",
            reachOutCount: 0
        },
        {
            name: "Miles Hooper (Deuce) DeKu",
            phone: "917-470-4079",
            social: "@2realmiles",
            city: "New York",
            hobby: "Basketball, likes to go to the gym",
            classification: "Junior",
            major: "Industrial Engineering",
            funFact: "Does photography and videography; grandad is a Nupe, from New York",
            birthday: "June 7",
            sports: "",
            religion: "Grandad is a preacher, pianist, and Nupe (alpha gamma), and mom is choir director",
            linkedIn: "",
            reachOutCount: 3
        }
        // More brothers can be added here following the same structure
    ];

    function filterNames() {
        var input = document.getElementById('searchInput').value.toUpperCase();
        var brotherInfo = brothersData.find(bro => bro.name.toUpperCase().includes(input));
        var displayArea = document.getElementById('brotherInfoDisplay');

        if (brotherInfo) {
            displayArea.style.display = 'block';
            document.getElementById('nameDisplay').textContent = brotherInfo.name;
            document.getElementById('fromDisplay').textContent = brotherInfo.city;
            document.getElementById('ageDisplay').textContent = brotherInfo.classification;
            document.getElementById('birthdayDisplay').textContent = brotherInfo.birthday;
            document.getElementById('snacksDisplay').textContent = brotherInfo.favoriteFood;
            document.getElementById('majorDisplay').textContent = brotherInfo.major;
            document.getElementById('funFactDisplay').textContent = brotherInfo.funFact;
            document.getElementById('linkedInDisplay').textContent = brotherInfo.linkedIn;
            document.getElementById('reachOutCountDisplay').textContent = brotherInfo.reachOutCount;
            // More fields can be displayed as needed
        } else {
            displayArea.style.display = 'none';
        }
    }

    document.getElementById('searchButton').addEventListener('click', filterNames);
});

