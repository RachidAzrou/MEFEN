// Voorbeeld: Laad vrijwilligers in de lijst
document.getElementById('vrijwilligersLink').addEventListener('click', function() {
    const vrijwilligers = [
        { naam: "Rachid Azrou", telefoon: "0612345678" },
        { naam: "Ahmed El Amrani", telefoon: "0687654321" }
    ];

    const planning = document.getElementById('planning');
    planning.innerHTML = vrijwilligers.map(v => `<p>${v.naam} - ${v.telefoon}</p>`).join('');
});