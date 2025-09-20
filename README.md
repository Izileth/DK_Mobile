# DK Mobile

![Icon DK Mobile](assets/images/Icon%20DK%20Mobile.jpg)

O DK Mobile é um aplicativo móvel desenvolvido com React Native e Expo, projetado para oferecer uma experiência de usuário rica e interativa.

## Tabela de Conteúdos

- [Sobre o Projeto](#sobre-o-projeto)
- [Tech Stack](#tech-stack)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Dependências](#dependências)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Sobre o Projeto

Este projeto é um aplicativo móvel que parece incluir funcionalidades como autenticação de usuário (login, cadastro), visualização de conteúdo variado (artigos, vídeos, etc.), perfis de usuário e seções "sobre". A estrutura de pastas sugere uma aplicação bem organizada, separando claramente as responsabilidades entre componentes de UI, lógica de negócio e navegação.

## Tech Stack

As principais tecnologias e bibliotecas usadas neste projeto são:

- **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo:** Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Expo Router:** Sistema de roteamento de arquivos para aplicativos React Native.
- **Supabase:** Backend-as-a-Service para autenticação, banco de dados e mais.
- **NativeWind:** Permite o uso de Tailwind CSS no React Native.
- **Jest:** Framework de testes para JavaScript.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:

```
.
├── assets/               # Imagens, ícones e fontes
├── constants/            # Constantes globais (ex: chaves de API)
├── src/                  # Código-fonte da aplicação
│   ├── app/              # Arquivos de roteamento e telas
│   │   ├── (auth)/       # Telas de autenticação
│   │   ├── (painel)/     # Telas do painel principal
│   │   ├── (tabs)/       # Telas navegadas por abas
│   │   ├── components/   # Componentes reutilizáveis
│   │   └── lib/          # Configuração de bibliotecas (ex: Supabase)
│   ├── context/          # Contextos React (ex: AuthContext, ThemeContext)
│   ├── Keys/             # Chaves de API e segredos
│   └── Styles/           # Estilos globais e temas
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── app.json              # Configurações do projeto Expo
├── package.json          # Dependências e scripts do projeto
└── tsconfig.json         # Configurações do TypeScript
```

## Começando

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd DK_Mobile
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Renomeie o arquivo `src/Keys/keys.txt` para `src/Keys/keys.ts`.
    - Adicione suas chaves do Supabase no arquivo `src/lib/supabase.ts` e outras chaves necessárias.

4.  **Configure os identificadores do pacote:**
    - No arquivo `app.json`, altere os campos `ios.bundleIdentifier` e `android.package` para seus próprios identificadores, se necessário.

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    Isso iniciará o Metro Bundler. Você pode então escanear o QR code com o aplicativo Expo Go em seu dispositivo móvel ou executar em um emulador.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `npm start`: Inicia o servidor de desenvolvimento do Expo.
- `npm run android`: Inicia o aplicativo no emulador ou dispositivo Android.
- `npm run ios`: Inicia o aplicativo no emulador ou dispositivo iOS.
- `npm run web`: Inicia o aplicativo no navegador web.
- `npm test`: Executa os testes com Jest.
- `npm run lint`: Executa o linter para verificar o código.

## Expo Application Services (EAS)

Este projeto está configurado para usar o [Expo Application Services (EAS)](https://expo.dev/eas), que é um conjunto de serviços em nuvem para aplicativos Expo e React Native.

- **EAS Build:** Para criar builds nativos do seu aplicativo para iOS e Android.
- **EAS Update:** Para enviar atualizações over-the-air (OTA) para seu aplicativo.

O ID do projeto EAS está configurado em `app.json` no campo `extra.eas.projectId`.

## Dependências

O projeto utiliza uma variedade de dependências para fornecer suas funcionalidades. As principais são:

- **Produção:**
  - `@react-navigation/*`: Para navegação.
  - `@supabase/supabase-js`: Cliente JavaScript para Supabase.
  - `expo-*`: Diversas bibliotecas do ecossistema Expo.
  - `nativewind`: Para estilização com Tailwind CSS.
  - `react-native-reanimated`: Para animações.

- **Desenvolvimento:**
  - `@types/*`: Definições de tipo para TypeScript.
  - `jest`: Para testes.
  - `tailwindcss`: Para o processamento do Tailwind CSS.
  - `typescript`: Compilador TypeScript.

Para uma lista completa, consulte o arquivo `package.json`.

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor, siga estas etapas:

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/nova-feature`).
3.  Faça commit de suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça push para a branch (`git push origin feature/nova-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
