//STEP 1
function step1() {
    "use strict";
    window.console.log("STEP 1");
    var movies = ["Ulidavaru Kandante", "Rangitaranga", "K.G.F", 
    "Mayura", "Bangarada Manushya"];
    window.console.log(movies[1]);
}

//STEP 2
function step2() {
    "use strict";
    window.console.log("STEP 2");
    var movies = new Array(5);
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";

    window.console.log(movies[0]);
}

//STEP 3
function step3() {
    "use strict";
    window.console.log("STEP 3");
    var movies = new Array(5);
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";

    movies.splice(2, 0, "Mungaru Male");
    window.console.log(movies);
    window.console.log(movies.length);
}

//STEP 4
function step4() {
    "use strict";
    window.console.log("STEP 4");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    delete movies[0];
    window.console.log(movies);
}

//STEP 5
function step5() {
    "use strict";
    window.console.log("STEP 5");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    
    for(var i=0; i < movies.length;i++) {
        window.console.log(movies[i]);
    }
}


//STEP 6
function step6() {
    "use strict";
    window.console.log("STEP 6");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    
    for(var i in movies) {
        window.console.log(movies[i]);
    }
}


//STEP 7
function step7() {
    "use strict";
    window.console.log("STEP 7");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    
    movies.sort();
    for(var i in movies) {
        window.console.log(movies[i]);
    }
}

//STEP 8
function step8() {
    "use strict";
    window.console.log("STEP 8");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    var leastFavMovies = ["Karzzz", "Himatwala", "Fire"]

    window.console.log("Movies I Like: \n");
    window.console.log("");
    for(var i=0; i < movies.length;i++) {
        window.console.log(movies[i]);
    }
    window.console.log("");
    window.console.log("Movies I Regret Watching: \n");
    window.console.log("");
    for(var i=0; i < leastFavMovies.length; i++) {
        window.console.log(leastFavMovies[i]);
    }
}

//STEP 9
function step9() {
    "use strict";
    window.console.log("STEP 9");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    var leastFavMovies = ["Karzzz", "Himatwala", "Fire"]
    movies.concat(leastFavMovies);
    movies.reverse();
    window.console.log(movies);
}

//STEP 10
function step10() {
    "use strict";
    window.console.log("STEP 10");
    var movies = [];
    movies[0] = "Ulidavaru Kandante";
    movies[1] = "Rangitaranga";
    movies[2] = "K.G.F"
    movies[3] = "Mayura";
    movies[4] = "Bangarada Manushya";
    movies[5] = "K.G.F 2";
    movies[6] = "P.K";
    var leastFavMovies = ["Karzzz", "Himatwala", "Fire"]
    movies.concat(leastFavMovies);
    movies.reverse();
    window.console.log(movies[movies.length - 1]);
}

step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();