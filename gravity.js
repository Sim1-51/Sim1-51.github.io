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

let boxx1 = 0 ;
let boxx2 = 0 ;
let boxx3 = 0 ;
let boxx4 = 0 ;
let boxx5 = 0 ;
let boxx6 = 0 ;
let boxx7 = 0 ;
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
let boxx36 = 1 ;
let boxx37 = 1 ;
let boxx38 = 1 ;
let boxx39 = 1 ;
let boxx40 = 1 ;
let boxx41 = 1 ;
let boxx42 = 1 ;

win1 = 0;
win2 = 0;
win3 = 0;
win4 = 0;
win5 = 0;
win6 = 0;
win7 = 0;
win8 = 0;
win9 = 0;
win10 = 0;
win11 = 0;
win12 = 0;
win13 = 0;
win14 = 0;
win15 = 0;
win16 = 0;
win17 = 0;
win18 = 0;
win19 = 0;
win20 = 0;
win21 = 0;
win22 = 0;
win23 = 0;
win24 = 0;
win25 = 0;
win26 = 0;
win27 = 0;
win28 = 0;
win29 = 0;
win30 = 0;
win31 = 0;
win32 = 0;
win33 = 0;
win34 = 0;
win35 = 0;
win36 = 0;
win37 = 0;
win38 = 0;
win39 = 0;
win40 = 0;
win41 = 0;
win42 = 0;

n = 0;    //numero di "click" (massimo 42)


