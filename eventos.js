//CODE CSZ
//Incluir HTML

const eventosHTML = document.querySelector("main");
console.log(eventosHTML);

eventosHTML.innerHTML += `<section class="my-modal">
<div class="modal">
    <h2>Reserva de Ingresso</h2>
    <p>Por favor, preencha seus dados abaixo</p>
    <br>
    <form>
        <div>
            <label for="nome">Nome Completo</label>
            <br>
            <input type="text" class="input-modal" id="nome-modal" name="nome-modal"
                placeholder="digite seu nome aqui">
            <br>
            <br>
            <label for="nome">E-mail</label><br>
            <input type="text" class="input-modal" id="email-modal" name="email-modal"
                placeholder="digite seu e-mail aqui">
            <br>
            <br>
            <label for="nome">Número de Ingressos</label><br>
            <input type="text" class="input-modal" id="ingressos-modal" name="ingressos-modal"
                placeholder="digite quantos ingressos deseja agendar"><br>
        </div>
        <br>
        <br>
        <br>
        <button type="submit" class="btn-modal" id="confirmar-reserva">Reservar Agora</button>
        <button type="cancel" class="btn-modal" id="cancelar-reserva">Cancelar</button>
    </form>
</div>
</section>`;
console.log(eventosHTML);

//Listar eventos com ID

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const eventosLista = document.querySelector(
  ".container.d-flex.justify-content-center.align-items-center.flex-wrap"
);
console.log(eventosLista);
const metodo = {
  method: "GET",
  redirect: "follow",
};

const listarEventos = async () => {
  const resposta = await fetch(`${BASE_URL}/events`, metodo);
  const conteudoResposta = await resposta.json();
  let novaLista = "";

  for (let index = 0; index < conteudoResposta.length; index++) {
    novaLista += `<div><article class="evento card p-5 m-3"><h2>${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4>${conteudoResposta[index].attractions}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
        dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
        nobis in inventore tenetur asperiores.</p>
        <p id="pid">IdEvento: ${conteudoResposta[index]._id}</p>
    <a href="#" class="btn btn-primary">reservar ingresso</a></div>`;
  }
  eventosLista.innerHTML = novaLista;
};

listarEventos();

//Ativar modal
const modal = document.querySelector(".modal");
console.log(modal);

function abrirModal() {
  function stopEvent(event) {
    event.preventDefault();
  }
  function modal1() {
    modal.classList.add("-ativar");
  }
}

function fecharModal() {
  function stopEvent(event) {
    event.preventDefault();
  }
  function modal1() {
    modal.classList.remove("-ativar");
  }
}

const btneventos = document.querySelectorAll("btn.btn-primary");
console.log(btneventos);

for (let i = 0; i < btneventos.length; i++) {
  btneventos[i].addEventListener("click", abrirModal);
}

const btnModal = document.querySelectorAll(".btn-modal");
console.log(btnModal);

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", fecharModal);
}

//Gerar reserva
const inputNome = document.querySelector("#nome-modal");
const inputMail = document.querySelector("#email-modal");
const inputIngressos = document.querySelector("#ingressos-modal");
const consultaId = document.querySelector("#pid");
const metodoPOST = {
  method: "POST",
  redirect: "follow",
};

const btnReserva = document.querySelector("#confirmar-reserva");

const criarReserva = async () => {
  btnReserva.addEventListener("click", (event) => {
    event.preventDefault();
  });
  const respostaReserva = await fetch(`${BASE_URL}/bookings`, metodoPOST);

  const conteudoRespostaReserva = await respostaReserva.json();

  inputNome.value = conteudoRespostaReserva.owner_name;
  inputMail.value = conteudoRespostaReserva.owner_email;
  inputIngressos.value = conteudoRespostaReserva.number_tickets;
  consultaId.value = conteudoRespostaReserva.event_id;

  console.log(conteudoRespostaReserva);
};