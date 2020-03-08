$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  $(function expandSection() {
    $(".show--more").click(function () {
        $(".des").toggleClass("expanded");
        $(this).text() === 'Show More' ? $(this).text('Show Less') : $(this).text('Show More')
      });
  });

// The below script was intentionally written in vanilla JS for demonstration purposes
  function menuOpen() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  console.log("Hello potential employers! Thank you for taking the time to dig into my code, I really appreciate it! If your seeing this console log, I assume you are trying to find out if I wrote my own code, or If I am using a framework such as Bootstrap. While I love using Bootstrap and Foundation for sites due to their speed of setup and usability, I chose to write this site from scratch in order to showcase my understanding of the markup and syntax. If you would like to see the source code for this site, you can find it at https://github.com/ryanahorne/ryanahorne.github.io");