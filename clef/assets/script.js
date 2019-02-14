
// window.onload = function() {
//   document.getElementById("form").focus();
// };


$(document).ready(function() {
  console.log("ready");
  $('.form').submit(function(){
    ('#res').html(" ");
    callInfoFromWiki();
    return false;
  });

  $('#wikisearch').click(function(){
    $('#res').html(" ");
    callInfoFromWiki();
  });

  function callInfoFromWiki(){
    var keyword = $('#query').val();
    // var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json"
    var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+keyword+"&callback=?"
    $.ajax({
      url:url,
      type:'POST',
      dataType:'jsonp',
      success: function(result){
        var data = result.query.pages;
        display(data);
      },
      error:function(err){
        alert('Error occurs, please refresh the page');
      }
    });
  }
  
  function display(data){

    // for (var i = 0; i <= 9; i++) {
      // $("#res").append("<div class='result-list result-"   + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
    // }
    var pageurl = "http://en.wikipedia.org/?curid=";
    // j = 0; 
    // while(j < 5){
      for(var i in data ){
        $('#res').append("<div id='resultdiv'><a target='_blank' href='"+pageurl+data[i].pageid+"'><h3>"+data[i].title+"</h3><p>"+data[i].extract+"</p></a></div>");
     
      }
    }
  
    // }
});

