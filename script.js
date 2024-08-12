document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        
        // Ha már nyitva van, zárjuk be
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
        } else {
            // Előbb zárjuk be az összes többit
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            
            // Majd nyissuk ki az aktuálisat
            accordionItem.classList.add('active');
        }
    });
});