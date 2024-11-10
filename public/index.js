data=[
    {
        name:"Caramel Tofee",
        src:"/assets (1)/asset 6.png",
    },
    {
        name:"Strawberry Jam",
        src:"/assets (1)/asset 7.png",
    },
    {
        name:"Three Citrus Marmalade",
        src:"/assets (1)/asset 8.png",
    },
    {
        name:"Lemon Curd",
        src:"/assets (1)/asset 9.png",
    },
    {
        name:"Plum Jam",
        src:"/assets (1)/asset 10.png",
    },
    {
        name:"Tomato Pickle",
        src:"/assets (1)/asset 11.png",
    },
    {
        name:"Salted Caramel",
        src:"/assets (1)/asset 12.png",
    },
    {
        name:"Pears",
        src:"/assets (1)/asset 13.png",
    },
    {
        name:"Pickle Vegitable",
        src:"/assets (1)/asset 14.png",
    },
    {
        name:"Gajar Gobhi Salgam",
        src:"/assets (1)/asset 15.png",
    },

]
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
        }, 25000); // 


        
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
            openPopup()
            setTimeout(closePopup,1000)
        });
    });
})




function toggleSearchOverlay() {
    const overlay = document.getElementById("search-overlay");
    overlay.classList.toggle("hidden");
    
    // Hide the search results when closing the overlay
    if (overlay.classList.contains("hidden")) {
        document.getElementById("search-results").classList.add("hidden");
        document.getElementById("search-input").value = ""; // Clear the input field
    }
}

function showSearchResults() {
    const input = document.getElementById("search-input").value;
    const results = document.getElementById("search-results");
    // Show the results div if there’s text, otherwise hide it
    if (input.trim() !== "") {
        results.classList.remove("hidden");
        document.getElementById("item_img").src=""
        document.getElementById("itemname").innerText="No item in list.."
        for(let i=0;i<data.length;i++){
            link1=(data[i].name.toLowerCase()).replace(/ /g,'-')
            if (((data[i].name).slice(0,input.length)).toLowerCase()===(input).toLowerCase()){
                document.getElementById("item_img").src=data[i].src
                document.getElementById("itemname").innerText=data[i].name
                document.getElementById("search-link").href="/"+link1
                break;
            }
        }
    } else {
        results.classList.add("hidden");
    }
}



