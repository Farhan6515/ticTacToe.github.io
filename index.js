let audio=new Audio("audio.mp3")
let Waudio=new Audio("winner.mp3")
let boxes=document.querySelectorAll(".textbox");
let turn=true;
let winner=document.querySelector("#Winner")
let x=0
let r1=document.querySelector("#r1")
let o=0
let r2=document.querySelector("#r2")
let record=document.querySelector("#record")
let rset=document.querySelector("#rset")
let card=document.querySelector("#card")
let ag=document.querySelector("#ag")
let aga=true;

rset.addEventListener("click",()=>{
    window.location.reload()
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn==true) {
            box.innerText="X"
            turn=false
        }
        else{
            box.innerText="O"
            turn=true;
        }
       audio.play();
       checkWinner()
    }) 
})


ag.addEventListener("click",()=>{
   if (aga==true) {
    
    ag.innerText="Against Human"
    aga=false;
    console.log(aga)
    boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn==true) {
            box.innerText="X"
            turn=false
        }
        if (!checkWinner()) {
           setTimeout(computerMove,1500) ; // Make the computer's move if you win
        }
       audio.play();
       checkWinner()
    }) 
    
})
   }
   else{
    window.location.reload()
    ag.innerText="Against Computer"
    aga=true
    console.log(aga)
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if (turn==true) {
                box.innerText="X"
                turn=false
            }
            else{
                box.innerText="O"
                turn=true;
            }
           audio.play();
           checkWinner()
        }) 
    })
   }
})




// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if (turn==true) {
//             box.innerText="X"
//             turn=false
//         }
//         else{
//             box.innerText="O"
//             turn=true;
//         }
//        audio.play();
//        checkWinner()
//     }) 
    
// })

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if (turn==true) {
//             box.innerText="X"
//             turn=false
//         }
//         if (!checkWinner()) {
//            setTimeout(computerMove,2000) ; // Make the computer's move if you win
//         }
//        audio.play();
//        checkWinner()
//     }) 
    
// })


 function checkWinner(){
     let intex=document.querySelectorAll(".textbox");

    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
function inc(e){
      if (intex[e[0]].innerText=="X") {
        x++;
        r1.innerText=x;
       }
       if(intex[e[0]].innerText=="O"){
        o++;
        r2.innerText=o;
       }
    }

      win.forEach(e=>{
        if ((intex[e[0]].innerText === intex[e[1]].innerText) && (intex[e[1]].innerText === intex[e[2]].innerText) && (intex[e[1]].innerText !== "" ) ) {
            winner.innerText=`Winner Is ${intex[e[0]].innerText}`
           Waudio.play();
           inc(e)
           refreshCard()
        }

      })


 }
 function refreshCard() {
    boxes.forEach((box)=>{
    box.innerText = ''; 
    })
}

// ye code mai ne nhi likha hai 
function computerMove() {
    let availableBoxes = [];
    
    // Collect all available boxes (empty boxes)
    boxes.forEach((box, index) => {
        if (box.innerText === "") {
            availableBoxes.push(index);
        }
    });
    
    // Select a random index from available boxes
    const randomIndex = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
    boxes[randomIndex].innerText = "O"; // Computer plays as O
    
    turn = true; // It's your turn again
    audio.play();
    checkWinner();
}