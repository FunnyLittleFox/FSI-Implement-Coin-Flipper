// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi') // Sanity achieved

    // TODO: Add event listener and handler for flip and clear buttons
    
    let numberOfHeads = 0;
    let numberOfTails = 0;
    let total = numberOfHeads + numberOfTails;

    const pennyButton = document.querySelector('#flip')

    pennyButton.addEventListener('click', function(){
        let headsFlip = Math.random() < 0,5;
        if (headsFlip) {
            document.getElementById('penny-image').src = './assets/image/penny-heads.jpg';
            document.getElementById('message').textContent = 'You Flipped Heads!';
            console.log('heads');
            numberOfHeads++;
        }
        else{
            document.getElementById('penny-image').src= './assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!';
            console.log('tails');
            numberOfTails++;
        }
        
        document.getElementsById ('heads').textContent = "numberOfHeads";
        document.getElementsById ('tails').textContent = "numberOfTails";

        if (total > 0) {
        percentHeads = Math.round((numberOfHeads / total) * 100);
        percentTails = Math.round((numberOfTails / total) * 100);
        }

        document.getElementById('clear').addEventListener('click', function(){
        numberOfHeads = 0;
        numberOfTails = 0;
        total = 0;
        })

        document.getElementById('heads').textContent = numberOfHeads;
        document.getElementById('tails').textContent = numberOfTails;
        document.getElementById('heads-percent').textContent = `${percentofHeads}%`;
        document.getElementById('tails-percent').textContent = `${percentofTails}%`;
        document.getElementById('message').textContent = "Let\'s Get Rolling!";
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})