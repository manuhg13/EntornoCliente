function pintarRombo() {
    for (i=1; $i <= rombo ; $i++) {
        for ($espacios=1; $espacios<=$rombo-$i; $espacios++) { 
            echo "&nbsp;&nbsp";
        }
        for ($asteriscos=1; $asteriscos <=($i*2)-1; $asteriscos++) {    
            echo "*";
        } 
        echo "<br>";
    }
    for ($i=2; $i >= 1 ; $i--) { 
        for ($espacios=1; $espacios<=3-$i; $espacios++) { 
            echo "&nbsp;&nbsp";
        }
        for ($asteriscos=1; $asteriscos <=($i*2)-1; $asteriscos++) {    
            echo "*";
        } 
        echo "<br>";
    }
}