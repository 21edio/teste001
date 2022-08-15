function mostrarTexto(button)
{
//console.log(button); 
//console.log(button.form);


 var Nome =button.form.elements["nome"];
// console.log(Nome.value);

 var Apelido = button.form.elements["apelido"];
// console.log(Apelido.value);

 //console.log(Nome.value + " <-> " +Apelido.value);

var Tabela= document.getElementById("dados");
//console.log(dados);

criarTabela(Nome.value,Apelido.value);
limpar (Nome, Apelido);
}

function criarTabela(meunome, meupelido)
{

    var Tabela= document.getElementById("dados");


    var tr = document.createElement("tr");
    Tabela.appendChild(tr);

    var td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.innerText=tr.rowIndex;

    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerText=meunome;

    var td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerText=meupelido;

}

function limpar(nome, apelido)
{

 nome.value="";
 apelido.value="";

}