document.getElementById('afwezigMelden').addEventListener('click', function() {
    const startDatum = prompt('Startdatum (YYYY-MM-DD):');
    const eindDatum = prompt('Einddatum (YYYY-MM-DD):');

    if (startDatum && eindDatum) {
        alert(`Afwezigheid gemeld van ${startDatum} tot ${eindDatum}`);
        // Hier kun je een API-call toevoegen om de afwezigheid naar de server te sturen
    }
});