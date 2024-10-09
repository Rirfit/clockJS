let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let tempo = new Date();

    hrs.innerHTML = (tempo.getHours()<10?"0":"") + tempo.getHours();
    min.innerHTML = (tempo.getMinutes()<10?"0":"") + tempo.getMinutes();
    sec.innerHTML = (tempo.getSeconds()<10?"0":"") + tempo.getSeconds();
}, 1000)