function cadastrarEvento(event) {
  event.preventDefault();
  const dadosParaEnviar = pegarDados();
  enviarDados(dadosParaEnviar)
}

function pegarDados() {
  const name = document.getElementById("nome").value;
  const imagem = document.getElementById("imagem").value;
  const atracoes = document.getElementById("atracoes").value;
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value;
  const lotacao = document.getElementById("lotacao").value;

  return {
    name: "nome",
    description: "descricao", 
    scheduled: data, 
    number_tickets: lotacao,
    attractions: [atracoes],
    poster: imagem,
  };
}


function enviarDados (dados){
  fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    method: "POST",
    // tinha de por esse headers
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // tranforma o dado JS em uma string para que outras linguages/backend consigam ler
    body: JSON.stringify(dados),
  }).then(retorno => {
    // o then executa depois que o fetch funcionou e recebe informações de retorno da API
    console.log('Sucesso ao enviar! ', retorno);
  }).catch(error => {
    // o catch recebo um erro quando o fetch falha
    console.log('erro ao enviar: ', error)
  });
}
