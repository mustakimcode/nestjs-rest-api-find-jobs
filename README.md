### Implementing a GraphQL API using Prisma, NestJS, and PostgreSql.

This project involves a simple API with guard implementing CRUD functionalities.

#### Step by step guide
- Node.js installed.
- Then run `npm install -g typescript` to install typescript.

- Install the necessary dependencies:

  ```bash
  cd nestjs-rest-api-find-jobs
  ```

  ```bash
  npm install
  ```
  
 - Copy .env.example and rename to .env
 - change postgres db url to yours
  
  - Create db tables  
  ```bash
  npx prisma migrate dev --name init_user_table
  ```

  
  - Start the project:

  ```bash
  npm run start:dev
  ```

  - Explore the API using Postman from [here](https://api.postman.com/collections/5030292-b41cd798-7fc8-45bd-8414-de0040d8fe66?access_key=PMAT-01GZG9X6RWPCSD5E5TYJP9F20E)
  - Make sure to create user before trying to use this api, like in this image below 
!![image](https://user-images.githubusercontent.com/17559233/235861518-2ff4766b-d1e1-4781-b4db-116534320fe8.png)






