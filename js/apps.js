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
    nome: 'Proposta Técnica',
    resumo: 'Monta a proposta técnico-comercial a partir dos dados do circuito, no padrão '
          + 'da UPIX.',
    url: '',
    estado: 'breve',
    entrada: 'Dados do circuito',
    saida: 'Proposta em .docx / .pdf',
    icone: 'documento',
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
