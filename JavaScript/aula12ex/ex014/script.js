function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        msg.innerHTML = `Bom dia!<br> Agora são ${hora} horas.`
        img.src = 'img/pixels-manha.png'
        document.body.style.background = '#fecc59'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        msg.innerHTML = `Boa tarde! <br> Agora são ${hora} horas.`
        img.src = 'img/pixels-tarde.png'
        document.body.style.background = '#e9810b'

    } else {
        // Boa noite!
        msg.innerHTML = `Boa noite! <br> Agora são ${hora} horas.`
        img.src = 'img/pixels-noite.png'
        document.body.style.background = '#2a3945'
    }
}

/* 
Cor manhã = #fecc59
Cor tarde = #c86b07 ou #e9810b
Cor noite = #2a3945

*/
