let onButton = document.querySelector('.on')

let offButton = document.querySelector('.off')

onButton.addEventListener("click", () => {
    console.log("qwerty");
    let imgEl = document.querySelector(".image");
    imgEl.src = "img/photo_2023-12-26_15-19-12.jpg";
    let head1 = document.querySelector(".h1");
    head1.classList.add("red")
    head1.innerHTML = "Lamp is on";
});

offButton.addEventListener("click", () => {
    let imgEl = document.querySelector(".image");
    imgEl.src = "img/photo_2023-12-26_15-19-11.jpg";
    let head1 = document.querySelector(".h1");
    head1.classList.remove("red")
    head1.innerHTML = "Lamp is off";
});
