$(document).ready(function(e) {
  //hamburger menu
  $(".menu-toggler").on("click", () => {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
});
