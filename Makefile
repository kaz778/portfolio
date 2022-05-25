.PHONY: build-image shell install build serve

DIR=C:\Users\hara\dev\portfolio

# dockerのimageを作る
build-image:
	docker build -t web-ui .

# dockerコンテナを立ち上げて、中に入る
shell:
	docker run -v ${DIR}:/src:cached --rm -it web-ui bash

# yarn installを実行
install:
	docker run -v ${DIR}:/src:cached --rm -it web-ui yarn install

# デプロイ
build:
	docker run -v ${DIR}:/src:cached --rm -it web-ui yarn build

# localhostにサーバーを立ち上げる
serve:
	docker run -v ${DIR}:/src:cached -p8080:8080 --rm -it web-ui yarn serve

run-%:
	docker run -v ${DIR}:/src:cached --rm -it web-ui yarn run $*
