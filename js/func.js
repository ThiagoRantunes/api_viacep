const btn = document.getElementById("btn");
const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

btn.addEventListener("click", async function(){

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    const data = await response.json();

    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    localidade.value = data.localidade;
    uf.value = data.uf;

})
