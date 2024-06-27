document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('flexContainer');
    
    document.querySelectorAll('.flex-direction').forEach(button => {
    button.addEventListener('click', () => {
    flexContainer.style.flexDirection = button.getAttribute('data-value');
    });
    });
    
    document.querySelectorAll('.justify-content').forEach(button => {
    button.addEventListener('click', () => {
    flexContainer.style.justifyContent = button.getAttribute('data-value');
    });
    });
    
    document.querySelectorAll('.align-items').forEach(button => {
    button.addEventListener('click', () => {
    flexContainer.style.alignItems = button.getAttribute('data-value');
    });
    });
    });