# New Year Application

- [New Year Application](#new-year-application)
  - [Description](#description)
  - [How to use](#how-to-use)
    - [Development server](#development-server)
    - [Build](#build)
    - [Needed configuration](#needed-configuration)

## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

With this application New Year's Greetings can be sent to family or friends only with a simple URL and code


## How to use

### Development server

Start the server:

`npm run start` 

Navigate to the server:

`http://localhost:4200/`

The application will automatically reload if you change any of the source files.

### Build

Build the application:

`npm run build`
 
Find the generated build at:

`dist/new-year`

### Needed configuration

You must create a `Greetings.json` file with the follow format:

```json
[
    {
        "name": "Person to greet",
        "message": "A message to be displayed"
    }
]
```

When this file will be ready you shoud generate the MD5 code of the name and then call your page in this way:

`{$schema}://{$host}/?code={$Your_MD5_code}`