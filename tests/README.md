# Testes do GraphQL API

Este diretório contém testes para a API GraphQL implementada com GraphQL Yoga e Nexus.

## Estrutura de Testes

- `schema.test.ts`: Testa diretamente o schema GraphQL, sem depender de um servidor HTTP.
  - Usa `yoga.fetch` para executar a query diretamente no schema, sem fazer uma requisição HTTP real
  - Foca em testar a lógica do GraphQL isoladamente

- `http-integration.test.ts`: Testa a API GraphQL em um ambiente próximo ao de produção.
  - Assume que o servidor já está em execução na URL definida em `.env.test`
  - Testa a API fazendo uma requisição HTTP para o endpoint `/api/graphql`
  - Verifica se a API responde corretamente com a resposta esperada

## Configuração de Ambiente

Os testes utilizam variáveis de ambiente definidas no arquivo `.env.test`. Certifique-se de que este arquivo existe na raiz do projeto e contém as seguintes variáveis:

```
# URL do servidor GraphQL para testes de integração
GRAPHQL_URL=http://localhost:3001/api/graphql
```

Você pode copiar o arquivo `.env.example` para `.env.test` e ajustar conforme necessário:

```bash
cp .env.example .env.test
```

## Executando os Testes

Para executar todos os testes:

```bash
pnpm test
```

Para executar os testes em modo de observação (watch mode):

```bash
pnpm test:watch
```

Para executar os testes com a interface gráfica:

```bash
pnpm test:ui
```

## Executar Testes de Integração HTTP

Por padrão, os testes de integração HTTP são pulados para evitar falhas quando o servidor não está em execução. Se você quiser executar esses testes, inicie o servidor em um terminal separado e defina a variável de ambiente `HTTP_TESTS`:

```bash
# Em um terminal, inicie o servidor
pnpm dev

# Em outro terminal, execute os testes com a flag HTTP_TESTS
HTTP_TESTS=true pnpm test
```

## Notas

- Por padrão, apenas os testes do schema são executados, pois não dependem de um servidor em execução.
- Os testes de integração HTTP são pulados por padrão e só são executados quando a variável `HTTP_TESTS=true` é definida.
- Para executar os testes de integração HTTP, certifique-se de que o servidor está em execução na URL especificada em `.env.test`.
