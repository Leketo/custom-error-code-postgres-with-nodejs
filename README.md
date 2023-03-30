# NodeJS Product Example Project

This project is a basic example of using NodeJS with Sequelize ORM and PostgreSQL to create a product and handle errors.

#### Database Setup

Before running the project, make sure to set up your database configuration in a `.env` file. Create a new file named `.env` in the root directory of the project and add the following:

```
DB_USER=myuser
DB_PASSWORD=mypass
DB_NAME=product_example
DB_HOST=127.0.0.1
DB_PORT=5432
```

Note: Change the values according to your own configuration.

#### Getting Started

To get started, first clone the repository and then run `npm install` to install the necessary dependencies.

```
git clone https://github.com/your-username/nodejs-product-example.git
cd nodejs-product-example
npm install
```

Next, create a PostgreSQL database named `product_example,` a user named myuser, and grant all privileges on the database to that user. You can use the following commands in your PostgreSQL console to do this:

```
create database product_example;
create user myuser with encrypted password 'mypass';
grant all privileges on database product_example to myuser;
```

#### Running the Project

To create the necessary tables in the database, run the following command:

```
npx sequelize-cli db:migrate
```

This will create the `custom_error_messages` and products tables in the database.

The project has three functions: `raise_custom_error`, `handle_error`, and `create_product`.

`raise_custom_error` function is used to raise custom errors with a specific error code.

`handle_error` function is used to handle any error that occurs in the application.

`create_product` function is used to create a new product in the database.

To test the `create_product` function, run the following command:

```
npm test
```

### Conclusion

This is a simple project that demonstrates how to use NodeJS with Sequelize ORM and PostgreSQL to create a product and handle errors.