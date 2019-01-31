# Next.JS Boilerplate [![CircleCI](https://circleci.com/gh/mrisoli/nextjs-boilerplate.svg?style=svg)](https://circleci.com/gh/mrisoli/nextjs-boilerplate)

This is a Next.js boilerplate code including:

- Typescript for type safety
- Jest for tests
- TSLint for linting
- Prettier for code formatting
- Styled-components for styling and theming along with polished
- Docker

## How to use

### Install dependencies

```bash
npm i
# or
yarn
```

Or build with docker:

```bash
# build
docker build -t next-app .
```

### Run it locally

Development server:

```bash
npm run dev
# or
yarn dev
```

Run it with docker:

```bash
docker run --rm -it \
  -p 3000:3000 \
  next-app
```

### Deployment:

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)) with docker

```bash
now --docker
```
