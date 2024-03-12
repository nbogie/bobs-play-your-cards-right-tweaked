# React + Vite

# Installation and running

To install the necessary dependencies

```bash
yarn
```

(Separately, accept vscode's suggestion to install the recommended [extension, ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))

To run the dev server

```bash
yarn dev
```

Then open the browser on the mentioned url (e.g. [http://localhost:5173](http://localhost:5173/))

Then make and save changes to (say) App.jsx and see the page update in the browser immediately on save.

## what is this?

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This was created by neill by running

```bash
yarn create vite my-cool-app --template react
```

...and then he removed and tweaked a few things.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
