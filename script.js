const accessPin = "ayebull11"; // Define your access PIN
// Tabs Switching
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Mission Management (previously implemented)

// Dog Walking Schedule Management (previously implemented)

// Chef Ride to Work Management using localStorage
let chefRides = loadRides() || [];

// Add a new ride for Chef Ride to Work
function assignRide() {
    const person = document.getElementById('ridePersonSelector').value;
    const date = document.getElementById('rideDate').value;
    const time = document.getElementById('rideTime').value;

    if (person && date && time) {
        const newRide = {
            person,
            date,
            time,
            completed: false
        };
        chefRides.push(newRide);
        saveRides();  // Save rides to localStorage
        displayRides();  // Display the updated list
    } else {
        alert('Please fill out all fields.');
    }
}

// Display the list of scheduled rides
function displayRides() {
    const rideList = document.getElementById('chefRideList');
    rideList.innerHTML = '';

    chefRides.forEach((ride, index) => {
        const rideItem = document.createElement('li');
        rideItem.innerHTML = `${ride.person} - Date: ${ride.date}, Time: ${ride.time}`;

        if (!ride.completed) {
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.onclick = () => completeRide(index);
            rideItem.appendChild(completeButton);
        } else {
            rideItem.style.textDecoration = 'line-through';  // Mark completed rides
        }

        rideList.appendChild(rideItem);
    });
}

// Mark a ride as completed
function completeRide(index) {
    chefRides[index].completed = true;
    saveRides();  // Update localStorage
    displayRides();  // Refresh the list
}

// Save rides to localStorage
function saveRides() {
    localStorage.setItem('chefRides', JSON.stringify(chefRides));
}

// Load rides from localStorage
function loadRides() {
    const savedRides = localStorage.getItem('chefRides');
    return savedRides ? JSON.parse(savedRides) : [];
}

// Load and display rides when the page loads
document.addEventListener('DOMContentLoaded', displayRides);
