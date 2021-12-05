		var matchedList = new Array();
		var unmatchedList = new Array();
		var inputType, nodeType;
		var modulevalue;
		var enableFlag = false;

	
		var aModule;  

		function enable_view(){
			enableFlag = true;
			$(function(){
				'use strict';
		
				var shortcut = {
						topView: $.hotkey.platform({
							default: 'ctrl+up'
						}),
						frontView: $.hotkey.platform({
							default: 'ctrl+down'
						}),
						sideView: $.hotkey.platform({
							default: 'ctrl+left'
						}),
					},
					element     = $('div.container'),
					defaultZoom = 1, 
					elementZoom = defaultZoom,
					splited = $.map(shortcut, function(value){
						return value.split('+');
					});
		
				element.find('section').each(function(i){
					var self    = $(this),
						action  = self.attr('data-action');
						splited = shortcut[action].split('+');
		
					self.find('button').eq(0).text(splited[0]);
					self.find('button').eq(1).text(splited[1]);
					self.find('button').eq(2).text(splited[2]);
				});
		
				$(document)
					.hotkey(shortcut.frontView, function(e){
						e.preventDefault();
						document.getElementById("demo").innerHTML = "Front View is selected";
						document.getElementById("demo").style.fontSize = "30px";
						document.getElementById("demo").style.fontFamily = "Impact,Charcoal,sans-serif";
						document.getElementById("demo").style.color = "green";
						//function goes here
						
					})
					.hotkey(shortcut.topView, function(e){
						e.preventDefault();
						document.getElementById("demo").innerHTML = "Top View is selected";
						document.getElementById("demo").style.fontSize = "30px";
						 document.getElementById("demo").style.fontFamily = "Impact,Charcoal,sans-serif";
						document.getElementById("demo").style.color = "green";
						
					})
					.hotkey(shortcut.sideView, function(e){
						e.preventDefault();
						document.getElementById("demo").innerHTML = "Side View is selected";
						document.getElementById("demo").style.fontSize = "30px";
						 document.getElementById("demo").style.fontFamily = "Impact,Charcoal,sans-serif";
						document.getElementById("demo").style.color = "green";
						
					});
			});
		}

		

		

	function zoomHoverClick(event){
		document.getElementById("shortcut_key").innerHTML = event.getAttribute('data-value');
		document.getElementById("shortcut_key").style.display = "block";
		document.getElementById("shortcut_key").style.fontSize = "30px";
		document.getElementById("shortcut_key").style.color = "red";
	}

	function zoomHoverOutClick() {
		document.getElementById("shortcut_key").innerHTML ="View Shortcut Mode";
		document.getElementById("shortcut_key").style.display = "none";

	}

	function enableCheck() {
		
		$('#test').fadeIn('slow');
		setTimeout(function(){
			$('#test').hide();
		},2000);
	}