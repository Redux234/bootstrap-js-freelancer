let codicisconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]


function submitform(event) {
    event.preventDefault()



    let firstname = document.getElementById("firstname").value;
    console.log(firstname)

    let lastname = document.getElementById("lastname").value;
    console.log(lastname)

    let email = document.getElementById("email").value;

    if (email.includes("@")) {
        console.log(email)
    } else {
        alert("Non hai inserito una email")
    }

    let hoursofwork = document.getElementById("hoursofwork").value;
    console.log(hoursofwork)
    let oredilavoro = parseInt(hoursofwork)

    let typeofwork = document.getElementById("typeofwork").value;
    if (typeofwork == 1) {
        console.log("Backend Development")
    } else if (typeofwork == 2) {
        console.log("Frontend Development")
    } else if (typeofwork == 3) {
        console.log("Study and analysis of the project")
    } else {
        alert("Non hai inserito un tipo di lovoro")
    }

    let discountcode = document.getElementById("discountcode").value;
    console.log(discountcode)



    let message = document.getElementById("message").value;
    console.log(message)

    let costo = 1
    if (typeofwork == 1) {
        costo = 20.50

    } else if (typeofwork == 2) {
        costo = 15.30

    } else if (typeofwork == 3) {
        costo = 33.60

    } else {
        costo = 0

    }

    let prezzoprogetto = 0
    

    if (codicisconto.includes(discountcode)) {
        prezzoprogetto = (oredilavoro * costo) * 0.75
        let prezzoscontatoarrotondato = prezzoprogetto.toFixed(2)
        console.log(prezzoscontatoarrotondato)
        document.getElementById("prezzoscontato").innerHTML = "Il prezzo del progetto è: " + prezzoscontatoarrotondato + " €"
    } else {
        alert("Il codice inserito non è valido")
        prezzoprogetto = (oredilavoro * costo)
        let prezzoarrotondato = prezzoprogetto.toFixed(2)
        document.getElementById("prezzoscontato").innerHTML = "Il prezzo del progetto è: " + prezzoarrotondato + " €"
        console.log(prezzoarrotondato)

    }





    console.log(codicisconto)
}



