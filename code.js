let minutes = document.getElementById("Minutes");
let result = document.getElementById("Seconds");

let toSeconds = document.getElementById("ToSeconds");
let toMinutes = document.getElementById("ToMinutes");

toSeconds.addEventListener('click', () =>{
    result.value = (minutes.value*60);
    minutes.value = null;
})

toMinutes.addEventListener('click', () =>{
    minutes.value = (result.value/60);
    result.value = null;
})