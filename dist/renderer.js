// node_modules/.pnpm/@harborclient+sdk@0.7.0_@babel+runtime@8.0.0_@codemirror+lint@6.9.7_@codemirror+search@_0434f38fced7bbbb661910cc2ed4015b/node_modules/@harborclient/sdk/dist/runtime/index.js
function registerTheme(hc, theme) {
  const disposable = hc.themes.register(theme);
  hc.subscriptions.push(disposable);
  return disposable;
}

// src/renderer.tsx
function activate(hc) {
  registerTheme(hc, {
    id: "gruvbox",
    title: "Gruvbox Light",
    type: "light",
    colors: {
      surface: "#fbf1c7",
      sidebar: "#f2e5bc",
      "sidebar-section": "#ebdbb2",
      control: "#d5c4a1",
      field: "rgba(0, 0, 0, 0.04)",
      separator: "rgba(0, 0, 0, 0.08)",
      text: "#3c3836",
      "text-secondary": "#504945",
      muted: "#928374",
      accent: "#af3a03",
      selection: "rgba(175, 58, 3, 0.18)",
      danger: "#9d0006",
      warning: "#b57614",
      success: "#79740e"
    }
  });
}
export {
  activate
};
