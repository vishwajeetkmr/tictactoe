$(document).ready(function(){	
	var turns = 0;
	
	for (var i = 1; i < 10; i++){ 
		$('#board').append('<li id=\'' + i + '\'></li>')
	}
	
	var random = Math.floor(Math.random() * 2);
	var active_turn;
	if (random == '0'){
		setActiveTurn('x');
	}
	else{
		setActiveTurn('o');
	}
	
	var spot1 = $('#1');
	var spot2 = $('#2');
	var spot3 = $('#3');
	var spot4 = $('#4');
	var spot5 = $('#5');
	var spot6 = $('#6');
	var spot7 = $('#7');
	var spot8 = $('#8');
	var spot9 = $('#9');
	
	$('#board li').click(function() {
		if ($(this).hasClass('disable')) {
			return 0;
		}
		else if (active_turn === 'o') {
			turns++;
			$(this).text("o");
			$(this).addClass('disable o');
			var winningTiles = playerWon('o');
			if(winningTiles != 'no')
			{
				markTiles(winningTiles);
				$('#o-score-value').text(parseInt($('#o-score-value').text()) + 1);
				endGame('A winner is O!');
			}
			else if (turns == 9){
				endGame('Tie Game!');
			}
			setActiveTurn('x');
		}		
		else 
		{
			turns++;
			$(this).text("x");
			$(this).addClass('disable x');
			
			var winningTiles = playerWon('x');
			if(winningTiles != 'no')
			{
				markTiles(winningTiles);
				$('#x-score-value').text(parseInt($('#x-score-value').text()) + 1);
				endGame('A winner is X!');
			}
			else if (turns == 9){
				endGame('Tie Game!');
			}
			setActiveTurn('o');
		}
	});
	
	$('#reset').click(function(){
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
		$("#board li").removeClass('stroke');
		$('#board li').text('');
		$('#message').slideUp();
		$('#reset').text('Reset Game');
		turns = 0;
	});
	
	function setActiveTurn(player){
		if (player === 'x'){
			$('#x-score-header').addClass('stroke');			
			$('#o-score-header').removeClass('stroke');		
			active_turn = 'x';
		} else {
			$('#o-score-header').addClass('stroke');			
			$('#x-score-header').removeClass('stroke');			
			active_turn = 'o';
		}
	}
	
	function endGame(message){
		$('#message').text(message);
		$('#message').slideDown();
		$('#reset').text('Play Again?');
		$('#board li').addClass('disable');
		
	}
	
	function playerWon(player){
		if(spot1.hasClass(player) && spot2.hasClass(player) && spot3.hasClass(player)){
			return('1,2,3');
		} else if(spot4.hasClass(player) && spot5.hasClass(player) && spot6.hasClass(player)){
			return('4,5,6');			
		} else if(spot7.hasClass(player) && spot8.hasClass(player) && spot9.hasClass(player)){
			return('7,8,9');
		} else if(spot1.hasClass(player) && spot4.hasClass(player) && spot7.hasClass(player)){
			return('1,4,7');
		} else if(spot2.hasClass(player) && spot5.hasClass(player) && spot8.hasClass(player)){
			return('2,5,8');
		} else if(spot3.hasClass(player) && spot6.hasClass(player) && spot9.hasClass(player)){
			return('3,6,9');
		} else if(spot1.hasClass(player) && spot5.hasClass(player) && spot9.hasClass(player)){
			return('1,5,9');
		} else if(spot3.hasClass(player) && spot5.hasClass(player) && spot7.hasClass(player)){
			return('3,5,7');
		} else {
			return ('no');
		}
	};
	
	function markTiles(tiles){
		switch(tiles){
			case('1,2,3'):
				spot1.addClass('stroke');
				spot2.addClass('stroke');
				spot3.addClass('stroke');
				break;
			case('4,5,6'):
				spot4.addClass('stroke');
				spot5.addClass('stroke');
				spot6.addClass('stroke');
				break;
			case('7,8,9'):
				spot7.addClass('stroke');
				spot8.addClass('stroke');
				spot9.addClass('stroke');
				break;
			case('1,4,7'):
				spot1.addClass('stroke');
				spot4.addClass('stroke');
				spot7.addClass('stroke');
				break;
			case('2,5,8'):
				spot2.addClass('stroke');
				spot5.addClass('stroke');
				spot8.addClass('stroke');
				break;
			case('3,6,9'):
				spot3.addClass('stroke');
				spot6.addClass('stroke');
				spot9.addClass('stroke');
				break;
			case('1,5,9'):
				spot1.addClass('stroke');
				spot5.addClass('stroke');
				spot9.addClass('stroke');
				break;
			case('3,5,7'):
				spot3.addClass('stroke');
				spot5.addClass('stroke');
				spot7.addClass('stroke');
				break;
		}
	}
});