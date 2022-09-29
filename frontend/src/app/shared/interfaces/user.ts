export interface UserRegister {
  // id: number | null | void,
  username: string,
  password: string,
  email: string,
  cpf: number,
  telefone: number
}

export interface UserLogin {
  email: string,
  password: string,
}
