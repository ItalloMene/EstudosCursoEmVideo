function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','img/bebe-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src','img/homem-idoso2.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
             if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','img/bebe-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src','img/mulher-idosa2.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}