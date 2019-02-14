
// window.onload = function() {
//   document.getElementById("form").focus();
// };


$(document).ready(function() {
  $('.form').submit(function(){
    ('#res').html(" ");
    callInfoFromWiki();
    return false;
  });

  $('#search').click(function(){
    $('#res').html(" ");
    callInfoFromWiki();
  });

  function callInfoFromWiki(){
    var keyword = $('#query').val();
    var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+keyword+"&callback=?"
    $.ajax({
      url:url,
      type:'POST',
      dataType:'jsonp',
      success: function(result){
        var data = result.query.pages;
        render(data);
      },
      error:function(err){
        alert('Error occurs, please refresh the page');
      }
    });
  }
  
  function render(data){
    var pageurl = "http://en.wikipedia.org/?curid=";
    for(var i in data ){
      $('#res').append("<div id='resultdiv'><a target='_blank' href='"+pageurl+data[i].pageid+"'><h3>"+data[i].title+"</h3><p>"+data[i].extract+"</p></a></div>");
    }
    }
});

