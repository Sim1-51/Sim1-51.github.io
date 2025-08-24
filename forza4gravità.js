const reset = document.getElementById ("forza4-reset") ;
reset.addEventListener ("click" , function() {
    window.location.reload()
})


let inizio = 0 ;
const inizioRosso = document.getElementById ("b1") ;
const inizioGiallo = document.getElementById ("b2") ;
let turno = 0 ;

inizioRosso.addEventListener ("click" , function() {
    if (inizio === 0) {
        inizio = 4 ;
        turno = 1 ;
        inizioRosso.style.backgroundColor = "blueviolet" ;
        inizioRosso.style.color = "aquamarine" ;
        console.log("inizia il rosso")
    } else {
        alert("Avete già scelto chi inizia") ;
    }
})
inizioGiallo.addEventListener ("click" , function() {
    if (inizio === 0) {
        inizio = 4 ;
        turno = 2 ;
        inizioGiallo.style.backgroundColor = "blueviolet" ;
        inizioGiallo.style.color = "aquamarine" ;
        console.log("inizia il giallo")
    } else {
        alert("Avete già scelto chi inizia") ;
    }
})


const casella1 = document.getElementById ("6-1") ;
const casella2 = document.getElementById ("6-2") ;
const casella3 = document.getElementById ("6-3") ;
const casella4 = document.getElementById ("6-4") ;
const casella5 = document.getElementById ("6-5") ;
const casella6 = document.getElementById ("6-6") ;
const casella7 = document.getElementById ("6-7") ;
const casella8 = document.getElementById ("5-1") ;
const casella9 = document.getElementById ("5-2") ;
const casella10 = document.getElementById ("5-3") ;
const casella11 = document.getElementById ("5-4") ;
const casella12 = document.getElementById ("5-5") ;
const casella13 = document.getElementById ("5-6") ;
const casella14 = document.getElementById ("5-7") ;
const casella15 = document.getElementById ("4-1") ;
const casella16 = document.getElementById ("4-2") ;
const casella17 = document.getElementById ("4-3") ;
const casella18 = document.getElementById ("4-4") ;
const casella19 = document.getElementById ("4-5") ;
const casella20 = document.getElementById ("4-6") ;
const casella21 = document.getElementById ("4-7") ;
const casella22 = document.getElementById ("3-1") ;
const casella23 = document.getElementById ("3-2") ;
const casella24 = document.getElementById ("3-3") ;
const casella25 = document.getElementById ("3-4") ;
const casella26 = document.getElementById ("3-5") ;
const casella27 = document.getElementById ("3-6") ;
const casella28 = document.getElementById ("3-7") ;
const casella29 = document.getElementById ("2-1") ;
const casella30 = document.getElementById ("2-2") ;
const casella31 = document.getElementById ("2-3") ;
const casella32 = document.getElementById ("2-4") ;
const casella33 = document.getElementById ("2-5") ;
const casella34 = document.getElementById ("2-6") ;
const casella35 = document.getElementById ("2-7") ;
const casella36 = document.getElementById ("1-1") ;
const casella37 = document.getElementById ("1-2") ;
const casella38 = document.getElementById ("1-3") ;
const casella39 = document.getElementById ("1-4") ;
const casella40 = document.getElementById ("1-5") ;
const casella41 = document.getElementById ("1-6") ;
const casella42 = document.getElementById ("1-7") ;
let box1 = 1 ; /* numero 36 */
let box2 = 1 ; /* numero 37 */
let box3 = 1 ; /* numero 38 */
let box4 = 1 ; /* numero 39 */
let box5 = 1 ; /* numero 40 */
let box6 = 1 ; /* numero 41 */
let box7 = 1 ; /* numero 42 */
let box8 = 1 ; /* numero 29 */
let box9 = 1 ; /* numero 30 */
let box10 = 1 ; /* numero 31 */
let box11 = 1 ; /* numero 32 */
let box12 = 1 ; /* numero 33 */
let box13 = 1 ; /* numero 34 */
let box14 = 1 ; /* numero 35 */
let box15 = 1 ; /* numero 22 */
let box16 = 1 ; /* numero 23 */
let box17 = 1 ; /* numero 24 */
let box18 = 1 ; /* numero 25 */
let box19 = 1 ; /* numero 26 */
let box20 = 1 ; /* numero 27 */
let box21 = 1 ; /* numero 28 */
let box22 = 1 ; /* numero 15 */
let box23 = 1 ; /* numero 16 */
let box24 = 1 ; /* numero 17 */
let box25 = 1 ; /* numero 18 */
let box26 = 1 ; /* numero 19 */
let box27 = 1 ; /* numero 20 */
let box28 = 1 ; /* numero 21 */
let box29 = 1 ; /* numero 08 */
let box30 = 1 ; /* numero 09 */
let box31 = 1 ; /* numero 10 */
let box32 = 1 ; /* numero 11 */
let box33 = 1 ; /* numero 12 */
let box34 = 1 ; /* numero 13 */
let box35 = 1 ; /* numero 14 */
let box36 = 1 ; /* numero 01 */
let box37 = 1 ; /* numero 02 */
let box38 = 1 ; /* numero 03 */
let box39 = 1 ; /* numero 04 */
let box40 = 1 ; /* numero 05 */
let box41 = 1 ; /* numero 06 */
let box42 = 1 ; /* numero 07 */

