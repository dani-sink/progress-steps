const prevButton = document.querySelector('.prev__button')
const nextButton = document.querySelector('.next__button')

const lines = document.querySelectorAll('.line')
const circles = document.querySelectorAll('.circle')

// To keep track of which circle number we are at
let buttonIndex = 1;


// function resetAll(){
//     prevButton.disabled = true;
//     nextButton.disabled = false;
//     lines.forEach(line => {
//         line.style.backgroundColor = "#e0e0e0";
//     })
//     circles.forEach(circle => {
//         const circleNum = parseInt(circle.textContent);
//         if (circleNum === 1){
//             return;
//         }

//         circle.style.borderColor = "#e0e0e0";
//     })
// }

// Event handler for both the 'Prev' and 'Next'
function colorToBlue(e){
    
    // If the 'Next' button was clicked
    if (e.target.textContent === "Next"){

        // Go to the next number
        buttonIndex++;

        // If we reach 4
        if (buttonIndex === 4) {

            // Disable 'Next' button and keep 'Prev' button active
            nextButton.disabled = true;
            prevButton.disabled = false
        } else {

            // Otherwise, keep both buttons active
            nextButton.disabled = false;
            prevButton.disabled = false;
        }


        // Find the circle that needs coloring
        circles.forEach(circle => {
            const circleNum = parseInt(circle.textContent);
            
            // When we found a number match
            if (circleNum === buttonIndex){

                // Color the circle
                circle.classList.add("active__circle");

                // And the line before it
                circle.previousElementSibling.classList.add("active__line");
            }
        })
    } 

    // If the 'Prev' button was clicked
    else if (e.target.textContent === "Prev") {

        // Here, we do this step first because we want to uncolor the circle
        // and the line before it first before moving on to the previous number
        circles.forEach(circle => {
            const circleNum = parseInt(circle.textContent);
            if (circleNum === buttonIndex){
                circle.classList.remove("active__circle");
                circle.previousElementSibling.classList.remove("active__line");
            }
        })
        
        // Then, we move on to the previous number
        buttonIndex--;

        // If we reach 1
        if (buttonIndex === 1) {

            // Disable 'Prev' button and keep 'Next' button active
            prevButton.disabled = true;
            nextButton.disabled = false;
        } else {

            // Otherwise, keep both buttons active
            nextButton.disabled = false;
            prevButton.disabled = false;
        }
        
    } 

    // Otherwise, do nothing
    else {
        return;
    }

}

window.onload = function () {
    prevButton.disabled = true;
    nextButton.disabled = false;
}

nextButton.addEventListener('click', colorToBlue)
prevButton.addEventListener('click', colorToBlue)
