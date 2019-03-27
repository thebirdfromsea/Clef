import React, { Component } from 'react';

export default class Wiki extends Component {
    constructor() {
    super();
}
    componentDidMount() {
    }

    render() {
        return (
        <div>
            {/* <div className="title">
            <h1 style={{textAlign: 'center', fontSize: '500%', color: 'orange'}}><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg" alt="Clef Symbol" width={50} height={50} /> Clef <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg" alt="Clef Symbol" width={50} height={50} /></h1>
            </div>
            <hr style={{borderColor: 'orange'}} /> */}
            {/* <img src="https://image.ibb.co/e6vOFQ/wikipedia.png" alt="Wikipedia Logo"></img> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/500px-Wikipedia_svg_logo.svg.png" class="App-logo" width={10} length={10} alt="logo"></img>
            <input type="text" name="query" id="query" class="form-control input-lg" placeholder="Search"/>
            <button type="button" type="submit" id="wikisearch">Go!</button>
            <button type="submit"onclick="window.location.href='http://en.wikipedia.org/wiki/Special:Random';">I'm feeling Lucky!</button>
            <h1>
                wiki
            </h1>
      </div>
            );
        }
    }

    window.onload = function() {
		document.getElementById("wiki-search").focus();
	};

	function ajax (keyword) { 
		$.ajax({ 
			url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword +
			 "&prop=info&inprop=url&utf8=&format=json",
			dataType: "jsonp",
			success: function(response) {
				console.log(response.query);
				if (response.query.searchinfo.totalhits === 0) {
					showError(keyword);
				}
				else {
					showResults(response);
				}
			},
			error: function () {
				alert("Error retrieving search results, please refresh the page");
			}
		});
	}

	function showResults (callback) {

		for (var i = 0; i <= 9; i++) {
			$(".display-results").append("<div class='result-list result-" + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
		}

		for (var m = 0; m <= 9; m++) {
			var title = callback.query.search[m].title;
			var url = title.replace(/ /g, "_");
			var timestamp = callback.query.search[m].timestamp;
			timestamp = new Date(timestamp);
			console.log(timestamp);
			$(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[m].title + "</a>");
			$(".snippet-" + m).html(callback.query.search[m].snippet);
			$(".metadata-" + m).html((callback.query.search[m].size/1000).toFixed(0) + "kb (" + callback.query.search[m].wordcount + " words) - " + timestamp);
		}
	}

	function showError(keyword) {
		$(".display-results").append( "<div class='error'> <p>Your search <span class='keyword'>" + keyword + "</span> did not match any documents.</p> <p>Suggestions:</p><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></div> ");
	}

	$(".result-btn-wiki").click(function (event) {
		event.preventDefault();
		$(".display-results").html("");
		var keyword = $(".result-wiki-search-form-input").val();
		document.getElementById("result-wiki-search-form-input").blur();
		ajax(keyword);
	});

	$("btn").click(function(event) {
		event.preventDefault();
		var keyword = $(".wiki-search-input").val();
		console.log(keyword);
		if (keyword !== "") {
			$(".result-wiki-search-form-input").val(keyword);
			$(".home").addClass('hidden');
			$(".result").removeClass('hidden');
			document.getElementById("wiki-search-input").blur();
			$(".wiki-search-input").val("");
			document.getElementById("result-wiki-search-form-input").blur();	
			$(".display-results").html("");
			ajax(keyword);
		}
		else {
			alert("Enter a keyword into the search box");
		}
		
	});
    
