(function($){
  $(function(){
    $(".button-collapse").sideNav();
  });
})(jQuery);

function touchStart(evt, tab) {
  evt.stopPropagation();
  evt.preventDefault();
  openTab(evt, tab);
}

function openTab(evt, tab) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  
  document.getElementById(tab).style.display = "block";
}