const box1 = document.getElementById ("1-1") ;
const box2 = document.getElementById ("1-2") ;
const box3 = document.getElementById ("1-3") ;
const box4 = document.getElementById ("2-1") ;
const box5 = document.getElementById ("2-2") ;
const box6 = document.getElementById ("2-3") ;
const box7 = document.getElementById ("3-1") ;
const box8 = document.getElementById ("3-2") ;
const box9 = document.getElementById ("3-3") ;

let boxa = 1 ;
let boxb = 1 ;
let boxc = 1 ;
let boxd = 1 ;
let boxe = 1 ;
let boxf = 1 ; 
let boxg = 1 ; 
let boxh = 1 ;
let boxi = 1 ;

let win1 = 0 ;
let win2 = 0 ;
let win3 = 0 ;
let win4 = 0 ;
let win5 = 0 ;
let win6 = 0 ;
let win7 = 0 ;
let win8 = 0 ;
let win9 = 0 ;

let inizio = 0 ;

const inizioX = document.getElementById ("b1") ;
const inizioO = document.getElementById ("b2") ;

let turno = 0 ;

inizioX.addEventListener ("click" , function() {
    if (inizio === 0) {
        inizio = 4 ;
        turno = 1 ;
        inizioX.style.backgroundColor = "blueviolet" ;
        inizioX.style.color = "aquamarine" ;
    } else {
        alert("Avete già scelto chi inizia")
    }
})
inizioO.addEventListener ("click" , function() {
    if (inizio === 0) {
        inizio = 4 ;
        turno = 2 ;
        inizioO.style.backgroundColor = "blueviolet" ;
        inizioO.style.color = "aquamarine" ;
    } else {
        alert("Avete già scelto chi inizia")
    }
})

n = 0    //numero di "click" (massimo 9)

