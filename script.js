
function submitform(event){
    event.preventDefault()



    let firstname = document.getElementById("firstname").value;
    console.log(firstname)

    let lastname = document.getElementById("lastname").value;
    console.log(lastname)

    let email = document.getElementById("email").value;
    console.log(email)

    let hoursofwork = document.getElementById("hoursofwork").value;
    console.log(hoursofwork)
    let oredilavoro = parseInt(hoursofwork)

    let typeofwork = document.getElementById("typeofwork").value;
    if(typeofwork == 1){
        console.log("Backend Development")
    }else if (typeofwork==2){
        console.log("Frontend Development")
    }else if(typeofwork==3){
        console.log("Study and analysis of the project")
    }else{
        alert("Non hai inserito un tipo di lovoro")
    }

    let discountcode = document.getElementById("discountcode").value;
    console.log(discountcode)

    let message = document.getElementById("message").value;
    console.log(message)
    


   
    
    let costo = 1
    if(typeofwork==1){
        costo=20.50
        
    }else if(typeofwork==2){
        costo=15.30
    
    }else if(typeofwork==3){
        costo=33.60
    
    }else{
        costo=1
    
    }
    let prezzoprogetto = (oredilavoro * costo)
    
    
    console.log(prezzoprogetto)
    
    

}

// Calcolo prezzo progetto
