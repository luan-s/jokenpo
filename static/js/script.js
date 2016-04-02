modo = 1;
mao = '';
contra ='';
perdedor = "black";
ganhador = "#009688";
pedra = "fa fa-hand-rock-o";
papel = "fa fa-hand-paper-o";
tesoura = "fa fa-hand-peace-o";
pro = pedra;
pcv = 0;
userv = 0;

maoRandom = function(){
	do{
		num = Math.floor(Math.random()*10)
	}while(num > 3 || num < 1);
	if(num==1) mao = pedra;
	if(num==2) mao = papel;
	if(num==3) mao = tesoura;
}

cor = function(cor1,cor2){
	$("#user").css("color",cor1);
	$("#pc").css("color",cor2);
}

$("#1").click(function(){pro = pedra});
$("#2").click(function(){pro = papel});
$("#3").click(function(){pro = tesoura});

$('.start').click(function(){	
		maoRandom();
		cor("black","black");
		$("#user").attr("class",pedra)
		$("#pc").attr("class",pedra)
		$('#user').addClass('anime');
		$('#pc').addClass('anime1');
		$('.titulo').addClass('titulo-animate');
		contra = verificaHard(pro);
		anima_titulo(1);

		setTimeout(function(){
			if(!modo) contra = mao;
			if(verifica(pro, contra)==2){
				cor(perdedor,perdedor);
			}else{
				if(verifica(pro, contra)){
					cor(ganhador,perdedor);
					userv++;
				}
				else{
					cor(perdedor,ganhador);
					pcv++;
				}
			}


			anima_titulo(0);
			$('.titulo').removeClass('titulo-animate');
			$('#user').removeClass('anime');
			$('#pc').removeClass('anime1');
			$("#user").attr("class",pro+" gira");
			$("#pc").attr("class",contra+" gira");
			$('.p2').text(pcv.toString());
			$('.p1').text(userv.toString());
		},1500);

});

$('.change').click(function(){
	$('.change').css('box-shadow','0 0 0');
	$(this).css('box-shadow','0 0 10px #E91E63');
	$('.change').css('color','black');
	$(this).css('color','#E91E63');
});

$('.nivel').click(function(){
	$('.nivel').css('box-shadow','0 0 0');
	$(this).css('box-shadow','0 0 10px #E91E63'); 
	$('.nivel').css('color','black');
	$(this).css('color','#E91E63');
	if($(this).attr('id')=='normal') modo = 0;
	else modo = 1;
});


verifica = function(user,pc){
	if(user==pc) return 2;

	if( (user==pedra && pc==tesoura)|| (user==tesoura && pc==papel) || (user==papel && pc==pedra))
		return 1;
	else 
		return 0;	
}

verificaHard = function(user){
	if(user==pedra)return papel;
	if(user==papel)return tesoura;
	if(user==tesoura)return pedra;
}

anima_titulo = function(m){
	if(m){
		$('#jo').addClass("jo");
		$('#ken').addClass("ken");
		$('#po').addClass("po");
	}else{
		$('#jo').removeClass("jo");
		$('#ken').removeClass("ken");
		$('#po').removeClass("po");
	}
}

$('.restart').click(function(){
	pcv = 0;
	userv = 0;
	$('.p1').text(pcv.toString());
	$('.p2').text(userv.toString());
});