/* BOX 1 */
box1.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxa === 1) {
            boxa = 2 ;
            if (turno === 1) {
                box1.innerHTML = "X" ;
                turno = 2;
                box1.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win1 = +1;
            } else if (turno === 2) {
                box1.innerHTML = "O" ;
                turno = 1 ;
                box1.style.color = "cyan"
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win1 = -1;
            }
        } else if (boxa === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 2 */
box2.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxb === 1) {
            boxb = 2 ;
            if (turno === 1) {
                box2.innerHTML = "X";
                turno = 2;
                box2.style.color = "red" ;
                console.log('X');
                n = n + 1 ;
                console.log(n) ;
                win2 = +1;
            } else if (turno === 2) {
                box2.innerHTML = "O" ;
                turno = 1 ;
                box2.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win2 = -1;
            }
        } else if (boxb === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 3 */
box3.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxc === 1) {
            boxc = 2 ;
            win3 = 1 ;
            if (turno === 1) {
                box3.innerHTML = "X" ;
                turno = 2 ;
                box3.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win3 = +1 ;
            } else if (turno === 2) {
                box3.innerHTML = "O" ;
                turno = 1 ;
                box3.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win3 = -1;
            }
        } else if (boxc === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 4 */
box4.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxd === 1) {
            boxd = 2 ;
            win4 = 1 ;
            if (turno === 1) {
                box4.innerHTML = "X" ;
                turno = 2 ;
                box4.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win4 = +1;
            } else if (turno === 2) {
                box4.innerHTML = "O" ;
                turno = 1 ;
                box4.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win4 = -1;
            }
        } else if (boxd === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 5 */
box5.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxe === 1) {
            boxe = 2 ;
            win5 = 1 ;
            if (turno === 1) {
                box5.innerHTML = "X" ;
                turno = 2;
                box5.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win5 = +1;
            } else if (turno === 2) {
                box5.innerHTML = "O" ;
                turno = 1 ;
                box5.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win5 = -1;
            }
        } else if (boxe === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 6 */
box6.addEventListener ("click" , function () {
    if ( inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxf === 1) {
            boxf = 2 ;
            win6 = 1 ;
            if (turno === 1) {
                box6.innerHTML = "X" ;
                turno = 2 ;
                box6.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win6 = +1;
            } else if (turno === 2) {
                box6.innerHTML = "O" ;
                turno = 1 ;
                box6.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win6 = -1;
            }
        } else if (boxf === 2) {

            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 7 */
box7.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxg === 1) {
            boxg = 2 ;
            win7 = 1 ;
            if (turno === 1) {
                box7.innerHTML = "X" ;
                turno = 2 ;
                box7.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win7 = +1;
            } else if (turno === 2) {
                box7.innerHTML = "O" ;
                turno = 1 ;
                box7.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win7 = -1;
            }
        } else if (boxg === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/*BOX 8 */
box8.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxh === 1) {
            boxh = 2 ;
            win8 = 1 ;
            if (turno === 1) {
                box8.innerHTML = "X" ;
                turno = 2 ;
                box8.style.color = "red" ;
                console.log('X') ;
                n = n + 1 ;
                console.log(n) ;
                win8 = +1;
            } else if (turno === 2) {
                box8.innerHTML = "O" ;
                turno = 1 ;
                box8.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1 ;
                console.log(n) ;
                win8 = -1;
            }
        } else if (boxh === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

/* BOX 9 */
box9.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa") ;
    } if (inizio != 0) {
        if (boxi === 1) {
            boxi = 2 ;
            win9 = 1 ;
            if (turno === 1) {
                box9.innerHTML = "X" ;
                turno = 2 ;
                box9.style.color = "red" ;
                console.log('X') ;
                n = n + 1
                console.log(n)
                win9 = +1;
            } else if (turno === 2) {
                box9.innerHTML = "O" ;
                turno = 1 ;
                box9.style.color = "cyan" ;
                console.log('O') ;
                n = n + 1
                console.log(n)
                win9 = -1;
            }
        } else if (boxi === 2) {
            if (n < 8) {
                alert("Questa casella è già occupata")
            }
        }
    }
})

const resettris = document.getElementById("tris-reset") ;
resettris.addEventListener ("click" , function() {
    window.location.reload()
})

let griglia = document.getElementById ("griglia")
griglia.addEventListener ("click" , function () {
    if (turno != 3) {

                    //   BOX ORIZZONTALI

        // RIGA 1
        if (win1 > 0) {
            if (win1 === win2) {
                if (win2 === win3) {
                    if (win3 === win1) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win1 < 0) {
            console.log("2-1 ok")
            if (win1 === win2) {
                console.log("2-2 ok")
                if (win2 === win3) {
                    console.log("2-3 ok")
                    if (win3 === win1) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }

            // RIGA 2
        } if (win4 > 0) {
            if (win4 === win5) {
                if (win5 === win6) {
                    if (win6 === win4) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win4 < 0) {
            if (win4 === win5) {
                if (win5 === win6) {
                    if (win6 === win4) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }

            // RIGA 3
        } if (win7 > 0) {
            if (win7 === win8) {
                if (win8 === win9) {
                    if (win9 === win7) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win7 < 0) {
            if (win7 === win8) {
                if (win8 === win9) {
                    if (win9 === win7) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        }

                    //   BOX VERTICALI

            // COLONNA 1
        if (win1 > 0) {
            if (win1 === win4) {
                if (win4 === win7) {
                    if (win7 === win1) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win1 < 0) {
            if (win1 === win4) {
                if (win4 === win7) {
                    if (win7 === win1) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        }

            // COLONNA 2
        if (win2 > 0) {
            if (win2 === win5) {
                if (win5 === win8) {
                    if (win8 === win2) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win2 < 0) {
            if (win2 === win5) {
                if (win5 === win8) {
                    if (win8 === win2) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        }

            // COLONNA 3
        if (win3 > 0) {
            if (win3 === win6) {
                if (win6 === win9) {
                    if (win9 === win3) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win3 < 0) {
            if (win3 === win6) {
                if (win6 === win9) {
                    if (win9 === win3) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        }

            // OBLIQUO 1
        if (win1 > 0) {
            if(win1 === win5) {
                if (win5 === win9) {
                    if (win9 === win1) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win1 < 0) {
            if(win1 === win5) {
                if (win5 === win9) {
                    if (win9 === win1) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        }

            // OBLIQUO 2
        if (win3 > 0) {
            if (win3 === win5) {
                if (win5 === win7) {
                    if (win7 === win3) {
                        alert("Ha vinto il GIOCATORE 1 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } if (win3 < 0) {
            if (win3 === win5) {
                if (win5 === win7) {
                    if (win7 === win3) {
                        alert("Ha vinto il GIOCATORE 2 !!!")
                        turno = 3;
                        n = n - 1;
                    }
                }
            }
        } else if (n > 8) {
            alert("PAREGGIO !!!")
            turno = 3;
        }
    } else if (turno === 3){
        alert("ATTENZIONE : la partita è terminata")
    }
    console.log(turno);
})

let body = document.getElementById("body")
let chigioca = document.getElementById("eilturnodi");
body.addEventListener("click" , function () {
    if (turno === 1) {
        chigioca.innerHTML = "GIOCATORE 1";
        chigioca.style.color = "red";
    } else if (turno === 2) {
        chigioca.innerHTML = "GIOCATORE 2";
        chigioca.style.color = "cyan"
    } else if (turno === 3) {
        chigioca.innerHTML = "ATTENZIONE!!! La partita e' terminata"
        chigioca.style.color = "green"
    }
})