function validarformulario(event){
    var nome = document.getElemenById('nome').value;
    var idade = parseInt(document.getElemenById('idade').value);
    var cidade = document.getElemenById('cidade').value;


    let saberidade = "";
    if (idade < 18){
        resultado +=`você tem apenas ${idade} anos voce e menor de idade`;
    }
    else if(idade > 18){
         resultado +=`você tem ${idade} você é maior de idade`;
    }


     resultado += `<br>Nome ${nome}`;
     resultado += `<br>Cidade ${cidade}`;

     document.getElementById('resultado').innerHTML.resultado;
}