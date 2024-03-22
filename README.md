# リポジトリについて
jamstackを試すためのサンプルリポジトリです。  
SvelteKitのadapter-staticを使用しています。

jamstackを端的に説明した図
![jamstackとは](https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/d15fa6674ef8481a968963c7b24dc4ba/figure4.png)
出典 https://blog.microcms.io/jamstack-introduction/

## 環境構築
1. リポジトリをcloneする
2. `docker compose build`でイメージを構築する
3. `make up`でコンテナ起動する

## ビルド&結果の確認
1. `make app`でコンテナに侵入する
2. `npm run build`でビルド
3. `npm run preview`で結果を確認できるようにする
4. http://localhost:4173/ にアクセス！