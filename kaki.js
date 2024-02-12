
function startCountdown(durationInSeconds) {
    let timerElement = document.getElementById('countdown-timer');
    let duration = durationInSeconds;

    function updateTimer() {
        let minutes = Math.floor((duration % 3600) / 60);
        let seconds = duration % 60;

        timerElement.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (duration <= 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = "Expired!";
        }
        duration--;
    }
    updateTimer(); 
    let timerInterval = setInterval(updateTimer, 1000);
}
startCountdown(600);

function alterfunc2(){
    alert("Order Now");
}



function alterfunc(){
    alert("hello to Patil kaki");
}


document.getElementById('log-btn').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'flex';
});
document.getElementById('log-btn1').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'flex';
});

document.getElementById('login-section').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});


document.querySelector('.login-form').addEventListener('click', function(e) {
    e.stopPropagation();
});

// pop up after ever 15 sec

setTimeout(function() {
    document.getElementById('top').style.opacity = '1';
   
}, 15000); 
document.addEventListener('click', function(event) {
    const topElement = document.getElementById('top');
    if (!topElement.contains(event.target)) {
        topElement.style.opacity = '0';
    }
});

