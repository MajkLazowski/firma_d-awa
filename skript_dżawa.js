function funkcja(numer)
{
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");

    if (numer === 1){
        c1.style.display = "none";
        c2.style.display = "block";
    }
    else if (numer === 2){
        c2.style.display = "none";
        c3.style.display = "block";
    }
    else if (numer === 3){
        c3.style.display = "none";
        c1.style.display = "block";
    }
}