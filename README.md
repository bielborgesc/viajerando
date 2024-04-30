# Viajerando-Project
Viajerando é um site de compra e reserva de viagem através de roteiros.

Tem a capacidade de criar novos roteiros e destinos.

Lista, edita e exclui os destinos existentes.

Lista, edita e exclui os roteiros existentes.

O usuário terá que estar logado para acessar as funcionalidades do sistema como, criar roteiros, listar seus roteiros, editar seus roteiros, excluir roteiro.

Os destinos são cadastrados por administrador interno

 

Relacionamento 1 para N

Usuário Cria no mínimo 0 e no máximo n Roteiro e um Roteiro é criado por um único usuário:

Tabela: Roteiro

id - (PK) int

precoAcumulado - double

dataInicial - date

dataFinal - date

idUser - (FK de user) int

 

Tabela: Usuario

username - string

email – string

id – (PK) int

cpf - string

telefone - string

 

Relacionamento N para N

Roteiro possui no mínimo 0 e no máximo n Destinos e Destinos pode estar em 0 ou n Roteiros

 

Tabela: Destino

id - (PK) int

cidade - string

estado - string

preco - double

emabrgue - string

descricao - string

 

Tabela Possui

fkRoteiro - int

fkDestino -int

 

Colection dos EndPoints está em um arquivo aqui dentro da pasta, ela pode ser submetida no aplicativo POSTMAN onde será possível ver todas as rotas criadas. Ela também está disponível no link:  https://www.getpostman.com/collections/625aad9fbd4a4937907c.

Repositório Frontend GitHub: https://github.com/bielborgesc/front-end-viajerando.
Repositório Backend GitHub: https://github.com/bielborgesc/backend-viajerando.

*Para rodar o projeto primeira deve se abrir o Backend na IDE Intelij e executar o arquivo DemoApplication que começará a rodar na porta 8080.

*Depois é necessário abrir o Frontend na IDE Visual Studio o Code, abrir seu terminar e com o Node instalado na máquina executar o comando “npm install” para instalar as dependências do angular na sua máquina. Assim que finalizar a instalação é só digitar o comando “npm start” e a aplicação irá começar a rodar na porta 4200 do seu localhost.

*Com os dois serviços rodando você irá conseguir realizar os comandos da plataforma.
