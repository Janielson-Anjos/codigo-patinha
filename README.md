# Código da Patinha - Frontend

## Sobre

Repositório destinado a armazenar e documentar o Front-end da solução desenvolvida para a Problemática apresentada no BootCamp da Atlântico 2024.3.

## Tecnologias Utilizadas

- Vite
- React.js
- Component UI
- Bootstrap

## Execução 

### Pré-requisitos
Node.js e npm - Certifique-se de ter o Node.js e npm instalados. Você pode verificar as versões instaladas executando:

```bash
node -v
npm -v
```

### Passos para Configurar o Projeto

1. Clone o Repositório
Primeiro, clone o repositório na sua máquina local:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

2. Instale as Dependências
Instale as dependências do projeto usando npm:

```bash
npm install
```

3. Configure as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como o URL de conexão com o banco de dados e a porta do servidor. O conteúdo do arquivo .env deve ser semelhante ao exemplo abaixo, as informações do banco e back-end estao no seguinte repositorio - https://github.com/Janielson-Anjos/codigo-patinhas-api -

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
PORT=3000
```

DATABASE_URL: URL de conexão com o PostgreSQL.
PORT: Porta onde o servidor será executado (opcional, padrão é 3000).


4. Inicie o Servidor de desenvolvimento
Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
node serve.js
```

O servidor será iniciado e estará disponível no endereço http://localhost:5173.

### Endpoints
A API principal está disponível em http://localhost:3000/api.
- Endpoint de Adotantes - http://localhost:3000/api/usuario
- Endpoint de Pet - http://localhost:3000/api/pet
- Endpoint de Adocao - http://localhost:3000/api/adocao

### Estrutura do Projeto
src/components/: Contém os componentes reutilizáveis da aplicação.
src/pages/: Contém as páginas principais do projeto.
src/assets/: Recursos estáticos, como imagens.
src/services/: Configuração para integração com APIs e back-end.
src/contexts: Contém o contexto de autenticação.
src/ProtectedRoute: Contém as proteções das rotas, das suas roles.

## Equipe

 | [Janielson Anjos da Silva](https://github.com/Janielson-anjos) |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | 
 | ![Janielson's Photo](https://avatars.githubusercontent.com/u/72242469?v=4) |

## Histórico de Versão

|  Versão  | Data da alteração | Alteração | Responsável | Revisor | Data de revisão |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `1.0` | 29/11/24 | Criação do Front-end | Janielson Anjos | Janielson Anjos | 29/11/24 | 
