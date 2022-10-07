let endereco = document.getElementById('endereco');

function pegaEndereco() {
    let cep = document.getElementById('iptCep').value

    if(cep.length !== 8) {
        endereco.innerHTML = 'CEP invalido'
    }
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(exibeEndereco)
    });
}

function exibeEndereco(dados){
    
    if(dados.erro){
        endereco.innerHTML = 'Não foi possivel localizar o endereço';
    }else{
        endereco.innerHTML =`
        <p>${dados.cep} </p>
        <p>${dados.logradouro} - ${dados.bairro} </p>
        <p>${dados.localidade} - ${dados.uf}</p>      
        ` 
    }
}

function limpaDados(){
    endereco.innerHTML = ''
    cep.value = ''

}

const btnBuscaCep = document.getElementById('buscaCep')

btnBuscaCep.addEventListener("click",function(e){ 
    event.preventDefault()
    pegaEndereco()
});