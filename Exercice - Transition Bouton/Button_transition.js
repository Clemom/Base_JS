const boutonTest = document.querySelector(".btn");

boutonTest.addEventListener("mouseover", (event) => {
    const x = event.pageX - boutonTest.offsetLeft;
    const y = event.pageY - boutonTest.offsetTop;

    boutonTest.style.setProperty("--xPos", x + "px");
    boutonTest.style.setProperty("--yPos", y + "px");
});

