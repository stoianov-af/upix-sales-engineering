/* Catálogo de ferramentas do hub.
 *
 * Única fonte de verdade: para publicar uma ferramenta nova, acrescente um objeto aqui.
 * Nada mais no portal precisa mudar.
 *
 *   nome       título do cartão
 *   resumo     uma frase: o que entra e o que sai
 *   url        endereço do portal ("" enquanto não estiver publicado)
 *   estado     "disponivel" | "breve" | "manutencao"
 *   entrada    o que a pessoa envia
 *   saida      o que ela recebe de volta
 *   icone      chave do SVG em js/app.js
 */

const FERRAMENTAS = [
  {
    id: 'kmz',
    nome: 'Gerador de Mancha KMZ',
    resumo: 'Transforma uma lista de cidades na mancha de cobertura em KMZ, com os '
          + 'polígonos municipais oficiais do IBGE.',
    url: 'https://upix-kmz-dashboard.vercel.app',
    estado: 'disponivel',
    entrada: 'Planilha de cidades (CIDADE / UF)',
    saida: 'KMZ + relatório',
    icone: 'mapa',
  },
  {
    id: 'wholesale',
    nome: 'Wholesale Pricing',
    resumo: 'Precifica uma planilha de atacado: acha os parceiros de cada cidade, busca o '
          + 'menor custo na LPU e aplica as margens.',
    url: 'https://upix-wholesale-portal.vercel.app',
    estado: 'disponivel',
    entrada: 'Planilha de atacado (.xlsx)',
    saida: 'Arquivo de pré-venda + arquivo final',
    icone: 'preco',
    restrito: true,
  },
  {
    id: 'proposta',
    nome: 'Gerador de Propostas',
    resumo: 'Monta a proposta técnico-comercial no padrão da UPIX: reserva o número, '
          + 'consulta a pegada on-net ao vivo e mede as páginas antes de gerar o arquivo.',
    url: '',
    estado: 'breve',
    entrada: 'Cliente, serviços e condições',
    saida: 'Proposta em .html / .pdf',
    icone: 'documento',
    restrito: true,
  },
  {
    id: 'topologia',
    nome: 'Gerador de Topologias',
    resumo: 'Folha de topologia em PDF e bloco do projeto para o sistema interno, a partir de '
          + 'um formulário curto.',
    url: 'https://upix-topology-portal.vercel.app',
    estado: 'disponivel',
    entrada: 'Serviço, pontas, parceiro, BOM e card',
    saida: 'Topologia em PDF + texto do projeto',
    icone: 'documento',
    restrito: true,
  },
  {
    id: 'treinamento',
    nome: 'Treinamento Técnico',
    resumo: 'Material de apoio e trilhas de capacitação para o time comercial sobre os '
          + 'produtos e a infraestrutura.',
    url: '',
    estado: 'breve',
    entrada: 'Tema ou produto',
    saida: 'Trilha e material de apoio',
    icone: 'formacao',
  },
];
