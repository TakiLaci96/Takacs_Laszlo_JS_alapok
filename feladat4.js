function bevitelInput() {
    const bevitel = document.getElementById("inputBox");
    const bekezdes = document.getElementById("content");
    const beirtErtek = bevitel.value;

    bekezdes.innerHTML = beirtErtek;
}
