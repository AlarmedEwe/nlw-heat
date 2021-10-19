# Node Heat

## Configurações
Para configurar o `GitHub OAuth`, acesse [https://github.com/settings/developers](https://github.com/settings/developers) e clique em [New OAuth App], insira as informações requeridas, clique em [Register application] e salve um arquivo `.env` no diretório raiz do projeto com as variáveis `GITHUB_CLIENT_SECRET=chave_do_github` e `GITHUB_CLIENT_ID=id_do_cliente`.

É necessário também adicionar ao arquivo `.env` a variável `JWT_SECRET=alguma_chave_aleatoria`.