# Pizza army

O projeto está atualmente em produção hospedado na vercel: https://pizza-army-wine.vercel.app/

- Página do produto

A rota raiz ficou vazia para um possivel desenvolvimento de uma página inicial, então eu disponibilizei uma variavel de ambiente para setar um redirecionamento default ao entrar na rota raiz.

A rota default em produção foi a página do produto que consta no mockup, sendo possivel adicionar ao carrinho que pode ser acessado ao clicar no icone do canto superior direito, pela rota "/cart" ou adicionando um item novo ao carrinho.

\*O carrinho não está salvando no local storage ou cookies, então ao reniciar a página o carrinho será esvaziado.

- Painel Administrativo

Para acessar o painel administrativo pode clicar no icone de usuário no canto superior direito, ou acessar pela rota "/painel".

\*A tela de login não tem validação nenhuma, pode apenas clicar no botão de entrar.

Na tabela temos a visualização de todos os produtos que podem ser acessados com mais detalhes ao clicar no icone de olho na tabela.

Para criar um novo produto pode clicar no botão "Criar novo produto" da rota "/painel" ou acessar pela rota "/painel/create-product", o upload de imagens está sendo feito no storage da supabase então para funcionar localmente é necessário colocar as variáveis de ambiente corretamente.

Além da disponibilidade na tabela, os produtos estão disponiveis também no select de "Sabor" na página de produto, assim como consta nas instruções do notion.

## Como rodar localmente

1. Com o docker previamente instalado rode o comando a seguir para a inicialização do banco de dados no container.

```bash
docker compose up --build -d
```

2. Com o node previamente instalado rode o comando a seguir para instalar as dependências:

```bash
npm install
```

3. Rode as migrations com o comando a seguir:

```
npx prisma migrate dev
```

4. Crie um arquivo chamado .env na pasta raiz do projeto e preencha corretamente as variáveis de ambiente conforme o arquivo .env.example

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pizza_army?schema=public
NEXT_PUBLIC_SUPABASE_URL= <url_supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY= <supabase_anon_key>
NEXT_PUBLIC_DEFAULT_REDIRECT=/painel

```

5. Agora é só rodar o projeto :D

```
npm run dev
```
