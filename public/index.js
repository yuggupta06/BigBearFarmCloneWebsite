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

// Set the duration for auto-sliding (in milliseconds)
const slideInterval = 3000; // 3000 ms = 3 seconds

// Carousel for the first slider
const carouselSlide1 = document.querySelector('.carousel-slide-1');
const slides1 = carouselSlide1.querySelectorAll('.flex-shrink-0');
const prevSlide1 = document.getElementById('prev-slide-1');
const nextSlide1 = document.getElementById('next-slide-1');

let currentIndex1 = 0;

function showSlide1(index) {
    carouselSlide1.style.transform = `translateX(-${index * 100}%)`;
}

nextSlide1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    showSlide1(currentIndex1);
    resetAutoSlide1();
});

prevSlide1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 - 1 + slides1.length) % slides1.length;
    showSlide1(currentIndex1);
    resetAutoSlide1();
});

// Auto slide function for the first slider
function autoSlide1() {
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    showSlide1(currentIndex1);
}
let autoSlideInterval1 = setInterval(autoSlide1, slideInterval);

function resetAutoSlide1() {
    clearInterval(autoSlideInterval1);
    autoSlideInterval1 = setInterval(autoSlide1, slideInterval);
}


// Carousel for the second slider
const carouselSlide2 = document.querySelector('.carousel-slide-2');
const slides2 = carouselSlide2.querySelectorAll('.flex-shrink-0');
const prevSlide2 = document.getElementById('prev-slide-2');
const nextSlide2 = document.getElementById('next-slide-2');

let currentIndex2 = 0;

function showSlide2(index) {
    carouselSlide2.style.transform = `translateX(-${index * 100}%)`;
}

nextSlide2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    showSlide2(currentIndex2);
    resetAutoSlide2();
});

prevSlide2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
    showSlide2(currentIndex2);
    resetAutoSlide2();
});

// Auto slide function for the second slider
function autoSlide2() {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    showSlide2(currentIndex2);
}
let autoSlideInterval2 = setInterval(autoSlide2, slideInterval);

function resetAutoSlide2() {
    clearInterval(autoSlideInterval2);
    autoSlideInterval2 = setInterval(autoSlide2, slideInterval);
}


        
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
        let div=document.getElementById("search-results")
        while (div.children.length > 1) {
            div.removeChild(div.lastChild);
        }
        for(let i=0;i<data.length;i++){
            link1=(data[i].name.toLowerCase()).replace(/ /g,'-')
            if (((data[i].name).slice(0,input.length)).toLowerCase()===(input).toLowerCase()){        
                const content=
                `<a class="search-link  flex flex-row" href=${"/"+link1}>
                <img id="item_img" src="${data[i].src}" class="w-[50px]">
                <span class="text-2xl font-semibold pt-2 ml-4 hover:underline"  id="itemname">${data[i].name}</span>
                </a>
                `
                const parser = new DOMParser();
                const doc = parser.parseFromString(content, "text/html");
                const element = doc.body.firstChild;
                div.appendChild(element);
            }
        }
        if(div.children.length>1)
            div.firstElementChild.style.display="none"
        else{
            div.firstElementChild.style.display=""
        }
    } else {
        results.classList.add("hidden");
    }
}



