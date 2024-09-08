const accessPin = "ayebull11"; // Access PIN

// Login Function
function login() {
    const pin = document.getElementById('loginPin').value;
    if (pin === accessPin) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('missionSection').style.display = 'block';
        populateSelectors();
        loadMissions(); // Load missions from localStorage when logged in
    } else {
        alert('Invalid PIN, please try again.');
    }
}

// Populate Selectors for missions and dog walking schedule
function populateSelectors() {
    const personSelector = document.getElementById('personSelector');
    const dogWalkerSelector = document.getElementById('dogWalkerSelector');
    const names = ["Ant", "Chris", "Marcus", "Reezy", "Davo", "Kam", "Kofi", "Lez", "Mo", "Sey", "Ship"];
    
    names.forEach(name => {
        // Add options to mission selector
        let option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        personSelector.appendChild(option);

        // Add options to dog walker selector
        let dogOption = document.createElement('option');
        dogOption.value = name;
        dogOption.textContent = name;
        dogWalkerSelector.appendChild(dogOption);
    });
}

// Mission Management
let missions = [];

function addMission() {
    const description = document.getElementById('missionDescription').value;
    const person = document.getElementById('personSelector').value;
    
    if (description && person) {
        missions.push({ description, person, completed: false });
        saveMissions(); // Save missions to localStorage
        displayMissions();
        document.getElementById('missionDescription').value = '';
    } else {
        alert('Please enter a mission description and select a person.');
    }
}

function displayMissions() {
    const missionsList = document.getElementById('missionsList');
    missionsList.innerHTML = '';
    
    missions.forEach((mission, index) => {
        const missionItem = document.createElement('li');
        missionItem.textContent = `${mission.description} - assigned to ${mission.person}`;
        
        if (!mission.completed) {
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.onclick = function() { completeMission(index); };
            missionItem.appendChild(completeButton);
        } else {
            missionItem.style.textDecoration = 'line-through'; // Mark completed missions
        }
        
        // Add a delete button for each mission
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px'; // Add some spacing
        deleteButton.onclick = function() { deleteMission(index); };
        missionItem.appendChild(deleteButton);

        missionsList.appendChild(missionItem);
    });
}

// Complete a mission
function completeMission(index) {
    missions[index].completed = true;
    saveMissions(); // Save missions to localStorage when completed
    displayMissions();
    updateLeaderboard();
}

// Delete a mission
function deleteMission(index) {
    missions.splice(index, 1); // Remove the mission at the specified index
    saveMissions(); // Update localStorage after deletion
    displayMissions(); // Refresh the mission list
}

// Save missions to localStorage
function saveMissions() {
    localStorage.setItem('missions', JSON.stringify(missions));
}

// Load missions from localStorage
function loadMissions() {
    const savedMissions = localStorage.getItem('missions');
    if (savedMissions) {
        missions = JSON.parse(savedMissions);
        displayMissions();
    }
}

// Leaderboard
function updateLeaderboard() {
    let leaderboard = {};
    
    // Count completed missions for each person
    missions.forEach(mission => {
        if (mission.completed) {
            if (!leaderboard[mission.person]) {
                leaderboard[mission.person] = 0;
            }
            leaderboard[mission.person]++;
        }
    });
    
    displayLeaderboard(leaderboard);
}

