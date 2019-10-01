// MODELO DE DADOS PADRAO PARA USUARIOS DO SISTEMA
// CLICA NO APP E new file E DIGITA models/Usuario.ts PARA CRIAR ESSA PARTE
// plro firebase precisa de um email valido e no minimo 6 caracteres
export class Usuario {
  nome = '';
  email = '';
  senha = '';

  get valid(): boolean {
    return this.nome !== '' && this.email !== '' && this.senha !== '';
  }
}