let boxx1 = 1 ;
let boxx2 = 1 ;
let boxx3 = 1 ;
let boxx4 = 1 ;
let boxx5 = 1 ;
let boxx6 = 1 ;
let boxx7 = 1 ;
let boxx8 = 0 ;
let boxx9 = 0 ;
let boxx10 = 0 ;
let boxx11 = 0 ;
let boxx12 = 0 ;
let boxx13 = 0 ;
let boxx14 = 0 ;
let boxx15 = 0 ;
let boxx16 = 0 ;
let boxx17 = 0 ;
let boxx18 = 0 ;
let boxx19 = 0 ;
let boxx20 = 0 ;
let boxx21 = 0 ;
let boxx22 = 0 ;
let boxx23 = 0 ;
let boxx24 = 0 ;
let boxx25 = 0 ;
let boxx26 = 0 ;
let boxx27 = 0 ;
let boxx28 = 0 ;
let boxx29 = 0 ;
let boxx30 = 0 ;
let boxx31 = 0 ;
let boxx32 = 0 ;
let boxx33 = 0 ;
let boxx34 = 0 ;
let boxx35 = 0 ;
let boxx36 = 0 ;
let boxx37 = 0 ;
let boxx38 = 0 ;
let boxx39 = 0 ;
let boxx40 = 0 ;
let boxx41 = 0 ;
let boxx42 = 0 ;

n = 0;    //numero di "click" (massimo 42)

function