function displayLeaderboard(leaderboard) {
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';
    
    // Convert leaderboard object to an array and sort by completed missions
    const sortedLeaderboard = Object.entries(leaderboard).sort((a, b) => b[1] - a[1]);

    // Display the sorted leaderboard
    sortedLeaderboard.forEach(([person, completedMissions]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${person}: ${completedMissions} missions completed`;
        leaderboardList.appendChild(listItem);
    });
}

    // Dog Walking Schedule
    let dogWalkingSchedule = [];

    function assignDogWalker() {
        const walker = document.getElementById('dogWalkerSelector').value;
        const time = document.getElementById('timeSelector').value;
        const currentDate = new Date().toLocaleDateString(); // Capture current date
        
        if (walker && time) {
            dogWalkingSchedule.push({ walker, time, date: currentDate, completed: false });
            displayDogWalkingSchedule();
        } else {
            alert('Please select a walker and a time slot.');
        }
    }

    function displayDogWalkingSchedule() {
        const dogWalkingList = document.getElementById('dogWalkingList');
        dogWalkingList.innerHTML = '';
        
        dogWalkingSchedule.forEach((schedule, index) => {
            const scheduleItem = document.createElement('li');
            scheduleItem.textContent = `${schedule.walker} - ${schedule.time} on ${schedule.date}`;
            
            if (!schedule.completed) {
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Finished';
                completeButton.onclick = function() { completeDogWalk(index); };
                scheduleItem.appendChild(completeButton);
            } else {
                scheduleItem.style.textDecoration = 'line-through'; // Mark completed walks
            }
            dogWalkingList.appendChild(scheduleItem);
        });
    }

    function completeDogWalk(index) {
        dogWalkingSchedule[index].completed = true;
        displayDogWalkingSchedule();
    }

    // Show and hide sections
    function goBack() {
        document.getElementById('missionSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
    }

    function showLeaderboard() {
        document.getElementById('missionSection').style.display = 'none';
        document.getElementById('leaderboardSection').style.display = 'block';
        updateLeaderboard();
    }

    function showMissionSection() {
        document.getElementById('dogWalkingSection').style.display = 'none';
        document.getElementById('leaderboardSection').style.display = 'none';
        document.getElementById('missionSection').style.display = 'block';
    }

    function showDogWalkingSection() {
        document.getElementById('missionSection').style.display = 'none';
        document.getElementById('dogWalkingSection').style.display = 'block';
    }

        // Drive Nich and Chef To Work
        let driveschedule = [];

        function assignDogWalker() {
            const walker = document.getElementById('dogWalkerSelector').value;
            const time = document.getElementById('timeSelector').value;
            const currentDate = new Date().toLocaleDateString(); // Capture current date
            
            if (walker && time) {
                dogWalkingSchedule.push({ walker, time, date: currentDate, completed: false });
                displayDogWalkingSchedule();
            } else {
                alert('Please select a driver and a time slot.');
            }
        }
    
        function displayDogWalkingSchedule() {
            const dogWalkingList = document.getElementById('dogWalkingList');
            dogWalkingList.innerHTML = '';
            
            dogWalkingSchedule.forEach((schedule, index) => {
                const scheduleItem = document.createElement('li');
                scheduleItem.textContent = `${schedule.walker} - ${schedule.time} on ${schedule.date}`;
                
                if (!schedule.completed) {
                    const completeButton = document.createElement('button');
                    completeButton.textContent = 'Finished';
                    completeButton.onclick = function() { completeDogWalk(index); };
                    scheduleItem.appendChild(completeButton);
                } else {
                    scheduleItem.style.textDecoration = 'line-through'; // Mark completed walks
                }
                dogWalkingList.appendChild(scheduleItem);
            });
        }
    
        function completeDogWalk(index) {
            dogWalkingSchedule[index].completed = true;
            displayDogWalkingSchedule();
        }
    
        // Show and hide sections
        function goBack() {
            document.getElementById('missionSection').style.display = 'none';
            document.getElementById('loginSection').style.display = 'block';
        }
    
        function showLeaderboard() {
            document.getElementById('missionSection').style.display = 'none';
            document.getElementById('leaderboardSection').style.display = 'block';
            updateLeaderboard();
        }
    
        function showMissionSection() {
            document.getElementById('dogWalkingSection').style.display = 'none';
            document.getElementById('leaderboardSection').style.display = 'none';
            document.getElementById('missionSection').style.display = 'block';
        }
    
        function showDogWalkingSection() {
            document.getElementById('missionSection').style.display = 'none';
            document.getElementById('dogWalkingSection').style.display = 'block';
        }
    
