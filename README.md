# Next.JS Boilerplate [![CircleCI](https://circleci.com/gh/mrisoli/nextjs-boilerplate.svg?style=svg)](https://circleci.com/gh/mrisoli/nextjs-boilerplate) [![codecov](https://codecov.io/gh/mrisoli/nextjs-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/mrisoli/nextjs-boilerplate)

## Motivation

I am an avid user of [Next.js](https://github.com/zeit/next.js), their repo contains tons of useful [examples](https://github.com/zeit/next.js/tree/canary/examples) for integarting with isolated tooling or features, often I spent a lot of time glueing together different tooling in what ended up being a tedious setup process, so I created this boilerplate including:

- Typescript for type safety
- Jest for tests
- TSLint for linting
- Prettier for code formatting
- Styled-components for styling and theming along with polished
- Docker
- Storybook
- circleci config
- [percy](https://percy.io) for visual snapshot testing
- [codecov](https://codecov.io) for code coverage reports

## How to use

### node version

node version is defined at the `.nvmrc` file and can be loaded using `nvm` by running `nvm use` command

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

### Tests

```bash
npm run test
# or
yarn test
```

### storybook

```bash
npm run storybook
# or
yarn storybook
```

### Deployment:

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)) with docker

```bash
now --docker
```

### Upcoming

- apollo and graphql setup
- redux for state management
