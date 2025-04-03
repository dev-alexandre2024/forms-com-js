function validarformulario(){
    var nome = document.getElementById('nome')
    var idade = parseInt(document.getElemenById('idade').value);
    var cidade = document.getElemenById('cidade').value;


    let resultado = "";
    if (idade < 18){
        resultado +=`você tem apenas ${idade} anos voce e menor de idade`;
    }
    else if(idade > 18){
         resultado +=`você tem ${idade} você é maior de idade`;
    }


     resultado += `<br>Nome ${nome}`;
     resultado += `<br>Cidade ${cidade}`;
    
     var h1 = document.getElementById('text')
     h1.textContent = Nome.value;   

     
     

     document.getElementById('resultado').innerHTML.resultado;
}