/* BOX 1*/
casella1.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx1 === 1) {
            if (box1 === 1) {
                box1 = 2 ;
                casella1.innerHTML="𒊹";
                casella1.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella1.style.color="red";
                    turno = 2;
                    win1 = +1;
                } else if (turno === 2) {
                    casella1.style.color="yellow";
                    turno = 1;
                    win1 = -1;
                }
            } else if (box1 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } if (boxx1 === 0) {
            if (boxx8 === 1) {
                boxx1 = 1;
                if (box8 === 1) {
                    box8 = 2 ;
                    casella8.innerHTML="𒊹";
                    casella8.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella8.style.color="red";
                        turno = 2;
                        win8 = +1;
                    } else if (turno === 2) {
                        casella8.style.color="yellow";
                        turno = 1;
                        win8 = -1;
                    }
                }
            } else if (boxx8 === 0) {
                if (boxx15 === 1) {
                    boxx8 = 1;
                    if (box15 === 1) {
                        box15 = 2;
                        casella15.innerHTML="𒊹";
                        casella15.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella15.style.color="red";
                            turno = 2;
                            win15 = +1;
                        } else if (turno === 2) {
                            casella15.style.color="yellow";
                            turno = 1;
                            win15 = -1;
                        }
                    } 
                } else if (boxx15 === 0) {
                    if (boxx22 === 1) {
                        boxx15 = 1;
                        if (box22 === 1) {
                            box22 = 2
                            casella22.innerHTML="𒊹";
                            casella22.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella22.style.color="red";
                                win22 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella22.style.color="yellow";
                                turno = 1;
                                win22 = -1;
                            }
                        }
                    } else if (boxx22 === 0) {
                        if (boxx29 === 1) {
                            boxx22 = 1;
                            if (box29 === 1) {
                                box29 = 2;
                                casella29.innerHTML="𒊹";
                                casella19.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella29.style.color="red";
                                    turno = 2;
                                    win29 = +1;
                                } else if (turno === 2) {
                                    casella29.style.color="yellow";
                                    turno = 1;
                                    win29 = -1;
                                }
                            }
                        } else if (boxx29 === 0) {
                            if (boxx36 === 1) {
                                boxx29 = 1;
                                if (box36 === 1) {
                                    box36 = 2;
                                    casella36.innerHTML="𒊹";
                                    casella36.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella36.style.color="red";
                                        win36 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella36.style.color="yellow";
                                        turno = 1;
                                        win36 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 2*/
casella2.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx2 === 1) {
            if (box2 === 1) {
                box2 = 2 ;
                if (turno === 1) {
                    casella2.innerHTML = "𒊹" ;
                    turno = 2 ;
                    casella2.style.color = "red" ;
                    console.log("𒊹rosso") ;
                    n = n + 1;
                    console.log(n);
                    win2 = +1;
                    console.log(win1)
                } else if (turno === 2) {
                    casella2.innerHTML = "𒊹" ;
                    turno = 1 ;
                    casella2.style.color = "yellow"
                    console.log("𒊹giallo") ;
                    n = n + 1;
                    console.log(n);
                    win2 = -1;
                    console.log(win1)
                }
            } else if (box2 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } if (boxx2 === 0) {
            if (boxx9 === 1) {
                boxx2 = 1;
                if (box9 === 1) {
                    box9 = 2 ;
                    if (turno === 1) {
                        casella9.innerHTML = "𒊹" ;
                        turno = 2 ;
                        casella9.style.color = "red" ;
                        n = n + 1;
                        win9 = +1;
                    } else if (turno === 2) {
                        casella9.innerHTML = "𒊹";
                        turno = 1;
                        casella9.style.color = "yellow";
                        n = n + 1;
                        win9 = -1;
                    }
                }
            } else if (boxx9 === 0) {
                if (boxx16 === 1) {
                    boxx9 = 1;
                    if (box16 === 1) {
                        box16 = 2;
                        if (turno === 1) {
                            casella16.innerHTML="𒊹";
                            turno = 2;
                            casella16.style.color="red";
                            n = n + 1;
                            win16 = +1
                        } else if (turno === 2) {
                            casella16.innerHTML="𒊹";
                            turno = 1;
                            casella16.style.color="yellow";
                            n = n + 1;
                            win16 = -1;
                        }
                    } 
                } else if (boxx16 === 0) {
                    if (boxx23 === 1) {
                        boxx16 = 1;
                        if (box23 === 1) {
                            box23 = 2
                            casella23.innerHTML="𒊹";
                            casella23.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella23.style.color="red";
                                win23 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella23.style.color="yellow";
                                turno = 1;
                                win23 = -1;
                            }
                        }
                    } else if (boxx23 === 0) {
                        if (boxx30 === 1) {
                            boxx23 = 1;
                            if (box30 === 1) {
                                box30 = 2;
                                casella30.innerHTML="𒊹";
                                casella30.style.color="blck";
                                n = n + 1;
                                if (turno === 1) {
                                    casella30.style.color="red";
                                    turno = 2;
                                    win30 = +1;
                                } else if (turno === 2) {
                                    casella30.style.color="yellow";
                                    turno = 1;
                                    win30 = -1;
                                }
                            }
                        } else if (boxx30 === 0) {
                            if (boxx37 === 1) {
                                boxx30 = 1;
                                if (box37 === 1) {
                                    box37 = 2;
                                    casella37.innerHTML="𒊹";
                                    casella37.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella37.style.color="red";
                                        win37 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella37.style.color="yellow";
                                        turno = 1;
                                        win37 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 3*/
casella3.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx3 === 1) {
            if (box3 === 1) {
                box3 = 2 ;
                casella3.innerHTML="𒊹";
                casella3.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella3.style.color="red";
                    turno = 2;
                    win3 = +1;
                } else if (turno === 2) {
                    casella3.style.color="yellow";
                    turno = 1;
                    win3 = -1;
                }
            } else if (box3 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } else if (boxx3 === 0) {
            if (boxx10 === 1) {
                boxx3 = 1;
                if (box10 === 1) {
                    box10 = 2 ;
                    casella10.innerHTML="𒊹";
                    casella10.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella10.style.color="red";
                        turno = 2;
                        win10 = +1;
                    } else if (turno === 2) {
                        casella10.style.color="yellow";
                        turno = 1;
                        win10 = -1;
                    }
                }
            } else if (boxx10 === 0) {
                if (boxx17 === 1) {
                    boxx10 = 1;
                    if (box17 === 1) {
                        box17 = 2;
                        casella17.innerHTML="𒊹";
                        casella17.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella17.style.color="red";
                            turno = 2;
                            win17 = +1;
                        } else if (turno === 2) {
                            casella17.style.color="yellow";
                            turno = 1;
                            win17 = -1;
                        }
                    } 
                } else if (boxx17 === 0) {
                    if (boxx24 === 1) {
                        boxx17 = 1;
                        if (box24 === 1) {
                            box24 = 2
                            casella24.innerHTML="𒊹";
                            casella24.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella24.style.color="red";
                                win24 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella24.style.color="yellow";
                                turno = 1;
                                win24 = -1;
                            }
                        }
                    } else if (boxx24 === 0) {
                        if (boxx31 === 1) {
                            boxx24 = 1;
                            if (box31 === 1) {
                                box31 = 2;
                                casella31.innerHTML="𒊹";
                                casella31.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella31.style.color="red";
                                    turno = 2;
                                    win31 = +1;
                                } else if (turno === 2) {
                                    casella31.style.color="yellow";
                                    turno = 1;
                                    win31 = -1;
                                }
                            }
                        } else if (boxx31 === 0) {
                            if (boxx38 === 1) {
                                boxx31 = 1;
                                if (box38 === 1) {
                                    box38 = 2;
                                    casella38.innerHTML="𒊹";
                                    casella38.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella38.style.color="red";
                                        win38 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella38.style.color="yellow";
                                        turno = 1;
                                        win38 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 4*/
casella4.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx4 === 1) {
            if (box4 === 1) {
                box4 = 2 ;
                casella4.innerHTML="𒊹";
                casella4.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella4.style.color="red";
                    turno = 2;
                    win4 = +1;
                } else if (turno === 2) {
                    casella4.style.color="yellow";
                    turno = 1;
                    win4 = -1;
                }
            } else if (box4 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } if (boxx4 === 0) {
            if (boxx11 === 1) {
                boxx4 = 1;
                if (box11 === 1) {
                    box11 = 2 ;
                    casella11.innerHTML="𒊹";
                    casella11.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella11.style.color="red";
                        turno = 2;
                        win11 = +1;
                    } else if (turno === 2) {
                        casella11.style.color="yellow";
                        turno = 1;
                        win11 = -1;
                    }
                }
            } else if (boxx11 === 0) {
                if (boxx18 === 1) {
                    boxx11 = 1;
                    if (box18 === 1) {
                        box18 = 2;
                        casella18.innerHTML="𒊹";
                        casella18.style.color="black"
                        n = n + 1;
                        if (turno === 1) {
                            casella18.style.color="red";
                            turno = 2;
                            win18 = +1;
                        } else if (turno === 2) {
                            casella18.style.color="yellow";
                            turno = 1;
                            win18 = -1;
                        }
                    } 
                } else if (boxx18 === 0) {
                    if (boxx25 === 1) {
                        boxx18 = 1;
                        if (box25 === 1) {
                            box25 = 2
                            casella25.innerHTML="𒊹";
                            casella25.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella25.style.color="red";
                                win25 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella25.style.color="yellow";
                                turno = 1;
                                win25 = -1;
                            }
                        }
                    } else if (boxx25 === 0) {
                        if (boxx32 === 1) {
                            boxx25 = 1;
                            if (box32 === 1) {
                                box32 = 2;
                                casella32.innerHTML="𒊹";
                                casella32.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella32.style.color="red";
                                    turno = 2;
                                    win32 = +1;
                                } else if (turno === 2) {
                                    casella32.style.color="yellow";
                                    turno = 1;
                                    win32 = -1;
                                }
                            }
                        } else if (boxx32 === 0) {
                            if (boxx39 === 1) {
                                boxx32 = 1;
                                if (box39 === 1) {
                                    box39 = 2;
                                    casella39.innerHTML="𒊹";
                                    casella39.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella39.style.color="red";
                                        win39 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella39.style.color="yellow";
                                        turno = 1;
                                        win39 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 5 */
casella5.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx5 === 1) {
            if (box5 === 1) {
                box5 = 2 ;
                casella5.innerHTML="𒊹";
                casella5.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella5.style.color="red";
                    turno = 2;
                    win5 = +1;
                } else if (turno === 2) {
                    casella5.style.color="yellow";
                    turno = 1;
                    win5 = -1;
                }
            } else if (box5 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } else if (boxx5 === 0) {
            if (boxx12 === 1) {
                boxx5 = 1;
                if (box12 === 1) {
                    box12 = 2 ;
                    casella12.innerHTML="𒊹";
                    casella12.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella12.style.color="red";
                        turno = 2;
                        win12 = +1;
                    } else if (turno === 2) {
                        casella12.style.color="yellow";
                        turno = 1;
                        win12 = -1;
                    }
                }
            } else if (boxx12 === 0) {
                if (boxx19 === 1) {
                    boxx12 = 1;
                    if (box19 === 1) {
                        box19 = 2;
                        casella19.innerHTML="𒊹";
                        casella19.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella19.style.color="red";
                            turno = 2;
                            win19 = +1;
                        } else if (turno === 2) {
                            casella19.style.color="yellow";
                            turno = 1;
                            win19 = -1;
                        }
                    } 
                } else if (boxx19 === 0) {
                    if (boxx26 === 1) {
                        boxx19 = 1;
                        if (box26 === 1) {
                            box26 = 2
                            casella26.innerHTML="𒊹";
                            casella26.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella26.style.color="red";
                                win26 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella26.style.color="yellow";
                                turno = 1;
                                win26 = -1;
                            }
                        }
                    } else if (boxx26 === 0) {
                        if (boxx33 === 1) {
                            boxx26 = 1;
                            if (box33 === 1) {
                                box33 = 2;
                                casella33.innerHTML="𒊹";
                                casella33.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella33.style.color="red";
                                    turno = 2;
                                    win33 = +1;
                                } else if (turno === 2) {
                                    casella33.style.color="yellow";
                                    turno = 1;
                                    win33 = -1;
                                }
                            }
                        } else if (boxx33 === 0) {
                            if (boxx40 === 1) {
                                boxx33 = 1;
                                if (box40 === 1) {
                                    box40 = 2;
                                    casella40.innerHTML="𒊹";
                                    casella40.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella40.style.color="red";
                                        win40 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella40.style.color="yellow";
                                        turno = 1;
                                        win40 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})




/* BOX 6*/
casella6.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx6 === 1) {
            if (box6 === 1) {
                box6 = 2 ;
                if (turno === 1) {
                    casella6.innerHTML = "𒊹" ;
                    turno = 2 ;
                    casella6.style.color = "red" ;
                    console.log("𒊹rosso") ;
                    n = n + 1;
                    console.log(n);
                    win6 = +1;
                    console.log(win1)
                } else if (turno === 2) {
                    casella6.innerHTML = "𒊹" ;
                    turno = 1 ;
                    casella6.style.color = "yellow"
                    console.log("𒊹giallo") ;
                    n = n + 1;
                    console.log(n);
                    win6 = -1;
                    console.log(win1)
                }
            } else if (box6 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } else if (boxx6  === 0) {
            if (boxx13 === 1) {
                boxx6 = 1;
                if (box13 === 1) {
                    box13 = 2 ;
                    if (turno === 1) {
                        casella13.innerHTML = "𒊹" ;
                        turno = 2 ;
                        casella13.style.color = "red" ;
                        n = n + 1;
                        win13 = +1;
                    } else if (turno === 2) {
                        casella13.innerHTML = "𒊹";
                        turno = 1;
                        casella13.style.color = "yellow";
                        n = n + 1;
                        win13 = -1;
                    }
                }
            } else if (boxx13 === 0) {
                if (boxx20 === 1) {
                    boxx13 = 1;
                    if (box20 === 1) {
                        box20 = 2;
                        if (turno === 1) {
                            casella20.innerHTML="𒊹";
                            turno = 2;
                            casella20.style.color="red";
                            n = n + 1;
                            win20 = +1
                        } else if (turno === 2) {
                            casella20.innerHTML="𒊹";
                            turno = 1;
                            casella20.style.color="yellow";
                            n = n + 1;
                            win20 = -1;
                        }
                    } 
                } else if (boxx20 === 0) {
                    if (boxx27 === 1) {
                        boxx20 = 1;
                        if (box27 === 1) {
                            box27 = 2
                            casella27.innerHTML="𒊹";
                            casella27.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella27.style.color="red";
                                win27 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella27.style.color="yellow";
                                turno = 1;
                                win27 = -1;
                            }
                        }
                    } else if (boxx27 === 0) {
                        if (boxx34 === 1) {
                            boxx27 = 1;
                            if (box34 === 1) {
                                box34 = 2;
                                casella34.innerHTML="𒊹";
                                casella34.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella34.style.color="red";
                                    turno = 2;
                                    win34 = +1;
                                } else if (turno === 2) {
                                    casella34.style.color="yellow";
                                    turno = 1;
                                    win34 = -1;
                                }
                            }
                        } else if (boxx34 === 0) {
                            if (boxx41 === 1) {
                                boxx34 = 1;
                                if (box41 === 1) {
                                    box41 = 2;
                                    casella41.innerHTML="𒊹";
                                    casella41.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella41.style.color="red";
                                        win41 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella41.style.color="yellow";
                                        turno = 1;
                                        win41 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 7*/
casella7.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx7 === 1) {
            if (box7 === 1) {
                box7 = 2 ;
                if (turno === 1) {
                    casella7.innerHTML = "𒊹" ;
                    turno = 2 ;
                    casella7.style.color = "red" ;
                    console.log("𒊹rosso") ;
                    n = n + 1;
                    console.log(n);
                    win7 = +1;
                    console.log(win1)
                } else if (turno === 2) {
                    casella7.innerHTML = "𒊹" ;
                    turno = 1 ;
                    casella7.style.color = "yellow"
                    console.log("𒊹giallo") ;
                    n = n + 1;
                    console.log(n);
                    win7 = -1;
                    console.log(win1)
                }
            } else if (box7 === 2) {
                alert("ATTENZIONE : Questa colonna è piena")
            }
        } if (boxx7  === 0) {
            if (boxx14 === 1) {
                boxx7 = 1;
                if (box14 === 1) {
                    box14 = 2 ;
                    if (turno === 1) {
                        casella14.innerHTML = "𒊹" ;
                        turno = 2 ;
                        casella14.style.color = "red" ;
                        n = n + 1;
                        win14 = +1;
                    } else if (turno === 2) {
                        casella14.innerHTML = "𒊹";
                        turno = 1;
                        casella14.style.color = "yellow";
                        n = n + 1;
                        win14 = -1;
                    }
                }
            } else if (boxx14 === 0) {
                if (boxx21 === 1) {
                    boxx14 = 1;
                    if (box21 === 1) {
                        box21 = 2;
                        if (turno === 1) {
                            casella21.innerHTML="𒊹";
                            turno = 2;
                            casella21.style.color="red";
                            n = n + 1;
                            win21 = +1
                        } else if (turno === 2) {
                            casella21.innerHTML="𒊹";
                            turno = 1;
                            casella21.style.color="yellow";
                            n = n + 1;
                            win21 = -1;
                        }
                    } 
                } else if (boxx21 === 0) {
                    if (boxx28 === 1) {
                        boxx21 = 1;
                        if (box28 === 1) {
                            box28 = 2
                            casella28.innerHTML="𒊹";
                            casella28.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella28.style.color="red";
                                win28 = +1;
                                turno = 2;
                            } else if (turno === 2) {
                                casella28.style.color="yellow";
                                turno = 1;
                                win28 = -1;
                            }
                        }
                    } else if (boxx28 === 0) {
                        if (boxx35 === 1) {
                            boxx28 = 1;
                            if (box35 === 1) {
                                box35 = 2;
                                casella35.innerHTML="𒊹";
                                casella35.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella35.style.color="red";
                                    turno = 2;
                                    win35 = +1;
                                } else if (turno === 2) {
                                    casella35.style.color="yellow";
                                    turno = 1;
                                    win35 = -1;
                                }
                            }
                        } else if (boxx35 === 0) {
                            if (boxx42 === 1) {
                                boxx35 = 1;
                                if (box42 === 1) {
                                    box42 = 2;
                                    casella42.innerHTML="𒊹";
                                    casella42.style.color="black";
                                    n = n + 1;
                                    if (turno === 1) {
                                        casella42.style.color="red";
                                        win42 = +1;
                                        turno = 2;
                                    } else if (turno === 2) {
                                        casella42.style.color="yellow";
                                        turno = 1;
                                        win42 = -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 8 */
casella8.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx8 === 1) {
            if (box8 === 1) {
                boxx1 = 1;
                box8 = 2 ;
                casella8.innerHTML="𒊹";
                casella8.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella8.style.color="red";
                    turno = 2;
                    win8 = +1;
                } else if (turno === 2) {
                    casella8.style.color="yellow";
                    turno = 1;
                    win8 = -1;
                }
            } else if (box8 === 2) {
                if (boxx1 === 1) {
                    if (box1 === 1) {
                        box1 = 2;
                        casella1.innerHTML="𒊹";
                        casella1.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella1.style.color="red";
                            turno = 2;
                            win1 = +1;
                        } else if (turno === 2) {
                            casella1.style.color="yellow";
                            turno = 1;
                            win1 = -1;
                        }
                    } else if (box1 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx8 === 0) {
            if (boxx15 === 1) {
                boxx8 = 1;
                if (box15 = 1) {
                    box15 = 2;
                    casella15.innerHTML="𒊹";
                    casella15.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella15.style.color="red";
                        turno = 2;
                        win15 = +1;
                    } else if (turno === 2) {
                        casella15.style.color="yellow";
                        turno = 1;
                        win15 = -1;
                    }
                }
            } else if (boxx15 === 0) {
                if (boxx22 === 1) {
                    boxx15 = 1;
                    if (box22 === 1) {
                        boxx22 = 2;
                        casella22.innerHTML="𒊹";
                        casella22.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella22.style.color="red";
                            turno = 2;
                            win22 = +1;
                        } else if (turno === 2) {
                            casella22.style.color="yellow";
                            turno = 1;
                            win22 = -1;
                        }
                    }
                } else if (boxx22 === 0) {
                    if (boxx29 === 1) {
                        boxx22 = 1;
                        if (box29 === 1) {
                            box29 = 2;
                            casella29.innerHTML="𒊹";
                            casella29.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella29.style.color="red";
                                turno = 2;
                                win29 = +1;
                            } else if (turno === 2) {
                                casella29.style.color="yellow";
                                turno = 1;
                                win29 = -1;
                            }
                        }
                    } else if (boxx29 === 0) {
                        if (boxx36 === 1) {
                            boxx29 = 1;
                            if (box36 === 1) {
                                box36 = 2;
                                casella36.innerHTML="𒊹";
                                casella36.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella36.style.color="red";
                                    turno = 2;
                                    win36 = +1;
                                } else if (turno === 2) {
                                    casella36.style.color="yellow";
                                    turno = 1;
                                    win36 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 9 */
casella9.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx9 === 1) {
            if (box9 === 1) {
                boxx2 = 1;
                box9 = 2 ;
                casella9.innerHTML="𒊹";
                casella9.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella9.style.color="red";
                    turno = 2;
                    win9 = +1;
                } else if (turno === 2) {
                    casella9.style.color="yellow";
                    turno = 1;
                    win9 = -1;
                }
            } else if (box9 === 2) {
                if (boxx2 === 1) {
                    if (box2 === 1) {
                        box2 = 2;
                        casella2.innerHTML="𒊹";
                        casella2.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella2.style.color="red";
                            turno = 2;
                            win2 = +1;
                        } else if (turno === 2) {
                            casella2.style.color="yellow";
                            turno = 1;
                            win2 = -1;
                        }
                    } else if (box2 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx9 === 0) {
            if (boxx16 === 1) {
                boxx9 = 1;
                if (box16 = 1) {
                    box16 = 2;
                    casella16.innerHTML="𒊹";
                    casella16.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella16.style.color="red";
                        turno = 2;
                        win16 = +1;
                    } else if (turno === 2) {
                        casella16.style.color="yellow";
                        turno = 1;
                        win16 = -1;
                    }
                }
            } else if (boxx16 === 0) {
                if (boxx23 === 1) {
                    boxx16 = 1;
                    if (box23 === 1) {
                        boxx23 = 2;
                        casella23.innerHTML="𒊹";
                        casella23.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella23.style.color="red";
                            turno = 2;
                            win23 = +1;
                        } else if (turno === 2) {
                            casella23.style.color="yellow";
                            turno = 1;
                            win23 = -1;
                        }
                    }
                } else if (boxx23 === 0) {
                    if (boxx30 === 1) {
                        boxx23 = 1;
                        if (box30 === 1) {
                            box30 = 2;
                            casella30.innerHTML="𒊹";
                            casella30.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella30.style.color="red";
                                turno = 2;
                                win30 = +1;
                            } else if (turno === 2) {
                                casella30.style.color="yellow";
                                turno = 1;
                                win30 = -1;
                            }
                        }
                    } else if (boxx30 === 0) {
                        if (boxx37 === 1) {
                            boxx30 = 1;
                            if (box37 === 1) {
                                box37 = 2;
                                casella37.innerHTML="𒊹";
                                casella37.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella37.style.color="red";
                                    turno = 2;
                                    win37 = +1;
                                } else if (turno === 2) {
                                    casella37.style.color="yellow";
                                    turno = 1;
                                    win37 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 10 */
casella10.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx10 === 1) {
            if (box10 === 1) {
                boxx3 = 1;
                box10 = 2 ;
                casella10.innerHTML="𒊹";
                casella10.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella10.style.color="red";
                    turno = 2;
                    win10 = +1;
                } else if (turno === 2) {
                    casella10.style.color="yellow";
                    turno = 1;
                    win10 = -1;
                }
            } else if (box10 === 2) {
                if (boxx3 === 1) {
                    if (box3 === 1) {
                        box3 = 2;
                        casella3.innerHTML="𒊹";
                        casella3.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella3.style.color="red";
                            turno = 2;
                            win3 = +1;
                        } else if (turno === 2) {
                            casella3.style.color="yellow";
                            turno = 1;
                            win3 = -1;
                        }
                    } else if (box3 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx10 === 0) {
            if (boxx17 === 1) {
                boxx10 = 1;
                if (box17 = 1) {
                    box17 = 2;
                    casella17.innerHTML="𒊹";
                    caasella17.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella17.style.color="red";
                        turno = 2;
                        win17 = +1;
                    } else if (turno === 2) {
                        casella17.style.color="yellow";
                        turno = 1;
                        win17 = -1;
                    }
                }
            } else if (boxx17 === 0) {
                if (boxx24 === 1) {
                    boxx17 = 1;
                    if (box24 === 1) {
                        boxx24 = 2;
                        casella24.innerHTML="𒊹";
                        casella24.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella24.style.color="red";
                            turno = 2;
                            win24 = +1;
                        } else if (turno === 2) {
                            casella24.style.color="yellow";
                            turno = 1;
                            win24 = -1;
                        }
                    }
                } else if (boxx24 === 0) {
                    if (boxx31 === 1) {
                        boxx24 = 1;
                        if (box31 === 1) {
                            box31 = 2;
                            casella31.innerHTML="𒊹";
                            casella31.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella31.style.color="red";
                                turno = 2;
                                win31 = +1;
                            } else if (turno === 2) {
                                casella31.style.color="yellow";
                                turno = 1;
                                win31 = -1;
                            }
                        }
                    } else if (boxx31 === 0) {
                        if (boxx38 === 1) {
                            boxx31 = 1;
                            if (box38 === 1) {
                                box38 = 2;
                                casella38.innerHTML="𒊹";
                                casella38.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella38.style.color="red";
                                    turno = 2;
                                    win38 = +1;
                                } else if (turno === 2) {
                                    casella38.style.color="yellow";
                                    turno = 1;
                                    win38 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 11 */
casella11.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx11 === 1) {
            if (box11 === 1) {
                boxx4 = 1;
                box11 = 2 ;
                casella11.innerHTML="𒊹";
                casella11.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella11.style.color="red";
                    turno = 2;
                    win11 = +1;
                } else if (turno === 2) {
                    casella11.style.color="yellow";
                    turno = 1;
                    win11 = -1;
                }
            } else if (box11 === 2) {
                if (boxx4 === 1) {
                    if (box4 === 1) {
                        box4 = 2;
                        casella4.innerHTML="𒊹";
                        casella4.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella4.style.color="red";
                            turno = 2;
                            win4 = +1;
                        } else if (turno === 2) {
                            casella4.style.color="yellow";
                            turno = 1;
                            win4 = -1;
                        }
                    } else if (box4 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx11 === 0) {
            if (boxx18 === 1) {
                boxx11 = 1;
                if (box18 = 1) {
                    box18 = 2;
                    casella18.innerHTML="𒊹";
                    casella18.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella18.style.color="red";
                        turno = 2;
                        win18 = +1;
                    } else if (turno === 2) {
                        casella18.style.color="yellow";
                        turno = 1;
                        win18 = -1;
                    }
                }
            } else if (boxx18 === 0) {
                if (boxx25 === 1) {
                    boxx18 = 1;
                    if (box25 === 1) {
                        boxx25 = 2;
                        casella25.innerHTML="𒊹";
                        casella25.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella25.style.color="red";
                            turno = 2;
                            win25 = +1;
                        } else if (turno === 2) {
                            casella25.style.color="yellow";
                            turno = 1;
                            win25 = -1;
                        }
                    }
                } else if (boxx25 === 0) {
                    if (boxx32 === 1) {
                        boxx25 = 1;
                        if (box32 === 1) {
                            box32 = 2;
                            casella32.innerHTML="𒊹";
                            casella32.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella32.style.color="red";
                                turno = 2;
                                win32 = +1;
                            } else if (turno === 2) {
                                casella32.style.color="yellow";
                                turno = 1;
                                win32 = -1;
                            }
                        }
                    } else if (boxx32 === 0) {
                        if (boxx39 === 1) {
                            boxx32 = 1;
                            if (box39 === 1) {
                                box39 = 2;
                                casella39.innerHTML="𒊹";
                                casella39.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella39.style.color="red";
                                    turno = 2;
                                    win39 = +1;
                                } else if (turno === 2) {
                                    casella39.style.color="yellow";
                                    turno = 1;
                                    win39 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 12 */
casella12.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx12 === 1) {
            if (box12 === 1) {
                boxx5 = 1;
                box12 = 2 ;
                casella12.innerHTML="𒊹";
                casella12.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella12.style.color="red";
                    turno = 2;
                    win12 = +1;
                } else if (turno === 2) {
                    casella12.style.color="yellow";
                    turno = 1;
                    win12 = -1;
                }
            } else if (box12 === 2) {
                if (boxx5 === 1) {
                    if (box5 === 1) {
                        box5 = 2;
                        casella5.innerHTML="𒊹";
                        casella5.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella5.style.color="red";
                            turno = 2;
                            win5 = +1;
                        } else if (turno === 2) {
                            casella5.style.color="yellow";
                            turno = 1;
                            win5 = -1;
                        }
                    } else if (box5 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx12 === 0) {
            if (boxx19 === 1) {
                boxx12 = 1;
                if (box19 = 1) {
                    box19 = 2;
                    casella19.innerHTML="𒊹";
                    casella19.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella19.style.color="red";
                        turno = 2;
                        win19 = +1;
                    } else if (turno === 2) {
                        casella19.style.color="yellow";
                        turno = 1;
                        win19 = -1;
                    }
                }
            } else if (boxx19 === 0) {
                if (boxx26 === 1) {
                    boxx19 = 1;
                    if (box26 === 1) {
                        boxx26 = 2;
                        casella26.innerHTML="𒊹";
                        casella26.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella26.style.color="red";
                            turno = 2;
                            win26 = +1;
                        } else if (turno === 2) {
                            casella26.style.color="yellow";
                            turno = 1;
                            win26 = -1;
                        }
                    }
                } else if (boxx26 === 0) {
                    if (boxx33 === 1) {
                        boxx26 = 1;
                        if (box33 === 1) {
                            box33 = 2;
                            casella33.innerHTML="𒊹";
                            casella33.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella33.style.color="red";
                                turno = 2;
                                win33 = +1;
                            } else if (turno === 2) {
                                casella33.style.color="yellow";
                                turno = 1;
                                win33 = -1;
                            }
                        }
                    } else if (boxx33 === 0) {
                        if (boxx40 === 1) {
                            boxx33 = 1;
                            if (box40 === 1) {
                                box40 = 2;
                                casella40.innerHTML="𒊹";
                                casella40.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella40.style.color="red";
                                    turno = 2;
                                    win40 = +1;
                                } else if (turno === 2) {
                                    casella40.style.color="yellow";
                                    turno = 1;
                                    win40 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 13 */
casella13.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx13 === 1) {
            if (box13 === 1) {
                boxx6 = 1;
                box13 = 2 ;
                casella13.innerHTML="𒊹";
                casella13.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella13.style.color="red";
                    turno = 2;
                    win13 = +1;
                } else if (turno === 2) {
                    casella13.style.color="yellow";
                    turno = 1;
                    win13 = -1;
                }
            } else if (box13 === 2) {
                if (boxx6 === 1) {
                    if (box6 === 1) {
                        box6 = 2;
                        casella6.innerHTML="𒊹";
                        casella6.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella6.style.color="red";
                            turno = 2;
                            win6 = +1;
                        } else if (turno === 2) {
                            casella6.style.color="yellow";
                            turno = 1;
                            win6 = -1;
                        }
                    } else if (box6 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx13 === 0) {
            if (boxx20 === 1) {
                boxx13 = 1;
                if (box20 = 1) {
                    box20 = 2;
                    casella20.innerHTML="𒊹";
                    casella20.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella20.style.color="red";
                        turno = 2;
                        win20 = +1;
                    } else if (turno === 2) {
                        casella20.style.color="yellow";
                        turno = 1;
                        win20 = -1;
                    }
                }
            } else if (boxx20 === 0) {
                if (boxx27 === 1) {
                    boxx20 = 1;
                    if (box27 === 1) {
                        boxx27 = 2;
                        casella27.innerHTML="𒊹";
                        casella1.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella27.style.color="red";
                            turno = 2;
                            win27 = +1;
                        } else if (turno === 2) {
                            casella27.style.color="yellow";
                            turno = 1;
                            win27 = -1;
                        }
                    }
                } else if (boxx27 === 0) {
                    if (boxx34 === 1) {
                        boxx27 = 1;
                        if (box34 === 1) {
                            box34 = 2;
                            casella34.innerHTML="𒊹";
                            casella34.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella34.style.color="red";
                                turno = 2;
                                win34 = +1;
                            } else if (turno === 2) {
                                casella34.style.color="yellow";
                                turno = 1;
                                win34 = -1;
                            }
                        }
                    } else if (boxx34 === 0) {
                        if (boxx41 === 1) {
                            boxx34 = 1;
                            if (box41 === 1) {
                                box41 = 2;
                                casella41.innerHTML="𒊹";
                                casella41.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella41.style.color="red";
                                    turno = 2;
                                    win41 = +1;
                                } else if (turno === 2) {
                                    casella41.style.color="yellow";
                                    turno = 1;
                                    win41 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 14 */
casella14.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx14 === 1) {
            if (box14 === 1) {
                boxx7 = 1;
                box14 = 2 ;
                casella14.innerHTML="𒊹";
                casella14.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella14.style.color="red";
                    turno = 2;
                    win14 = +1;
                } else if (turno === 2) {
                    casella14.style.color="yellow";
                    turno = 1;
                    win14 = -1;
                }
            } else if (box14 === 2) {
                if (boxx7 === 1) {
                    if (box7 === 1) {
                        box7 = 2;
                        casella7.innerHTML="𒊹";
                        casella7.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella7.style.color="red";
                            turno = 2;
                            win7 = +1;
                        } else if (turno === 2) {
                            casella7.style.color="yellow";
                            turno = 1;
                            win7 = -1;
                        }
                    } else if (box7 === 2) {
                        alert("ATTENZIONE : questa colonna è piena")
                    }
                }
            }
        } else if (boxx14 === 0) {
            if (boxx21 === 1) {
                boxx14 = 1;
                if (box21 = 1) {
                    box21 = 2;
                    casella21.innerHTML="𒊹";
                    casella21.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella21.style.color="red";
                        turno = 2;
                        win21 = +1;
                    } else if (turno === 2) {
                        casella21.style.color="yellow";
                        turno = 1;
                        win21 = -1;
                    }
                }
            } else if (boxx21 === 0) {
                if (boxx28 === 1) {
                    boxx21 = 1;
                    if (box28 === 1) {
                        boxx28 = 2;
                        casella28.innerHTML="𒊹";
                        casella28.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella28.style.color="red";
                            turno = 2;
                            win28 = +1;
                        } else if (turno === 2) {
                            casella28.style.color="yellow";
                            turno = 1;
                            win28 = -1;
                        }
                    }
                } else if (boxx28 === 0) {
                    if (boxx35 === 1) {
                        boxx28 = 1;
                        if (box35 === 1) {
                            box35 = 2;
                            casella35.innerHTML="𒊹";
                            casella35.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella35.style.color="red";
                                turno = 2;
                                win35 = +1;
                            } else if (turno === 2) {
                                casella35.style.color="yellow";
                                turno = 1;
                                win35 = -1;
                            }
                        }
                    } else if (boxx35 === 0) {
                        if (boxx42 === 1) {
                            boxx35 = 1;
                            if (box42 === 1) {
                                box42 = 2;
                                casella42.innerHTML="𒊹";
                                casella42.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella42.style.color="red";
                                    turno = 2;
                                    win42 = +1;
                                } else if (turno === 2) {
                                    casella42.style.color="yellow";
                                    turno = 1;
                                    win42 = -1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 15 */
casella15.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx15 === 1) {
            if (box15 === 1) {
                boxx8 = 1;
                box15 = 2 ;
                casella15.innerHTML="𒊹";
                casella15.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella15.style.color="red";
                    turno = 2;
                    win15 = +1;
                } else if (turno === 2) {
                    casella15.style.color="yellow";
                    turno = 1;
                    win15 = -1;
                }
            } else if (box15 === 2) {
                if (boxx8 === 1) {
                    if (box8 === 1) {
                        boxx1 = 1;
                        box8 = 2;
                        casella8.innerHTML="𒊹";
                        casella8.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella8.style.color="red";
                            turno = 2;
                            win8 = +1;
                        } else if (turno === 2) {
                            casella8.style.color="yellow";
                            turno = 1;
                            win8 = -1;
                        }
                    } else if (box8 === 2) {
                        if (boxx1 === 1) {
                            if(box1 === 1) {
                                box1 = 2;
                                casella1.innerHTML="𒊹";
                                casella1.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella1.style.color="red";
                                    turno = 2;
                                    win1 = +1
                                } else if (turno === 2) {
                                    casella1.style.color="yellow";
                                    turno = 1;
                                    win1 = -1;
                                }
                            } else if (box1 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx15 === 0) {
            if (boxx22 === 1) {
                boxx15 = 1;
                if (box22 = 1) {
                    box22 = 2;
                    casella22.innerHTML="𒊹";
                    casella22.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella22.style.color="red";
                        turno = 2;
                        win22 = +1;
                    } else if (turno === 2) {
                        casella22.style.color="yellow";
                        turno = 1;
                        win22 = -1;
                    }
                }
            } else if (boxx22 === 0) {
                if (boxx29 === 1) {
                    boxx22 = 1;
                    if (box29 === 1) {
                        boxx29 = 2;
                        casella29.innerHTML="𒊹";
                        casella29.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella29.style.color="red";
                            turno = 2;
                            win29 = +1;
                        } else if (turno === 2) {
                            casella29.style.color="yellow";
                            turno = 1;
                            win29 = -1;
                        }
                    }
                } else if (boxx29 === 0) {
                    if (boxx36 === 1) {
                        boxx29 = 1;
                        if (box36 === 1) {
                            box36 = 2;
                            casella36.innerHTML="𒊹";
                            casella36.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella36.style.color="red";
                                turno = 2;
                                win36 = +1;
                            } else if (turno === 2) {
                                casella36.style.color="yellow";
                                turno = 1;
                                win36 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 16 */
casella16.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx16 === 1) {
            if (box16 === 1) {
                boxx9 = 1;
                box16 = 2 ;
                casella16.innerHTML="𒊹";
                casella16.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella16.style.color="red";
                    turno = 2;
                    win16 = +1;
                } else if (turno === 2) {
                    casella16.style.color="yellow";
                    turno = 1;
                    win16 = -1;
                }
            } else if (box16 === 2) {
                if (boxx9 === 1) {
                    if (box9 === 1) {
                        boxx2 = 1;
                        box9 = 2;
                        casella9.innerHTML="𒊹";
                        casella9.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella9.style.color="red";
                            turno = 2;
                            win9 = +1;
                        } else if (turno === 2) {
                            casella9.style.color="yellow";
                            turno = 1;
                            win9 = -1;
                        }
                    } else if (box9 === 2) {
                        if (boxx2 === 1) {
                            if(box2 === 1) {
                                box2 = 2;
                                casella2.innerHTML="𒊹";
                                casella2.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella2.style.color="red";
                                    turno = 2;
                                    win2 = +1
                                } else if (turno === 2) {
                                    casella2.style.color="yellow";
                                    turno = 1;
                                    win2 = -1;
                                }
                            } else if (box2 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx16 === 0) {
            if (boxx23 === 1) {
                boxx16 = 1;
                if (box23 = 1) {
                    box23 = 2;
                    casella23.innerHTML="𒊹";
                    casella23.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella23.style.color="red";
                        turno = 2;
                        win23 = +1;
                    } else if (turno === 2) {
                        casella23.style.color="yellow";
                        turno = 1;
                        win23 = -1;
                    }
                }
            } else if (boxx23 === 0) {
                if (boxx30 === 1) {
                    boxx23 = 1;
                    if (box30 === 1) {
                        boxx30 = 2;
                        casella30.innerHTML="𒊹";
                        casella30.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella30.style.color="red";
                            turno = 2;
                            win30 = +1;
                        } else if (turno === 2) {
                            casella30.style.color="yellow";
                            turno = 1;
                            win30 = -1;
                        }
                    }
                } else if (boxx30 === 0) {
                    if (boxx37 === 1) {
                        boxx30 = 1;
                        if (box37 === 1) {
                            box37 = 2;
                            casella37.innerHTML="𒊹";
                            casella37.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella37.style.color="red";
                                turno = 2;
                                win37 = +1;
                            } else if (turno === 2) {
                                casella37.style.color="yellow";
                                turno = 1;
                                win37 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 17 */
casella17.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx17 === 1) {
            if (box17 === 1) {
                boxx10 = 1;
                box17 = 2 ;
                casella17.innerHTML="𒊹";
                casella17.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella17.style.color="red";
                    turno = 2;
                    win17 = +1;
                } else if (turno === 2) {
                    casella17.style.color="yellow";
                    turno = 1;
                    win17 = -1;
                }
            } else if (box17 === 2) {
                if (boxx10 === 1) {
                    if (box10 === 1) {
                        boxx3 = 1;
                        box10 = 2;
                        casella10.innerHTML="𒊹";
                        casella10.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella10.style.color="red";
                            turno = 2;
                            win10 = +1;
                        } else if (turno === 2) {
                            casella10.style.color="yellow";
                            turno = 1;
                            win10 = -1;
                        }
                    } else if (box10 === 2) {
                        if (boxx3 === 1) {
                            if(box3 === 1) {
                                box3 = 2;
                                casella3.innerHTML="𒊹";
                                casella3.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella3.style.color="red";
                                    turno = 2;
                                    win3 = +1
                                } else if (turno === 2) {
                                    casella3.style.color="yellow";
                                    turno = 1;
                                    win3 = -1;
                                }
                            } else if (box3 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx17 === 0) {
            if (boxx24 === 1) {
                boxx17 = 1;
                if (box24 = 1) {
                    box24 = 2;
                    casella24.innerHTML="𒊹";
                    casella24.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella24.style.color="red";
                        turno = 2;
                        win24 = +1;
                    } else if (turno === 2) {
                        casella24.style.color="yellow";
                        turno = 1;
                        win24 = -1;
                    }
                }
            } else if (boxx24 === 0) {
                if (boxx31 === 1) {
                    boxx24 = 1;
                    if (box31 === 1) {
                        boxx31 = 2;
                        casella31.innerHTML="𒊹";
                        casella31.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella31.style.color="red";
                            turno = 2;
                            win31 = +1;
                        } else if (turno === 2) {
                            casella31.style.color="yellow";
                            turno = 1;
                            win31 = -1;
                        }
                    }
                } else if (boxx31 === 0) {
                    if (boxx38 === 1) {
                        boxx31 = 1;
                        if (box38 === 1) {
                            box38 = 2;
                            casella38.innerHTML="𒊹";
                            casella38.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella38.style.color="red";
                                turno = 2;
                                win38 = +1;
                            } else if (turno === 2) {
                                casella38.style.color="yellow";
                                turno = 1;
                                win38 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 18 */
casella18.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx18 === 1) {
            if (box18 === 1) {
                boxx11 = 1;
                box18 = 2 ;
                casella18.innerHTML="𒊹";
                casella18.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella18.style.color="red";
                    turno = 2;
                    win18 = +1;
                } else if (turno === 2) {
                    casella18.style.color="yellow";
                    turno = 1;
                    win18 = -1;
                }
            } else if (box18 === 2) {
                if (boxx11 === 1) {
                    if (box11 === 1) {
                        boxx4 = 1;
                        box11 = 2;
                        casella11.innerHTML="𒊹";
                        casella11.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella11.style.color="red";
                            turno = 2;
                            win11 = +1;
                        } else if (turno === 2) {
                            casella11.style.color="yellow";
                            turno = 1;
                            win11 = -1;
                        }
                    } else if (box11 === 2) {
                        if (boxx4 === 1) {
                            if(box4 === 1) {
                                box4 = 2;
                                casella4.innerHTML="𒊹";
                                casella4.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella4.style.color="red";
                                    turno = 2;
                                    win4 = +1
                                } else if (turno === 2) {
                                    casella4.style.color="yellow";
                                    turno = 1;
                                    win4 = -1;
                                }
                            } else if (box4 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx18 === 0) {
            if (boxx25 === 1) {
                boxx18 = 1;
                if (box25 = 1) {
                    box25 = 2;
                    casella25.innerHTML="𒊹";
                    casella25.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella25.style.color="red";
                        turno = 2;
                        win25 = +1;
                    } else if (turno === 2) {
                        casella25.style.color="yellow";
                        turno = 1;
                        win25 = -1;
                    }
                }
            } else if (boxx25 === 0) {
                if (boxx32 === 1) {
                    boxx25 = 1;
                    if (box32 === 1) {
                        boxx32 = 2;
                        casella32.innerHTML="𒊹";
                        casella32.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella32.style.color="red";
                            turno = 2;
                            win32 = +1;
                        } else if (turno === 2) {
                            casella32.style.color="yellow";
                            turno = 1;
                            win32 = -1;
                        }
                    }
                } else if (boxx32 === 0) {
                    if (boxx39 === 1) {
                        boxx32 = 1;
                        if (box39 === 1) {
                            box39 = 2;
                            casella39.innerHTML="𒊹";
                            casella39.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella39.style.color="red";
                                turno = 2;
                                win39 = +1;
                            } else if (turno === 2) {
                                casella39.style.color="yellow";
                                turno = 1;
                                win39 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 19 */
casella19.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx19 === 1) {
            if (box19 === 1) {
                boxx12 = 1;
                box19 = 2 ;
                casella19.innerHTML="𒊹";
                casella19.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella19.style.color="red";
                    turno = 2;
                    win19 = +1;
                } else if (turno === 2) {
                    casella19.style.color="yellow";
                    turno = 1;
                    win19 = -1;
                }
            } else if (box19 === 2) {
                if (boxx12 === 1) {
                    if (box12 === 1) {
                        boxx5 = 1;
                        box12 = 2;
                        casella12.innerHTML="𒊹";
                        casella12.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella12.style.color="red";
                            turno = 2;
                            win12 = +1;
                        } else if (turno === 2) {
                            casella12.style.color="yellow";
                            turno = 1;
                            win12 = -1;
                        }
                    } else if (box12 === 2) {
                        if (boxx5 === 1) {
                            if(box5 === 1) {
                                box5 = 2;
                                casella5.innerHTML="𒊹";
                                casella5.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella5.style.color="red";
                                    turno = 2;
                                    win5 = +1
                                } else if (turno === 2) {
                                    casella5.style.color="yellow";
                                    turno = 1;
                                    win5 = -1;
                                }
                            } else if (box5 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx19 === 0) {
            if (boxx26 === 1) {
                boxx19 = 1;
                if (box26 = 1) {
                    box26 = 2;
                    casella26.innerHTML="𒊹";
                    casella26.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella26.style.color="red";
                        turno = 2;
                        win26 = +1;
                    } else if (turno === 2) {
                        casella26.style.color="yellow";
                        turno = 1;
                        win26 = -1;
                    }
                }
            } else if (boxx26 === 0) {
                if (boxx33 === 1) {
                    boxx26 = 1;
                    if (box33 === 1) {
                        boxx33 = 2;
                        casella33.innerHTML="𒊹";
                        casella33.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella33.style.color="red";
                            turno = 2;
                            win33 = +1;
                        } else if (turno === 2) {
                            casella33.style.color="yellow";
                            turno = 1;
                            win33 = -1;
                        }
                    }
                } else if (boxx33 === 0) {
                    if (boxx40 === 1) {
                        boxx33 = 1;
                        if (box40 === 1) {
                            box40 = 2;
                            casella40.innerHTML="𒊹";
                            casella40.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella40.style.color="red";
                                turno = 2;
                                win40 = +1;
                            } else if (turno === 2) {
                                casella40.style.color="yellow";
                                turno = 1;
                                win40 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 20 */
casella20.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx20 === 1) {
            if (box20 === 1) {
                boxx13 = 1;
                box20 = 2 ;
                casella20.innerHTML="𒊹";
                casella20.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella20.style.color="red";
                    turno = 2;
                    win20 = +1;
                } else if (turno === 2) {
                    casella20.style.color="yellow";
                    turno = 1;
                    win20 = -1;
                }
            } else if (box20 === 2) {
                if (boxx13 === 1) {
                    if (box13 === 1) {
                        boxx6 = 1;
                        box13 = 2;
                        casella13.innerHTML="𒊹";
                        casella13.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella13.style.color="red";
                            turno = 2;
                            win13 = +1;
                        } else if (turno === 2) {
                            casella13.style.color="yellow";
                            turno = 1;
                            win13 = -1;
                        }
                    } else if (box13 === 2) {
                        if (boxx6 === 1) {
                            if (box6 === 1) {
                                box6 = 2;
                                casella6.innerHTML="𒊹";
                                casella6.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella6.style.color="red";
                                    turno = 2;
                                    win6 = +1
                                } else if (turno === 2) {
                                    casella6.style.color="yellow";
                                    turno = 1;
                                    win6 = -1;
                                }
                            } else if (box6 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx20 === 0) {
            if (boxx27 === 1) {
                boxx20 = 1;
                if (box27 = 1) {
                    box27 = 2;
                    casella27.innerHTML="𒊹";
                    casella27.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella27.style.color="red";
                        turno = 2;
                        win27 = +1;
                    } else if (turno === 2) {
                        casella27.style.color="yellow";
                        turno = 1;
                        win27 = -1;
                    }
                }
            } else if (boxx27 === 0) {
                if (boxx34 === 1) {
                    boxx27 = 1;
                    if (box34 === 1) {
                        boxx34 = 2;
                        casella34.innerHTML="𒊹";
                        casella34.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella34.style.color="red";
                            turno = 2;
                            win34 = +1;
                        } else if (turno === 2) {
                            casella34.style.color="yellow";
                            turno = 1;
                            win34 = -1;
                        }
                    }
                } else if (boxx34 === 0) {
                    if (boxx41 === 1) {
                        boxx34 = 1;
                        if (box41 === 1) {
                            box41 = 2;
                            casella41.innerHTML="𒊹";
                            casella41.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella41.style.color="red";
                                turno = 2;
                                win41 = +1;
                            } else if (turno === 2) {
                                casella41.style.color="yellow";
                                turno = 1;
                                win41 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 21 */
casella21.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx21 === 1) {
            if (box21 === 1) {
                boxx14 = 1;
                box21 = 2 ;
                casella21.innerHTML="𒊹";
                casella21.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella21.style.color="red";
                    turno = 2;
                    win21 = +1;
                } else if (turno === 2) {
                    casella21.style.color="yellow";
                    turno = 1;
                    win21 = -1;
                }
            } else if (box21 === 2) {
                if (boxx14 === 1) {
                    if (box14 === 1) {
                        boxx7 = 1;
                        box14 = 2;
                        casella14.innerHTML="𒊹";
                        casella14.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella14.style.color="red";
                            turno = 2;
                            win14 = +1;
                        } else if (turno === 2) {
                            casella14.style.color="yellow";
                            turno = 1;
                            win14 = -1;
                        }
                    } else if (box14 === 2) {
                        if (boxx7 === 1) {
                            if (box7 === 1) {
                                box7 = 2;
                                casella7.innerHTML="𒊹";
                                casella7.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella7.style.color="red";
                                    turno = 2;
                                    win7 = +1
                                } else if (turno === 2) {
                                    casella7.style.color="yellow";
                                    turno = 1;
                                    win7 = -1;
                                }
                            } else if (box7 === 2) {
                                alert("ATTENZIONE : questa colonna è piena")
                            }
                        }
                    }
                }
            }
        } else if (boxx21 === 0) {
            if (boxx28 === 1) {
                boxx21 = 1;
                if (box28 = 1) {
                    box28 = 2;
                    casella28.innerHTML="𒊹";
                    casella28.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella28.style.color="red";
                        turno = 2;
                        win28 = +1;
                    } else if (turno === 2) {
                        casella28.style.color="yellow";
                        turno = 1;
                        win28 = -1;
                    }
                }
            } else if (boxx28 === 0) {
                if (boxx35 === 1) {
                    boxx28 = 1;
                    if (box35 === 1) {
                        boxx35 = 2;
                        casella35.innerHTML="𒊹";
                        casella35.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella35.style.color="red";
                            turno = 2;
                            win35 = +1;
                        } else if (turno === 2) {
                            casella35.style.color="yellow";
                            turno = 1;
                            win35 = -1;
                        }
                    }
                } else if (boxx35 === 0) {
                    if (boxx42 === 1) {
                        boxx35 = 1;
                        if (box42 === 1) {
                            box42 = 2;
                            casella42.innerHTML="𒊹";
                            casella42.style.color="black";
                            n = n + 1;
                            if (turno === 1) {
                                casella42.style.color="red";
                                turno = 2;
                                win42 = +1;
                            } else if (turno === 2) {
                                casella42.style.color="yellow";
                                turno = 1;
                                win42 = -1;
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 22 */
casella22.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx22 === 1) {
            if (box22 === 1) {
                boxx15 = 1;
                box22 = 2 ;
                casella22.innerHTML="𒊹";
                casella22.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella22.style.color="red";
                    turno = 2;
                    win22 = +1;
                } else if (turno === 2) {
                    casella22.style.color="yellow";
                    turno = 1;
                    win22 = -1;
                }
            } else if (box22 === 2) {
                if (boxx15 === 1) {
                    if (box15 === 1) {
                        boxx8 = 1;
                        box15 = 2;
                        casella15.innerHTML="𒊹";
                        casella15.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella15.style.color="red";
                            turno = 2;
                            win15 = +1;
                        } else if (turno === 2) {
                            casella15.style.color="yellow";
                            turno = 1;
                            win15 = -1;
                        }
                    } else if (box15 === 2) {
                        if (boxx8 === 1) {
                            if(box8 === 1) {
                                boxx1 = 1;
                                box8 = 2;
                                casella8.innerHTML="𒊹";
                                casella8.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella8.style.color="red";
                                    turno = 2;
                                    win8 = +1
                                } else if (turno === 2) {
                                    casella8.style.color="yellow";
                                    turno = 1;
                                    win8 = -1;
                                }
                            } else if  (box8 === 2) {
                                if (boxx1 === 1) {
                                    if (box1 === 1) {
                                        box1 =  2;
                                        casella1.innerHTML="𒊹";
                                        casella1.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella1.style.color="red";
                                            turno = 2;
                                            win1 = +1;
                                        } else if (turno === 2) {
                                            casella1.style.color="yellow";
                                            turno = 1;
                                            win1 = -1;
                                        }
                                    } else if (box1 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx22 === 0) {
            if (boxx29 === 1) {
                boxx22 = 1;
                if (box29 = 1) {
                    box29 = 2;
                    casella29.innerHTML="𒊹";
                    casella29.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella29.style.color="red";
                        turno = 2;
                        win29 = +1;
                    } else if (turno === 2) {
                        casella29.style.color="yellow";
                        turno = 1;
                        win29 = -1;
                    }
                }
            } else if (boxx29 === 0) {
                if (boxx36 === 1) {
                    boxx29 = 1;
                    if (box36 === 1) {
                        boxx36 = 2;
                        casella36.innerHTML="𒊹";
                        casella36.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella36.style.color="red";
                            turno = 2;
                            win36 = +1;
                        } else if (turno === 2) {
                            casella36.style.color="yellow";
                            turno = 1;
                            win36 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 23 */
casella23.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx23 === 1) {
            if (box23 === 1) {
                boxx16 = 1;
                box23 = 2 ;
                casella23.innerHTML="𒊹";
                casella23.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella23.style.color="red";
                    turno = 2;
                    win23 = +1;
                } else if (turno === 2) {
                    casella23.style.color="yellow";
                    turno = 1;
                    win23 = -1;
                }
            } else if (box23 === 2) {
                if (boxx16 === 1) {
                    if (box16 === 1) {
                        boxx9 = 1;
                        box16 = 2;
                        casella16.innerHTML="𒊹";
                        casella16.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella16.style.color="red";
                            turno = 2;
                            win16 = +1;
                        } else if (turno === 2) {
                            casella16.style.color="yellow";
                            turno = 1;
                            win16 = -1;
                        }
                    } else if (box16 === 2) {
                        if (boxx9 === 1) {
                            if(box9 === 1) {
                                boxx2 = 1;
                                box9 = 2;
                                casella9.innerHTML="𒊹";
                                casella9.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella9.style.color="red";
                                    turno = 2;
                                    win9 = +1
                                } else if (turno === 2) {
                                    casella9.style.color="yellow";
                                    turno = 1;
                                    win9 = -1;
                                }
                            } else if (box9 === 2) {
                                if (boxx2 === 1) {
                                    if (box2 === 1) {
                                        box2 = 2;
                                        casella2.innerHTML="𒊹";
                                        casella2.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella2.style.color="red";
                                            turno = 2;
                                            win2 = +1;
                                        } else if (turno === 2) {
                                            casella2.style.color="yellow";
                                            turno = 1;
                                            win2 = -1;
                                        }
                                    } else if (box2 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx23 === 0) {
            if (boxx30 === 1) {
                boxx23 = 1;
                if (box30 = 1) {
                    box30 = 2;
                    casella30.innerHTML="𒊹";
                    casella30.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella30.style.color="red";
                        turno = 2;
                        win30 = +1;
                    } else if (turno === 2) {
                        casella30.style.color="yellow";
                        turno = 1;
                        win30 = -1;
                    }
                }
            } else if (boxx30 === 0) {
                if (boxx37 === 1) {
                    boxx30 = 1;
                    if (box37 === 1) {
                        boxx37 = 2;
                        casella37.innerHTML="𒊹";
                        casella37.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella37.style.color="red";
                            turno = 2;
                            win37 = +1;
                        } else if (turno === 2) {
                            casella37.style.color="yellow";
                            turno = 1;
                            win37 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 24 */
casella24.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx24 === 1) {
            if (box24 === 1) {
                boxx17 = 1;
                box24 = 2 ;
                casella24.innerHTML="𒊹";
                casella24.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella24.style.color="red";
                    turno = 2;
                    win24 = +1;
                } else if (turno === 2) {
                    casella24.style.color="yellow";
                    turno = 1;
                    win24 = -1;
                }
            } else if (box24 === 2) {
                if (boxx17 === 1) {
                    if (box17 === 1) {
                        boxx10 = 1;
                        box17 = 2;
                        casella17.innerHTML="𒊹";
                        casella17.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella17.style.color="red";
                            turno = 2;
                            win17 = +1;
                        } else if (turno === 2) {
                            casella17.style.color="yellow";
                            turno = 1;
                            win17 = -1;
                        }
                    } else if (box17 === 2) {
                        if (boxx10 === 1) {
                            if(box10 === 1) {
                                boxx3 = 1;
                                box10 = 2;
                                casella10.innerHTML="𒊹";
                                casella10.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella10.style.color="red";
                                    turno = 2;
                                    win10 = +1
                                } else if (turno === 2) {
                                    casella10.style.color="yellow";
                                    turno = 1;
                                    win10 = -1;
                                }
                            } else if (box10 === 2) {
                                if (boxx3 === 1) {
                                    if (box3 === 1) {
                                        box3 = 2;
                                        casella3.innerHTML="𒊹";
                                        casella3.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella3.style.color="red";
                                            turno = 2;
                                            win3 = +1;
                                        } else if (turno === 2) {
                                            casella3.style.color="yellow";
                                            turno = 1;
                                            win3 = -1;
                                        }
                                    } else if (box3 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx24 === 0) {
            if (boxx31 === 1) {
                boxx24 = 1;
                if (box31 = 1) {
                    box31 = 2;
                    casella31.innerHTML="𒊹";
                    casella31.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella31.style.color="red";
                        turno = 2;
                        win31 = +1;
                    } else if (turno === 2) {
                        casella31.style.color="yellow";
                        turno = 1;
                        win31 = -1;
                    }
                }
            } else if (boxx31 === 0) {
                if (boxx38 === 1) {
                    boxx31 = 1;
                    if (box38 === 1) {
                        boxx38 = 2;
                        casella38.innerHTML="𒊹";
                        casella38.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella38.style.color="red";
                            turno = 2;
                            win38 = +1;
                        } else if (turno === 2) {
                            casella38.style.color="yellow";
                            turno = 1;
                            win38 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 25 */
casella25.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx25 === 1) {
            if (box25 === 1) {
                boxx18 = 1;
                box25 = 2 ;
                casella25.innerHTML="𒊹";
                casella25.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella25.style.color="red";
                    turno = 2;
                    win25 = +1;
                } else if (turno === 2) {
                    casella25.style.color="yellow";
                    turno = 1;
                    win25 = -1;
                }
            } else if (box25 === 2) {
                if (boxx18 === 1) {
                    if (box18 === 1) {
                        boxx11 = 1;
                        box18 = 2;
                        casella18.innerHTML="𒊹";
                        casella18.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella18.style.color="red";
                            turno = 2;
                            win18 = +1;
                        } else if (turno === 2) {
                            casella18.style.color="yellow";
                            turno = 1;
                            win18 = -1;
                        }
                    } else if (box18 === 2) {
                        if (boxx11 === 1) {
                            if(box11 === 1) {
                                boxx4 = 1;
                                box11 = 2;
                                casella11.innerHTML="𒊹";
                                casella11.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella11.style.color="red";
                                    turno = 2;
                                    win11 = +1
                                } else if (turno === 2) {
                                    casella11.style.color="yellow";
                                    turno = 1;
                                    win11 = -1;
                                }
                            } else if (box11 === 2) {
                                if (boxx4 === 1) {
                                    if (box4 === 1) {
                                        box4 = 2;
                                        casella4.innerHTML="𒊹";
                                        casella4.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella4.style.color="red";
                                            turno = 2;
                                            win4 = +1;
                                        } else if (turno === 2) {
                                            casella4.style.color="yellow";
                                            turno = 1;
                                            win4 = -1;
                                        }
                                    } else if (box4 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx25 === 0) {
            if (boxx32 === 1) {
                boxx25 = 1;
                if (box32 = 1) {
                    box32 = 2;
                    casella32.innerHTML="𒊹";
                    casella32.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella32.style.color="red";
                        turno = 2;
                        win32 = +1;
                    } else if (turno === 2) {
                        casella32.style.color="yellow";
                        turno = 1;
                        win32 = -1;
                    }
                }
            } else if (boxx32 === 0) {
                if (boxx39 === 1) {
                    boxx32 = 1;
                    if (box39 === 1) {
                        boxx39 = 2;
                        casella39.innerHTML="𒊹";
                        casella39.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella39.style.color="red";
                            turno = 2;
                            win39 = +1;
                        } else if (turno === 2) {
                            casella39.style.color="yellow";
                            turno = 1;
                            win39 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 26 */
casella26.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx26 === 1) {
            if (box26 === 1) {
                boxx19 = 1;
                box26 = 2 ;
                casella26.innerHTML="𒊹";
                casella26.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella26.style.color="red";
                    turno = 2;
                    win26 = +1;
                } else if (turno === 2) {
                    casella26.style.color="yellow";
                    turno = 1;
                    win26 = -1;
                }
            } else if (box26 === 2) {
                if (boxx19 === 1) {
                    if (box19 === 1) {
                        boxx12 = 1;
                        box19 = 2;
                        casella19.innerHTML="𒊹";
                        casella19.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella19.style.color="red";
                            turno = 2;
                            win19 = +1;
                        } else if (turno === 2) {
                            casella19.style.color="yellow";
                            turno = 1;
                            win19 = -1;
                        }
                    } else if (box19 === 2) {
                        if (boxx12 === 1) {
                            if(box12 === 1) {
                                boxx5 = 1;
                                box12 = 2;
                                casella12.innerHTML="𒊹";
                                casella12.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella12.style.color="red";
                                    turno = 2;
                                    win12 = +1
                                } else if (turno === 2) {
                                    casella12.style.color="yellow";
                                    turno = 1;
                                    win12 = -1;
                                }
                            } else if (box12 === 2) {
                                if (boxx5 === 1) {
                                    if (box5 === 1) {
                                        box5 = 2;
                                        casella5.innerHTML="𒊹";
                                        casella5.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella5.style.color="red";
                                            turno = 2;
                                            win5 = +1;
                                        } else if (turno === 2) {
                                            casella5.style.color="yellow";
                                            turno = 1;
                                            win5 = -1;
                                        }
                                    } else if (box5 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx26 === 0) {
            if (boxx33 === 1) {
                boxx26 = 1;
                if (box33 = 1) {
                    box33 = 2;
                    casella33.innerHTML="𒊹";
                    casella33.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella33.style.color="red";
                        turno = 2;
                        win33 = +1;
                    } else if (turno === 2) {
                        casella33.style.color="yellow";
                        turno = 1;
                        win33 = -1;
                    }
                }
            } else if (boxx33 === 0) {
                if (boxx40 === 1) {
                    boxx33 = 1;
                    if (box40 === 1) {
                        boxx40 = 2;
                        casella40.innerHTML="𒊹";
                        casella40.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella40.style.color="red";
                            turno = 2;
                            win40 = +1;
                        } else if (turno === 2) {
                            casella40.style.color="yellow";
                            turno = 1;
                            win40 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 27 */
casella27.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx27 === 1) {
            if (box27 === 1) {
                boxx20 = 1;
                box27 = 2 ;
                casella27.innerHTML="𒊹";
                casella27.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella27.style.color="red";
                    turno = 2;
                    win27 = +1;
                } else if (turno === 2) {
                    casella27.style.color="yellow";
                    turno = 1;
                    win27 = -1;
                }
            } else if (box27 === 2) {
                if (boxx20 === 1) {
                    if (box20 === 1) {
                        boxx13 = 1;
                        box20 = 2;
                        casella20.innerHTML="𒊹";
                        casella20.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella20.style.color="red";
                            turno = 2;
                            win20 = +1;
                        } else if (turno === 2) {
                            casella20.style.color="yellow";
                            turno = 1;
                            win20 = -1;
                        }
                    } else if (box20 === 2) {
                        if (boxx13 === 1) {
                            if(box13 === 1) {
                                boxx6 = 1;
                                box13 = 2;
                                casella13.innerHTML="𒊹";
                                casella13.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella13.style.color="red";
                                    turno = 2;
                                    win13 = +1
                                } else if (turno === 2) {
                                    casella13.style.color="yellow";
                                    turno = 1;
                                    win13 = -1;
                                }
                            } else if (box13 === 2) {
                                if (boxx6 === 1) {
                                    if (box6 === 1) {
                                        box6 = 2;
                                        casella6.innerHTML="𒊹";
                                        casella6.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella6.style.color="red";
                                            turno = 2;
                                            win6 = +1;
                                        } else if (turno === 2) {
                                            casella6.style.color="yellow";
                                            turno = 1;
                                            win6 = -1;
                                        }
                                    } else if (box6 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx27 === 0) {
            if (boxx34 === 1) {
                boxx27 = 1;
                if (box34 = 1) {
                    box34 = 2;
                    casella34.innerHTML="𒊹";
                    casella34.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella34.style.color="red";
                        turno = 2;
                        win34 = +1;
                    } else if (turno === 2) {
                        casella34.style.color="yellow";
                        turno = 1;
                        win34 = -1;
                    }
                }
            } else if (boxx34 === 0) {
                if (boxx41 === 1) {
                    boxx34 = 1;
                    if (box41 === 1) {
                        boxx41 = 2;
                        casella41.innerHTML="𒊹";
                        casella41.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella41.style.color="red";
                            turno = 2;
                            win41 = +1;
                        } else if (turno === 2) {
                            casella41.style.color="yellow";
                            turno = 1;
                            win41 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 28 */
casella28.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx28 === 1) {
            if (box28 === 1) {
                boxx21 = 1;
                box28 = 2 ;
                casella28.innerHTML="𒊹";
                casella28.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella28.style.color="red";
                    turno = 2;
                    win28 = +1;
                } else if (turno === 2) {
                    casella28.style.color="yellow";
                    turno = 1;
                    win28 = -1;
                }
            } else if (box28 === 2) {
                if (boxx21 === 1) {
                    if (box21 === 1) {
                        boxx14 = 1;
                        box21 = 2;
                        casella21.innerHTML="𒊹";
                        casella21.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella21.style.color="red";
                            turno = 2;
                            win21 = +1;
                        } else if (turno === 2) {
                            casella21.style.color="yellow";
                            turno = 1;
                            win21 = -1;
                        }
                    } else if (box21 === 2) {
                        if (boxx14 === 1) {
                            if(box14 === 1) {
                                boxx7 = 1;
                                box14 = 2;
                                casella14.innerHTML="𒊹";
                                casella14.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella14.style.color="red";
                                    turno = 2;
                                    win14 = +1
                                } else if (turno === 2) {
                                    casella14.style.color="yellow";
                                    turno = 1;
                                    win14 = -1;
                                }
                            } else if (box14 === 2) {
                                if (boxx7 === 1) {
                                    if (box7 === 1) {
                                        box7 = 2;
                                        casella7.innerHTML="𒊹";
                                        casella7.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella7.style.color="red";
                                            turno = 2;
                                            win7 = +1;
                                        } else if (turno === 2) {
                                            casella7.style.color="yellow";
                                            turno = 1;
                                            win7 = -1;
                                        }
                                    } else if (box7 === 2) {
                                        alert("ATTENZIONE : questa colonna è piena")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx28 === 0) {
            if (boxx35 === 1) {
                boxx28 = 1;
                if (box35 = 1) {
                    box35 = 2;
                    casella35.innerHTML="𒊹";
                    casella35.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella35.style.color="red";
                        turno = 2;
                        win35 = +1;
                    } else if (turno === 2) {
                        casella35.style.color="yellow";
                        turno = 1;
                        win35 = -1;
                    }
                }
            } else if (boxx35 === 0) {
                if (boxx42 === 1) {
                    boxx35 = 1;
                    if (box42 === 1) {
                        boxx42 = 2;
                        casella42.innerHTML="𒊹";
                        casella42.style.color="black";
                        n = n + 1;
                        if (turno === 1) {
                            casella42.style.color="red";
                            turno = 2;
                            win42 = +1;
                        } else if (turno === 2) {
                            casella42.style.color="yellow";
                            turno = 1;
                            win42 = -1;
                        }
                    }
                }
            }
        }
    }
})


/* BOX 29 */
casella29.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx29 === 1) {
            if (box29 === 1) {
                boxx22 = 1;
                box29 = 2 ;
                casella29.innerHTML="𒊹";
                casella29.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella29.style.color="red";
                    turno = 2;
                    win29 = +1;
                } else if (turno === 2) {
                    casella29.style.color="yellow";
                    turno = 1;
                    win29 = -1;
                }
            } else if (box29 === 2) {
                if (boxx22 === 1) {
                    if (box22 === 1) {
                        boxx15 = 1;
                        box22 = 2;
                        casella22.innerHTML="𒊹";
                        casella22.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella22.style.color="red";
                            turno = 2;
                            win22 = +1;
                        } else if (turno === 2) {
                            casella22.style.color="yellow";
                            turno = 1;
                            win22 = -1;
                        }
                    } else if (box22 === 2) {
                        if (boxx15 === 1) {
                            if(box15 === 1) {
                                boxx8 = 1;
                                box15 = 2;
                                casella15.innerHTML="𒊹";
                                casella15.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella15.style.color="red";
                                    turno = 2;
                                    win15 = +1
                                } else if (turno === 2) {
                                    casella15.style.color="yellow";
                                    turno = 1;
                                    win15 = -1;
                                }
                            } else if (box15 === 2) {
                                if (boxx8 === 1) {
                                    if (box8 === 1) {
                                        boxx1 = 1;
                                        box8 = 2;
                                        casella8.innerHTML="𒊹";
                                        casella8.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella8.style.color="red";
                                            turno = 2;
                                            win8 = +1;
                                        } else if (turno === 2) {
                                            casella8.style.color="yellow";
                                            turno = 1;
                                            win8 = -1;
                                        }
                                    } else if (box8 === 2) {
                                        if (boxx1 === 1) {
                                            if (box1 === 1) {
                                                box1 = 2;
                                                casella1.innerHTML="𒊹";
                                                casella1.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella1.style.color="red";
                                                    turno = 2;
                                                    win1 = +1;
                                                } else if (turno === 2) {
                                                    casella1.style.color="yellow";
                                                    turno = 1;
                                                    win1 = -1;
                                                }
                                            } else if (box1 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx29 === 0) {
            if (boxx36 === 1) {
                boxx29 = 1;
                if (box36 = 1) {
                    box36 = 2;
                    casella36.innerHTML="𒊹";
                    casella36.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella36.style.color="red";
                        turno = 2;
                        win36 = +1;
                    } else if (turno === 2) {
                        casella36.style.color="yellow";
                        turno = 1;
                        win36 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 30 */
casella30.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx30 === 1) {
            if (box30 === 1) {
                boxx23 = 1;
                box30 = 2 ;
                casella30.innerHTML="𒊹";
                casella30.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella30.style.color="red";
                    turno = 2;
                    win30 = +1;
                } else if (turno === 2) {
                    casella30.style.color="yellow";
                    turno = 1;
                    win30 = -1;
                }
            } else if (box30 === 2) {
                if (boxx23 === 1) {
                    if (box23 === 1) {
                        boxx16 = 1;
                        box23 = 2;
                        casella23.innerHTML="𒊹";
                        casella23.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella23.style.color="red";
                            turno = 2;
                            win23 = +1;
                        } else if (turno === 2) {
                            casella23.style.color="yellow";
                            turno = 1;
                            win23 = -1;
                        }
                    } else if (box23 === 2) {
                        if (boxx16 === 1) {
                            if(box16 === 1) {
                                boxx9 = 1;
                                box16 = 2;
                                casella16.innerHTML="𒊹";
                                casella16.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella16.style.color="red";
                                    turno = 2;
                                    win16 = +1
                                } else if (turno === 2) {
                                    casella16.style.color="yellow";
                                    turno = 1;
                                    win16 = -1;
                                }
                            } else if (box16 === 2) {
                                if (boxx9 === 1) {
                                    if (box9 === 1) {
                                        boxx2 = 1;
                                        box9 = 2;
                                        casella9.innerHTML="𒊹";
                                        casella9.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella9.style.color="red";
                                            turno = 2;
                                            win9 = +1;
                                        } else if (turno === 2) {
                                            casella9.style.color="yellow";
                                            turno = 1;
                                            win9 = -1;
                                        }
                                    } else if (box9 === 2) {
                                        if (boxx2 === 1) {
                                            if (box2 === 1) {
                                                box2 = 2;
                                                casella2.innerHTML="𒊹";
                                                casella1.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella2.style.color="red";
                                                    turno = 2;
                                                    win2 = +1;
                                                } else if (turno === 2) {
                                                    casella2.style.color="yellow";
                                                    turno = 1;
                                                    win2 = -1;
                                                }
                                            } else if (box2 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx30 === 0) {
            if (boxx37 === 1) {
                boxx30 = 1;
                if (box37 = 1) {
                    box37 = 2;
                    casella37.innerHTML="𒊹";
                    casella37.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella37.style.color="red";
                        turno = 2;
                        win37 = +1;
                    } else if (turno === 2) {
                        casella37.style.color="yellow";
                        turno = 1;
                        win37 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 31 */
casella31.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx31 === 1) {
            if (box31 === 1) {
                boxx24 = 1;
                box31 = 2 ;
                casella31.innerHTML="𒊹";
                casella31.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella31.style.color="red";
                    turno = 2;
                    win31 = +1;
                } else if (turno === 2) {
                    casella31.style.color="yellow";
                    turno = 1;
                    win31 = -1;
                }
            } else if (box31 === 2) {
                if (boxx24 === 1) {
                    if (box24 === 1) {
                        boxx17 = 1;
                        box24 = 2;
                        casella24.innerHTML="𒊹";
                        casella24.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella24.style.color="red";
                            turno = 2;
                            win24 = +1;
                        } else if (turno === 2) {
                            casella24.style.color="yellow";
                            turno = 1;
                            win24 = -1;
                        }
                    } else if (box24 === 2) {
                        if (boxx17 === 1) {
                            if(box17 === 1) {
                                boxx10 = 1;
                                box17 = 2;
                                casella17.innerHTML="𒊹";
                                casella17.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella17.style.color="red";
                                    turno = 2;
                                    win17 = +1
                                } else if (turno === 2) {
                                    casella17.style.color="yellow";
                                    turno = 1;
                                    win17 = -1;
                                }
                            } else if (box17 === 2) {
                                if (boxx10=== 1) {
                                    if (box10=== 1) {
                                        boxx3 = 1;
                                        box10= 2;
                                    casella10.innerHTML="𒊹";
                                    casella10.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella10.style.color="red";
                                            turno = 2;
                                            win10 = +1;
                                        } else if (turno === 2) {
                                            casella10.style.color="yellow";
                                            turno = 1;
                                            win10 = -1;
                                        }
                                    } else if (box10 === 2) {
                                        if (boxx3 === 1) {
                                            if (box3 === 1) {
                                                box3 = 2;
                                                casella3.innerHTML="𒊹";
                                                casella3.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella3.style.color="red";
                                                    turno = 2;
                                                    win3 = +1;
                                                } else if (turno === 2) {
                                                    casella3.style.color="yellow";
                                                    turno = 1;
                                                    win3 = -1;
                                                }
                                            } else if (box3 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx31 === 0) {
            if (boxx38 === 1) {
                boxx31 = 1;
                if (box38 = 1) {
                    box38 = 2;
                    casella38.innerHTML="𒊹";
                    casella38.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella38.style.color="red";
                        turno = 2;
                        win38 = +1;
                    } else if (turno === 2) {
                        casella38.style.color="yellow";
                        turno = 1;
                        win38 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 32 */
casella32.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx32 === 1) {
            if (box32 === 1) {
                boxx25 = 1;
                box32 = 2 ;
                casella32.innerHTML="𒊹";
                casella32.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella32.style.color="red";
                    turno = 2;
                    win32 = +1;
                } else if (turno === 2) {
                    casella32.style.color="yellow";
                    turno = 1;
                    win32 = -1;
                }
            } else if (box32 === 2) {
                if (boxx25 === 1) {
                    if (box25 === 1) {
                        boxx18 = 1;
                        box25 = 2;
                        casella25.innerHTML="𒊹";
                        casella25.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella25.style.color="red";
                            turno = 2;
                            win25 = +1;
                        } else if (turno === 2) {
                            casella25.style.color="yellow";
                            turno = 1;
                            win25 = -1;
                        }
                    } else if (box25 === 2) {
                        if (boxx18 === 1) {
                            if(box18 === 1) {
                                boxx11 = 1;
                                box18 = 2;
                                casella18.innerHTML="𒊹";
                                casella18.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella18.style.color="red";
                                    turno = 2;
                                    win18 = +1
                                } else if (turno === 2) {
                                    casella18.style.color="yellow";
                                    turno = 1;
                                    win18 = -1;
                                }
                            } else if (box18 === 2) {
                                if (boxx11 === 1) {
                                    if (box11 === 1) {
                                        boxx4 = 1;
                                        box11 = 2;
                                    casella11.innerHTML="𒊹";
                                    casella1.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella11.style.color="red";
                                            turno = 2;
                                            win11 = +1;
                                        } else if (turno === 2) {
                                            casella11.style.color="yellow";
                                            turno = 1;
                                            win11 = -1;
                                        }
                                    } else if (box11 === 2) {
                                        if (boxx4 === 1) {
                                            if (box4 === 1) {
                                                box4 = 2;
                                                casella4.innerHTML="𒊹";
                                                casella4.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella4.style.color="red";
                                                    turno = 2;
                                                    win4 = +1;
                                                } else if (turno === 2) {
                                                    casella4.style.color="yellow";
                                                    turno = 1;
                                                    win4 = -1;
                                                }
                                            } else if (box4 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx32 === 0) {
            if (boxx39 === 1) {
                boxx32 = 1;
                if (box39 = 1) {
                    box39 = 2;
                    casella39.innerHTML="𒊹";
                    casella39.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella39.style.color="red";
                        turno = 2;
                        win39 = +1;
                    } else if (turno === 2) {
                        casella39.style.color="yellow";
                        turno = 1;
                        win39 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 33 */
casella33.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx33 === 1) {
            if (box33 === 1) {
                boxx26 = 1;
                box33 = 2 ;
                casella33.innerHTML="𒊹";
                casella33.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella33.style.color="red";
                    turno = 2;
                    win33 = +1;
                } else if (turno === 2) {
                    casella33.style.color="yellow";
                    turno = 1;
                    win33 = -1;
                }
            } else if (box33 === 2) {
                if (boxx26 === 1) {
                    if (box26 === 1) {
                        boxx19 = 1;
                        box26 = 2;
                        casella26.innerHTML="𒊹";
                        casella1.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella26.style.color="red";
                            turno = 2;
                            win26 = +1;
                        } else if (turno === 2) {
                            casella26.style.color="yellow";
                            turno = 1;
                            win26 = -1;
                        }
                    } else if (box26 === 2) {
                        if (boxx19 === 1) {
                            if(box19 === 1) {
                                boxx12 = 1;
                                box19 = 2;
                                casella19.innerHTML="𒊹";
                                casella19.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella19.style.color="red";
                                    turno = 2;
                                    win19 = +1
                                } else if (turno === 2) {
                                    casella19.style.color="yellow";
                                    turno = 1;
                                    win19 = -1;
                                }
                            } else if (box19 === 2) {
                                if (boxx12 === 1) {
                                    if (box12 === 1) {
                                        boxx5 = 1;
                                        box12 = 2;
                                    casella12.innerHTML="𒊹";
                                    casella12.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella12.style.color="red";
                                            turno = 2;
                                            win12 = +1;
                                        } else if (turno === 2) {
                                            casella12.style.color="yellow";
                                            turno = 1;
                                            win12 = -1;
                                        }
                                    } else if (box12 === 2) {
                                        if (boxx5 === 1) {
                                            if (box5 === 1) {
                                                box5 = 2;
                                                casella5.innerHTML="𒊹";
                                                casella5.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella5.style.color="red";
                                                    turno = 2;
                                                    win5 = +1;
                                                } else if (turno === 2) {
                                                    casella5.style.color="yellow";
                                                    turno = 1;
                                                    win5 = -1;
                                                }
                                            } else if (box5 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx33 === 0) {
            if (boxx40 === 1) {
                boxx33 = 1;
                if (box40 = 1) {
                    box40 = 2;
                    casella40.innerHTML="𒊹";
                    casella40.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella40.style.color="red";
                        turno = 2;
                        win40 = +1;
                    } else if (turno === 2) {
                        casella40.style.color="yellow";
                        turno = 1;
                        win40 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 34 */
casella34.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx34 === 1) {
            if (box34 === 1) {
                boxx27 = 1;
                box34 = 2 ;
                casella34.innerHTML="𒊹";
                casella34.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella34.style.color="red";
                    turno = 2;
                    win34 = +1;
                } else if (turno === 2) {
                    casella34.style.color="yellow";
                    turno = 1;
                    win34 = -1;
                }
            } else if (box34 === 2) {
                if (boxx27 === 1) {
                    if (box27 === 1) {
                        boxx20 = 1;
                        box27 = 2;
                        casella27.innerHTML="𒊹";
                        casella27.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella27.style.color="red";
                            turno = 2;
                            win27 = +1;
                        } else if (turno === 2) {
                            casella27.style.color="yellow";
                            turno = 1;
                            win27 = -1;
                        }
                    } else if (box27 === 2) {
                        if (boxx20 === 1) {
                            if(box20 === 1) {
                                boxx13 = 1;
                                box20 = 2;
                                casella20.innerHTML="𒊹";
                                casella20.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella20.style.color="red";
                                    turno = 2;
                                    win20 = +1
                                } else if (turno === 2) {
                                    casella20.style.color="yellow";
                                    turno = 1;
                                    win20 = -1;
                                }
                            } else if (box20 === 2) {
                                if (boxx13 === 1) {
                                    if (box13 === 1) {
                                        boxx6 = 1;
                                        box13 = 2;
                                    casella13.innerHTML="𒊹";
                                    casella13.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella13.style.color="red";
                                            turno = 2;
                                            win13 = +1;
                                        } else if (turno === 2) {
                                            casella13.style.color="yellow";
                                            turno = 1;
                                            win13 = -1;
                                        }
                                    } else if (box13 === 2) {
                                        if (boxx6 === 1) {
                                            if (box6 === 1) {
                                                box6 = 2;
                                                casella6.innerHTML="𒊹";
                                                casella6.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella6.style.color="red";
                                                    turno = 2;
                                                    win6 = +1;
                                                } else if (turno === 2) {
                                                    casella6.style.color="yellow";
                                                    turno = 1;
                                                    win6 = -1;
                                                }
                                            } else if (box6 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx34 === 0) {
            if (boxx41 === 1) {
                boxx34 = 1;
                if (box41 = 1) {
                    box41 = 2;
                    casella41.innerHTML="𒊹";
                    casella41.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella41.style.color="red";
                        turno = 2;
                        win41 = +1;
                    } else if (turno === 2) {
                        casella41.style.color="yellow";
                        turno = 1;
                        win41 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 35 */
casella35.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx35 === 1) {
            if (box35 === 1) {
                boxx28 = 1;
                box35 = 2 ;
                casella35.innerHTML="𒊹";
                casella35.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella35.style.color="red";
                    turno = 2;
                    win35 = +1;
                } else if (turno === 2) {
                    casella35.style.color="yellow";
                    turno = 1;
                    win35 = -1;
                }
            } else if (box35 === 2) {
                if (boxx28 === 1) {
                    if (box28 === 1) {
                        boxx21 = 1;
                        box28 = 2;
                        casella28.innerHTML="𒊹";
                        casella28.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella28.style.color="red";
                            turno = 2;
                            win28 = +1;
                        } else if (turno === 2) {
                            casella28.style.color="yellow";
                            turno = 1;
                            win28 = -1;
                        }
                    } else if (box28 === 2) {
                        if (boxx21 === 1) {
                            if(box21 === 1) {
                                boxx14 = 1;
                                box21 = 2;
                                casella21.innerHTML="𒊹";
                                casella21.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella21.style.color="red";
                                    turno = 2;
                                    win21 = +1
                                } else if (turno === 2) {
                                    casella21.style.color="yellow";
                                    turno = 1;
                                    win21 = -1;
                                }
                            } else if (box21 === 2) {
                                if (boxx14 === 1) {
                                    if (box14 === 1) {
                                        boxx7 = 1;
                                        box14 = 2;
                                    casella14.innerHTML="𒊹";
                                    casella14.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella14.style.color="red";
                                            turno = 2;
                                            win14 = +1;
                                        } else if (turno === 2) {
                                            casella14.style.color="yellow";
                                            turno = 1;
                                            win14 = -1;
                                        }
                                    } else if (box14 === 2) {
                                        if (boxx7 === 1) {
                                            if (box7 === 1) {
                                                box7 = 2;
                                                casella7.innerHTML="𒊹";
                                                casella7.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella7.style.color="red";
                                                    turno = 2;
                                                    win7 = +1;
                                                } else if (turno === 2) {
                                                    casella7.style.color="yellow";
                                                    turno = 1;
                                                    win7 = -1;
                                                }
                                            } else if (box7 === 2) {
                                                alert("ATTENZIONE : questa colonna è piena")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (boxx35 === 0) {
            if (boxx42 === 1) {
                boxx35 = 1;
                if (box42 = 1) {
                    box42 = 2;
                    casella42.innerHTML="𒊹";
                    casella42.style.color="black";
                    n = n + 1;
                    if (turno === 1) {
                        casella42.style.color="red";
                        turno = 2;
                        win42 = +1;
                    } else if (turno === 2) {
                        casella42.style.color="yellow";
                        turno = 1;
                        win42 = -1;
                    }
                }
            }
        }
    }
})


/* BOX 36 */
casella36.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx36 === 1) {
            if (box36 === 1) {
                boxx29 = 1;
                box36 = 2 ;
                casella36.innerHTML="𒊹";
                casella36.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella36.style.color="red";
                    turno = 2;
                    win36 = +1;
                } else if (turno === 2) {
                    casella36.style.color="yellow";
                    turno = 1;
                    win36 = -1;
                }
            } else if (box36 === 2) {
                if (boxx29 === 1) {
                    if (box29 === 1) {
                        boxx22 = 1;
                        box29 = 2;
                        casella29.innerHTML="𒊹";
                        casella1.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella29.style.color="red";
                            turno = 2;
                            win29 = +1;
                        } else if (turno === 2) {
                            casella29.style.color="yellow";
                            turno = 1;
                            win29 = -1;
                        }
                    } else if (box29 === 2) {
                        if (boxx22 === 1) {
                            if(box22 === 1) {
                                boxx15 = 1;
                                box22 = 2;
                                casella22.innerHTML="𒊹";
                                casella22.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella22.style.color="red";
                                    turno = 2;
                                    win22 = +1
                                } else if (turno === 2) {
                                    casella22.style.color="yellow";
                                    turno = 1;
                                    win22 = -1;
                                }
                            } else if (box22 === 2) {
                                if (boxx15 === 1) {
                                    if (box15 === 1) {
                                        boxx8 = 1;
                                        box15 = 2;
                                    casella15.innerHTML="𒊹";
                                    casella15.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella15.style.color="red";
                                            turno = 2;
                                            win15 = +1;
                                        } else if (turno === 2) {
                                            casella15.style.color="yellow";
                                            turno = 1;
                                            win15 = -1;
                                        }
                                    } else if (box15 === 2) {
                                        if (boxx8 === 1) {
                                            if (box8 === 1) {
                                                boxx1 = 1;
                                                box8 = 2;
                                                casella8.innerHTML="𒊹";
                                                casella8.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella8.style.color="red";
                                                    turno = 2;
                                                    win8 = +1;
                                                } else if (turno === 2) {
                                                    casella8.style.color="yellow";
                                                    turno = 1;
                                                    win8 = -1;
                                                }
                                            } else if (box8 === 2) {
                                                if (boxx1 === 1) {
                                                    if (box1 === 1) {
                                                        box1 = 2;
                                                        casella1.innerHTML="𒊹";
                                                        casella1.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella1.style.color="red";
                                                            turno = 2;
                                                            win1 = +1;
                                                        } else if (turno === 2) {
                                                            casella1.style.color="yellow";
                                                            turno = 1;
                                                            win1 = -1;
                                                        }
                                                    } else if (box1 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 37 */
casella37.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx37 === 1) {
            if (box37 === 1) {
                boxx30 = 1;
                box37 = 2 ;
                casella37.innerHTML="𒊹";
                casella37.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella37.style.color="red";
                    turno = 2;
                    win37 = +1;
                } else if (turno === 2) {
                    casella37.style.color="yellow";
                    turno = 1;
                    win37 = -1;
                }
            } else if (box37 === 2) {
                if (boxx30 === 1) {
                    if (box30 === 1) {
                        boxx23 = 1;
                        box30 = 2;
                        casella30.innerHTML="𒊹";
                        casella30.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella30.style.color="red";
                            turno = 2;
                            win30 = +1;
                        } else if (turno === 2) {
                            casella30.style.color="yellow";
                            turno = 1;
                            win30 = -1;
                        }
                    } else if (box30 === 2) {
                        if (boxx23 === 1) {
                            if(box23 === 1) {
                                boxx16 = 1;
                                box23 = 2;
                                casella23.innerHTML="𒊹";
                                casella23.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella23.style.color="red";
                                    turno = 2;
                                    win23 = +1
                                } else if (turno === 2) {
                                    casella23.style.color="yellow";
                                    turno = 1;
                                    win23 = -1;
                                }
                            } else if (box23 === 2) {
                                if (boxx16 === 1) {
                                    if (box16 === 1) {
                                        boxx9 = 1;
                                        box16 = 2;
                                    casella16.innerHTML="𒊹";
                                    casella16.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella16.style.color="red";
                                            turno = 2;
                                            win16 = +1;
                                        } else if (turno === 2) {
                                            casella16.style.color="yellow";
                                            turno = 1;
                                            win16 = -1;
                                        }
                                    } else if (box16 === 2) {
                                        if (boxx9 === 1) {
                                            if (box9 === 1) {
                                                boxx2 = 1;
                                                box9 = 2;
                                                casella9.innerHTML="𒊹";
                                                casella9.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella9.style.color="red";
                                                    turno = 2;
                                                    win9 = +1;
                                                } else if (turno === 2) {
                                                    casella9.style.color="yellow";
                                                    turno = 1;
                                                    win9 = -1;
                                                }
                                            } else if (box9 === 2) {
                                                if (boxx2 === 1) {
                                                    if (box2 === 1) {
                                                        box2 = 2;
                                                        casella2.innerHTML="𒊹";
                                                        casella2.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella2.style.color="red";
                                                            turno = 2;
                                                            win2 = +1;
                                                        } else if (turno === 2) {
                                                            casella2.style.color="yellow";
                                                            turno = 1;
                                                            win2 = -1;
                                                        }
                                                    } else if (box2 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 38 */
casella38.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx38 === 1) {
            if (box38 === 1) {
                boxx31 = 1;
                box38 = 2 ;
                casella38.innerHTML="𒊹";
                casella38.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella38.style.color="red";
                    turno = 2;
                    win38 = +1;
                } else if (turno === 2) {
                    casella38.style.color="yellow";
                    turno = 1;
                    win38 = -1;
                }
            } else if (box38 === 2) {
                if (boxx31 === 1) {
                    if (box31 === 1) {
                        boxx24 = 1;
                        box31 = 2;
                        casella31.innerHTML="𒊹";
                        casella31.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella31.style.color="red";
                            turno = 2;
                            win31 = +1;
                        } else if (turno === 2) {
                            casella31.style.color="yellow";
                            turno = 1;
                            win31 = -1;
                        }
                    } else if (box31 === 2) {
                        if (boxx24 === 1) {
                            if(box24 === 1) {
                                boxx17 = 1;
                                box24 = 2;
                                casella24.innerHTML="𒊹";
                                casella24.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella24.style.color="red";
                                    turno = 2;
                                    win24 = +1
                                } else if (turno === 2) {
                                    casella24.style.color="yellow";
                                    turno = 1;
                                    win24 = -1;
                                }
                            } else if (box24 === 2) {
                                if (boxx17 === 1) {
                                    if (box17 === 1) {
                                        boxx10 = 1;
                                        box17 = 2;
                                    casella17.innerHTML="𒊹";
                                    casella17.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella17.style.color="red";
                                            turno = 2;
                                            win17 = +1;
                                        } else if (turno === 2) {
                                            casella17.style.color="yellow";
                                            turno = 1;
                                            win17 = -1;
                                        }
                                    } else if (box17 === 2) {
                                        if (boxx10 === 1) {
                                            if (box10 === 1) {
                                                boxx3 = 1;
                                                box10 = 2;
                                                casella10.innerHTML="𒊹";
                                                casella10.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella10.style.color="red";
                                                    turno = 2;
                                                    win10 = +1;
                                                } else if (turno === 2) {
                                                    casella10.style.color="yellow";
                                                    turno = 1;
                                                    win10 = -1;
                                                }
                                            } else if (box10 === 2) {
                                                if (boxx3 === 1) {
                                                    if (box3 === 1) {
                                                        box3 = 2;
                                                        casella3.innerHTML="𒊹";
                                                        casella3.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella3.style.color="red";
                                                            turno = 2;
                                                            win3 = +1;
                                                        } else if (turno === 2) {
                                                            casella3.style.color="yellow";
                                                            turno = 1;
                                                            win3 = -1;
                                                        }
                                                    } else if (box3 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 39 */
casella39.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx39 === 1) {
            if (box39 === 1) {
                boxx32 = 1;
                box39 = 2 ;
                casella39.innerHTML="𒊹";
                casella39.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella39.style.color="red";
                    turno = 2;
                    win39 = +1;
                } else if (turno === 2) {
                    casella39.style.color="yellow";
                    turno = 1;
                    win39 = -1;
                }
            } else if (box39 === 2) {
                if (boxx32 === 1) {
                    if (box32 === 1) {
                        boxx25 = 1;
                        box32 = 2;
                        casella32.innerHTML="𒊹";
                        casella32.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella32.style.color="red";
                            turno = 2;
                            win32 = +1;
                        } else if (turno === 2) {
                            casella32.style.color="yellow";
                            turno = 1;
                            win32 = -1;
                        }
                    } else if (box32 === 2) {
                        if (boxx25 === 1) {
                            if(box25 === 1) {
                                boxx18 = 1;
                                box25 = 2;
                                casella25.innerHTML="𒊹";
                                casella25.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella25.style.color="red";
                                    turno = 2;
                                    win25 = +1
                                } else if (turno === 2) {
                                    casella25.style.color="yellow";
                                    turno = 1;
                                    win25 = -1;
                                }
                            } else if (box25 === 2) {
                                if (boxx18 === 1) {
                                    if (box18 === 1) {
                                        boxx11 = 1;
                                        box18 = 2;
                                    casella18.innerHTML="𒊹";
                                    casella18.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella18.style.color="red";
                                            turno = 2;
                                            win18 = +1;
                                        } else if (turno === 2) {
                                            casella18.style.color="yellow";
                                            turno = 1;
                                            win18 = -1;
                                        }
                                    } else if (box18 === 2) {
                                        if (boxx11 === 1) {
                                            if (box11 === 1) {
                                                boxx4 = 1;
                                                box11 = 2;
                                                casella11.innerHTML="𒊹";
                                                casella11.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella11.style.color="red";
                                                    turno = 2;
                                                    win11 = +1;
                                                } else if (turno === 2) {
                                                    casella11.style.color="yellow";
                                                    turno = 1;
                                                    win11 = -1;
                                                }
                                            } else if (box11 === 2) {
                                                if (boxx4 === 1) {
                                                    if (box4 === 1) {
                                                        box4 = 2;
                                                        casella4.innerHTML="𒊹";
                                                        casella4.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella4.style.color="red";
                                                            turno = 2;
                                                            win4 = +1;
                                                        } else if (turno === 2) {
                                                            casella4.style.color="yellow";
                                                            turno = 1;
                                                            win4 = -1;
                                                        }
                                                    } else if (box4 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 40 */
casella40.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx40 === 1) {
            if (box40 === 1) {
                boxx33 = 1;
                box40 = 2 ;
                casella40.innerHTML="𒊹";
                casella40.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella40.style.color="red";
                    turno = 2;
                    win40 = +1;
                } else if (turno === 2) {
                    casella40.style.color="yellow";
                    turno = 1;
                    win40 = -1;
                }
            } else if (box40 === 2) {
                if (boxx33 === 1) {
                    if (box33 === 1) {
                        boxx26 = 1;
                        box33 = 2;
                        casella33.innerHTML="𒊹";
                        casella33.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella33.style.color="red";
                            turno = 2;
                            win33 = +1;
                        } else if (turno === 2) {
                            casella33.style.color="yellow";
                            turno = 1;
                            win33 = -1;
                        }
                    } else if (box33 === 2) {
                        if (boxx26 === 1) {
                            if(box26 === 1) {
                                boxx19 = 1;
                                box26 = 2;
                                casella26.innerHTML="𒊹";
                                casella1.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella26.style.color="red";
                                    turno = 2;
                                    win26 = +1
                                } else if (turno === 2) {
                                    casella26.style.color="yellow";
                                    turno = 1;
                                    win26 = -1;
                                }
                            } else if (box26 === 2) {
                                if (boxx19 === 1) {
                                    if (box19 === 1) {
                                        boxx12 = 1;
                                        box19 = 2;
                                    casella19.innerHTML="𒊹";
                                    casella19.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella19.style.color="red";
                                            turno = 2;
                                            win19 = +1;
                                        } else if (turno === 2) {
                                            casella19.style.color="yellow";
                                            turno = 1;
                                            win19 = -1;
                                        }
                                    } else if (box19 === 2) {
                                        if (boxx12 === 1) {
                                            if (box12 === 1) {
                                                boxx5 = 1;
                                                box12 = 2;
                                                casella12.innerHTML="𒊹";
                                                casella12.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella12.style.color="red";
                                                    turno = 2;
                                                    win12 = +1;
                                                } else if (turno === 2) {
                                                    casella12.style.color="yellow";
                                                    turno = 1;
                                                    win12 = -1;
                                                }
                                            } else if (box12 === 2) {
                                                if (boxx5 === 1) {
                                                    if (box5 === 1) {
                                                        box5 = 2;
                                                        casella5.innerHTML="𒊹";
                                                        casella5.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella5.style.color="red";
                                                            turno = 2;
                                                            win5 = +1;
                                                        } else if (turno === 2) {
                                                            casella5.style.color="yellow";
                                                            turno = 1;
                                                            win5 = -1;
                                                        }
                                                    } else if (box5 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 41 */
casella41.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx41 === 1) {
            if (box41 === 1) {
                boxx34 = 1;
                box41 = 2 ;
                casella41.innerHTML="𒊹";
                casella41.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella41.style.color="red";
                    turno = 2;
                    win41 = +1;
                } else if (turno === 2) {
                    casella41.style.color="yellow";
                    turno = 1;
                    win41= -1;
                }
            } else if (box41 === 2) {
                if (boxx34 === 1) {
                    if (box34 === 1) {
                        boxx27 = 1;
                        box34 = 2;
                        casella34.innerHTML="𒊹";
                        casella34.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella34.style.color="red";
                            turno = 2;
                            win34 = +1;
                        } else if (turno === 2) {
                            casella34.style.color="yellow";
                            turno = 1;
                            win34 = -1;
                        }
                    } else if (box34 === 2) {
                        if (boxx27 === 1) {
                            if(box27 === 1) {
                                boxx20 = 1;
                                box27 = 2;
                                casella27.innerHTML="𒊹";
                                casella27.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella27.style.color="red";
                                    turno = 2;
                                    win27 = +1
                                } else if (turno === 2) {
                                    casella27.style.color="yellow";
                                    turno = 1;
                                    win27 = -1;
                                }
                            } else if (box27 === 2) {
                                if (boxx20 === 1) {
                                    if (box20 === 1) {
                                        boxx13 = 1;
                                        box20 = 2;
                                    casella20.innerHTML="𒊹";
                                    casella20.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella20.style.color="red";
                                            turno = 2;
                                            win20 = +1;
                                        } else if (turno === 2) {
                                            casella20.style.color="yellow";
                                            turno = 1;
                                            win20 = -1;
                                        }
                                    } else if (box20 === 2) {
                                        if (boxx13 === 1) {
                                            if (box13 === 1) {
                                                boxx6 = 1;
                                                box13 = 2;
                                                casella13.innerHTML="𒊹";
                                                casella13.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella13.style.color="red";
                                                    turno = 2;
                                                    win13 = +1;
                                                } else if (turno === 2) {
                                                    casella13.style.color="yellow";
                                                    turno = 1;
                                                    win13 = -1;
                                                }
                                            } else if (box13 === 2) {
                                                if (boxx6 === 1) {
                                                    if (box6 === 1) {
                                                        box6 = 2;
                                                        casella6.innerHTML="𒊹";
                                                        casella1.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella6.style.color="red";
                                                            turno = 2;
                                                            win6 = +1;
                                                        } else if (turno === 2) {
                                                            casella6.style.color="yellow";
                                                            turno = 1;
                                                            win6 = -1;
                                                        }
                                                    } else if (box6 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})


/* BOX 42 */
casella42.addEventListener ("click" , function () {
    if (inizio === 0) {
        alert("Dovete scegliere chi farà la prima mossa")
    } if (inizio != 0) {
        if (boxx42 === 1) {
            if (box42 === 1) {
                boxx35 = 1;
                box42 = 2 ;
                casella42.innerHTML="𒊹";
                casella1.style.color="black";
                n = n + 1;
                if (turno === 1) {
                    casella42.style.color="red";
                    turno = 2;
                    win42 = +1;
                } else if (turno === 2) {
                    casella42.style.color="yellow";
                    turno = 1;
                    win42= -1;
                }
            } else if (box42 === 2) {
                if (boxx35 === 1) {
                    if (box35 === 1) {
                        boxx28 = 1;
                        box35 = 2;
                        casella35.innerHTML="𒊹";
                        casella35.style.color="black";
                        n = n + 1;
                        if(turno === 1) {
                            casella35.style.color="red";
                            turno = 2;
                            win35 = +1;
                        } else if (turno === 2) {
                            casella35.style.color="yellow";
                            turno = 1;
                            win35 = -1;
                        }
                    } else if (box35 === 2) {
                        if (boxx28 === 1) {
                            if(box28 === 1) {
                                boxx21 = 1;
                                box28 = 2;
                                casella28.innerHTML="𒊹";
                                casella28.style.color="black";
                                n = n + 1;
                                if (turno === 1) {
                                    casella28.style.color="red";
                                    turno = 2;
                                    win28 = +1
                                } else if (turno === 2) {
                                    casella28.style.color="yellow";
                                    turno = 1;
                                    win28 = -1;
                                }
                            } else if (box28 === 2) {
                                if (boxx21 === 1) {
                                    if (box21 === 1) {
                                        boxx14 = 1;
                                        box21 = 2;
                                    casella21.innerHTML="𒊹";
                                    casella21.style.color="black";
                                        n = n + 1;
                                        if (turno === 1) {
                                            casella21.style.color="red";
                                            turno = 2;
                                            win21 = +1;
                                        } else if (turno === 2) {
                                            casella21.style.color="yellow";
                                            turno = 1;
                                            win21 = -1;
                                        }
                                    } else if (box21 === 2) {
                                        if (boxx14 === 1) {
                                            if (box14 === 1) {
                                                boxx7 = 1;
                                                box14 = 2;
                                                casella14.innerHTML="𒊹";
                                                casella14.style.color="black";
                                                n = n + 1;
                                                if (turno === 1) {
                                                    casella14.style.color="red";
                                                    turno = 2;
                                                    win14 = +1;
                                                } else if (turno === 2) {
                                                    casella14.style.color="yellow";
                                                    turno = 1;
                                                    win14 = -1;
                                                }
                                            } else if (box14 === 2) {
                                                if (boxx7 === 1) {
                                                    if (box7 === 1) {
                                                        box7 = 2;
                                                        casella7.innerHTML="𒊹";
                                                        casella7.style.color="black";
                                                        n = n + 1;
                                                        if (turno === 1) {
                                                            casella7.style.color="red";
                                                            turno = 2;
                                                            win7 = +1;
                                                        } else if (turno === 2) {
                                                            casella7.style.color="yellow";
                                                            turno = 1;
                                                            win7 = -1;
                                                        }
                                                    } else if (box7 === 2) {
                                                        alert("ATTENZIONE : questa colonna è piena")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})



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