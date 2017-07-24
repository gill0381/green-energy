(function () {
    
    "use strict";


    var masthead, slides, header;

    masthead = document.querySelector(".masthead");
    
    slides = ["<figure><img src=\"./img/windmill.jpg\" alt=\"slide-one-description\" /> <figcaption> Green energy               plays an integral role in our life.</figcaption></figure>",
              "<figure><img src=\"./img/windmil.jpg\" alt=\"slide-one-description\" /> <figcaption> It proves to be a boon in our life.</figcaption></figure>",
              "<figure><img src=\"./img/windfarm.jpg\" alt=\"slide-one-description\" /> <figcaption> This has changed the whole scenaio of the world.</figcaption></figure>",
              "<figure><img src=\"./img/wood.jpg\" alt=\"slide-one-description\" /> <figcaption>World has been revolutionised by green energy.</figcaption></figure>"
             ];

    function fadeOut () {
        masthead.style.opacity = 0;
    }
    

    var i = 0;

    function runSlides () {

        masthead.style.opacity = 1;

        if ( i > 3 ) {
           i = 0;
        }
        
        masthead.innerHTML = slides[i];
        
        window.setTimeout(fadeOut, 5000);

        i += 1;

    }

    runSlides();

     window.setInterval(runSlides, 6000);



 
    
    var buttons, contents, container, i;

     buttons = document.querySelectorAll(".btn");
    
    contents = ["<figure><img src=\"./img/plant.jpg\" alt=\"slide-one-description\" /> <figcaption>Green energy has               become an inseperable part of our life.<br> It reduces the air pollution which is proliferating in               the<br>industrialized world. Hence, people live healthy life. </figcaption></figure>",
                "<figure><img src=\"./img/train.jpg\" alt=\"slide-one-description\" /> <figcaption>The concept of green energy would also reduce the global<br> warming in the modern day world. Owing to industrialisation,<br> the carbon monoxide emissions are increasing which leads to<br> global warming. In such circumstances, green energy would<br> prove to be a boon for people. </figcaption></figure>",
                "<figure><img src=\"./img/sunflower.jpg\" alt=\"slide-one-description\" /> <figcaption>In the modern era, non-renewable resources are also<br> decreasing which are very harmful for the future generation.<br> Hence, the consumption of green energy can reduce them.</figcaption></figure>"
               ];

        

    container = document.querySelector(".container");


    container.innerHTML = contents[0];

    function handleClick (ev) {
        for( i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute("id");
        }


        if (ev.target.innerHTML === "Sol.1") {
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "Sol.2") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }

        ev.target.setAttribute("id", "active");
    } 
    
    
     for (i = 0; i < buttons.length; i++) {    
        buttons[i].addEventListener("click", handleClick);
     }

    
}());

