# Synopsis

Dynamo is a custom-developed AI web application that utilizes the services of OpenAI and Replicate. It is built on Next.js using TypeScript and Shadcn. The application features various services and has a chatbot integrated using Crisp for real-time communication.

## Prerequisites

**Node version 18.x.x**

## Cloning the repository

```shell
git clone https://github.com/abrehan2/Dynamo.git
```

## Install packages

```shell
npm i
```

## Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
NEXT_PUBLIC_CLERK_SIGN_IN_URL =
NEXT_PUBLIC_CLERK_SIGN_UP_URL =
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL =
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL =
OPEN_AI =
REPLICATE_AI =
```

## Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `lint`          | Checks for warnings or errors            |


## License

This project is licensed under the [MIT License](LICENSE).

The MIT License (MIT) is a permissive open-source license that allows for the use, modification, and distribution of this software. Feel free to use the code in this project for your own purposes, subject to the terms of the MIT License.

