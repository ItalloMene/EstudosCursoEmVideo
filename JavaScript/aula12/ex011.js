var idade = 27;
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Sendo assim você, não vota');
}else if (idade < 18 || idade > 65){ 
    console.log('Sendo assim, seu voto é opcional')
}else {
    console.log('Sendo assim, seu voto é obrigatório')
}  