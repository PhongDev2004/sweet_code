var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  var current = new Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = seconds % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var currentDate = current.getDate();
  var currentMonth = current.getMonth() + 1; // Months are zero-based
  var currentYear = current.getFullYear();
  var currentHours = current.getHours();
  var currentMinutes = current.getMinutes();
  var currentSeconds = current.getSeconds();

  if (currentDate < 10) {
    currentDate = "0" + currentDate;
  }
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  var result =
    "<span class='digit'>" +
    currentDate +
    "/" +
    currentMonth +
    "/" +
    currentYear +
    "</span><br>";

  $("#clock").html(result);
}
