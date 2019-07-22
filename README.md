# mini-wp
# mini-wp
## Introduction
Base url is **http://localhost:3000**

## Available endpoints
| url  | http-method  |  request | response  | error-case  | success-case  |   |
|---|--:|---|---|---|---|---|
|/users/register   |POST   |req.body **username, email, password** are **required**   | JSON  |"email" is invalid email   |  register completed |   |
|/users/login   |POST   |req.body **email, password** are **required**   |JSON   |invalid email / password   |Logged In success   |   |
|/articles   |GET   |**TOKEN** is required, mean you must login first   |JSON   |Internal server Error   |  list article owned by logged user |   |
|/articles   |POST   |**TOKEN** is required, mean you must login first   |JSON   |Internal Server Error, Authenticatioan Failed   | successfully create article   |   |
|/articles/:article_id   |DELETE   | token, req.params article_id   |JSON   |Internal Server Error, Authenticatioan Failed   |Article deleted successfully   |   |
|/articles/:article_id   |GET   |token, req.params article_id   |JSON   |Internal Server Error, Authenticatioan Failed   |article displayed in form edit   |   |
|/Articles/:ariticle_id   |PUT   |token, req.params article_id   |JSON   |Internal Server Error, Authenticatioan Failed   |succesfuly update article   |   |
|   |   |   |   |   |   |   |
