const API_BASE_URL = 'http://localhost:3000';


async function getReceitas(id = null) {
  let url = `${API_BASE_URL}/receitas`;
  if (id) url += `/${id}`;

  const resposta = await fetch(url);
  if (!resposta.ok) return null;

  return await resposta.json();
}

async function landingPage() {
  const sectionDestaques = document.getElementById('section-cards-receitas');
  const receitas = await getReceitas();

  const receitasDestaque = receitas.filter((receita) => receita['card-receita']);

  let receitasHtml = '<div class="container"><div class="row g-4">';

  receitasDestaque.forEach(function (receita) {
    receitasHtml += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="${receita['imagem']}" class="card-img-top" alt="${receita['nome']}">
          <div class="card-body">
            <h5 class="card-title">${receita['nome']}</h5>
            <p class="card-text">Tempo: ${receita['tempo']}</p>
            <p class="card-text">Categoria: ${receita['categoria']}</p>
          </div>
          <div class="card-footer text-center">
            <a href="detalhes.html?id=${receita['id']}" class="btn btn-ver-receita">Ver Receita</a>
          </div>
        </div>
      </div>
    `;
  });

  receitasHtml += '</div></div>';
  sectionDestaques.innerHTML = receitasHtml;
}

async function carregaDetalhes() {
  const url = new URLSearchParams(window.location.search);
  const idReceita = url.get('id');
  if (!idReceita) return;

  const receita = await getReceitas(idReceita);
  if (!receita) {
    console.error('Receita não encontrada.');
    return;
  }

  const receitaHtml = `
    <article class="row g-4">
      <div class="col-md-4 text-center">
        <h2 class="mb-3" style="font-weight: bolder;">${receita['nome']}</h2>
        <img src="${receita['imagem']}" class="img-fluid rounded shadow-sm" style="max-height: 600px; object-fit: cover;" alt="${receita['nome']}">
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6 mb-3">
            <h5 style="color: #FF730F">Descrição</h5>
            <p>${receita['descricao']}</p>
          </div>
          <div class="col-md-6 mb-3">
            <h5 style="color: #FF730F">Modo de Preparo</h5>
            <p>${receita['modo-preparo']}</p>
          </div>
        </div>
      </div>
    </article>
  `;

  const container = document.getElementById('detalhes-receita');
  if (container) container.innerHTML = receitaHtml;
}

async function Carousel() {
  const carouselIndicators = document.querySelector('#carouselDestaques .carousel-indicators');
  const carouselInner = document.querySelector('#carouselDestaques .carousel-inner');
  if (!carouselIndicators || !carouselInner) return;

  const receitas = await getReceitas();
  const receitasDestaque = receitas.filter((receita) => receita['card-receita']);

  let carouselIndicatorsHtml = '';
  let carouselInnerHtml = '';

  receitasDestaque.forEach((destaque, i) => {
    carouselIndicatorsHtml += `
      <button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>
    `;

    carouselInnerHtml += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <a href="detalhes.html?id=${destaque['id']}">
          <img src="${destaque['imagem']}" class="d-block w-100 carousel-img" alt="${destaque['nome']}">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5 class="text-white">${destaque['nome']}</h5>
          </div>
        </a>
      </div>
    `;
  });

  carouselIndicators.innerHTML = carouselIndicatorsHtml;
  carouselInner.innerHTML = carouselInnerHtml;
}

window.addEventListener('DOMContentLoaded', () => {
  const isIndex = document.body.contains(document.getElementById('section-cards-receitas'));
  const isDetalhes = document.body.contains(document.getElementById('detalhes-receita'));
  const isCarousel = document.getElementById('carouselDestaques') !== null;

  if (isIndex) landingPage();
  if (isDetalhes) carregaDetalhes();
  if (isCarousel) Carousel();
});