let griglia = document.getElementById ("griglia") ;
griglia.addEventListener ("click" , function () {
    if (turno != 3) {
        
        //            BOX ORIZZONTALI

        // RIGA 1
        if (win1 === win2) {
            if (win2 === win3) {
                if (win3 === win4) {
                    if (win1 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win1 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
             }
        } if (win2 === win3) {
            if (win3 === win4) {
                if (win4 === win5) {
                    if (win2 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win2 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win3 === win4) {
            if (win4 === win5) {
                if (win5 === win6) {
                    if (win3 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win3 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win4 === win5) {
            if (win5 === win6) {
                if (win6 === win7) {
                    if (win4 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win4 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            // RIGA 2
        } if (win8 === win9) {
            if (win9 === win10) {
                if (win10 === win11) {
                    if (win8 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win8 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win9 === win10) {
            if (win10 === win11) {
                if (win11 === win12) {
                    if (win9 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win9 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win10 === win11) {
            if (win11 === win12) {
                if (win12 === win13) {
                    if (win10 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win10 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win11 === win12) {
            if (win12 === win13) {
                if (win13 === win14) {
                    if (win11 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win11 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //RIGA 3
        } if (win15 === win16) {
            if (win16 === win17) {
                if (win17 === win18) {
                    if (win15 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win15 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win16 === win17) {
            if (win17 === win18) {
                if (win18 === win19) {
                    if (win16 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win16 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win17 === win18) {
            if (win18 === win19) {
                if (win19 === win20) {
                    if (win17 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win17 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win18 === win19) {
            if (win19 === win20) {
                if (win20 === win21) {
                    if (win18 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win18 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //RIGA 4
    } if (win22 === win23) {
            if (win23 === win24) {
                if (win24 === win25) {
                    if (win22 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win22 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win23 === win24) {
            if (win24 === win25) {
                if (win25 === win26) {
                    if (win23 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win23 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win24 === win25) {
            if (win25 === win26) {
                if (win26 === win27) {
                    if (win24 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win24 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win25 === win26) {
            if (win26 === win27) {
                if (win27 === win28) {
                    if (win25 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win25 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //RIGA 5
        } if (win29 === win30) {
            if (win30 === win31) {
                if (win31 === win32) {
                    if (win29 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win29 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win30 === win31) {
            if (win31 === win32) {
                if (win32 === win33) {
                    if (win30 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win30 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win31 === win32) {
            if (win32 === win33) {
                if (win33 === win34) {
                    if (win31 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win31 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win32 === win33) {
            if (win33 === win34) {
                if (win34 === win35) {
                    if (win32 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win32 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //RIGA 6
        } if (win36 === win37) {
            if (win37 === win38) {
                if (win38 === win39) {
                    if (win36 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win36 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win37 === win38) {
            if (win38 === win39) {
                if (win39 === win40) {
                    if (win37 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win37 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win38 === win39) {
            if (win39 === win40) {
                if (win40 === win41) {
                    if (win38 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win38 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win39 === win40) {
            if (win40 === win41) {
                if (win41 === win42) {
                    if (win39 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win39 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //     BOX VERTICALI

            //COLONNA 1
        } if (win1 === win8) {
            if (win8 === win15) {
                if (win15 === win22) {
                    if (win1 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win1 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win8 === win15) {
            if (win15 === win22) {
                if (win22 === win29) {
                    if (win8 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win8 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win15 === win22) {
            if (win22 === win29) {
                if (win29 === win36) {
                    if (win15 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win15 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 2
        } if (win2 === win9) {
            if (win9 === win16) {
                if (win16 === win23) {
                    if (win2 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win2 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win9 === win16) {
            if (win16 === win23) {
                if (win23 === win30) {
                    if (win9 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win9 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win16 === win23) {
            if (win23 === win30) {
                if (win30 === win37) {
                    if (win16 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win16 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 3
        } if (win3 === win10) {
            if (win10 === win17) {
                if (win17 === win24) {
                    if (win3 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win3 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win10 === win17) {
            if (win17 === win24) {
                if (win24 === win31) {
                    if (win10 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win10 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win17 === win24) {
            if (win24 === win31) {
                if (win31 === win38) {
                    if (win17 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win17 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 4
        }if (win4 === win11) {
            if (win11 === win18) {
                if (win18 === win25) {
                    if (win4 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win4 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win11 === win18) {
            if (win18 === win25) {
                if (win25 === win32) {
                    if (win11 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win11 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win18 === win25) {
            if (win25 === win32) {
                if (win32 === win39) {
                    if (win18 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win18 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 5
        }if (win5 === win12) {
            if (win12 === win19) {
                if (win19 === win26 ) {
                    if (win5 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win5 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win12 === win19) {
            if (win19 === win26) {
                if (win26 === win33) {
                    if (win12 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win12 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win19 === win26) {
            if (win26 === win33) {
                if (win33 === win40) {
                    if (win19 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win19 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 6
        }if (win6 === win13) {
            if (win13 === win20) {
                if (win20 === win27) {
                    if (win6 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win6 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win13 === win20) {
            if (win20 === win27 ) {
                if (win27 === win34) {
                    if (win13 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win13 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win20 === win27) {
            if (win27 === win34) {
                if (win34 === win41) {
                    if (win20 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win20 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //COLONNA 7
        }if (win7 === win14) {
            if (win14 === win21) {
                if (win21 === win28) {
                    if (win7 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win7 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win14 === win21) {
            if (win21 === win28) {
                if (win28 === win35) {
                    if (win14 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win14 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win21 === win28) {
            if (win28 === win35) {
                if (win35 === win42) {
                    if (win21 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win21 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

                    //  BOX OBLIQUI

            //OBLIQUO 1
        } if (win1 === win9) {
            if (win9 === win17) {
                if (win17 === win25) {
                    if (win1 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win1 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win9 === win17) {
            if (win17 === win25) {
                if (win25 === win33) {
                    if (win9 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win9 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win17 === win25) {
            if (win25 === win33) {
                if (win33 === win41) {
                    if (win17 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win17 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 2
        } if (win2 === win10) {
            if (win10 === win18) {
                if (win18 === win26) {
                    if (win2 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win2 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win10 === win18) {
            if (win18 === win26) {
                if (win26 === win34) {
                    if (win10 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                    } else if (win10 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win18 === win26) {
            if (win26 === win34) {
                if (win34 === win42) {
                    if (win17 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                    } else if (win17 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 3
        }if (win3 === win11) {
            if (win11 === win19) {
                if (win19 === win27) {
                    if (win3 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win3 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win11 === win19) {
            if (win19 === win27) {
                if (win27 === win35) {
                    if (win11 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win11 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 4
        }if (win4 === win12) {
            if (win12 === win20) {
                if (win20 === win28) {
                    if (win4 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win4 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 5
        }if (win8 === win16) {
            if (win16 === win24) {
                if (win24 === win32) {
                    if (win8 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win8 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win16 === win24) {
            if (win24 === win32) {
                if (win32 === win40) {
                    if (win16 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win16 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 6
        } if (win15 === win23) {
            if (win23 === win31) {
                if (win31 === win39) {
                    if (win15 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win15 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 7
        } if (win4 === win10) {
            if (win10 === win16) {
                if (win16 === win22) {
                    if (win4 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win4 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 8
        } if (win5 === win11) {
            if (win11 === win17) {
                if (win17 === win23) {
                    if (win5 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win5 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win11 === win17) {
            if (win17 === win23) {
                if (win23 === win29) {
                    if (win11 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win11 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 9
        } if (win6 === win12) {
            if (win12 === win18) {
                if (win18 === win24) {
                    if (win6 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win6 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win12 === win18) {
            if (win18 === win24) {
                if (win24 === win30) {
                    if (win12 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win12 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win18 === win24) {
            if (win24 === win30) {
                if (win30 === win36) {
                    if (win18 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win18 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 10
        } if (win7 === win13) {
            if (win13 === win19) {
                if (win19 === win25) {
                    if (win7 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win7 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win13 === win19) {
            if (win19 === win25) {
                if (win25 === win31) {
                    if (win13 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win13 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win19 === win25) {
            if (win25 === win31) {
                if (win31 === win37) {
                    if (win19 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win19 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 11
        } if (win14 === win20) {
            if (win20 === win26) {
                if (win26 === win32) {
                    if (win14 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win14 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (win20 === win26) {
            if (win26 === win32) {
                if (win32 === win38) {
                    if (win20 > 0) {
                        alert ("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win20 < 0) {
                        alert ("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }

            //OBLIQUO 12
        } if (win21 === win27) {
            if (win27 === win33) {
                if (win33 === win39) {
                    if (win21 > 0) {
                        alert("Ha vinto il GIOCATORE 1 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    } else if (win21 < 0) {
                        alert("Ha vinto il GIOCATORE 2 !!!") ;
                        turno = 3 ;
                        n = n - 1;
                    }
                }
            }
        } if (n > 41) {
            console.log("ok");
            alert("PAREGGIO !!!");
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            turno = 3;
        }
    } else if (turno === 3) {
        alert("ATTENZIONE : la partita è terminata");
    }
    console.log("il turno è " , turno)
})

let body = document.getElementById("body")
let chigioca = document.getElementById("eilturnodi");
body.addEventListener("click" , function () {
    if (turno === 1) {
        chigioca.innerHTML = "GIOCATORE 1";
        chigioca.style.color = "red";
    } else if (turno === 2) {
        chigioca.innerHTML = "GIOCATORE 2";
        chigioca.style.color = "yellow"
    } else if (turno === 3) {
        chigioca.innerHTML = "ATTENZIONE!!! La partita e' terminata"
        chigioca.style.color = "green"
    }
})