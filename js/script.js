/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

*/

/* 
-creo variabili che mi servono per manipolazione DOM
-genero evento al click del bottone
? SE il valore selezionato è "1"
   °il valore della variabile cellNumber è 10 * 10
   °numero colonne e numero righe ha valore 10
   °sottotitolo ha valore "modalità facile"
:? ALTRIMENTI SE il valore selezionato è "2"
    °il valore della variabile cellNumber e 9 * 9
    °numero colonne e numero righe ha valore 9
    °sottotitolo ha valore "modalità intermedia"
:ALTRIMENTI
    °il valore della variabile cellNumber ha valore 7 * 7
    °numero colonne e numero righe ha valore 9
    °sottotitolo ha valore "modalità difficile" 
- creo un ciclo for per generare quadrati all'interno della griglia      
- aggiungo evento click alla cella creata
    °colora quella cella di azzurro con metodo .toggle
    °stampa in console il numero della cella cliccata


*/








// -creo variabili che mi servono per manipolazione DOM
const playButtonEl = document.getElementById("play-button")
const titolo = document.getElementById("titolo")
const gridContainerEl = document.getElementById("grid-container")
const opzioniEl = document.getElementById("opzioni")
const presentazioneEl = document.getElementById("presentazione")
let sottotitolo = document.createElement("div")
let cellNumber;
let squareDimensions;









//-genero evento al click del bottone
playButtonEl.addEventListener("click",  function(){
 
//imposto display none su h2 di presentazione pagina    
presentazioneEl.style.display = "none"    
    
// reset al click 
    sottotitolo.innerText = " ";
    gridContainerEl.innerHTML = " ";
    gridContainerEl.style.pointerEvents = "auto"
    


//? SE il valore selezionato è "1"
    if(opzioniEl.value == 1){
        cellNumber = 10 * 10
        squareDimensions = 10
        sottotitolo.innerText = "MODALITA' FACILE"
  
//:? ALTRIMENTI SE il valore selezionato è "2"        
    } else if (opzioniEl.value == 2){
        cellNumber = 9 * 9
        squareDimensions = 9
        sottotitolo.innerText = "MODALITA' INTERMEDIA"

// ALTRIMENTI       
    } else {
        cellNumber = 7 * 7
        squareDimensions = 7
        sottotitolo.innerText = "MODALITA' DIFFICILE"
        
    }

// Genero i numeri bomba a secondo del numero di celle scelto    
    generateBombs(cellNumber);
    console.log(bombe)
    
    // mostro titolo e sottotitolo   
    sottotitolo.classList.add("sottotitolo")
    titolo.append(sottotitolo)
    titolo.style.display = "flex"
    
//inizializzo contatore a zero (serve per tenere conto delle caselle "non bombe" cliccate)    
let contatore = 0

// - creo un ciclo for per generare quadrati all'interno della griglia      
for(let i = 1; i <= cellNumber;i++){

//genero quadrato con callback funzione
    let newEl = createElement(i, squareDimensions)
    
    gridContainerEl.append(newEl)

   
//- aggiungo evento click al quadrato creato    
    newEl.addEventListener("click", function(){

// ? SE  il valore del contatore è uguale a "(numero celle - numero bombe) - 1"       
        if(contatore == (cellNumber - 16) - 1){
            sottotitolo.innerText = "COMPLIMENTI HAI VINTO !"
            sottotitolo.style.color = "green"
            newEl.style.backgroundColor = "green"

//  °l'utente non può cliccare più niente all'interno della grid            
            gridContainerEl.style.pointerEvents = "none"
        
// ALTRIMENTI SE la casella cliccata non è contenuta nell'array di numeri bomba,il quadrato ottiene sfondo azzurro 
        } else if(!bombe.includes(i)){
                                
                newEl.classList.add("lightblue")
                newEl.style.pointerEvents = "none"
                contatore++
        
// ALTRIMENTI SE il la casella cliccata è inclusa nell'array di numeri bomba            
        } else if(bombe.includes(i)){

            //  creo una varibile prendendo tutti i quadrati generati nel DOM              
            let bombSquare = document.querySelectorAll(".square")

            // creo un ciclo for                  
                 for(let k = 0;k < bombSquare.length; k++){
                     
            // se la variabile k è inclusa dentro l'array di bombe, il quadrato ottiene lo sfondo rosso                        
                        if(bombe.includes(k + 1)){

                            bombSquare[k].classList.add("red")
                        }
                    }
             
            gridContainerEl.style.pointerEvents = "none"
            sottotitolo.innerText = `HAI PERSO, IL TUO PUNTEGGIO E' : ${contatore} 
                                    PREMI IL TASTO PLAY PER RICOMINCIARE`;
                
            };
                                    
        })
    }
                                                            
});


                    
                
                

                                                
       
       
                                                    
                
       

            
                
                
        

        
      




    
    
   
    
    





/*___________________FUNZIONI_________________*/





function createElement (text, numeroColonne){

    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${numeroColonne})`;
    square.style.height = `calc(100% / ${numeroColonne})`;
    square.innerText = text
    
    return square;

}







function generateBombs (difficoltà){

    bombe = []

    while(bombe.length < 16){
    
        let numeroBomba = Math.floor(Math.random() * difficoltà + 1);
        
        if(!bombe.includes(numeroBomba)){

            bombe.push(numeroBomba);
        }
    } return bombe
}

    
    
        
        
        
        
        


