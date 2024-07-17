function addingEventListener() {
    
        const input = document.getElementById('input');
        
        input.addEventListener('click', function() {
            alert('I was clicked!');
       });
    }
    
    // Call the function to ensure the event listener is added when the script is executed
    addingEventListener();
    
