function calTime() {
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();
    let session = document.getElementById("sessions");

    if(h >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML ="AM";
    }

    if(h > 12){
        h = h - 12;
    }

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

setInterval(calTime,10);