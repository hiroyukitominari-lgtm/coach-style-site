# COACH STYLE Official Site

COACH STYLEの公式サイトです。Vercelに静的サイトとしてデプロイできます。

## 構成

- `index.html`: ページ本体
- `styles.css`: デザイン
- `script.js`: モバイルメニューなどの動作
- `assets/`: 画像素材
- `scripts/build.mjs`: Vercel用のビルド処理
- `vercel.json`: Vercelのデプロイ設定

## ローカル確認

```bash
npm run dev
```

ブラウザで `http://127.0.0.1:4173` を開きます。

## ビルド

参照切れチェックだけを行う場合:

```bash
npm run check
```

Vercelに出す公開用ファイルを作る場合:

```bash
npm run build
```

公開用ファイルは `public/` に出力されます。

```bash
npm run preview
```

`public/` の内容をローカルで確認できます。

## Vercel設定

Vercelでは以下の設定でデプロイできます。

- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `public`
- Install Command: `npm install`

このサイトはビルド時に `index.html`、`styles.css`、`script.js`、`assets/` を `public/` へコピーし、Vercelは `public/` を公開します。

Vercelで404になる場合は、Project SettingsのBuild & Development Settingsで以下を確認してください。

- Root Directory: このプロジェクトフォルダ
- Output Directory: `public`
- Build Command: `npm run build`

## 環境変数

現在、このサイトに必須の環境変数はありません。

公式LINEのURLはHTML内に直接設定しています。

```text
https://lin.ee/W97OH5FE
```

将来、問い合わせフォーム、CMS、アクセス解析などを追加する場合は、VercelのProject Settingsから環境変数を追加してください。
