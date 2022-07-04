$(document).ready(function(){
    $('.slider').slider({
        indicators: false,
        height:500
    });

    });

    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
       
    $(".button-collapse").sideNav();

    const learnMoreBtn = document.querySelectorAll(".learn-more");
    const paragraph = document.querySelectorAll(".learn-morep");
    let paragraphToggle = [true,true,true];

    for (const btn of learnMoreBtn) {
        btn.addEventListener("click", (e) => {
          let counter = e.target.id;
          if (paragraphToggle[counter-1]) {
            paragraph[counter-1].classList.add("show");
            paragraphToggle[counter-1]=false;
          }
          else{
            paragraph[counter-1].classList.remove("show");
            paragraphToggle[counter-1]=true;
          }
        });
    }
    