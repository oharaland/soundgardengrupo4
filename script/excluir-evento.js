//CODE CSZ
// Listar Evento por ID
//Achar o ID na URL
const url_string = window.location.href;
const url = new URL(url_string);
const idExclusao = url.searchParams.get("id");
console.log(idExclusao);

//Listar os campos editáveis
const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

//Gerar API
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listarEvento = async () => {
  const resposta = await fetch(`${BASE_URL}/events/${idExclusao}`, {
    method: "GET",
    redirect: "follow",
  });

  const conteudoResposta = await resposta.json();

  //Listar campos de resposta do GET
  inputNome.value = conteudoResposta.name;
  inputBanner.value = conteudoResposta.poster;
  inputAtracoes.value = conteudoResposta.attractions;
  inputDescricao.value = conteudoResposta.description;
  inputData.value = conteudoResposta.scheduled;
  inputLotacao.value = conteudoResposta.number_tickets;
};
listarEvento();

//Gerar API Exclusão
const btnExcluirEvento = document.querySelector(".btn.btn-danger");
console.log(btnExcluirEvento);

btnExcluirEvento.onsubmit = (evento) => {
  evento.preventDefault();
};

const excluirEvento = async () => {
  const respostaExcluir = await fetch(`${BASE_URL}/events/${idExclusao}`, {
    method: "DEL",
  });
  alert("Evento Excluído");
  const conteudoRespostaExcluir = await respostaExcluir.json();
};
excluirEvento();