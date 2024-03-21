document.querySelector(".btn").onclick = hisobla;
function hisobla() {
    let inputValue = document.querySelector(".input").value;
    console.log(inputValue);

    document.querySelector('.Piyoda').innerHTML = inputValue / 3.6
    document.querySelector('.Velisoped').innerHTML = inputValue / 20.1
    document.querySelector('.Mashina').innerHTML = inputValue / 70
    document.querySelector('.Samalyot').innerHTML = inputValue / 800

}