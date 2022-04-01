//CODE CSZ
//Listar Eventos
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const eventos = document.querySelector("tbody");
const metodo = {
  method: "GET",
  redirect: "follow",
};

const listarEventos = async () => {
  const resposta = await fetch(`${BASE_URL}/events`, metodo);
  const conteudoResposta = await resposta.json();
  let novaLista = "";

  for (let index = 0; index < conteudoResposta.length; index++) {
    novaLista += `<tr>
        <th scope="row">${index}</th>
        <td>${conteudoResposta[index].scheduled}</td>
        <td>${conteudoResposta[index].name}</td>
        <td>${conteudoResposta[index].attractions}</td>
        <td>
            <a href="./reservas.html.?id=${conteudoResposta[index]._id}" class="btn btn-dark">ver reservas</a>
            <a href="./editar-evento.html?id=${conteudoResposta[index]._id}" class="btn btn-secondary">editar</a>
            <a href="./excluir-evento.html?id=${conteudoResposta[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`;
  }
  eventos.innerHTML = novaLista;
};

listarEventos();