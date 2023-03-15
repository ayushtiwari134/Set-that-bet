var btn= document.getElementById("button");

btn.addEventListener("click", onClick);

function onClick(){
    var ranNum1= Math.floor(Math.random()*6)+1;
    var ranNum2= Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[0].setAttribute("src",("images/dice"+ranNum1+".png"));
    document.querySelectorAll("img")[1].setAttribute("src",("images/dice"+ranNum2+".png"));
    if(ranNum1>ranNum2){
        document.querySelector("h1").innerHTML="Player 1 won!";
    }
    else if(ranNum2>ranNum1){
        document.querySelector("h1").innerHTML="Player 2 won!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw.";
    }
}

// var ranNum1= Math.floor(Math.random()*6)+1;
// var ranNum2= Math.floor(Math.random()*6)+1;
// document.querySelectorAll("img")[0].setAttribute("src",("images/dice"+ranNum1+".png"));
// document.querySelectorAll("img")[1].setAttribute("src",("images/dice"+ranNum2+".png"));
// if(ranNum1>ranNum2){
//     document.querySelector("h1").innerHTML="Player 1 won!";
// }
// else if(ranNum2>ranNum1){
//     document.querySelector("h1").innerHTML="Player 2 won!";
// }
// else{
//     document.querySelector("h1").innerHTML="Draw.";
// }

