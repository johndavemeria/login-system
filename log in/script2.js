document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('.open-logout');
    const logoutDialog = document.querySelector('.btn-logout');
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');

    // Show the logout confirmation dialog when "Logout" is clicked
    logoutButton.addEventListener('click', () => {
        logoutDialog.style.display = 'flex';
    });

    // Close the dialog when "No" is clicked
    noButton.addEventListener('click', () => {
        logoutDialog.style.display = 'none';
    });

    // Handle the "Yes" action (e.g., logout logic)
    yesButton.addEventListener('click', () => {
        alert('Logged out successfully!');
        logoutDialog.style.display = 'none';

        // Here you could add logic to clear the session or redirect the user
        localStorage.removeItem('username');  // Example: Clear the username
        window.location.href = 'index.html';  // Redirect to login page
    });
});