// -------------------------------------------------------------------------------connect each files

window.addEventListener('DOMContentLoaded', function () {
    fetch('about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about').innerHTML = html;
        })
        .catch(error => console.log(error));

    fetch('portfolio.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('portfolio').innerHTML = html;
        })
        .catch(error => console.log(error));
    fetch('contact.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contact').innerHTML = html;
        })
        .catch(error => console.log(error));

});

// -----------------------------------------------------------------------------------typewritter effect

const professions = ["Software Engineer", "Web Developer", "App Developer"];
let index = 0;
const element = document.getElementById("profession");

const typeWriterEffect = (text, element, index, callback) => {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriterEffect(text, element, index + 1, callback), 50);
    } else {
        callback();
    }
};

const updateText = () => {
    element.textContent = "";
    typeWriterEffect(professions[index], element, 0, () => {
        index = (index + 1) % professions.length;
    });
};

updateText();
setInterval(updateText, 3000);

//--------------------------------------------------------------------------------------------Random color effect
function changeBackgroundColor() {
    var lis = document.querySelectorAll('#skillList li');
    lis.forEach(function (li) {
        var randomColor = getRandomColor();
        li.style.backgroundColor = randomColor;
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(changeBackgroundColor, 2000);

//--------------------------------------------------------------------------------------------Sidemenu
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");

    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var videoContainer = document.getElementById('videoContainer');
    var isOpen = false;

    toggleButton.addEventListener('click', function () {
        if (!isOpen) {
            videoContainer.style.right = '10px';
            videoContainer.style.position = 'absolute';
            isOpen = true;
        } else {
           
            if (window.innerWidth <= 600) {
                videoContainer.style.right = '-400px';
            }

            else if (window.innerWidth > 600 && 1024 >= window.innerWidth) {
                videoContainer.style.right = '-600px';
            }

            else {
                videoContainer.style.right = '-800px'; 
            }
            videoContainer.style.position = 'fixed';
            isOpen = false;
        }
    });
});

// ................................................................randombackgroundcolor effect
function changeRandomBackgroundColor() {
    var lis = document.querySelectorAll('#experience-list li');
    var randomIndex = Math.floor(Math.random() * lis.length);

    lis.forEach(function (li) {
        li.style.backgroundColor = '';
    });

    lis[randomIndex].style.backgroundColor = '#C00000';
}


setInterval(changeRandomBackgroundColor, 200);


// ....................................................................................imge slider effect
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container-slide .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

           
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

      
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// ------------------------------------------------------------contact form validation
function submitForm() {
    var form = document.getElementById("contactForm");
    var nameInput = form.elements["Name"];
    var emailInput = form.elements["email"];
    var messageInput = form.elements["Message"];

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill out all required fields.");
        return;
    }

  
    document.getElementById("successMessage").style.display = "block";
    
    form.reset();
}
