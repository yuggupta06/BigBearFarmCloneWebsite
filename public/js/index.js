const nav_dialog=document.getElementById('nav-dialog');

function handleMenu(){
    nav_dialog.classList.toggle('hidden');
}

const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');
        const slides = document.querySelector('.carousel-slide');
        let index = 0;

        function showSlide(n) {
            const totalSlides = slides.children.length;
            index = (n + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        prevButton.addEventListener('click', () => {
            showSlide(index - 1);
        });

        nextButton.addEventListener('click', () => {
            showSlide(index + 1);
        });

        // Optionally add auto slide functionality
        setInterval(() => {
            showSlide(index + 1);
        }, 7500); // 

const button=document.getElementsByClassName('Button');        
function changeColour(selectedButton) {
    // Get all buttons with the class 'button'
    const buttons = document.querySelectorAll('.button');
    
    // Remove the active class (bg-[#72173f] and text-white) from all buttons
    buttons.forEach(button => {
        button.classList.remove('bg-[#72173f]', 'text-white');
        button.classList.add('bg-transparent', 'text-gray-400');
    });

    // Add the active class to the clicked button
    selectedButton.classList.remove('bg-transparent', 'text-gray-400');
    selectedButton.classList.add('bg-[#72173f]', 'text-white');
}



function openPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupModal").style.display = "block";
}

// Function to hide the popup
function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupModal").style.display = "none";
}

// Set up event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.myButton');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(openPopup)
            setTimeout(closePopup,1000)


        });
    });
});






