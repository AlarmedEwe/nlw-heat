# Next Level Week Heat

![Projeto React.js](https://github.com/AlarmedEwe/nlw-heat/screenshots/Web-2.png)

Na semana do dia 17 ao dia 25 estive fazendo a **NLW (Next Level Week) Heat** da [Rocketseat](https://www.rocketseat.com.br), um webinário com foco no desenvolvimento do ambiente `JavaScript` de uma das maiores plataformas de ensino de programação que conheço.

Admito que tenho curiosidade de fazer os Webinários do grupo desde a chamada *"Semana Omnistack"*, mas particularmente nunca gostei muito de seguir aulas e tutoriais, tendo por preferência a leitura de fóruns, blogs e documentação. No entanto a metodologia utilizada me surpreendeu e satisfez tudo o que não costumo gostar de video-aulas.

Decidi por seguir as aulas uma vez que tenho focado meus estudos no desenvolvimento mobile com `React Native` e, graças a isso, tenho despertado cada vez mais interesse no ambiente `JavaScript` em paralelo ao ambiente `.NET` (com o qual trabalho).

Nessa semana, trabalhei respectivamente com:
- `Node.js` para fazer uma API com validação de Token e login via GitHub;
- `React.js` para desenvolver uma aplicação web que se comunica com a API enviando e recebendo dados;
- `React Native` para desenvolver uma versão mobile da aplicação; e
- `Elixir`, para desenvolver um analizador e gerar uma núvem com as palavras mais digitadas na aplicação.

Um detalhe pra mim foi o `Elixir`, já que até então nunca tinha sequer ouvido falar da linguagem e a achei super interessante e fiquei curioso para saber mais sobre ela.

## Configurações do projeto

Se você desejar rodar esse projeto na sua máquina, poderá seguir os passos abaixo.

Antes de mais nada, com excessão do projeto em `Elixir`, todo o projeto utiliza o [Node.js](nodejs.org/) para ser executado, logo você precisará tê-lo instalado na sua máquina. Recomendo a versão LTS mais recente.

Junto do `Node`, você já terá instalado o `NPM`, que é o instalador de pacotes do Node. No entanto, recomendo a [instalação do Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) através do comando `npm i -g yarn` (se, assim como eu, você usa Linux, será necessário utilizar o comando `sudo` e executar o comando como `root`).

### Node Heat ou Web

Se você seguiu certinho os passos acima, para executar o servidor `node` ou o projeto em `React.js` só precisará instalar as dependências do projeto através do comando `yarn` ou do comando `npm i` (caso tenha optado por não instalar o `Yarn`) e, em seguida, rodar o comando `yarn dev` ou o comando `npm run dev` do seu terminal dentro da pasta do projeto.

### Mobile

Para executar o projeto em `React Native`, você precisará também ter na sua máquina o [Expo](https://docs.expo.dev/get-started/installation/), que pode ser instalado através do comando `yarn global add expo-cli` ou do comando `npm i -g expo-cli`.

Após isso, será necessário instalar as dependências do projeto através do comando `yarn` ou `npm i` e, em seguida, executar o comando `expo start` do seu terminal dentro da pasta do projeto.

Após isso, no seu terminal deverá aparecer um código QR, que você poderá escanear através do aplicativo Expo Go, disponível tanto para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) quanto para [iOS](https://apps.apple.com/br/app/expo-go/id982107779).

### Tags Cloud

Já para executar o projeto em `Elixir`, você precisará instalar na sua máquina [o compilador do Elixir](https://elixir-lang.org/install.html), o [Phoenix](https://hexdocs.pm/phoenix/installation.html) (disponível através do comando `mix archive.install hex phx_new`) e do [PostgreSQL](https://www.devmedia.com.br/instalacao-e-configuracao-do-servidor-postgresql-no-linux/26184).

Com essas ferramentas, você precisará instalar as dependências do projeto através do comando `mix deps.get` executado dentro do repositório do projeto e, finalmente, poderá executá-lo com o comando `mix phx.server` do seu terminal.

## Screenshots
![Projeto React.JS - Login](https://github.com/AlarmedEwe/nlw-heat/screenshots/Web-1.png)
![Projeto React.JS - Envio de mensagens](https://github.com/AlarmedEwe/nlw-heat/screenshots/Web-2.png)

![Projeto React Native - Splash Screen](https://github.com/AlarmedEwe/nlw-heat/screenshots/Mobile-1.png)
![Projeto React Native - Login](https://github.com/AlarmedEwe/nlw-heat/screenshots/Mobile-2.png)
![Projeto React Native - Envio de mensagens](https://github.com/AlarmedEwe/nlw-heat/screenshots/Mobile-3.png)