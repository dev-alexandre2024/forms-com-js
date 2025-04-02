function validarformulario(event){
    var nome = document.getElemenById('nome').value;
    var idade = parseInt(getElemenById('idade').value);
    var cidade = document.getElemenById('cidade').value;

     if( !nome||!idade||!cidade ){
        document.window.alert("por favor,preencha todos os campos");
        return
     }

    let saberidade = "";
    if (idade < 18){
        saberidade =`você tem apenas ${idade} anos voce e menor de idade`
    }
    else if(idade > 18){
        saberidade =`você tem ${idade} você é maior de idade`
    }
}