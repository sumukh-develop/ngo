document.addEventListener('DOMContentLoaded', (event) => {
    const proceedButtons = document.querySelectorAll('.proceed-button');

    proceedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ngoName = this.parentElement.querySelector('h2').textContent;
            alert(`Proceeding with ${ngoName}`);
            
            // You can add additional code here to handle the proceed action,
            // such as redirecting to another page or showing more details
        });
    });
});
