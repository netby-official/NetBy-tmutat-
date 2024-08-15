// Accordions kezelése
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        
        // Toggle 'active' class
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = null;
        } else {
            // Close all open accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });
            // Open the clicked accordion item
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
});


// Keresési funkció
function searchGuides() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.accordion-content ul li').forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Random érdekes tények megjelenítése
const funFacts = [
    "A HTML a HyperText Markup Language rövidítése.",
    "A CSS felelős az oldalak kinézetéért.",
    "A JavaScript teszi lehetővé az interaktív funkciókat.",
    "A HTML5 számos új elemet vezetett be, mint a <header>, <footer>, <article>.",
    "A Flexbox és a Grid Layout segítségével könnyen elrendezhetők a weboldal elemei.",
    "A CSS lehetővé teszi az animációk készítését.",
    "A JavaScript több mint 95%-ban jelen van a modern weboldalakon.",
    "A HTML és a CSS a weboldalak struktúrájáért és megjelenéséért felelős, míg a JavaScript interaktivitást ad hozzá.",
    "Az első weboldal 1991-ben készült, és csak szöveges információkat tartalmazott.",
    "A CSS-t 1996-ban fejlesztették ki, hogy elkülönítse a megjelenést a HTML kódtól.",
    "A JavaScriptet eredetileg Mocha néven ismerték a fejlesztés korai szakaszában.",
    "A World Wide Web feltalálója Tim Berners-Lee, aki 1989-ben alkotta meg az első weboldalt.",
    "A 'responsive' design 2010 után vált széles körben elterjedtté a mobil eszközök növekvő népszerűségének köszönhetően.",
    "A modern HTML szabványokat a W3C (World Wide Web Consortium) felügyeli.",
    "A JavaScript nem azonos a Java programozási nyelvvel, annak ellenére, hogy hasonló a nevük.",
    "A CSS változók lehetővé teszik a dinamikus stílusokat, amelyeket könnyen lehet újra felhasználni egy projektben.",
    "A HTML lehetőséget biztosít arra, hogy képeket, videókat és multimédiás tartalmakat ágyazz be a weboldalba.",
    "A webfejlesztésben a 'full-stack' fejlesztő olyan szakember, aki mind a frontend, mind a backend technológiákhoz ért.",
    "A JSON (JavaScript Object Notation) egy könnyű adatcsere formátum, amelyet gyakran használnak az API-k kommunikációjára."
];


document.getElementById('funFact').textContent = funFacts[Math.floor(Math.random() * funFacts.length)];

// Visszajelzés űrlap megjelenítése
function showFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

// Visszajelzés beküldése
function submitFeedback() {
    alert('Köszönjük a visszajelzésed!');
    document.getElementById('feedbackForm').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    // Például itt lehetne AJAX kérés, hogy ellenőrizzük a fájl létezését,
    // de mivel a fájl nem található, csak az alap HTML és CSS mutatkozik meg.
});

document.addEventListener("DOMContentLoaded", function() {
    // Az error-message elem lekérése
    var errorMessage = document.querySelector(".error-message");
    
    // A hibaüzenet animált megjelenítése
    if (errorMessage) {
        errorMessage.classList.add("visible");
    }
});