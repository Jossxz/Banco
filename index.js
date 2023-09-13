   //Função de inicio
   var TextWelcome = document.querySelector("h3#TextWelcome");
    client = prompt("Como gostaria de ser chamado?");
    const password = parseInt(3589);

    TextWelcome.innerHTML = `Bem vindo ${client}! Se acomode no seu banco favorito!`;

    
    // Função de extrato
    function extract(){
        alert("remédios:R$ 90 ,Ifood:R$ 80");
        byebye();
    }
    // Função de Transfer
    function transfer(){
        var dol = parseInt(999);
        var AccountT = parseInt(prompt("Informe números da conta: "));
        var TransferV = parseInt(prompt("informe um valor pra enviar"));
        
        passV();

        if(TransferV <= dol){
            alert(`Operção executada com sucesso ${client}`);
        }else{
            alert("Erro, Algo deu errado!");
            return transfer();
        }
        byebye();
    }
    // Função de saque
    function withdraw(){
        var dol = parseInt(999);
        var saque = parseInt(prompt("Quantia que deseja sacar: "));

        passV();

        if(saque <= dol){
            alert(`Operação executada com sucesso ${client}`);
        }else{
            alert("Erro, Algo deu errado!");
            return withdraw();
        }

        byebye();
    }
    // Função de Deposito
    function deposit(){
        var dol = parseInt(999);
        var deposit = parseInt(prompt("Valor que deseja depositar: "));

        passV();

        if(deposit <= dol){
            alert(`Operção executada com sucesso ${client}`);
        }else{
            alert("Erro, Algo deu errado!");
            return deposit();
        }

        byebye();
    }

    // Função tente novamente
    function passV(){
        var pass = parseInt(prompt("Antes da operação, me informe a senha!"));
        
        if(pass == password){
            alert("Senha Correta!")
        }else if(pass !== password){
            alert("Senha Incorreta!");
            return passV();
        }
    }

    // Função de nos veremos novamente! após se retirar do site o user deverá receber uma mensagem de goodbye
    function byebye(){
        alert(`${client} Foi um Prazer por te vêr aqui!`);
    } 
   