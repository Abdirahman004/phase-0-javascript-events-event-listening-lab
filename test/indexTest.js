// Require the helper functions if needed
require('./helpers.js');

describe('index.html', () => {
    // Create a hook to set up the DOM structure before each test
    beforeEach(() => {
        // Set up the DOM
        document.body.innerHTML = `
            <input type="text" id="input" placeholder="Click me!">
        `;

        // Call the function to add the event listener
        addingEventListener();
    });

    describe('addingEventListener()', () => {
        it('binds an event listener in addingEventListener()', () => {
            const input = document.getElementById('input');
            
            // Check if the event listener is added
            let eventTriggered = false;
            input.addEventListener('click', () => {
                eventTriggered = true;
            });

            // Simulate a click event
            input.click();

            // Verify that the event listener was triggered
            expect(eventTriggered).to.be.true;
        });
    });
});
