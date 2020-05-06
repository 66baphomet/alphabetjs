var myVar=document.querySelectorAll(".myButton");

var myVar2=document.querySelector(".showSpell");

var len = myVar.length;

for(var i=0; i<len ;i++)
{
    myVar[i].addEventListener("click",function(){

        var text= this.innerHTML;
        console.log(text);

        audioPlay(text);

        animationPlay(text);

        writingText(text);

    });
}




function animationPlay(text){
       var selectedButton = document.querySelector("."+text);

       selectedButton.classList.add("animation");

       setTimeout(function(){
           selectedButton.classList.remove("animation");
       }, 1000);
}

function writingText(text){

    switch(text)
    {

            case "a":
            myVar2.innerHTML="A for Apple";
            break;

            case "b":
            myVar2.innerHTML="B for Baseball";
            break;

            case "c":
                myVar2.innerHTML="C for Clock";
                break;

                case "d":
                myVar2.innerHTML="D for Donkey";
                break;

                case "e":
                myVar2.innerHTML="E for Elephant";
                break;

                case "f":
                myVar2.innerHTML="F for Father";
                break;

                case "g":
                myVar2.innerHTML="G for Grandmother";
                break;

                case "h":
                myVar2.innerHTML="H for Hungry";
                break;

                case "i":
                myVar2.innerHTML="I for Internet";
                break;

                case "j":
                myVar2.innerHTML="J for Justice";
                break;

                case "k":
                myVar2.innerHTML="K for Kangaroo";
                break;

                case "l":
                myVar2.innerHTML="L for London";
                break;

                case "m":
                myVar2.innerHTML="M for Monkey";
                break;

                case "n":
                myVar2.innerHTML="N for Norway";
                break;

                case "o":
                myVar2.innerHTML="O for Overtime";
                break;

                case "p":
                myVar2.innerHTML="P for Pillow";
                break;

                case "q":
                myVar2.innerHTML="Q for Question";
                break;

                case "r":
                myVar2.innerHTML="R for Rabbit";
                break;

                case "s":
                myVar2.innerHTML="S for Superman";
                break;

                case "t":
                myVar2.innerHTML="T for Telephone";
                break;

                case "u":
                myVar2.innerHTML="U for Underwear";
                break;

                case "v":
                myVar2.innerHTML="V for Vaccinate";
                break;

                case "w":
                myVar2.innerHTML="W for World Wide Web";
                break;

                case "x":
                myVar2.innerHTML="X for Xylophone";
                break;

                case "y":
                myVar2.innerHTML="Y for Yogurt";
                break;

                case "z":
                myVar2.innerHTML="Z for Zebra";
                break;

            

    }   
    
    setTimeout(function(){
        myVar2.innerHTML="Spelling"
    }, 2000);
    
}

function audioPlay(text){

    switch(text)
    {

            case "a":
            var audio= new Audio("a.mp3");
            audio.play();
            myVar2.innerHTML="A for Apple"
            break;

            case "b":
            var audio= new Audio("b.mp3");
            audio.play();
            myVar2.innerHTML="B for Baseball"
            break;

            case "c":
            var audio= new Audio("c.mp3");
            audio.play();
            break;

            case "d":
            var audio= new Audio("d.mp3");
            audio.play();
            break;

            case "e":
            var audio= new Audio("e.mp3");
            audio.play();
            break;

            case "f":
            var audio= new Audio("f.mp3");
            audio.play();
            break;

            case "g":
            var audio= new Audio("g.mp3");
            audio.play();
            break;

            case "h":
            var audio= new Audio("h.mp3");
            audio.play();
            break;

            case "i":
            var audio= new Audio("i.mp3");
            audio.play();
            break;

            case "j":
            var audio= new Audio("j.mp3");
            audio.play();
            break;

            case "k":
            var audio= new Audio("k.mp3");
            audio.play();
            break;

            case "l":
            var audio= new Audio("l.mp3");
            audio.play();
            break;

            case "m":
            var audio= new Audio("m.mp3");
            audio.play();
            break;

            case "n":
            var audio= new Audio("n.mp3");
            audio.play();
            break;

            case "o":
            var audio= new Audio("o.mp3");
            audio.play();
            break;

            case "p":
            var audio= new Audio("p.mp3");
            audio.play();
            break;

            case "q":
            var audio= new Audio("q.mp3");
            audio.play();
            break;

            case "r":
            var audio= new Audio("r.mp3");
            audio.play();
            break;

            case "s":
            var audio= new Audio("s.mp3");
            audio.play();
            break;

            case "t":
            var audio= new Audio("t.mp3");
            audio.play();
            break;

            case "u":
            var audio= new Audio("u.mp3");
            audio.play();
            break;

            case "v":
            var audio= new Audio("v.mp3");
            audio.play();
            break;

            case "w":
            var audio= new Audio("w.mp3");
            audio.play();
            break;

            case "x":
            var audio= new Audio("x.mp3");
            audio.play();
            break;

            case "y":
            var audio= new Audio("y.mp3");
            audio.play();
            break;

            case "z":
            var audio= new Audio("z.mp3");
            audio.play();
            break;

    }
}
