# HTTP CLIENT SERVICE

A simple service for communicating with a server over the HTTP protocol, in order to download or upload json data.

## Tech

- ReactJS
- TypeScript
- axios npm
- Fetch API
- AbortCancel
- Fake Online REST API for Testing:

1. https://jsonplaceholder.typicode.com/
2. https://gorest.co.in/public-api

## The HTTP client service offers the following major features:

- perfom HTTP requests using such methods as GET, POST, PUT, PATCH, DELETE
- request and response interception
- canceling useless request with canselToken and AbortController
- stringify an object into a URL with a query string
- error handling;

This service is implemented in two styles:

1. in style Object-oriented programming (OOP) using axios npm - branch **OOP-option**
2. in functional style using Fetch API and React Hooks - branch **FP-option**

## Get the Source Code

Clone the repository using the following command:

```
$ git clone git@git...
```

## Switch to one of the 2 branches: OOP-option | FP-option

```
$ git checkout OOP-option
```

OR

```
$ git checkout FP-option
```

## Dependencies

Install dependencies:

```
$ yarn
```

## Developing

Starting development:

```
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
