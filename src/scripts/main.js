AOS.init();

let dataDoEvento = new Date(`March 10, ${new Date().getFullYear()} 7:00:00`);
let timeStampDoEvento = dataDoEvento.getTime();

if (new Date().getTime() > timeStampDoEvento) {
    dataDoEvento.setFullYear(dataDoEvento.getFullYear() + 1);
    timeStampDoEvento = dataDoEvento.getTime();
}

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        dataDoEvento.setFullYear(dataDoEvento.getFullYear() + 1);
        timeStampDoEvento = dataDoEvento.getTime();
    }
}, 1000);