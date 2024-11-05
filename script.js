// Data e hora de referência
const targetDate = new Date("2024-07-23T17:18:00");

// Função para calcular o tempo decorrido
function updateTimer() {
    const now = new Date();
    const timeDiff = now - targetDate;

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Atualiza o conteúdo de cada bloco de tempo
    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Atualiza o contador a cada 1 segundo
setInterval(updateTimer, 1000);

// Inicializa o contador
updateTimer();
