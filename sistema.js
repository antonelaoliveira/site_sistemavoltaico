let resposta = document.getElementById('resposta')

function principal(){

    let volts = Number(document.getElementById(`volts`).value)
    let placas = Number(document.getElementById(`placas`).value)

    let kWh = (volts / placas) * 4.6 * 0.75 * 0.12

    console.log(kWh)

    resposta.innerHTML = ``
    resposta.innerHTML += `A energia utilizada será de: ${kWh.toFixed(2)} kWh`
}



