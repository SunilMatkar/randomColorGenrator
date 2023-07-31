let btn = document.querySelector("button");


btn.addEventListener("click",function (){
    let h3 = document.querySelector("h3");
    let randomeColor = getRandomeColor();
    h3.innerText = randomeColor;
  
    console.log("color updated")

});
document.getElementById("colorBox").addEventListener("click", function () {
    const randomColor = randomColor();
    this.style.backgroundColor = randomColor;
  });

function getRandomeColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);    
    let blue = Math.floor(Math.random() * 255);

    let color = `rbg(${red}, ${green}, ${blue})`;
    return color;
}