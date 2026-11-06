const SUPABASE_URL = "https://oamiumfmkkjrnowaummh.supabase.co";

const SUPABASE_KEY = "sb_publishable_1YAgb1SKtCUB6WFCa9uxKg_89nDjo8T"

fetch(SUPABASE_URL + '/rest/v1/barbeiros?select=nome', {
  headers: { apikey: SUPABASE_KEY }
})
.then(resposta => {
  if (!resposta.ok) throw new Error('Erro ' + resposta.status);
  return resposta.json();
})
.then(dados => {
  document.getElementById('feedback').textContent =
    'Supabase ligado! ' + dados.length +
    ' barbeiros encontrados.';
})
.catch(erro => {
  document.getElementById('feedback').textContent =
    'Erro de ligação: ' + erro.message;
});

