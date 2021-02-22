function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class= 'anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class= 'anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class= 'anima3'></div>");


//Principais variáveis do jogo
var jogo = {}
var TECLA = {
	UP: 38,
	DN: 40,
	S: 8
	}

	jogo.pressionou = [];

//Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
		});
	
	
		$(document).keyup(function(e){
		   jogo.pressionou[e.which] = false;
		});
	

	
//Game Loop

jogo.timer = setInterval(loop,30);

function loop() {

movefundo();
movejogador();

} // Fim da função loop()



//Função que movimenta o fundo do jogo

function movefundo() {

esquerda = parseInt($("#fundoGame").css("background-position"));
$("#fundoGame").css("background-position",esquerda-2);

} // fim da função movefundo()

function movejogador() {
	
	if (jogo.pressionou[TECLA.UP]) {
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo-10);

		if (topo<=0) {
		
			$("#jogador").css("top",topo+10);
		}
		
	
	}
	
	if (jogo.pressionou[TECLA.DN]) {
		
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo+10);

		if (topo>=434) {	
			$("#jogador").css("top",topo-10);
				
		}
	}
	
	if (jogo.pressionou[TECLA.S]) {
		
		//Chama função Disparo	
	}

	} // fim da função movejogador()

}