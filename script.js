/* Alfredo Gonzales de Categoria A y con 1-3 años de servicio recibira:
Sueldo Basico: S/ 3,400
Bonificacion por años de servicio: S/ 510
Sueldo Neto: S/ 3,128 (80% del sueldo bruto total)*/
//class="text-center fw-light"
/*
/*let tarifaxhora = [
    {id:A, hora:"40 soles"}
    {id:B, hora:"35 soles"}
    {id:C, hora:"30 soles"}
]
*/
//form.addEventListener("enviar", (e) => {e.preventDefault()})

const respuesta = document.getElementById("respuesta")

function calcular () {
    let sueldoBasico = document.getElementById("categoria").value * document.getElementById("hora").value
    let bonificacion = sueldoBasico * document.getElementById("añoServicio").value / 100
    let sueldoBruto = sueldoBasico + bonificacion
    let sueldoNeto = sueldoBruto * 80 / 100

    let categoria = document.getElementById(categoria);
    let texto_categoria = categoria.options[categoria.selectedIndex].text;

    let añoServicio = document.getElementById("year")
    let text_añoServicio = añoServicio.options[añoServicio.selectedIndex].text;

    respuesta.innerHTML=""

    let p = document.createElement("p")
    p.textContent = `${document.getElementById("nombre").value} ${document.getElementById("apellido").value} de Categoria ${texto_categoria} y con ${text_añoServicio} años de servicio a la empresa, recibirá `
    respuesta.append(p)

    p = document.createElement("p")
    p.textContent = `Sueldo Básico: S/ ${sueldoBasico}`
    respuesta.append(p)
    
    p = document.createElement("p")
    p.textContent = `Bonificación por años de servicio: S/ ${bonificacion}`
    respuesta.append(p)

    p = document.createElement("p")
    p.textContent = `Sueldo Neto: S/ ${sueldoNeto} (80% del sueldo bruto total)`
    respuesta.append(p)
}

