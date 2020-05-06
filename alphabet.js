var myVar=document.querySelectorAll(".myButton");

var len = myVar.length;

for(var i=0; i<len ;i++)
{
    myVar[i].addEventListener("click",function(){

        var text= this.innerHTML;
        console.log(text);

        audioPlay(text);

        animationPlay(text);



    });
}




function animationPlay(text){
       var selectedButton = document.querySelector("."+text);

       selectedButton.classList.add("animation");

       setTimeout(function(){
           selectedButton.classList.remove("animation");
       }, 1000);
}

function audioPlay(text){

    switch(text)
    {

            case "a":
            var audio= new Audio("a.mp3");
            audio.play();
            break;

            case "b":
            var audio= new Audio("b.mp3");
            audio.play();
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
