   //Função de inicio
   var TextWelcome = document.querySelector("h3#TextWelcome");
    client = prompt("Como gostaria de ser chamado?");
    const password = parseInt(3589);

    TextWelcome.innerHTML = `Bem vindo ${client}! Se acomode no seu banco favorito!`;

    
    // Função de extrato
    function extract(){
        alert("remédios:R$ 90 ,Ifood:R$ 80");
        return byebye();
    }
    // Função de Transfer
    function transfer(){
        var AccountT = parseInt(prompt("Informe números da conta: "));
        var TransferV = parseInt(prompt("informe um valor pra enviar"));
        var pass = parseInt(prompt("Antes da operação, me informe a senha!"));
        if(pass == password){
            alert("Operação efetuada!")
        }else if(pass !== password){
            alert("Senha Incorreta!");
            return again();
        }
        var dol = parseInt(1,999,999,99);
        if(TransferV >= dol){
            alert("Erro, não foi possivel efetuar a transferencia!");
        }else if(TransferV < dol){
            alert(`Operção executada com sucesso ${client}`);
        }else if(TransferV <= 0){
            alert("Erro, não foi possivel efetuar a transferencia!")
        }
        return byebye();
    }
    // Função de saque
    function withdraw(){
        var dol = parseInt(1.999,999,99);
        var saque = prompt("Quantia que deseja sacar: ");
        var pass = parseInt(prompt("Antes da operação, me informe a senha!"));
        if(pass == password){
            alert("Operação efetuada!")
        }else if(pass !== password){
            alert("Senha Incorreta!");
            return again();
        }
        if(saque <= 0){
            alert("Erro, Algo deu errado!");
        }else if(saque < dol){
            alert(`Operção executada com sucesso ${client}`);
        }
        if(saque > dol){
            alert("Erro, Algo deu errado!");
        }
        return byebye();
    }
    // Função de Deposito
    function deposit(){
        var dol = parseint(1.999,999,99);
        var deposit = prompt("Valor que deseja depositar: ")
        var pass = parseInt(prompt("Antes da operação, me informe a senha!"));
        if(pass == password){
            alert("Operação efetuada!")
        }else if(pass !== password){
            alert("Senha Incorreta!");
            return again();
        }
        if(deposit <= 0){
            alert("Erro, Algo deu errado!")
        }else if(deposit < dol){
            alert(`Operção executada com sucesso ${client}`);
        }
        if(deposit > dol){
            alert("Erro, Algo deu errado!");
        }
        return byebye();
    }

    // Função tente novamente
    function again(){
        alert("Tente a senha novamente!")
        return;
    }

    // Função de nos veremos novamente! após se retirar do site o user deverá receber uma mensagem de goodbye
    function byebye(){
        alert(`${client} Foi um Prazer por te vêr aqui!`);
    }
   