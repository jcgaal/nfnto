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

//Play Sound on Hover
function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
  if (document.all) {
    document.all.sound.src = "click.mp3";
   }
}
 else {
   {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    }
  }
}

//Swap Words Dynamically
var words = ["grow your business","reach your cusomers", "delight your users", "increase sales", "reach your targets", "increase brand awareness"];
var i = 0;
var text = "get there";
function _getChangedText() {
  i = (i + 1) % words.length;
  //console.log(words[i]);
  //console.log(i);
  return text.replace(/get there/, words[i]);
}
function _changeText() {
  var txt = _getChangedText();
  //console.log(txt);
  var theChanger = document.getElementById("changer");
  //we check if the element theChanger exists
  if (document.body.contains(theChanger)){
    //If it does, we change the text inside it
    document.getElementById("changer").innerHTML = txt;
  }
}
setInterval("_changeText()", 1000);

/*! ScrollToAnchor.js v1.1,0 | Paul Browne | 2015 | GNU 2.0  */
(function() {
  var bod = document.getElementsByTagName("body")[0];
  var FIREFOX = /Firefox/i.test(navigator.userAgent);
  if (FIREFOX) {
    bod = document.getElementsByTagName("html")[0];
  }

  function animate(opts) {
    var start = new Date(),
      id = setInterval(function() {
        var timePassed = new Date() - start,
          progress = timePassed / opts.duration,
          delta = opts.delta(progress);
        if (progress > 1) {
          clearInterval(id);
        }
        window.addEventListener('click', function() {
          clearInterval(id);
        });
        opts.step(delta);
      }, 1);
  }

  function move(duration, too) {
    animate({
      duration: duration || 1200,
      delta: quad,
      step: function(quad) {
        bod.scrollTop = bod.scrollTop + (too - bod.scrollTop) * quad;
      }
    });
  }

  function quad(progress) {
    return Math.pow(progress, 2);
  }

  function boo(evt) {
    var thehref = this.getAttribute('href').slice(1),
      idofhref = document.getElementById(thehref),
      disttotop = idofhref.offsetTop,
      length = Math.abs(disttotop - bod.scrollTop),
      timing;
    if (Math.abs(length) < 500) {
      timing = 1000;
    }
    if (Math.abs(length) > 2500) {
      timing = 2500;
    } else {
      timing = length;
    }
    move(timing, disttotop);
    evt.preventDefault();
  }

  var elem = document.getElementsByTagName("a");
  for (var i = 0; i < elem.length; ++i) {
    var href = elem[i].getAttribute('href');
    if (href.indexOf("#") === 0) {
      elem[i].addEventListener('click', boo);
    }
  }

})();
