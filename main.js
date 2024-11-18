let gridItems = document.getElementsByClassName("cell"); 
let resetBtn = document.getElementById("reset-btn");
let currentTurn = "x";
let gameIsFinished = false;
let boardArray = [
    "0","1","2",
    "3","4","5",
    "6","7","8"
]
for(const item of gridItems)
{
    item.addEventListener("click",function(){

        if(gameIsFinished)
        {
            return;
        }
        let value = item.getAttribute("value");
        let index = value -1;

        if(boardArray[index] == "x" || boardArray[index] == "o")
        {
            return;
        }
      
       

       let squareContent = document.querySelector(`.cell[value="${value}"]`);
       squareContent.innerHTML = currentTurn;

       boardArray[index] = currentTurn;
         evaluateBoard();
       
       if(currentTurn == "x")
       {
          currentTurn = "o";
       }else{
        currentTurn = "x";
       }

       document.getElementById("turn").textContent = `${currentTurn} turn`;
    })

    function evaluateBoard()
    {
        if( 
            //rows
            (boardArray[0]==boardArray[1]&&boardArray[1]==boardArray[2]) ||
            (boardArray[3]==boardArray[4]&&boardArray[4]==boardArray[5]) ||
            (boardArray[6]==boardArray[7]&&boardArray[7]==boardArray[8]) ||
            
            //cols
            (boardArray[0]==boardArray[3]&&boardArray[3]==boardArray[6]) ||
            (boardArray[1]==boardArray[4]&&boardArray[4]==boardArray[7]) ||
            (boardArray[2]==boardArray[5]&&boardArray[5]==boardArray[8]) ||

            //diagonal
            (boardArray[0]==boardArray[4]&&boardArray[4]==boardArray[8]) ||
            (boardArray[2]==boardArray[4]&&boardArray[4]==boardArray[6]) 
        ){
            var winner = currentTurn == "o" ? "o" : "x";
            gameIsFinished = true;
           alertify.alert(`${winner} Won!`);
            return;
        }

        var isDraw = true;

        for(square of boardArray)
        {
           
           if(square != "o" && square != "x")
           {
               isDraw = false;
           }
        }
   
        if(isDraw)
        {
            gameIsFinished = true;
           alertify.alert("Draw");
        }
     }

    
}

resetBtn.onclick = function(){
    for(item of gridItems)
    {
        item.innerHTML = "";
    }

    boardArray = [
        "0","1","2",
        "3","4","5",
        "6","7","8"
    ]
    gameIsFinished = false;

    currentTurn = "x";

    document.getElementById("turn").innerText = `${currentTurn} turn`;
}