## category

network

## titles

Cross-Origin Resource Sharing
CORS

## description

今見ている Web サイトに別オリジンのサイトから HTTP(S)でデータを読み込もうとすると、エラーになる（Same-Origin Policy）  
異なるオリジンへの HTTP リクエストは可能だが、その結果の取得は不可能  
これをアクセス可能にする仕組みが CORS

### 使い方

レスポンスヘッダーの Access-Control-Allow-Origin フィールドに許可したいドメインを追加すれば良い  
`*`で全許可できるワイルドカードも使える

Cookie も許可したい場合は Credentials の設定も必要  
ただし、Access-Control-Allow-Origin フィールドにワイルドカードが使えなくなる

以下の 3 つに当てはまる場合、Preflight request として、OPTIONS リクエストを行うことが定められている

1. GET, POST, HEAD 以外である
1. リクエストヘッダーに Accept, Accept-Language, Content-Language, Content-Type 以外のフィールドが含まれている
1. リクエストヘッダーの Content-Type フィールドに application/x-www-form-urlencoded, multipart/form-data, text/plain 以外の内容が指定されている
