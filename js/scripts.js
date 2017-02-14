function rysujChoinke(n) {
    
    for (var n = 1; n <= 5; n++) {
       var star = " "; 
    
        for (var m = 1; m <= (n*2-1); m++) {
             star += '*';
        }
        console.log(star);
    }
}

rysujChoinke()