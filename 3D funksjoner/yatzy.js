var spiller1 = "Spiller 1";

        var spiller2 = "Spiller 2";

        var spiller2 = "Spiller 3";
        function endreNavn() {

            spiller1 = prompt("Endre Spiller1 navn");

            spiller2 = prompt("Endre Spiller2 navn");

            spiller3 = prompt("Endre Spiller3 navn");

            document.querySelector("p.Spiller1").innerHTML = spiller1;

            document.querySelector("p.Spiller2").innerHTML = spiller2;

            document.querySelector("p.Spiller3").innerHTML = spiller3;

        }

        let btnTerning1 = document.getElementById("btnTerning1");
        let btnTerning2 = document.getElementById("btnTerning2");
        let btnTerning3 = document.getElementById("btnTerning3");
        let btnTerning4 = document.getElementById("btnTerning4");
        let btnTerning5 = document.getElementById("btnTerning5");
        let btnKastAlle = document.getElementById("btnKastAlle");

        let HoldT1 = document.getElementById("HoldT1");
        let HoldT2 = document.getElementById("HoldT2");
        let HoldT3 = document.getElementById("HoldT3");
        let HoldT4 = document.getElementById("HoldT4");
        let HoldT5 = document.getElementById("HoldT5");

        let P1Enere = document.getElementById("tdP1Enere");
        let P2Enere = document.getElementById("tdP2Enere");
        let P3Enere = document.getElementById("tdP3Enere");

        let P1Toere = document.getElementById("tdP1Toere");
        let P2Toere = document.getElementById("tdP2Toere");
        let P3Toere = document.getElementById("tdP3Toere");

        let P1Treere = document.getElementById("tdP1Treere");
        let P2Treere = document.getElementById("tdP2Treere");
        let P3Treere = document.getElementById("tdP3Treere");

        let P1Firere = document.getElementById("tdP1Firere");
        let P2Firere = document.getElementById("tdP2Firere");
        let P3Firere = document.getElementById("tdP3Firere");

        let P1Femere = document.getElementById("tdP1Femere");
        let P2Femere = document.getElementById("tdP2Femere");
        let P3Femere = document.getElementById("tdP3Femere");

        let P1Seksere = document.getElementById("tdP1Seksere");
        let P2Seksere = document.getElementById("tdP2Seksere");
        let P3Seksere = document.getElementById("tdP3Seksere");

        let spiller1Sum = document.getElementById("tdspiller1Sum");
        let spiller2Sum = document.getElementById("tdspiller2Sum");
        let spiller3Sum = document.getElementById("tdspiller3Sum");

        let BonusTabellP1 = document.getElementById("tdBonusTabellP1");
        let BonusTabellP2 = document.getElementById("tdBonusTabellP2");
        let BonusTabellP3 = document.getElementById("tdBonusTabellP3");



        let ResultatP1Enere;
        let ResultatP2Enere;
        let ResultatP3Enere;

        let ResulratP1Toere;
        let ResultatP2Toere;
        let ResultatP3Toere;

        let ResultatP1Treere;
        let ResultatP2Treere;
        let ResultatP3Treere;

        let ResultatP1Firere;
        let ResultatP2Firere;
        let ResultatP3Firere;

        let ResultatP1Femere;
        let ResultatP2Femere;
        let ResultatP3Femere;

        let ResultatP1Seksere;
        let ResultatP2Seksere;
        let ResultatP3Seksere;

        let tdOneDuplicateP1 = document.getElementById("tdOneDuplicateP1")
        let tdOneDuplicateP2 = document.getElementById("tdOneDuplicateP2")
        let tdOoneDuplicateP3 = document.getElementById("tdOneDuplicateP3")



        let Terning1;
        let Terning2;
        let Terning3;
        let Terning4;
        let Terning5;


        let terningArray = [Terning1, Terning2, Terning3, Terning4, Terning5];








        /*Funksjonen kjører hver av kastTerning-funksjonene. Det aktiveres ved at man trykker på buttonen med id btnKastAlle*/
        function kastAlle() {
            return kastTerning1() + kastTerning2() + kastTerning3() + kastTerning4() + kastTerning5();
        }
        btnKastAlle.onclick = kastAlle;



        /*Funksjonen til hver av terningene sier at hvis checkboxen som tilhører hver av funksjonen er false, vil programmet kjøre terningen. Dersom det ikke er checked vil funksjonen til akkurat den terningen forbli i ro.*/
        function kastTerning1() {
            if (HoldT1.checked == false) {
                Terning1 = parseInt(Math.random() * 6) + 1
                btnTerning1.innerHTML = Terning1
                terningArray[0] = Terning1
            }
        }


        function kastTerning2() {
            if (HoldT2.checked == false) {
                Terning2 = parseInt(Math.random() * 6) + 1
                btnTerning2.innerHTML = Terning2
                terningArray[1] = Terning2
            }
        }

        function kastTerning3() {
            if (HoldT3.checked == false) {
                Terning3 = parseInt(Math.random() * 6) + 1
                btnTerning3.innerHTML = Terning3
                terningArray[2] = Terning3

            }
        }

        function kastTerning4() {
            if (HoldT4.checked == false) {
                Terning4 = parseInt(Math.random() * 6) + 1
                btnTerning4.innerHTML = Terning4
                terningArray[3] = Terning4
            }
        }
        function kastTerning5() {
            if (HoldT5.checked == false) {
                Terning5 = parseInt(Math.random() * 6) + 1
                btnTerning5.innerHTML = Terning5
                terningArray[3] = Terning5
            }
        }

        /*Programmet har en variabel altså ResultatP1Enere (Dette vil være summen av alle enere). Den har verdien er lik 0, slik at det kan nullstille hver gang funksjonen er aktivert. Deretter lagde jeg en array med hver av terningene. I tillegg til en forløkke som sier: dersom et ledd i arrayen er lik 1 vil det legge på terningene som tilsvarer 1 sammen med ResultatP1Enere. Resten av funksjonene har lik form, eneste forskjellen er spiller og tall.*/
        function P1ResultatEnere() {
            ResultatP1Enere = 0
            let P1EnereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1EnereArray.length; i++) {
                if (P1EnereArray[i] == 1) {
                    ResultatP1Enere += P1EnereArray[i];
                }
            }

            tdP1Enere.innerHTML = ResultatP1Enere
        }
        tdP1Enere.onclick = P1ResultatEnere;

        function P2ResultatEnere() {
            ResultatP2Enere = 0
            let P2EnereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2EnereArray.length; i++) {
                if (P2EnereArray[i] == 1) {
                    ResultatP2Enere += P2EnereArray[i];
                }
            }

            tdP2Enere.innerHTML = ResultatP2Enere
        }
        tdP2Enere.onclick = P2ResultatEnere;

        function P3ResultatEnere() {
            ResultatP3Enere = 0
            let P3EnereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3EnereArray.length; i++) {
                if (P3EnereArray[i] == 1) {
                    ResultatP3Enere += P3EnereArray[i];
                }
            }

            tdP3Enere.innerHTML = ResultatP3Enere
        }
        tdP3Enere.onclick = P3ResultatEnere;

        function P1ResultatToere() {
            ResultatP1Toere = 0
            let P1ToereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1ToereArray.length; i++) {
                if (P1ToereArray[i] == 2) {
                    ResultatP1Toere += P1ToereArray[i];
                }
            }

            tdP1Toere.innerHTML = ResultatP1Toere
        }
        tdP1Toere.onclick = P1ResultatToere;

        function P2ResultatToere() {
            ResultatP2Toere = 0
            let P2ToereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2ToereArray.length; i++) {
                if (P2ToereArray[i] == 2) {
                    ResultatP2Toere += P2ToereArray[i];
                }
            }

            tdP2Toere.innerHTML = ResultatP2Toere
        }
        tdP2Toere.onclick = P2ResultatToere;

        function P3ResultatToere() {
            ResultatP3Toere = 0
            let P3ToereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3ToereArray.length; i++) {
                if (P3ToereArray[i] == 2) {
                    ResultatP3Toere += P3ToereArray[i];
                }
            }

            tdP3Toere.innerHTML = ResultatP3Toere
        }
        tdP3Toere.onclick = P3ResultatToere;

        function P1ResultatTreere() {
            ResultatP1Treere = 0
            let P1TreereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1TreereArray.length; i++) {
                if (P1TreereArray[i] == 3) {
                    ResultatP1Treere += P1TreereArray[i];
                }
            }

            tdP1Treere.innerHTML = ResultatP1Treere
        }
        tdP1Treere.onclick = P1ResultatTreere;

        function P2ResultatTreere() {
            ResultatP2Treere = 0
            let P2TreereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2TreereArray.length; i++) {
                if (P2TreereArray[i] == 3) {
                    ResultatP2Treere += P2TreereArray[i];
                }
            }

            tdP2Treere.innerHTML = ResultatP2Treere
        }
        tdP2Treere.onclick = P2ResultatTreere;

        function P3ResultatTreere() {
            ResultatP3Treere = 0
            let P3TreereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3TreereArray.length; i++) {
                if (P3TreereArray[i] == 3) {
                    ResultatP3Treere += P3TreereArray[i];
                }
            }

            tdP3Treere.innerHTML = ResultatP3Treere
        }
        tdP3Treere.onclick = P3ResultatTreere;

        function P1ResultatFirere() {
            ResultatP1Firere = 0
            let P1FirereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1FirereArray.length; i++) {
                if (P1FirereArray[i] == 4) {
                    ResultatP1Firere += P1FirereArray[i];
                }
            }

            tdP1Firere.innerHTML = ResultatP1Firere
        }
        tdP1Firere.onclick = P1ResultatFirere;

        function P2ResultatFirere() {
            ResultatP2Firere = 0
            let P2FirereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2FirereArray.length; i++) {
                if (P2FirereArray[i] == 4) {
                    ResultatP2Firere += P2FirereArray[i];
                }
            }

            tdP2Firere.innerHTML = ResultatP2Firere
        }
        tdP2Firere.onclick = P2ResultatFirere;

        function P3ResultatFirere() {
            ResultatP3Firere = 0
            let P3FirereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3FirereArray.length; i++) {
                if (P3FirereArray[i] == 4) {
                    ResultatP3Firere += P3FirereArray[i];
                }
            }

            tdP3Firere.innerHTML = ResultatP3Firere
        }
        tdP3Firere.onclick = P3ResultatFirere;

        function P1ResultatFemere() {
            ResultatP1Femere = 0
            let P1FemereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1FemereArray.length; i++) {
                if (P1FemereArray[i] == 5) {
                    ResultatP1Femere += P1FemereArray[i];
                }
            }

            tdP1Femere.innerHTML = ResultatP1Femere
        }
        tdP1Femere.onclick = P1ResultatFemere;

        function P2ResultatFemere() {
            ResultatP2Femere = 0
            let P2FemereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2FemereArray.length; i++) {
                if (P2FemereArray[i] == 5) {
                    ResultatP2Femere += P2FemereArray[i];
                }
            }

            tdP2Femere.innerHTML = ResultatP2Femere
        }
        tdP2Femere.onclick = P2ResultatFemere;

        function P3ResultatFemere() {
            ResultatP3Femere = 0
            let P3FemereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3FemereArray.length; i++) {
                if (P3FemereArray[i] == 5) {
                    ResultatP3Femere += P3FemereArray[i];
                }
            }

            tdP3Femere.innerHTML = ResultatP3Femere
        }
        tdP3Femere.onclick = P3ResultatFemere;

        function P1ResultatSeksere() {
            ResultatP1Seksere = 0
            let P1SeksereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P1SeksereArray.length; i++) {
                if (P1SeksereArray[i] == 6) {
                    ResultatP1Seksere += P1SeksereArray[i];
                }
            }

            tdP1Seksere.innerHTML = ResultatP1Seksere
        }
        tdP1Seksere.onclick = P1ResultatSeksere;

        function P2ResultatSeksere() {
            ResultatP2Seksere = 0
            let P2SeksereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P2SeksereArray.length; i++) {
                if (P2SeksereArray[i] == 6) {
                    ResultatP2Seksere += P2SeksereArray[i];
                }
            }

            tdP2Seksere.innerHTML = ResultatP2Seksere
        }
        tdP2Seksere.onclick = P2ResultatSeksere;

        function P3ResultatSeksere() {
            ResultatP3Seksere = 0
            let P3SeksereArray = [Terning1, Terning2, Terning3, Terning4, Terning5]
            for (let i = 0; i < P3SeksereArray.length; i++) {
                if (P3SeksereArray[i] == 6) {
                    ResultatP3Seksere += P3SeksereArray[i];
                }
            }

            tdP3Seksere.innerHTML = ResultatP3Seksere
        }
        tdP3Seksere.onclick = P3ResultatSeksere;


        //Dette er koden til summen til hvert spiller. Vi bruker ResultatP... til hver av funksjonene. Siden de allerede er deklarert kan vi derfor gjøre det. sum-funksjonene er avhengig av at spillerne har fylt ut brettet før sum. //
        function P1Sum() {
            sumP1 = ResultatP1Enere + ResultatP1Toere + ResultatP1Treere + ResultatP1Firere + ResultatP1Femere + ResultatP1Seksere
            spiller1Sum.innerHTML = sumP1
        }
        tdspiller1Sum.onclick = P1Sum;

        function P2Sum() {
            sumP2 = ResultatP2Enere + ResultatP2Toere + ResultatP2Treere + ResultatP2Firere + ResultatP2Femere + ResultatP2Seksere
            spiller2Sum.innerHTML = sumP2
        }
        tdspiller2Sum.onclick = P2Sum;

        function P3Sum() {
            sumP3 = ResultatP3Enere + ResultatP3Toere + ResultatP3Treere + ResultatP3Firere + ResultatP3Femere + ResultatP3Seksere
            spiller3Sum.innerHTML = sumP3
        }
        tdspiller3Sum.onclick = P3Sum;

        /*Ganske enkel kode der jeg lager to lokal variabler, og tester f.eks. hvis sum til spiller 1 er høyere en 63 vil det dukke opp på td-elementen. Hvis ikke vil det dukke opp 0  */

        function P1Bonus() {
            let bonusP1 = 50
            let bonusP1Taper = 0
            if (sumP1 > 63) {
                tdBonusTabellP1.innerHTML = bonusP1
            }
            else {
                tdBonusTabellP1.innerHTML = bonusP1Taper
            }
        }
        tdBonusTabellP1.onclick = P1Bonus;

        function P2Bonus() {
            let bonusP2 = 50
            let bonusP2Taper = 0
            if (sumP2 > 63) {
                tdBonusTabellP2.innerHTML = bonusP2
            }
            else {
                tdBonusTabellP2.innerHTML = bonusP2Taper
            }
        }
        tdBonusTabellP2.onclick = P2Bonus;

        function P3Bonus() {
            let bonusP3 = 50
            let bonusP3Taper = 0
            if (sumP3 > 63) {
                tdBonusTabellP3.innerHTML = bonusP3
            }
            else {
                tdBonusTabellP3.innerHTML = bonusP3Taper
            }
        }
        tdBonusTabellP3.onclick = P3Bonus;


