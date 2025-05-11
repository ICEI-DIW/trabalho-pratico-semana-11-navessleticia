const dados = {
    "receitas": [
      {
        "id": 1,
        "nome": "Ovo de Páscoa recheado com creme de brownie",
        "descricao": "Descrição: Essa deliciosa receita de ovo de Páscoa recheado com creme de brownie combina a suavidade do chocolate com a cremosidade do brownie. Perfeito para quem quer inovar na Páscoa e oferecer uma sobremesa irresistível!",
        "tempo": "30 min",
        "modo-preparo": "Derreta o chocolate ao leite e o chocolate branco em banho-maria. Misture o creme de leite e bata até formar uma ganache cremosa. Prepare o brownie: derreta a manteiga e adicione o açúcar, os ovos, a farinha de trigo, o chocolate em pó e o fermento. Misture bem e leve ao forno por cerca de 20 minutos. Corte o brownie em pedaços pequenos e reserve. Modele a casca do ovo de Páscoa com o chocolate derretido. Coloque o brownie picado dentro da casca do ovo, cubra com mais ganache de chocolate e decore a gosto.",
        "imagem": "assets/img/ovo-de-pascoa.png",
        "categoria": "doce",
        "card-receita": false
      },
      {
        "id": 2,
        "nome": "Risoto de camarão com toque de limão siciliano",
        "descricao": "Um risoto sofisticado e delicioso, que traz o frescor do limão siciliano combinado com o sabor do camarão. Ideal para uma refeição especial e cheia de sabor.",
        "modo-preparo": "Cozinhe o arroz arbóreo em uma panela com caldo de legumes ou peixe, mexendo sempre. Em outra frigideira, refogue os camarões no azeite com alho e cebola. Acrescente o arroz já cozido à frigideira com os camarões e adicione o limão siciliano (suco e raspas). Misture tudo, adicione queijo parmesão ralado e, se necessário, ajuste o sal. Sirva imediatamente, decorado com mais raspas de limão e folhinhas de manjericão.",
        "tempo": "45 min",
        "imagem": "assets/img/risoto.jpg",
        "categoria": "salgado",
        "card-receita": false
      },
      {
        "id": 3,
        "nome": "Raviolli de espinafre com ricota ao molho branco",
        "descricao": "Essa receita de ravioli recheado com espinafre e ricota, servido com um molho branco cremoso, é uma opção deliciosa e fácil de preparar para um jantar leve e nutritivo.",
        "modo-preparo": "Prepare a massa de ravioli, misturando farinha de trigo, ovos e água. Abra a massa e corte os quadrados. Para o recheio, refogue o espinafre até murchar, depois misture com a ricota e tempere com sal, pimenta e noz-moscada. Recheie os quadrados de massa com o espinafre e a ricota, formando os raviólis.Cozinhe os raviolis em água salgada até que subam à superfície.Para o molho branco, derreta manteiga, adicione farinha de trigo e, aos poucos, o leite, mexendo constantemente até formar um molho cremoso.Sirva os raviolis com o molho branco por cima e queijo parmesão ralado.", 
        "tempo": "50 min",
        "imagem": "assets/img/raviolli.jpg",
        "categoria": "salgado",
        "card-receita": false
      },
      {
        "id": 4,
        "nome": "Avocado Toast",
        "descricao": "Essa receita de avocado toast é uma opção simples e deliciosa para um café da manhã ou lanche saudável.",
        "modo-preparo": "Torre duas fatias de pão integral e, enquanto isso, amasse o abacate com um garfo. Tempere com sal, pimenta, azeite e suco de limão. Espalhe a mistura de abacate sobre as fatias de pão torrado e finalize com sementes de chia ou tomate-cereja. Sirva imediatamente.",
        "tempo": "10 min",
        "imagem": "assets/img/avocado.jpg",
        "categoria": "salgado",
        "card-receita": true
      },
      {
        "id": 5,
        "nome": "Panqueca Americana",
        "descricao": "As panquecas americanas são fofas e deliciosas, perfeitas para o café da manhã ou lanche.",
        "modo-preparo": "Em uma tigela, misture farinha de trigo, fermento em pó, açúcar e sal. Em outra tigela, bata o leite, ovo e manteiga derretida. Misture os ingredientes secos com os líquidos até obter uma massa homogênea. Aqueça uma frigideira antiaderente e coloque porções da massa, formando círculos. Cozinhe por 2-3 minutos de cada lado. Sirva com mel, frutas ou calda de chocolate.",
        "tempo": "20 min",
        "imagem": "assets/img/panqueca.jpg",
        "categoria": "doce",
        "card-receita": true
      },
      {
        "id": 6,
        "nome": "Cheesecake de Frutas Vermelhas",
        "descricao": "O cheesecake de frutas vermelhas é uma sobremesa cremosa e saborosa, com um toque refrescante das frutas.",
        "modo-preparo": " Triture biscoitos de maisena e misture com manteiga derretida para formar a base do cheesecake. Pressione a mistura em uma forma de fundo removível e leve à geladeira. Para o recheio, bata cream cheese, açúcar e ovos até obter uma mistura lisa. Despeje sobre a base e asse em forno pré-aquecido a 180°C por 40 minutos. Deixe esfriar e cubra com uma calda de frutas vermelhas. Sirva gelado.",
        "tempo": "2h",
        "imagem": "assets/img/cheesecake.jpg",
        "categoria": "doce",
        "card-receita": true
      },
      {
        "id": 7,
        "nome": "Poke",
        "descricao": " tradicional prato havaiano à base de peixe cru.",
        "modo-preparo": "Em um bowl, comece pela base de arroz japonês cozido. Acomode o salmão em cubos, a cebola roxa, o pepino, a cenoura e o abacate por cima do arroz, e regue tudo com o shoyu. Finalize com a cebolinha e o gergelim preto e branco.",
        "tempo": "30min",
        "imagem": "assets/img/poke.jpg",
        "categoria": "salgado",
        "card-receita": false
      }
    ]
  };
  
  function landingPage() {
    const sectionDestaques = document.getElementById('section-cards-receitas');
    const receitasDestaque = dados['receitas'].filter((receita) => receita['card-receita']); 
  
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
  
  function carregaDetalhes() {
    const url = new URLSearchParams(window.location.search);
    const idReceita = url.get('id');
    if (!idReceita) return;
  
    const todasReceitas = dados['receitas'];
    const receita = todasReceitas.find((r) => r['id'] == idReceita);
  
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
    if (container) {
      container.innerHTML = receitaHtml;
    }
  }
  
  function Carousel() {
    const carouselIndicators = document.querySelector('#carouselDestaques .carousel-indicators');
    const carouselInner = document.querySelector('#carouselDestaques .carousel-inner');
  
    if (!carouselIndicators || !carouselInner) return;
  
    const receitasDestaque = dados['receitas'].filter((receita) => receita['card-receita']);
  
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