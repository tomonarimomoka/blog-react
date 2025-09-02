
## 環境構築
```bash
sudo apt update
sudo apt install -y curl ca-certificates
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
npm ci
```

## 動作確認
```bash
npm run dev
```
## 記事を新規作成したとき
1. 記事はarticle/で始まるブランチで執筆する
1. 記事が完成したらmainブランチにマージ
1. mainブランチでビルドする
      ```bash
      npm run build
      ```
1. ビルド結果をレンタルサーバにデプロイ