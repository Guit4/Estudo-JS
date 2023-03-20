function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if(fsex[0].checked){
            género = 'Homem'
            if(idade>= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'ch.png')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src','jh.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','hd.png')
            }else{
                //idoso
                img.setAttribute('src','ih.png')
            }
        } else if (fsex[1].checked) {
            género = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','cm.png')
            }else if(idade < 20){
                //jovem
                img.setAttribute('src','jm.png')
            }else if(idade < 50){
                //adulo
                img.setAttribute('src','md.png')
            }else {
                //idoso
                img.setAttribute('src','id.png')
            }
        }
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
}