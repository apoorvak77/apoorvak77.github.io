$( document ).ready(function() {
    console.log( "ready!" );

      $('.tabs').tabs();

      $('.tooltipped').tooltip();

      $(".vtablinks").on("click",function(e){
        divvar = this.innerHTML.concat("div")  
        openWorkEx(e,divvar)
      })
      function openWorkEx(evt, cityName) {
        var i, vtabcontent, vtablinks;
        vtabcontent = document.getElementsByClassName("vtabcontent");
        for (i = 0; i < vtabcontent.length; i++) {
          vtabcontent[i].style.display = "none";
        }
        vtablinks = document.getElementsByClassName("vtablinks");
        for (i = 0; i < vtablinks.length; i++) {
          vtablinks[i].className = vtablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      document.getElementById("defaultOpen").click();

      $('.scrollspy').scrollSpy();
});

