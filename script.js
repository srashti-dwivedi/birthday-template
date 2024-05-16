// script.js
function showSurprise() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.toggle('hidden');

    if (!surpriseElement.classList.contains('hidden')) {
        const confettiContainer = surpriseElement.querySelector('.confetti');
        if (confettiContainer.children.length === 0) {
            for (let i = 0; i < 100; i++) {
                const confetto = document.createElement('div');
                confettiContainer.appendChild(confetto);
            }
        }
    }
}
