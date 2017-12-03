# Try browser-env

This project is a sample for testing by [AVA](https://github.com/avajs/ava) with [browser-env](https://github.com/lukechilds/browser-env)

# Requirements

- Node.js v8.9~
- yarn 1.3

# Setup

Clone this repository

```sh:
$ git clone https://github.com/h-kanazawa/try-browser-env.git
```

Install dependencies

```sh:
$ cd try-browser-env
$ yarn
```

Build

```sh:
$ yarn build
```

You can access the *dist/index.html* on your browser. If you access the URL `file:///path/to/.../try-browser-env/dist/index.html#testHash`, your browser will show `#testHash`.

# Test

Of course, all tests should be passed.

```sh:
$ yarn test
yarn run v1.3.2
$ ava

  2 passed
✨  Done in 3.29s.
```
