const bombillo = document.getElementById("bombillo");

function encenderBombillo() {
    bombillo.classList.add("encendido");
    bombillo.classList.remove("apagado");
}

function apagarBombillo() {
    bombillo.classList.remove("encendido");
    bombillo.classList.add("apagado");
}

const tiempos = [
    { tiempo: 500, accion: 'encender' },
    { tiempo: 800, accion: 'apagar' },
    { tiempo: 1000, accion: 'encender' },
    { tiempo: 1200, accion: 'apagar' },
    { tiempo: 1500, accion: 'encender_fin' }
];

for (let i = 0; i < tiempos.length; i++) {
    setTimeout(function() {
        if (tiempos[i].accion === 'encender') {
            encenderBombillo();
        }else if(tiempos[i].accion === 'encender_fin'){
            encenderBombillo();
        } 
        else {
            apagarBombillo();
        }
    }, tiempos[i].tiempo);
}