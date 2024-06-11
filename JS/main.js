// =================================work category pages display=========================
var categories = document.querySelectorAll('.workCategory');
function hideAllCategories(){
    categories.forEach(category => {
        category.classList.add('d-none');
        });
        }
        
        
        function chooseCategory(CategoryId){
            hideAllCategories();
            document.getElementById(CategoryId).classList.remove('d-none');
            }
        
            
 // ===========================work category pages display end =========================



document.getElementById("navbutton").addEventListener('click', (e)=>{
    console.log("clicked");
    document.getElementById("navList").classList.add("move-left");
    document.getElementById("navList").classList.remove("move-right");
})

document.getElementById("navclose").addEventListener('click',(e)=>{
    document.getElementById("navList").classList.remove("move-left");
    document.getElementById("navList").classList.add("move-right");
})

var scrollButton =document.getElementById('moveUp');


window.addEventListener('scroll', function() {

const vh = window.innerHeight;
// Calculate 120% of the viewport height
const threshold = 1 * vh;
// Get the current scroll position
const scrollPosition = window.scrollY;

// console.log(Math.floor(scrollPosition) + " > "+ vh);
// if (Math.floor(scrollPosition)  >  vh) {
//     console.log("down");
//     scrollButton.classList.remove("d-none");
// } else {
//     console.log("top");
//     scrollButton.classList.add("d-none");
// }
});

scrollButton.addEventListener('click', function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: Adds a smooth scrolling effect
});
});


// ==================================Type writing effects ==========================
document.addEventListener('DOMContentLoaded', () => {
const typewriterElement = document.getElementById('typewriter');
const textArray = [
    "Software Engineer.....",
    "Game Developer.....",
    "UX / UI designer.....",
    "YouTuber....",
    "Tutor....."
];

let currentIndex = 0;
let charIndex = 0;
let erasing = false;
let delay = 200;
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay before starting to type the next text

function type() {
    if (!erasing) {
        if (charIndex < textArray[currentIndex].length) {
            typewriterElement.textContent += textArray[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            erasing = true;
            setTimeout(type, newTextDelay);
        }
    } else {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[currentIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasingDelay);
        } else {
            erasing = false;
            currentIndex++;
            if (currentIndex >= textArray.length) {
                currentIndex = 0;
            }
            setTimeout(type, typingDelay + 500); // Small delay before typing next text
        }
    }
}

setTimeout(type, delay);
});
// ==================================Type writing effects END ==========================

