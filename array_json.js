/**********************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
 * Data: 29/09/2023
 * Autor: Raica Martinez
 * Versão: 1.0
 * 
 * 
 *********************************************************************/


// [] -> Representa a estrutura array 
// {} -> Representa a estrutura JSON 

const introducaoArray = function(){

    //Criando uma array de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];


    //Exibe os dados do array 
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

    // Retorna a gtde de elementos de um array 
    console.log(listaDeNomes.length);

    //Adiciona um elemnto novo no final dentro do array 
    listaDeNomes.push('Roberto');
    console.table(listaDeNomes);

    ///Adiciona um elemento novo no inicio dentro do array 
    listaDeNomes.unshift('Ricardo');

    console.table(listaDeNomes);

    //Remove o ultimo elemento do array
    listaDeNomes.pop();

    //Remove o primeiro elemento do array
    listaDeNomes.shift();

    console.table(listaDeNomes);

    //Remove um elemento baseado no indice, podendo definir a gtde de items a sere excluidos
    // Ex: splice (2,1) -> é referente a indice e 3 referente a gtde de itens
    listaDeNomes.splice(2,1);
    console.table(listaDeNomes);

    listaDeNomes.push('Andre da Silva', 'Ricardo da Silva', 'João da Silva', 10)
    console.log(listaDeNomes);

    // typeof - retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[0]));

    console.log(listaDeNomes[2]);


}


const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    //While
    //let cont = 0;
    //while(cont < listaDeProdutos.length){
    //console.log('Nome do Produto: ' + listaDeProdutos [cont]);
    //cont +=1;
    //}

    //FOR
    //for(let cont = 0; cont < listaDeProdutos.length; cont++){
    //console.log('Nome do Produto: ' + listaDeProdutos[cont]);
    //}

    //FOREACH
    listaDeProdutos.forEach(function(Produto){
    console.log('Nome do Produto: ' + Produto)
    })


    //Retorna o indice do elemnto que foi encontrado 
    // Caso não exista o intem buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Notebook'));



    
}

const filtrarProduto = function(nomeProduto){

let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
let nome = String (nomeProduto);

let status = false;
//return listaDeProdutos.includes(nome);    

listaDeProdutos.forEach(function(Produto){
    if(Produto.toUpperCase() == nome.toUpperCase())
    status = true;

})
return status;
}

console.log(filtrarProduto('Mouse'));

filtrarProduto();
//percorrendoArray();

//introducaoArray();