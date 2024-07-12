let image1=Math.floor(Math.random()*6)+1;
let image2=Math.floor(Math.random()*6);

let imgSrc1= "images/" + "dice" + image1 + ".png";
let imgSrc2= "images/" + "dice" + image2 + ".png";

let imgAlt1= "Dice number- "+image1;
let imgAlt2= "Dice number- "+image2;



document.getElementsByClassName("image1")[0].setAttribute("src", imgSrc1);
document.getElementsByClassName("image2")[0].setAttribute("src",imgSrc2);
document.getElementsByClassName("image1")[0].setAttribute("alt",imgAlt1);
document.getElementsByClassName("image2")[0].setAttribute("alt",imgAlt2);


if(image1>image2)
{
    document.querySelector("h1").textContent="🏆 Player 1 Wins";
}
else if(image1<image2)
{
    document.querySelector('h1').textContent=" 🏆 Player 2 Wins";
}
else
{
    document.querySelector("h1").textContent="🏆 It's a draw 🏆";
}

