function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var bom = window.document.getElementById('bom')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia !
    img.src = 'fotomanha.png'
    document.body.style.background = '#ffe6b3'
    bom.innerHTML = "Bom Dia!"
} else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#b95814'
    bom.innerHTML = "Boa Tarde!"
} else {
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#0b346c'
    bom.innerHTML = 'Boa Noite!'
}
}

