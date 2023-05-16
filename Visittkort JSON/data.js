        //Program til nedtrekksliste
        var PersonligInfo = document.getElementById("personInfo")

        const visittKort = 
        [
            {"navn":"Vilhelm Kleivi", "adresse":"AndreasHelleland veien 32", "stilling":"Proff fotballspiller", "fødselsdato":"21. Mars", "telefon":"6969696969696", "kjønn":"Jente"},
        
            {"navn":"Atle Skaug Skjelbred", "adresse":"DavidRostad veien 12", "stilling":"Nrk supergjest", "fødselsdato":"24. Desember", "telefon":"67409358", "kjønn":"idk"},
        
            {"navn":"Philip Knudsen", "adresse": "SolvangVeien 53", "stilling":"Monster Fanatiker", "fødselsdato":"2. Mai", "telefon":"112", "kjønn":"Gutt"}
        ]
    
        for (element in visittKort){
            console.log(element)
        PersonligInfo.innerHTML += "<option>"+ visittKort[element].navn + "</option>";
        }

        

        //For DOM til input av personlig
        let ferdigKnappEl = document.querySelector("button");
        let forerkortJaEl = document.querySelector("#forerkortJa");
        let forerkortNeiEl = document.querySelector("#forerkortNei");
        let solidBorderEl = document.querySelector("#solidBorder");
        let dottedBorderEl = document.querySelector("#dottedBorder");
        let dashedBorderEl = document.querySelector("#dashedBorder");
        ferdigKnappEl.addEventListener("click", showRussekort);

        //til bilde
        let inpFilNavnEl = document.querySelector("#inpFilNavn");
        inpFilNavnEl.addEventListener('change', handleFileSelect);


        //ID fra DIV hoved
        let navnNyEl = document.querySelector("#navnNy");
        let adresseNyEl = document.querySelector("#adresseNy");
        let stillingNyEl = document.querySelector("#stillingNy");
        let fodseldatoNyEl = document.querySelector("#fodseldatoNy");
        let telefonNummerNyEl = document.querySelector("#telefonNummerNy");
        let kjonnNyEl = document.querySelector("#kjonnNy"); 
        let forerkortNyEl = document.querySelector("#forerkortNy");



        //For CSS farger 
        let hovedEl = document.querySelector("#hoved");
        let gliderHueEl = document.querySelector("#gliderHue");
        let gliderSaturationEl = document.querySelector("#gliderSaturation");
        let gliderLightnessEl = document.querySelector("#gliderLightness");
        let resultatEl = document.querySelector("#resultat");


        //DOM til farge skifting
        gliderHueEl.addEventListener("change", byttFarge);
        gliderSaturationEl.addEventListener("change", byttFarge);
        gliderLightnessEl.addEventListener("change", byttFarge);
        function byttFarge() {
            let h = gliderHueEl.value;
            let s = gliderSaturationEl.value;
            let l = gliderLightnessEl.value;
            hovedEl.style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)";
            resultatEl.innerHTML = "Fargen som brukes nå, er hsl(" + h + "," + s + "%," + l + "%).";
        }

        function showRussekort() {
            //går gjennom visittkort med foreach funksjon. Funksjonen er en spesiell måte å skrive en array på, det kalles en arrow funksjon. dette er gjort med tanke på at nan har lyst til å bruke en parameter. Som skal brukes til å sjekke om valuen til en option i nedtrekksliste er det samme som navn i objektet. 
            visittKort.forEach((person)=>{
                console.log(person)
                //sjekker om person navn i json matcher med option du valgde i personinfo
                if(person.navn===PersonligInfo.value){
                    navnNyEl.innerHTML = "Navn:" + person.navn
                    adresseNyEl.innerHTML = "Adresse: " + person.adresse
                    stillingNyEl.innerHTML = "Stilling: " + person.stilling
                    fodseldatoNyEl.innerHTML = "Fødselsdato: " + person.fødselsdato
                    telefonNummerNyEl.innerHTML = "Telefon-nummer: (47+) " + person.telefon
                    kjonnNyEl.innerHTML = "Kjønn: " + person.kjønn
                    if (forerkortJaEl.checked == true) {
                        forerkortNyEl.innerHTML = "Førerkort status: " + forerkortJaEl.value
                    }
                    if (forerkortNeiEl.checked == true) {
                        forerkortNyEl.innerHTML = "Førerkort status: " + forerkortNeiEl.value
                    }
                    if (solidBorderEl.checked == true) {
                        hovedEl.style.border = solidBorderEl.value
                    }
                    if (dottedBorderEl.checked == true) {
                        hovedEl.style.border = dottedBorderEl.value
                    }
                    if (dashedBorderEl.checked == true) {
                        hovedEl.style.border = dashedBorderEl.value
                    }
                    }
                })

        }
        function handleFileSelect(event) {
            let file = event.target.files[0]
            let reader = new FileReader()
            reader.onload = function (event) {
                let imagePreviewEl = document.querySelector('#bildeNy')
                imagePreviewEl.src = event.target.result
            }
            reader.readAsDataURL(file)
        }