let deposito = parseInt(prompt('Ingresá tu capital inicial'));

let interes = parseInt(prompt ('¿Cuál es el interés anual?'));

let duracion = parseInt(prompt('¿Cuántos días querés hacer el plazo fijo?'));

let tasaInteres1 = 0.48;

let tasaInteres2 = 0.70;

let resultado = 0;

function calcular() {
    if (duracion <= 30) {
        resultado = ((tasaInteres1 / 12) * deposito) + deposito;
        alert('Tu capital final es $' + resultado);
    } else if (duracion > 30) {
        resultado = ((tasaInteres2 / 12) * deposito) + deposito;
        alert('Tu capital final es $' + resultado.toFixed(2));
    } else {
        alert('Completá todos los campos por favor');
    }
}

calcular();