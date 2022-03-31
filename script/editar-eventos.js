// Listar Evento por ID
//Achar o ID na URL
const url_string = window.location.href;
const url = new URL(url_string);
const idEditar = url.searchParams.get("id");
console.log(idEditar);


//Listar os campos editáveis
const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const envioForm = document.querySelector('form')

//Gerar API
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listarEvento = async () => {
  const resposta = await fetch(`${BASE_URL}/events/${idEditar}`, {
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


envioForm.onsubmit = async (evento) => {
    evento.preventDefault();

    const editarEvento = {
        name: inputNome.value,
        poster:inputBanner.value,
        attractions:inputAtracoes.value.split(","),
        description:inputDescricao.value,
        scheduled:inputData.value,
        number_tickets:inputLotacao.value
    };
    
    const configuracao = {
        method: "PUT",
        body: JSON.stringify(editarEvento),
        headers : {
            "Content-Type" : "application/json"
        },
        redirect: "follow"
    };

const resposta = await fetch (`${BASE_URL}/events/${idEditar}`, configuracao);
alert("Evento atualizado com sucesso");
    
}
