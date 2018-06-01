# Quasar DApp

Quasar v0.15 DApp boilerplate

Uses injected web3 provider in browser (assuming metamask or similar is installed) and otherwise uses infura as web3 provider (for vanilla browsers or mobile devices).

![screenshot](./src/assets/screenshot3.png)

## Installing / Getting started

## Built With

[Quasar-Framework v0.15](http://quasar-framework.org/)

## Prerequisites

Node 8+
quasar-cli v0.15 (npm install quasar-cli@next)

## Setting up Dev

```shell
git clone https://github.com/RyanHendricks/quasar-dapp.git
cd quasar-dapp/
npm install
quasar dev
```

## Building

### SPA or PWA

```shell
// SPA
quasar build

// PWA
quasar mode -a pwa
quasar build -m pwa
```

### Docker

```bash
docker build --rm -f $/quasar-dapp/Dockerfile -t quasar-dapp:latest test/quasar-dapp
docker run --rm -it -p 8080:8080 quasar-dapp:latest
```
