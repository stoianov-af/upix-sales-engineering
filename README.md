# UPIX · Sales Engineering

Página índice das ferramentas do time de Sales Engineering. Cada ferramenta é um portal
independente; o hub só aponta para elas e diz, sem precisar abrir, o que entra e o que sai.

Site estático — sem backend e sem passo de build, igual ao portal Criar Mancha.

## Estrutura

```
index.html            página única
css/upix-tokens.css   sistema visual compartilhado com os portais
css/hub.css           componentes do índice
js/apps.js            catálogo de ferramentas  ← é aqui que se mexe
js/app.js             monta a grade a partir do catálogo
assets/               logo e favicon UPIX
```

## Adicionar ou publicar uma ferramenta

Tudo acontece em **`js/apps.js`**. Para publicar uma ferramenta, preencha a `url`; para
criar uma nova, acrescente um objeto:

```js
{
  id: 'proposta',
  nome: 'Proposta Técnica',
  resumo: 'Uma frase sobre o que a ferramenta resolve.',
  url: 'https://proposta-tecnica.vercel.app',   // '' enquanto não estiver publicada
  estado: 'disponivel',                          // disponivel | breve | manutencao
  entrada: 'Dados do circuito',                  // o que a pessoa envia
  saida: 'Proposta em .docx / .pdf',             // o que ela recebe
  icone: 'documento',                            // mapa | preco | documento | formacao
  restrito: true,                                // opcional: mostra o cadeado
}
```

Um cartão **sem `url` nunca vira link** — aparece esmaecido com o selo *em breve*, então
não existe link morto para alguém descobrir clicando. O contador da topbar (`X de Y
ferramentas no ar`) se atualiza sozinho.

Ícones novos entram no objeto `ICONES` em `js/app.js` (SVG de 24×24, traçado, sem preenchimento).

## Estado atual

| Ferramenta | Estado | Projeto |
|---|---|---|
| Gerador de Mancha KMZ | pronto, **falta a URL** | `../Dashboard KMZ` |
| Wholesale Pricing | pronto, **falta a URL** | `../upix-wholesale-portal` |
| Proposta Técnica | a fazer | — |
| Treinamento Técnico | a fazer | — |

As duas primeiras já existem e funcionam; só não foram publicadas na Vercel ainda. Assim
que tiverem URL, preencha o campo `url` e elas passam a aparecer como disponíveis.

## Rodar localmente

```bash
python3 -m http.server 8010     # http://localhost:8010
```

## Publicar (GitHub + Vercel)

Site estático, sem build:

1. Push desta pasta para um repositório.
2. Vercel: _Add New… → Project_ → importar. Framework Preset **Other**, Build Command
   vazio, Output Directory vazio.
3. Aponte o domínio do time para este projeto — ele é a porta de entrada.

## Design

`css/upix-tokens.css` é o mesmo arquivo dos portais (tema escuro UPIX: `--bg #0A0A0F`,
`--accent #1F7CFF`, cartões, botões, topbar). Ao mudar o sistema visual, altere-o aqui e
copie para os portais — ou, melhor, publique-o em um só lugar e referencie.

O hub **não** tem senha: ele só lista ferramentas e não expõe dado nenhum. A proteção fica
em cada portal — o Wholesale Pricing, por exemplo, pede a senha do time, e o cartão mostra
um cadeado avisando disso antes de a pessoa clicar.
