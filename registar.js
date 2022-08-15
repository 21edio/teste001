function registro(buttun) //BOTAO SALVAR
{

   var nome = buttun.form.elements["nome"];
   //console.log(nome.value);

   var apelido = buttun.form.elements["apelido"];
   //console.log(apelido.value);

   var data = buttun.form.elements["data"];
   //console.log(data.value);

   
   var pai = buttun.form.elements["pai"];
   //console.log(pai.value);

   var mae = buttun.form.elements["mae"];
   //console.log(mae.value);

   var conta = buttun.form.elements["conta"];
   //console.log(conta.value);

   var bi = buttun.form.elements["bi"];
   //console.log(bi.value);

   var nuit = buttun.form.elements["nuit"];
   //console.log(nome.value);

   var nconta = buttun.form.elements["nconta"];
   //console.log(nconta.value);

   var tel = buttun.form.elements["tel"];
   //console.log(tel.value);

   var pdeposito = buttun.form.elements["pdeposito"];
   //console.log(pdeposito.value);

   criartabela(nome, apelido, data, pai, mae, conta, bi, nuit, nconta, tel, pdeposito); //cria a tabela

alert("Dados Salvos"); //Emite um alerta apos salvar os dados

limpar(nome, apelido, data, pai, mae, conta, bi, nuit, nconta, tel, pdeposito);  //Limpa os dados apos savlar


}

function criartabela(nOme, aPelido, dAta, pAi, mAe, cOnta, bI, nUit, nConta, tEl, pDeposito) //Criar tabela
{

var tabela = document.getElementById("info");
console.log(info);

var linha = document.createElement("tr");
tabela.appendChild(linha);

var dado1 = document.createElement("td");
linha.appendChild(dado1);
dado1.innerText = linha.rowIndex;

var dado2 = document.createElement("td");
linha.appendChild(dado2);
dado2.innerText=nOme.value;

var dado3 = document.createElement("td");
linha.appendChild(dado3);
dado3.innerText=aPelido.value;

var dado4 = document.createElement("td");
linha.appendChild(dado4);
dado4.innerText=dAta.value;

var dado5 = document.createElement("td");
linha.appendChild(dado5);
dado5.innerText=pAi.value;

var dado6 = document.createElement("td");
linha.appendChild(dado6);
dado6.innerText=mAe.value;

var dado7 = document.createElement("td");
linha.appendChild(dado7);
dado7.innerText=cOnta.value;

var dado8 = document.createElement("td");
linha.appendChild(dado8);
dado8.innerText=bI.value;

var dado9 = document.createElement("td");
linha.appendChild(dado9);
dado9.innerText=nUit.value;

var dado10 = document.createElement("td");
linha.appendChild(dado10);
dado10.innerText= "1100000"+linha.rowIndex;

var dado11 = document.createElement("td");
linha.appendChild(dado11);
dado11.innerText= tEl.value;

var dado12 = document.createElement("td");
linha.appendChild(dado12);
dado12.innerText=pDeposito.value + " Mt";
}

function limpar(nOme, aPelido, dAta, pAi, mAe, cOnta, bI, nUit, nConta, tEl, pDeposito)
{
nOme.value="";
aPelido.value="";
 dAta.value="";
  pAi.value="";
   mAe.value="";
    cOnta.value="";
     bI.value="", nUit.value="";
      nConta.value="";
      tEl.value="";
       pDeposito.value="";

}


function btnCancelar(buttun)  //BOTAO CANCELAR
{
    var nome = buttun.form.elements["nome"];
    //console.log(nome.value);
 
    var apelido = buttun.form.elements["apelido"];
    //console.log(apelido.value);
 
    var data = buttun.form.elements["data"];
    //console.log(data.value);
 
    
    var pai = buttun.form.elements["pai"];
    //console.log(pai.value);
 
    var mae = buttun.form.elements["mae"];
    //console.log(mae.value);
 
    var conta = buttun.form.elements["conta"];
    //console.log(conta.value);
 
    var bi = buttun.form.elements["bi"];
    //console.log(bi.value);
 
    var nuit = buttun.form.elements["nuit"];
    //console.log(nome.value);
 
    var nconta = buttun.form.elements["nconta"];
    //console.log(nconta.value);

    var tel = buttun.form.elements["tel"];
    //console.log(tel.value);
 
    var pdeposito = buttun.form.elements["pdeposito"];
    //console.log(pdeposito.value);

    limpar(nome, apelido, data, pai, mae, conta, bi, nuit, nconta, pdeposito); //Limpa os campos ao clicar no botao cancelar
}
//REGISTO DOS CLIENTES

