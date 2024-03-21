function Calcular(){

    document.getElementById("meuFormulario").addEventListener("submit", function(event){
        event.preventDefault(); // Previne o comportamento padrão do formulário de ser submetido
        // Após processar os dados, você pode recarregar a página
        window.location.reload();
      })

    nome = nome.value;
    altura= altura.value;
    peso= peso.value;
    
    IMC = peso/(altura*altura);
    IMC = IMC.toFixed(2);
    
    
    
    if(IMC<18.5){
        alert("Você está abaixo do peso "+nome)
        alert("Seu IMC é: " +IMC)
    }else if(IMC>18.5 && IMC<24.9){
        alert("Você está no peso ideal "+nome)
        alert("Seu IMC é: " +IMC)
    }else if(IMC>25.0 && IMC<29.9){
        alert("Você está com excesso de peso " +nome)
        alert("Seu IMC é:"+ nome)
    }else if(IMC>30.0 && IMC<34.9){
        alert("Você está com obesidade classe I "+ nome)
        alert("Seu IMC é: "+IMC)
    }else if(IMC>35.0 && IMC<39.9){
        alert("Você está com obesidade classe II "+nome)
        alert("Seu IMC é: " +IMC)
    }else if(IMC>=40.0){
        alert("Você está com obesidade classe III "+nome)
        alert("Seu IMC é: "+IMC)
    }else{
        alert("Por favor, insira um parâmetro válido!")
    }
    
}
