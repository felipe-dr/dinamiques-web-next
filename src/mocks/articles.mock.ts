export const articlesMock = [
  {
    id: 1,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Ana Lima' },
    article: {
      title: 'Estrutura Celular',
      slug: 'estrutura-celular',
      summary: 'Aprenda sobre a estrutura básica das células.',
      readingTime: 15,
      content: `
        <h2>Componentes da Célula</h2>
        <p>A célula é a unidade fundamental da vida e possui várias organelas:</p>
        <ul>
          <li>Núcleo</li>
          <li>Mitocôndrias</li>
          <li>Ribossomos</li>
        </ul>
        <img src="https://picsum.photos/seed/celula/600/480" alt="Estrutura Celular" />
        <p>O núcleo contém o material genético, enquanto as mitocôndrias são responsáveis pela produção de energia.</p>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-30T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-30T14:30:00Z',
      updatedAt: '2023-10-30T14:30:00Z',
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: 2,
    category: { name: 'português', color: '#FF5733' },
    teacher: { name: 'Mariana Costa' },
    article: {
      title: 'Concordância Verbal',
      slug: 'concordancia-verbal',
      summary: 'Entenda as regras da concordância verbal na língua portuguesa.',
      readingTime: 12,
      content: `
        <h2>Regras Básicas</h2>
        <p>A concordância verbal é a harmonia entre o sujeito e o verbo em número e pessoa.</p>
        <img src="https://picsum.photos/seed/portugues/600/480" alt="Concordância Verbal" />
        <p>Exemplos:</p>
        <ul>
          <li>O aluno estuda. (singular)</li>
          <li>Os alunos estudam. (plural)</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: '2023-10-29T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-29T14:30:00Z',
      updatedAt: '2023-10-29T14:30:00Z',
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: 3,
    category: { name: 'matemática', color: '#1B6099' },
    teacher: { name: 'Frederico de Souza' },
    article: {
      title: 'Geometria: Círculo e suas Propriedades',
      slug: 'geometria-circulo',
      summary: 'Conheça as propriedades do círculo na geometria.',
      readingTime: 18,
      content: `
        <h2>Propriedades do Círculo</h2>
        <p>O círculo é uma figura geométrica com diversas propriedades importantes:</p>
        <ul>
          <li>Raio: distância do centro até a borda.</li>
          <li>Diâmetro: duas vezes o raio.</li>
          <li>Área: π vezes o raio ao quadrado.</li>
        </ul>
        <img src="https://picsum.photos/seed/circulo/600/480" alt="Círculo" />
      `,
      highlighImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: '2023-10-28T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-28T14:30:00Z',
      updatedAt: '2023-10-28T14:30:00Z',
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: 4,
    category: { name: 'história', color: '#C70039' },
    teacher: { name: 'Carlos Mendes' },
    article: {
      title: 'A Independência do Brasil',
      slug: 'independencia-do-brasil',
      summary: 'Compreenda o processo de independência do Brasil em 1822.',
      readingTime: 20,
      content: `
        <h2>Contexto Histórico</h2>
        <p>A independência do Brasil foi proclamada em 7 de setembro de 1822.</p>
        <img src="https://picsum.photos/seed/historia/600/480" alt="Independência do Brasil" />
        <p>Principais eventos:</p>
        <ol>
          <li>Chegada da Família Real ao Brasil.</li>
          <li>Conflitos com as autoridades portuguesas.</li>
          <li>Proclamação da independência por Dom Pedro I.</li>
        </ol>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: '2023-10-27T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-27T14:30:00Z',
      updatedAt: '2023-10-27T14:30:00Z',
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: 5,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Ana Lima' },
    article: {
      title: 'Fotossíntese',
      slug: 'fotossintese',
      summary: 'O processo de fotossíntese nas plantas.',
      readingTime: 14,
      content: `
        <h2>O que é Fotossíntese?</h2>
        <p>A fotossíntese é o processo pelo qual as plantas produzem alimento usando luz solar.</p>
        <img src="https://picsum.photos/seed/fotossintese/600/480" alt="Fotossíntese" />
        <p>Reações envolvidas:</p>
        <ul>
          <li>Absorção de luz solar.</li>
          <li>Uso de água e dióxido de carbono.</li>
          <li>Produção de glicose e oxigênio.</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-26T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-26T14:30:00Z',
      updatedAt: '2023-10-26T14:30:00Z',
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: 6,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Roberta Santos' },
    article: {
      title: 'Evolução das Espécies',
      slug: 'evolucao-das-especies',
      summary: 'Compreenda o conceito de evolução e seleção natural.',
      readingTime: 16,
      content: `
        <h2>Teoria da Evolução</h2>
        <p>A evolução das espécies é o processo pelo qual os organismos se transformam ao longo do tempo.</p>
        <img src="https://picsum.photos/seed/evolucao/600/480" alt="Evolução" />
        <p>Principais pontos da teoria:</p>
        <ul>
          <li>Seleção Natural</li>
          <li>Mutação</li>
          <li>Adaptação ao meio ambiente</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-30T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-30T14:30:00Z',
      updatedAt: '2023-10-30T14:30:00Z',
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: 7,
    category: { name: 'português', color: '#FF5733' },
    teacher: { name: 'Mariana Costa' },
    article: {
      title: 'Figuras de Linguagem',
      slug: 'figuras-de-linguagem',
      summary:
        'Explore as principais figuras de linguagem da língua portuguesa.',
      readingTime: 14,
      content: `
        <h2>Principais Figuras de Linguagem</h2>
        <p>As figuras de linguagem enriquecem a comunicação. Algumas delas são:</p>
        <img src="https://picsum.photos/seed/linguagem/600/480" alt="Figuras de Linguagem" />
        <ol>
          <li>Metáfora</li>
          <li>Comparação</li>
          <li>Metonímia</li>
        </ol>
        <p>Exemplo de metáfora: "A vida é uma viagem."</p>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: '2023-10-29T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-29T14:30:00Z',
      updatedAt: '2023-10-29T14:30:00Z',
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: 8,
    category: { name: 'matemática', color: '#1B6099' },
    teacher: { name: 'Frederico de Souza' },
    article: {
      title: 'Estatística: Média, Mediana e Moda',
      slug: 'estatistica-media-mediana-moda',
      summary: 'Entenda os conceitos de média, mediana e moda.',
      readingTime: 19,
      content: `
        <h2>Conceitos Estatísticos</h2>
        <p>Esses três conceitos são fundamentais na análise de dados:</p>
        <img src="https://picsum.photos/seed/estatistica/600/480" alt="Estatística" />
        <ul>
          <li><strong>Média</strong>: soma dos valores dividida pela quantidade.</li>
          <li><strong>Mediana</strong>: valor central em uma lista ordenada.</li>
          <li><strong>Moda</strong>: valor que mais se repete.</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: '2023-10-28T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-28T14:30:00Z',
      updatedAt: '2023-10-28T14:30:00Z',
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: 9,
    category: { name: 'história', color: '#C70039' },
    teacher: { name: 'Carlos Mendes' },
    article: {
      title: 'As Guerras Mundiais',
      slug: 'guerras-mundiais',
      summary: 'Analise os principais eventos das Guerras Mundiais.',
      readingTime: 25,
      content: `
        <h2>Primeira e Segunda Guerra Mundial</h2>
        <p>As Guerras Mundiais foram conflitos que moldaram a história moderna.</p>
        <img src="https://picsum.photos/seed/guerras/600/480" alt="Guerras Mundiais" />
        <p>Principais características:</p>
        <ol>
          <li>Primeira Guerra (1914-1918): Envolveu muitas nações e resultou na queda de impérios.</li>
          <li>Segunda Guerra (1939-1945): Conflito global que resultou em grandes perdas humanas e mudanças políticas.</li>
        </ol>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: '2023-10-27T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-27T14:30:00Z',
      updatedAt: '2023-10-27T14:30:00Z',
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: 10,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Roberta Santos' },
    article: {
      title: 'Biodiversidade e Ecossistemas',
      slug: 'biodiversidade-ecossistemas',
      summary: 'Entenda a importância da biodiversidade nos ecossistemas.',
      readingTime: 20,
      content: `
        <h2>Importância da Biodiversidade</h2>
        <p>A biodiversidade é crucial para a estabilidade dos ecossistemas.</p>
        <img src="https://picsum.photos/seed/biodiversidade/600/480" alt="Biodiversidade" />
        <p>Fatores que afetam a biodiversidade:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Poluição</li>
          <li>Mudanças Climáticas</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-26T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-26T14:30:00Z',
      updatedAt: '2023-10-26T14:30:00Z',
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: 11,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Roberta Santos' },
    article: {
      title: 'Cadeias Alimentares',
      slug: 'cadeias-alimentares',
      summary:
        'Entenda como funcionam as cadeias alimentares nos ecossistemas.',
      readingTime: 17,
      content: `
        <h2>Estrutura das Cadeias Alimentares</h2>
        <p>A cadeia alimentar descreve a transferência de energia entre os organismos.</p>
        <img src="https://picsum.photos/seed/cadeia/600/480" alt="Cadeia Alimentar" />
        <p>Exemplos de níveis tróficos:</p>
        <ul>
          <li>Produtores (plantas)</li>
          <li>Consumidores primários (herbívoros)</li>
          <li>Consumidores secundários (carnívoros)</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-30T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-30T14:30:00Z',
      updatedAt: '2023-10-30T14:30:00Z',
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: 12,
    category: { name: 'português', color: '#FF5733' },
    teacher: { name: 'Mariana Costa' },
    article: {
      title: 'Crase: Uso e Dicas',
      slug: 'crase-uso-e-dicas',
      summary: 'Aprenda quando usar a crase na língua portuguesa.',
      readingTime: 12,
      content: `
        <h2>Quando Usar a Crase</h2>
        <p>A crase é a fusão de duas vogais idênticas. Geralmente ocorre:</p>
        <img src="https://picsum.photos/seed/crase/600/480" alt="Crase" />
        <ul>
          <li>Antes de palavras femininas: "Vou à escola."</li>
          <li>Em locuções: "À medida que..."</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: '2023-10-29T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-29T14:30:00Z',
      updatedAt: '2023-10-29T14:30:00Z',
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: 13,
    category: { name: 'matemática', color: '#1B6099' },
    teacher: { name: 'Frederico de Souza' },
    article: {
      title: 'Equações do Primeiro Grau',
      slug: 'equacoes-primeiro-grau',
      summary: 'Aprenda a resolver equações do primeiro grau.',
      readingTime: 18,
      content: `
        <h2>O que são Equações do Primeiro Grau?</h2>
        <p>Equações do primeiro grau têm a forma ax + b = 0.</p>
        <img src="https://picsum.photos/seed/equacao/600/480" alt="Equação" />
        <p>Exemplo:</p>
        <p>Resolva 2x + 3 = 0:</p>
        <ol>
          <li>2x = -3</li>
          <li>x = -3/2</li>
        </ol>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: '2023-10-28T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-28T14:30:00Z',
      updatedAt: '2023-10-28T14:30:00Z',
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: 14,
    category: { name: 'história', color: '#C70039' },
    teacher: { name: 'Carlos Mendes' },
    article: {
      title: 'A Revolução Francesa',
      slug: 'revolucao-francesa',
      summary: 'Entenda as causas e consequências da Revolução Francesa.',
      readingTime: 22,
      content: `
        <h2>Causas da Revolução</h2>
        <p>A Revolução Francesa, iniciada em 1789, teve diversas causas sociais e políticas.</p>
        <img src="https://picsum.photos/seed/revolucao/600/480" alt="Revolução Francesa" />
        <p>Consequências:</p>
        <ul>
          <li>Fim da monarquia absolutista.</li>
          <li>Declaração dos Direitos do Homem e do Cidadão.</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: '2023-10-27T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-27T14:30:00Z',
      updatedAt: '2023-10-27T14:30:00Z',
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: 15,
    category: { name: 'biologia', color: '#FFC300' },
    teacher: { name: 'Roberta Santos' },
    article: {
      title: 'Ciclo da Água',
      slug: 'ciclo-da-agua',
      summary: 'Aprenda sobre o ciclo da água e sua importância.',
      readingTime: 15,
      content: `
        <h2>Etapas do Ciclo da Água</h2>
        <p>O ciclo da água é essencial para a vida na Terra.</p>
        <img src="https://picsum.photos/seed/cicloagua/600/480" alt="Ciclo da Água" />
        <p>Principais etapas:</p>
        <ul>
          <li>Evaporação</li>
          <li>Condensação</li>
          <li>Precipitação</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: '2023-10-26T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-26T14:30:00Z',
      updatedAt: '2023-10-26T14:30:00Z',
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: 16,
    category: { name: 'português', color: '#FF5733' },
    teacher: { name: 'Mariana Costa' },
    article: {
      title: 'Gêneros Textuais',
      slug: 'generos-textuais',
      summary: 'Explore os diferentes gêneros textuais e suas características.',
      readingTime: 13,
      content: `
        <h2>Tipos de Gêneros Textuais</h2>
        <p>Os gêneros textuais são classificados em diversas categorias.</p>
        <img src="https://picsum.photos/seed/generos/600/480" alt="Gêneros Textuais" />
        <p>Exemplos:</p>
        <ul>
          <li>Artigo de opinião</li>
          <li>Crônica</li>
          <li>Conto</li>
        </ul>
      `,
      highlighImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: '2023-10-29T14:30:00Z',
      isPublished: true,
      createdAt: '2023-10-29T14:30:00Z',
      updatedAt: '2023-10-29T14:30:00Z',
      createdBy: '3',
      updatedBy: '1',
    },
  },
];
