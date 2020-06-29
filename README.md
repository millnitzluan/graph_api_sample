<h1 align="center">Welcome to Graph API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/millnitzluan/graph_api_sample#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/millnitzluan/graph_api_sample/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/millnitzluan/graph_api_sample/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/millnitzluan/graph_api_sample" />
  </a>
  <a href="https://twitter.com/millnitzluan" target="_blank">
    <img alt="Twitter: millnitzluan" src="https://img.shields.io/twitter/follow/millnitzluan.svg?style=social" />
  </a>
</p>

> just studying Node + Typescript aka Java 2.0

### 🏠 [Homepage](https://github.com/millnitzluan/graph_api_sample#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

```sh
curl -X POST --data "name=first"  http://localhost:3000/nodes

curl -X POST --data "name=second"  http://localhost:3000/nodes

curl -X POST --data "name=third"  http://localhost:3000/nodes

curl -X POST --data "fromId=1" --data "toId=2"  http://localhost:3000/links

curl -X POST --data "fromId=2" --data "toId=3"  http://localhost:3000/links

curl http://localhost:3000
graph TD;
1[first];
2[second];
3[third];
1 --> 2;
2 --> 3;
```

## Run tests

```sh
npm run test
```

## TO DO

- [x] Implement sample graph api.
- [ ] Tests.
- [ ] Interface to create graph.
- [ ] Implements Repository, Services.

## Author

👤 **Luan Millnitz**

* Twitter: [@millnitzluan](https://twitter.com/millnitzluan)
* Github: [@millnitzluan](https://github.com/millnitzluan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/millnitzluan/graph_api_sample/issues). You can also take a look at the [contributing guide](https://github.com/millnitzluan/graph_api_sample/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Luan Millnitz](https://github.com/millnitzluan).<br />
This project is [ISC](https://github.com/millnitzluan/graph_api_sample/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
