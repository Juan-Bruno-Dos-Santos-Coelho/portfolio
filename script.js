const projetos = [
  { titulo: "Meu primeiro site", descricao: "Página feita com HTML e CSS.", categoria: "site", link: "#" },
  { titulo: "Calculadora-descontos", descricao: "Calculadora de desconto feita em Python.", categoria: "js", link: "https://github.com/Juan-Bruno-Dos-Santos-Coelho/Calculadora-descontos" },
  { titulo: "Calculo-consumo-agua", descricao: "Calculadora de consumo de água feita em Python.", categoria: "js", link: "https://github.com/Juan-Bruno-Dos-Santos-Coelho/consumo-agua" }
];

const lista = document.getElementById("listaProjetos");

projetos.forEach((p) => {
  lista.innerHTML += `
    <div class="col-md-4 projeto" data-categoria="${p.categoria}">
      <div class="card h-100 card-projeto">
        <div class="card-body">
          <h3 class="h5">${p.titulo}</h3>
          <p>${p.descricao}</p>
          <a href="${p.link}" class="btn btn-sm btn-outline-primary">Ver código</a>
        </div>
      </div>
    </div>`;
});

const botoes = document.querySelectorAll(".filtro");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;

    botoes.forEach((b) => {
      b.classList.remove("btn-primary");
      b.classList.add("btn-outline-primary");
    });
    botao.classList.remove("btn-outline-primary");
    botao.classList.add("btn-primary");

    document.querySelectorAll(".projeto").forEach((projeto) => {
      const mostrar = filtro === "todos" || projeto.dataset.categoria === filtro;
      projeto.classList.toggle("d-none", !mostrar);
    });
  });
});