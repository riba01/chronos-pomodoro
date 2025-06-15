# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# ⏳ Chronos Pomodoro

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/riba01/chronos-pomodoro)
[![License](https://img.shields.io/github/license/riba01/chronos-pomodoro.svg)](LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/riba01/chronos-pomodoro.svg)](https://github.com/riba01/chronos-pomodoro/commits/main)
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Made with](https://img.shields.io/badge/Made%20with-React-blue?logo=react)](https://reactjs.org/)
[![Made with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)

---

## 🎯 Sobre o projeto

**Chronos Pomodoro** é uma aplicação web de produtividade desenvolvida com
**React + TypeScript + Vite**, que auxilia na gestão de tempo utilizando a
técnica de **Pomodoro** — ciclos de foco e descanso para melhorar sua
concentração e eficiência.

---

## 🚀 Tecnologias

- ⚛️ [React](https://reactjs.org/)
- ⌨️ [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 CSS Modules
- ✅ ESLint + Prettier
- 📦 npm

---

## 🖥️ Preview

![Preview](./public/vite.svg)
<!-- Você pode substituir pela imagem real do app futuramente -->

---

## 🔥 Funcionalidades

- 🕓 Temporizador Pomodoro
- ⏸️ Pausa curta e longa
- 🔔 Alertas sonoros ao finalizar ciclos
- 📊 Contagem de ciclos produtivos
- 💡 Interface minimalista, limpa e responsiva

---

## 📦 Instalação e execução local

### ⚙️ Pré-requisitos:

- Node.js >= 18
- npm >= 9 ou pnpm/yarn

### 💻 Clone o repositório

```bash
git clone git@github.com:riba01/chronos-pomodoro.git
cd chronos-pomodoro
```
