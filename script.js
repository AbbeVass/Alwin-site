function calcAge(birthday) {
    var now = new Date();
    var birthday = new Date(birthday);
    var ageMilliseconds = now - birthday;
    var age = Math.floor(ageMilliseconds / (1000 * 60 * 60 * 24 * 365));
    return age;
}

const age = calcAge("2006-03-02");
document.getElementById("age").innerHTML = age;