function lottery() {
    let text;
    let userNumbers = window.prompt("How many numbers do you want to enter?")
    var array = new Array(userNumbers);

    for (var i = 0; i < userNumbers; ++i) {
        var tempNum = Math.floor(Math.random() * 100);
        while (tempNum == 0) {
            tempNum = Math.floor(Math.random() * 100);
        }
        array[i] = tempNum;
    }
    let p = document.getElementById("lotteryGame");
    // p.innerHTML = "Hello world";
    p.innerHTML += array[0];
    for (var j = 1; j < userNumbers; j++) {
        p.innerHTML += "-" + array[j];
    }
}