// Gerar um e-mail aleatório
export function gerarEmailUnico() {

  const timestamp = Date.now();
  return `user_${timestamp}@exemplo.com`;
}

