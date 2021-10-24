//Configura troca de divs por jquery
$(document).ready(function(){
    $('#divList').hide();
    
    $('#linkList').click(function(){ 
        $('#divMain').hide();
        $('#divList').show();
    });
  
    $('#linkMain').click(function(){ 
        $('#divList').hide();
        $('#divMain').show();
    }); 
});

//Valida preenchimento, chama função de adicionar item e de desabilitar opção do seletor
function validarItem(nomeCol, cpfCol, itemCes){
    let nome = document.getElementById(nomeCol).value;
    let cpf = document.getElementById(cpfCol).value;
    let item = document.getElementById(itemCes).value;

    if (nome == "")
        alert("Favor inserir seu nome.");
    else if (cpf == "")
        alert("Favor inserir seu número de CPF.");
    else if (cpf.length < 11)
        alert("Favor inserir um número de CPF válido.");
    else if (item == "0")
        alert("Favor selecionar um dos itens da lista.");
    else
        adicionarItem(nome, cpf, item); 
        desabilitarOpcao(item); 
}

//Adiciona dados em um item da cesta
function adicionarItem(nomeItm, cpfItm, itemItm){
    let novoItem = {nome:nomeItm, cpf:cpfItm, item:itemItm};

    if (typeof(Storage) !== "undefined"){
        let cesta = localStorage.getItem("cesta");
        if (cesta == null) cesta = [];
        else cesta = JSON.parse(cesta);
        cesta.push(novoItem);
        localStorage.setItem("cesta",JSON.stringify(cesta))
        alert("Item adicionado na cestinha :)");
        //location.reload();
    }
}

//Desabilita opção do seletor (em desenvolvimento)
function desabilitarOpcao(){
    let valor = document.querySelector('#itemCes').value;
    console.log(valor);
}

//Lista itens adicionados na cesta
function listarCesta(){
    document.getElementById('itemList').innerHTML = "";
    
    if (typeof(Storage) !== "undefined"){
        let cesta = localStorage.getItem("cesta");
        document.getElementById('itemList').innerHTML += "<h3>Conteúdo da cesta</h3>";
        if (cesta == null)
            document.getElementById('itemList').innerHTML += "<p>Ainda não há itens na cestinha :(</p>";
        else{
            usuarios = JSON.parse(cesta);
            usuarios.forEach(nomeItm => {
                document.getElementById('itemList').innerHTML += "<ul>";
                document.getElementById('itemList').innerHTML += "<li>Nome do colaborador: "+nomeItm.nome+"</li>";
                document.getElementById('itemList').innerHTML += "<li>CPF do colaborador: "+nomeItm.cpf+"</li>";
                document.getElementById('itemList').innerHTML += "<li>Item selecionado: "+nomeItm.item+"</li>";
                document.getElementById('itemList').innerHTML += "</ul>";
            });
        }
    }    
}