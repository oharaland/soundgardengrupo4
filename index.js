//variáveis globais
const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const listaDeEventos = [{
  id: 1,
  data: '05/03/2022 20:00',
  titulo: 'Festival Coala',
  atracoes: 'Miley Cyrus, Liniker, Smashing Pumpkins',
},
{
  id: 2,
  data: '05/03/2022 20:00',
  titulo: 'Indie Fest',
  atracoes:'Arctic Monkeys, The Kooks, Hiatus Kaiyote',
},
{
  id: 3,
  data: '05/03/2022 20:00	',
  titulo: 'Bourbon Jazz Festival',
  atracoes:'Esperanza Spalding, Zimbo Trio, Serial Funkers',
}
];

//função adicionar novo evento

function novoEvento (
  nome,
  atracoes,
  descricao,
  data,
  lotacao,
){
   var idNovoEvento = listaDeEventos.length + 1 
   const novoEventoAdd = {
    id: idNovoEvento,
    nome,
    atracoes,
    descricao,
    data,
    lotacao,
   }
  listaDeEventos.push(novoEventoAdd),
  console.log(`Novo evento ${nome} inserido com sucesso!`)
}
/*teste efetuado para confirmar o código, principalmente no que se refere à inserção automática do Id:
novoEvento ('25/03/2022 20:00', 'Universo Paralelo', 'Linn da Quebrada, Arthur Aguiar, Thiago Abravanel'
)

console.log(listaDeEventos[3].id)
*/
