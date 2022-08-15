

function levantar(buttun)
{
    var nome = buttun.form.elements["nome"];
   console.log(nome.value);

   var numero = buttun.form.elements["numero"];
   console.log(numero.value);

   var quantia = buttun.form.elements["quantia"];
   console.log(quantia.value);

   
   var data = buttun.form.elements["data"];
   console.log(data.value);

   var hora = buttun.form.elements["hora"];
   console.log(hora.value);

   var numeroderegisto = buttun.form.elements["numeroderegisto"];
   console.log(numeroderegisto.value);

   criartabela (nome, numero,quantia, data, hora, numeroderegisto);

   alert("Feito Com Sucesso"); //Emite um alerta apos salvar os dados

   limpar( nome, numero,quantia, data, hora, numeroderegisto);



}

function criartabela(Nom, Num, Quant, Data, Hora, NumReg)
{
    var tabela = document.getElementById("regis");
    console.log(regis);

 
var linha = document.createElement("tr");
tabela.appendChild(linha);

var dado1 = document.createElement("td");
linha.appendChild(dado1);
dado1.innerText = linha.rowIndex;

var dado2 = document.createElement("td");
linha.appendChild(dado2);
dado2.innerText=Nom.value;

var dado3 = document.createElement("td");
linha.appendChild(dado3);
dado3.innerText=Num.value;

var dado3 = document.createElement("td");
linha.appendChild(dado3);
dado3.innerText=Quant.value +"Mt";

var dado4 = document.createElement("td");
linha.appendChild(dado4);
dado4.innerText=Data.value;

var dado5 = document.createElement("td");
linha.appendChild(dado5);
dado5.innerText=Hora.value;

var dado6 = document.createElement("td");
linha.appendChild(dado6);
dado6.innerText="00000"+linha.rowIndex;



}

function limpar(no, nu, qu, da, ho, nr)
{
no.value="";
nu.value="";
qu.value="";
da.value="";
ho.value="";
nr.value="";
}


//PARTE DO LEVANTAMENTO




function depositar(buttun)
{
    var nome = buttun.form.elements["nomec"];
   console.log(nome.value);

   var numero = buttun.form.elements["numeroc"];
   console.log(numero.value);

   var quantia = buttun.form.elements["quantiac"];
   console.log(quantia.value);

   
   var data = buttun.form.elements["datac"];
   console.log(data.value);

   var hora = buttun.form.elements["horac"];
   console.log(hora.value);

   var numeroderegisto = buttun.form.elements["numeroderegistoc"];
   console.log(numeroderegisto.value);

   criartabela (nome, numero,quantia, data, hora, numeroderegisto);

   limpar( nome, numero,quantia, data, hora, numeroderegisto);

   alert("Feito Com Sucesso"); //Emite um alerta apos salvar os dados

}

function criartabela(Nom, Num, Quant, Data, Hora, NumReg)
{
    var tabela = document.getElementById("deposi");
    console.log(deposi);

 
var linha = document.createElement("tr");
tabela.appendChild(linha);

var dado1 = document.createElement("td");
linha.appendChild(dado1);
dado1.innerText = linha.rowIndex;

var dado2 = document.createElement("td");
linha.appendChild(dado2);
dado2.innerText=Nom.value;

var dado3 = document.createElement("td");
linha.appendChild(dado3);
dado3.innerText=Num.value;

var dado3 = document.createElement("td");
linha.appendChild(dado3);
dado3.innerText=Quant.value +"Mt";

var dado4 = document.createElement("td");
linha.appendChild(dado4);
dado4.innerText=Data.value;

var dado5 = document.createElement("td");
linha.appendChild(dado5);
dado5.innerText="11:0"+linha.rowIndex;

var dado6 = document.createElement("td");
linha.appendChild(dado6);
dado6.innerText="00000"+linha.rowIndex;



}

function limpar(no, nu, qu, da, ho, nr)
{
no.value="";
nu.value="";
qu.value="";
da.value="";
ho.value="";
nr.value="";
}
