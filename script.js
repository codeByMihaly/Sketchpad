const container = document.getElementById("container");
const button = document.getElementById("button");
button.textContent = "Click me!";

button.addEventListener("click", sketchPad);


function sketchPad() {
    container.textContent = "";
    let input = prompt("Write a number! Max:100");
    let contentNum = Number(input);
    let squareSize = 512 / contentNum;
      if(contentNum > 100) {
            alert ("Maximum 100");
        } else if (contentNum < 0) {      
            alert ("Can't be minus");
        } else if (isNaN(contentNum)) {
            alert ("Must be a number"); 
        } else {
            for(let i = 0; i<contentNum * contentNum; i++) {
                let content = document.createElement("div");
                content.classList.add("content");
                content.style.width = `${squareSize}px`;
                content.style.height = `${squareSize}px`

                content.setAttribute("data-darkness", "0");

                content.addEventListener("mouseover", () => {
                    let darkness = Number(content.getAttribute("data-darkness"));
                    if (darkness < 10) {
                        darkness += 1;
                        content.setAttribute("data-darkness", darkness);
                        const shade = 255 - darkness *25.5;
                        content.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
                    }
                });
                container.appendChild(content);
            }
        };
}
