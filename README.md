# express-typescript

Source code for the **Building REST API with Express, TypeScript** blog post series

## Post Links

1. [Building REST API with Express, TypeScript and Swagger](https://rsbh.dev/blog/rest-api-with-express-typescript)
2. [Building REST API with Express, TypeScript - Part 2: Docker Setup](https://rsbh.dev/blog/rest-api-express-typescript-docker)
3. [Building REST API with Express, TypeScript - Part 3: PostgreSQL and Typeorm](https://rsbh.dev/blog/rest-api-express-postgres-typeorm)
4. [Building REST API with Express, TypeScript - Part 4: Jest and unit testing](https://rsbh.dev/blog/rest-api-express-typescript-jest-testing)

## Build from source

1. Clone the repo

   ```sh
   git clone git@github.com:rsbh/express-typescript.git
   cd express-typescript
   ```

2. Install dependencies.

   ```sh
   npm install
   ```

3. Build the production server.

   ```sh
   npm build
   ```

4. Run the server.
   ```sh
   npm start
   ```

## Build Docker image locally

```sh
docker build -t express-typescript .
```

## Run tests

```sh
npm test
```
