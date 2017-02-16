function rysujChoinke(n) {
    
    for (var i = 1; i <= n; i++) {
       var star =''; 
    
        for (var m = 1; m <= (i*2-1); m++) {
             star += '*';
        }
        console.log(star);
    }
}

rysujChoinke(10)

