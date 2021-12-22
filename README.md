# 簡易仕様書サンプル
## 動作させる場合は必ず下記のURLのダウンロードをお願いします。
- Chrome拡張機能:https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai/related?hl=ja

### 作者
岩本 泰直
### アプリ名
ぐるまっぷ

#### コンセプト
食べに行きたいお店がすぐ見つかる。

#### こだわったポイント
一覧をBootstrapを使ってカード上に表示させた

### 公開したアプリの URL（Store にリリースしている場合）


### 該当プロジェクトのリポジトリ URL（GitHub,GitLab など Git ホスティングサービスを利用されている場合）
https://github.com/naonao-program/gurumap

## 開発環境
### 開発環境
Mac OS BigSur var11.6


### 開発言語
Ruby 2.6.5

### フレームワーク
Ruby on Rails 6.0.0


## 動作対象端末・OS
### 動作対象OS
確認できたのは
Mac OS BigSur var11.6

## アプリケーション機能の説明やGIF
1.検索画面から検索範囲を指定し、検索ボタンを押すと位置情報を取得し近くのお店が一覧で最大100件見ることができる
[![Image from Gyazo](https://i.gyazo.com/22174a3f3b1891e3ec7c73c2586813cd.gif)](https://gyazo.com/22174a3f3b1891e3ec7c73c2586813cd)

2.一覧を表示させると下部にページネーションが出てきてページネーションができる
[![Image from Gyazo](https://i.gyazo.com/e9155fef0fbdc6693b8f8244ac621f20.gif)](https://gyazo.com/e9155fef0fbdc6693b8f8244ac621f20)

3.一覧からお店のカードをクリックするとお店の詳細ページに飛べる
[![Image from Gyazo](https://i.gyazo.com/c06978cfbb660dfd68cbec2254ca85e8.gif)](https://gyazo.com/c06978cfbb660dfd68cbec2254ca85e8)

### 機能一覧
- レストラン検索：ホットペッパー グルメサーチ APIを使用とGeolocation APIを使って現在地周辺の飲食店を検索する。
- レストラン情報取得：ホットペッパー グルメサーチ APIを使用して、飲食店の詳細情報を取得する。

### 画面一覧
- 検索画面 ：条件を指定してレストランを検索する。
- 一覧画面 ：検索結果の飲食店を一覧表示する。
- 詳細画面 : 一覧画面で選択したお店の詳細を表示。

### 使用しているAPI,SDK,ライブラリなど
- ホットペッパーグルメサーチ

- Chrome拡張機能:https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai/related?hl=ja ←こちらのダウンロードをお願いします。

- Bootstrap
- gon
- dotenv-rails
- font-awesome-sass


こちらのダウンロードをお願いします。

# 不具合
- Chrome拡張機能CORSを導入しないと、動作しないので導入の方お願いします。

- 検索範囲を---にした状態で検索ボタンを押すと検索ができてしまう点

- 詳細画面に遷移した状態で、ユーザーが移動し、更新をすると詳細の内容が変わってしまう点
# 今後実装したい機能

- 詳細ページでお店の場所をGoogleMap上にピンを立てたい

- 位置情報だけなく、いろんな条件で検索できるようにしたい