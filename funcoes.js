function validarformulario(event){
    var nome = document.getElemenById('nome').value;
    var idade = parseInt(getElemenById('idade').value);
    var cidade = document.getElemenById('cidade').value;

    let saberidade = "";
    if (idade < 18){
        saberidade =`você tem apenas ${idade} anos voce e menor de idade`
    }
    else(idade > 18){
        saberidade =`você tem ${idade} você é maior de idade`
    }
}