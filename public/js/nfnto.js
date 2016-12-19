(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
    new SelectFx(el);
  } );
})();
function reply_click(clicked_id){
  switch (clicked_id) {
    case "1":
      document.getElementById("transit").className = "shown slide";
      setTimeout(function () {
        window.location="/solutions/marketing-strategy";
      }, 0); //2500 original delay
      return true;
      break;
    case "2":
      document.getElementById("transit").className = "shown slide";
      setTimeout(function () {
        window.location="/solutions/experience-design";
      }, 0);
      return true;
      break;
    case "3":
      document.getElementById("transit").className = "shown slide";
      setTimeout(function () {
        window.location="/solutions/experience-design";
      }, 0);
      return true;
      break;
    case "4":
      document.getElementById("transit").className = "shown slide";
      setTimeout(function () {
        window.location="brand-strategy";
      }, 0);
      return true;
      break;
    case "5":
      document.getElementById("transit").className = "shown slide";
      setTimeout(function () {
        window.location="/solutions/marketing-strategy";
      }, 0);
      return true;
      break;
    default:
  }
}
