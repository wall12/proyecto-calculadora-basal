const CALCULAR = document.getElementById('calcular'); //tomamos el elemento por id
const ERROR = document.getElementById('error');
const DIA = document.getElementById('dia');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue el dato
    if(DATO > 0 && DATO <= 30){ 
        ERROR.style.display = 'none'
        let volDiario = calcFlujo(DATO);
        let flujo = Math.round(volDiario/24)
        let mantenimiento = Math.round(flujo*1.5);
        DIA.innerHTML =  volDiario + ' cc/dia';
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimiento + ' cc/hr';
        DIA.style.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } 
        else if (DATO > 30){
            ERROR.style.display = 'none'
            let flujo = calcSuperficieCorporal(DATO);
            let resulsc1 = flujo * 1500
            let resulsc2 = flujo * 2000
            FLU.innerHTML = 'SC*1500: ' + Math.round(resulsc1) + ' cc/hr';
            MAN.innerHTML = 'SC*2000: ' + Math.round(resulsc2) + ' cc/hr';
            DIA.style.display = 'none'
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            }
            else {
                ERROR.style.display = 'block';
                DIA.style.display = 'block';
                FLU.style.display = 'none';
                MAN.style.display = 'none';
            }
        });

function calcFlujo(peso){ //funcion para calcular el metodo Holliday-Segar
    let resto = peso;
    let flujo = 0;
    if (resto <= 10) {
        flujo = resto * 100;
    } 
    if (resto <= 20) {
        flujo = 1000 + (resto - 10) * 50;
    } 
    else {
        flujo = 1000 + 500 + (resto - 20) * 20;
    }
    return flujo;
}
function calcSuperficieCorporal(peso){ //funcion para calcular el metodo de superficie corporal
    let resto = peso;
    let flujo = 0;
    flujo = ((resto * 4) + 7) / (resto + 90);
    return flujo;
}
