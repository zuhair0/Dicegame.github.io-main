const roll = () =>
{
    console.log('im in the roll')
    var a=Math.floor(Math.random()*7)
    var b=Math.floor(Math.random()*7)
    if(a==1){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png")
    }
    if(a==2){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png")
    }
    if(a==3){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png")
    }
    if(a==4){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png")
    }
    if(a==5){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png")
    }
    if(a==6){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png")
    }

    if(b==1){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png")
    }
    if(b==2){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png")
    }
    if(b==3){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png")
    }
    if(b==4){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png")
    }
    if(b==5){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png")
    }
    if(b==6){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png")
    }
    if(a==b){
        document.querySelector("h1").innerHTML="Draw"
    }else
    if(a>b){
        document.querySelector("h1").innerHTML="Player 1 won"
    }else
    if(a<b){
        document.querySelector("h1").innerHTML="Playe 2 won"
    }
}