function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Persist theme preference
}

document.getElementById('light-theme-btn').addEventListener('click', () => {
    setTheme('light');
});

document.getElementById('dark-theme-btn').addEventListener('click', () => {
    setTheme('dark');
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
});


// Profile update
document.querySelector('#profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    console.log('Save profile settings:', { username, email });
    // Here you would typically send this data to a server
});

// Notification toggle
document.querySelector('#enable-notifications').addEventListener('change', function(event) {
    const notificationsEnabled = event.target.checked;
    console.log('Notifications enabled:', notificationsEnabled);
    localStorage.setItem('notificationsEnabled', notificationsEnabled);
});