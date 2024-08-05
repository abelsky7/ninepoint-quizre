document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            toggleButton.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
    });
});