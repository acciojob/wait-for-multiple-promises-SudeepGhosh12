//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('output');
    
    // Create initial loading row with id="loading"
    tbody.innerHTML = '<tr id="loading"><td colspan="2" class="text-center">Loading...</td></tr>';
    
    // Function to create a promise with random delay between 1-3 seconds
    const createPromise = (name) => {
        const delay = Math.random() * 2000 + 1000; // Random between 1000-3000ms
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve((delay / 1000).toFixed(3)); // Convert to seconds and format to 3 decimal places
            }, delay);
        });
    };
    
    // Create three promises
    const promises = [
        createPromise('Promise 1'),
        createPromise('Promise 2'),
        createPromise('Promise 3')
    ];
    
    // Record start time
    const startTime = performance.now();
    
    // Wait for all promises to resolve
    Promise.all(promises).then((results) => {
        // Calculate total time as the maximum of the promise times
        const maxTime = Math.max(...results).toFixed(3);
        
        // Clear loading row and populate table
        tbody.innerHTML = `
            <tr><td>Promise 1</td><td>${results[0]}</td></tr>
            <tr><td>Promise 2</td><td>${results[1]}</td></tr>
            <tr><td>Promise 3</td><td>${results[2]}</td></tr>
            <tr><td>Total</td><td>${maxTime}</td></tr>
        `;
    });
});