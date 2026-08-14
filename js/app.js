/* Monta a grade a partir de FERRAMENTAS (js/apps.js). Sem framework nem build. */

const ICONES = {
  mapa: '<path d="M9 3 3 5.5v15L9 18l6 3 6-2.5v-15L15 6 9 3Z"/><path d="M9 3v15M15 6v15"/>',
  preco: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/>'
       + '<path d="M13.5 12.5h3.2M13.5 15.5h3.2"/>',
  documento: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/>'
           + '<path d="M14 3v5h5M9 13h6M9 17h4"/>',
  formacao: '<path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11.5V17c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5"/>',
};

const CADEADO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
  + 'stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/>'
  + '<path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';

const SETA = '<svg class="seta" width="16" height="16" viewBox="0 0 24 24" fill="none" '
  + 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
  + 'aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const ROTULO_ESTADO = { breve: 'em breve', manutencao: 'em manutenção' };

function icone(chave) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[chave] || ICONES.documento}</svg>`;
}

function cartao(f) {
  // Uma ferramenta sem URL nunca vira link: melhor um cartão claramente inativo do que
  // um link que não leva a lugar nenhum.
  const ativo = f.estado === 'disponivel' && f.url;
  const tag = ativo ? 'a' : 'div';
  const atributos = ativo
    ? ` href="${f.url}" rel="noopener"`
    : ' aria-disabled="true"';
  const selo = ativo ? ''
    : `<span class="selo ${f.estado === 'manutencao' ? 'manutencao' : 'breve'}">${
        ROTULO_ESTADO[f.estado] || 'em breve'}</span>`;

  return `<${tag} class="ferramenta${ativo ? '' : ' indisponivel com-selo'}"${atributos}>
    ${selo}
    <div class="topo">
      <div class="icone">${icone(f.icone)}</div>
      <div>
        <h3>${f.nome}${f.restrito ? `<span class="cadeado" title="Requer senha do time">${CADEADO}</span>` : ''}</h3>
        <p class="resumo">${f.resumo}</p>
      </div>
    </div>
    <div class="fluxo">
      <div class="parte"><span class="rotulo">Você envia</span><span class="valor">${f.entrada}</span></div>
      ${SETA}
      <div class="parte"><span class="rotulo">Recebe</span><span class="valor">${f.saida}</span></div>
    </div>
  </${tag}>`;
}

document.getElementById('ferramentas').innerHTML = FERRAMENTAS.map(cartao).join('');

const disponiveis = FERRAMENTAS.filter((f) => f.estado === 'disponivel' && f.url).length;
document.getElementById('contagem').textContent =
  `${disponiveis} de ${FERRAMENTAS.length} ferramentas no ar`;