//Funksjonen sjekker om to like for hver av terningene. Om det stemmer med if-vilkårene, deretter trenger vi bare å gange verdien til Terning med 2 fordi de skal være like. Jeg får bare ikke til å ta den høyeste verdien av de to parrene
        function ettParP1() {
            if (Terning1 == Terning2 || Terning1 == Terning3 || Terning1 == Terning4 || Terning1 == Terning5) {
                Terning1 = Terning1 * 2
                tdOneDuplicateP1.innerHTML = Terning1
            }
            if (Terning2 == Terning3 || Terning2 == Terning4 || Terning2 == Terning5) {
                Terning2 = Terning2 * 2
                tdOneDuplicateP1.innerHTML = Terning2
            }
            if (Terning3 == Terning4 || Terning3 == Terning5) {
                Terning3 = Terning3 * 2
                tdOneDuplicateP1.innerHTML = Terning3
            }
            if (Terning4 == Terning5) {
                Terning4 == Terning4 * 2
                tdOneDuplicateP1.innerHTML = Terning4

            }
        }
        tdOneDuplicateP1.onclick = ettParP1

        function ettParP2() {
            if (Terning1 == Terning2 || Terning1 == Terning3 || Terning1 == Terning4 || Terning1 == Terning5) {
                Terning1 = Terning1 * 2
                tdOneDuplicateP2.innerHTML = Terning1
            }
            if (Terning2 == Terning3 || Terning2 == Terning4 || Terning2 == Terning5) {
                Terning2 = Terning2 * 2
                tdOneDuplicateP2.innerHTML = Terning2
            }
            if (Terning3 == Terning4 || Terning3 == Terning5) {
                Terning3 = Terning3 * 2
                tdOneDuplicateP2.innerHTML = Terning3
            }
            if (terning4 == Terning5) {
                Terning4 = Terning4 * 2
                tdOneDuplicateP2.innerHTML = Terning4

            }

        }
        tdOneDuplicateP2.onclick = ettParP2

        function ettParP3() {
            if (Terning1 == Terning2 || Terning1 == Terning3 || Terning1 == Terning4 || Terning1 == Terning5) {
                Terning1 = Terning1 * 2
                tdOneDuplicateP3.innerHTML = Terning1
            }
            if (Terning2 == Terning3 || Terning2 == Terning4 || Terning2 == Terning5) {
                Terning2 = Terning2 * 2
                tdOneDuplicateP3.innerHTML = Terning2
            }
            if (Terning3 == Terning4 || Terning3 == Terning5) {
                Terning3 = Terning3 * 2
                tdOneDuplicateP3.innerHTML = Terning3
            }
            if (terning4 == Terning5) {
                Terning4 = Terning4 * 2
                tdOneDuplicateP3.innerHTML = Terning4

            }


        }
        tdOneDuplicateP3.onclick = ettParP3



        /* Ikke ferdig med programmet
        function toParP1() {
            if (Terning1 == Terning2 && Terning1 == Terning3 || Terning1 == Terning2 && Terning1 == Terning4 || Terning1 == Terning2 && Terning1 == Terning5 || Terning1 == Terning3 && Terning1 == Terning4) {
                Terning1 = Terning1 * 2
                oneDuplicateP1.innerHTML = Terning1
            }
            if (Terning2 == Terning3 || Terning2 == Terning4 || Terning2 == Terning5) {
                Terning2 = Terning2 * 2
                oneDuplicateP1.innerHTML = Terning2
            }
            if (Terning3 == Terning4 || Terning3 == Terning5) {
                Terning3 = Terning3 * 2
                oneDuplicateP1.innerHTML = Terning3
            }
            if (terning4 == Terning5) {
                Terning4 = Terning4 * 2
                oneDuplicateP1.innerHTML = Terning4

            }

        }
*/