let boxes = document.querySelectorAll(".box");
  let restart = document.querySelector("#restart") ;
  let msgContainer= document.querySelector(".msgContainer");
  let msg= document.querySelector("#msg");
  let turnO= true;
   let  c=0;
 
  const win=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8]
  ];

  boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("Box was Clicked");
        if(turnO){
            box.innerText= "O";
            turnO=false;
        }
        else{
            box.innerText= "X";
            turnO=true;
        }
        box.disabled=true;
        c++;
      let winner=checkWinner();

        if(c === 9 && !winner){
           count();
        }
    })   
  } )
  const count =() =>{
    msg.innerText=`Ohh!!! It's a Draw...`;
     msgContainer.classList.remove("hide");
           disables();

  }
 

  const reset =()=>{
    turnO=true;
    c=0;
    enables();
      msgContainer.classList.add("hide");
  }


   const disables= () =>{
    for(let box of boxes){
      box.disabled=true;
    }    
   }

   const enables= () =>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }


  const showWinner= (winner) =>{
     msg.innerText=`Congratulation!!! Winner is ${winner} ...`;
     msgContainer.classList.remove("hide");
     disables();
  }

  const checkWinner = () =>{
      for( let patterns of win ){
       let posval1 = boxes[patterns[0]].innerText;
       let posval2 = boxes[patterns[1]].innerText;
       let posval3 = boxes[patterns[2]].innerText;

      if (posval1 !="" && posval2 != "" && posval3 != ""){
        if(posval1 == posval2 && posval2 == posval3){
            console.log("Winner");
            showWinner(posval1);
            return true;
        }
      }

      }
      return false;

  }

    restart.addEventListener("click",reset);