// Dados de cada projeto — preencha os links!
const projetos = [
  {
    imagem: "assets/projetos/loiane_fullwebsite.png",
    titulo: "Loiane Training - Website",
    descricao: "Projeto de conclusão de curso IOS",
    link: "https://website-loiane-training.vercel.app"
  },
  {
    imagem: "assets/projetos/excelencia_fullwebsite.png",
    titulo: "ExcelencIA - Website",
    descricao: "Projeto desenvolvido durante o Bootcamp StartTech na TOTVS",
    link: "https://projeto-excelencia-start-tech.vercel.app"
  },
  {
    imagem: "assets/projetos/clove_fullwebsite.png",
    titulo: "Clove - Website",
    descricao: "Projeto pessoal inspirado na personagem Clove do Valorant",
    link: "https://valorant-clove.vercel.app"
  }
];

const overlay      = document.getElementById("modalOverlay");
const modalImagem  = document.getElementById("modalImagem");
const modalTitulo  = document.getElementById("modalTitulo");
const modalDesc    = document.getElementById("modalDescricao");
const modalLink    = document.getElementById("modalLink");

// Abre o modal com os dados do projeto clicado
function abrirModal(index) {
  const p = projetos[index];
  modalImagem.src       = p.imagem;
  modalImagem.alt       = p.titulo;
  modalTitulo.innerText = p.titulo;
  modalDesc.innerText   = p.descricao;
  modalLink.href        = p.link;

  // Volta o scroll da imagem pro topo
  document.querySelector(".modal__preview").scrollTop = 0;

  overlay.classList.add("ativo");
  document.body.style.overflow = "hidden"; // trava o scroll da página
}

function fecharModal() {
  overlay.classList.remove("ativo");
  document.body.style.overflow = "";
}

// Adiciona o clique em cada .projeto__item
document.querySelectorAll(".projeto__item").forEach((item, index) => {
  item.style.cursor = "pointer";
  item.addEventListener("click", () => abrirModal(index));
});

// Fecha pelo botão X, pelo botão "Fechar" e clicando fora
document.getElementById("modalFechar").addEventListener("click", fecharModal);
document.getElementById("modalFecharBtn").addEventListener("click", fecharModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) fecharModal();
});

// Fecha com a tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});