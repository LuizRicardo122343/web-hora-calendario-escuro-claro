function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = now.toLocaleTimeString();
}

function updateCalendar() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = now.toLocaleDateString('pt', options);
}

updateClock();
updateCalendar();
setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
setInterval(updateCalendar, 60000); // Atualiza o calendário a cada minuto



///////////////////////
document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Trocar para Modo Claro';
    } else {
        this.textContent = 'Trocar para Modo Escuro';
    }
});

