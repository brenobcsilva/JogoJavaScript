var jogador = 'X';
var jogada = 0;

function chkJogo(id){
    var src = chkSrc(id);
    var cpu = document.getElementById('cpu').checked;
    alert(cpu);
    if(src == "cel1branco.PNG"){
        document.getElementById(id) + jogador + ".PNG";
        jogada++;
        if(chkVitoria()){
            alert("FIM DO JOGO! Vitoria do " + jogador);
            location.reload();
        }
        if(jogada >= 9){
            alert("FIM DO JOGO! Deu empate. ");
            location.reload();
        }
        if(jogador == 'X'){
            jogador = 'o';
        }else{
            jogador = 'X';
        }
    }
    if(cpu && jogador == 'o'){
        chkJogo(jogadaDoComputador());
    }
}
function jogadaDoComputador(){
    if(chkSrc('cel9') == 'cel1branco.PNG'){
        return 'cel9';
    }
    return 'cel' + Math.floor((Math.random() * 9) + 1);
}

function chkSrc(id){
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}

function chkVitoria(){
    if((chkSrc('cel1') == chkSrc('cel2')) && (chkSrc('cel1') == chkSrc('cel3')) && chkSrc('cel1') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel4') == chkSrc('cel5')) && (chkSrc('cel4') == chkSrc('cel6')) && chkSrc('cel4') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel7') == chkSrc('cel8')) && (chkSrc('cel7') == chkSrc('cel9')) && chkSrc('cel7') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel4')) && (chkSrc('cel1') == chkSrc('cel7')) && chkSrc('cel1') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel2') == chkSrc('cel5')) && (chkSrc('cel2') == chkSrc('cel8')) && chkSrc('cel2') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel6')) && (chkSrc('cel3') == chkSrc('cel9')) && chkSrc('cel3') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel5')) && (chkSrc('cel1') == chkSrc('cel9')) && chkSrc('cel1') != 'cel1branco.PNG'){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel5')) && (chkSrc('cel3') == chkSrc('cel7')) && chkSrc('cel3') != 'cel1branco.PNG'){
        return true;
    }
    return false;
}


























