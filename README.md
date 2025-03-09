# Synopsis

Dynamo is a custom-developed AI web application that utilizes the services of OpenAI and Replicate.

The platform streamlines and secures user authorization using Clerk. It features various services and includes a chatbot integrated using Crisp for real-time communication.

![Dynamo](https://github.com/abrehan2/Dynamo/assets/100872683/7ae6e14c-f4d7-4180-9c98-8d7a962b36e8)

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

