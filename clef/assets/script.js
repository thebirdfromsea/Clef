
// window.onload = function() {
//   document.getElementById("form").focus();
// };

$(document).ready(function () {
  console.log("ready");
  $('.form').submit(function () {
    callInfoFromWiki();
  });

  $('#wikisearch').click(function () {
    callInfoFromWiki();
  });

  function callInfoFromWiki() {
    var keyword = $('#query').val();
    // var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json"
    var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + keyword + "&callback=?"
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'jsonp',
      success: function (result) {
        var dataFromWiki = result.query.pages;
        display(dataFromWiki);
      },
      error: function (err) {
        alert('Error occurs, please refresh the page');
      }
    });
  }

  function display(dataFromWiki) {
    var urlForPage = "http://en.wikipedia.org/?curid=";
    // j = 0; 
    // while(j < 5){
    for (var i in dataFromWiki) {
      $('#res').append("<div id='resultdiv'><a href='" + urlForPage + dataFromWiki[i].pageid + "'><h3>" + dataFromWiki[i].title + "</h3><p>" + dataFromWiki[i].extract + "</p></a></div>");
    }
  }
});

