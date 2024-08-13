// Accordions kezelése
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            accordionItem.classList.add('active');
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
    "A HTML és a CSS a weboldalak struktúrájáért és megjelenéséért felelős, míg a JavaScript interaktivitást ad hozzá."
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