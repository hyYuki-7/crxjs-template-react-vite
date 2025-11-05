# React + Vite + CRXJS

このテンプレートは、React と Vite を使った Chrome 拡張機能の開発をすぐに始めるのに役立ちます。CRXJS Vite プラグインが含まれているため、Chrome 拡張機能をシームレスに開発できます。

## Features

- モダンな構文で React
- Vite ビルドツール
- CRXJS クイックプラグイン統合
- Chrome 拡張機能のマニフェスト設定

## Quick Start

1. 依存関係をインストールします:

```bash
npm install
```

2. 開発サーバーを起動します:

```bash
npm run dev
```

3. Chrome を開いて に移動し`chrome://extensions/`、「開発者モード」を有効にして、dist ディレクトリから解凍された拡張機能を読み込みます。from the `dist` directory.

4. 生産用にビルド:

```bash
npm run build
```

## Project Structure

- `src/popup/` - 拡張機能ポップアップUI
- `src/content/` - コンテンツスクリプト
- `manifest.config.js` - Chrome拡張機能マニフェストの設定

## ドキュメント

- [React ドキュメント](https://reactjs.org/)
- [Vite ドキュメント](https://vitejs.dev/)
- [CRXJS ドキュメント](https://crxjs.dev/vite-plugin)

## Chrome拡張機能開発ノート

- Use `manifest.config.js` 拡張機能を設定するために使用します
- CRXJSプラグインはマニフェスト生成を自動的に処理します
- コンテンツスクリプトは、 `src/content/`
- ポップアップUIは `src/popup/`
