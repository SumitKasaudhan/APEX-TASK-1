// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Add a button to the contact section
    const contactSection = document.getElementById('contact');
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.className = 'btn';
    contactSection.appendChild(button);
    
    // Add event listener to the button
    button.addEventListener('click', function() {
        alert('Thank you for visiting my website!');
    });
    
    // Add hover effects to project items
    const projectItems = document.querySelectorAll('#projects li');
    projectItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#e8491d';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });
});