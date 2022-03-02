# Rock Lifter
Take a look underneath the rock and check out all the bugs.

![](./planning/img/app.png)

## General Approach
* A restful API written using Spring framework
* The API uses JWT protected routes that interface with a Postgres database
* An Angular frontend makes requests to this API in a contextual fashion.
* That data is presented to the user in a way that makes sense depending on where the user is in the application.

## Delusions of Grandeur 
* Hosted on my VPS
* Persistent auth with a JWT in localStorage
* Third party integration with github
* Third party auth with Auth0

### The struggles
* CORS - it was tough to tell where it was failing. Spring? Chrome? Who?
* Firewalls - I was able to rediscover all the security I implemented on my VPS.
* Styles - learned about Material templates late in the week, it looks like a good solution.
* Angular - there's a lot going on with this framework.


## User Stories
Here is a link to my [User Stories](./planning/UserStories.md).

## Wireframes
Here is a link to my [Wireframes](./planning/WireFrames.md)


## Development Tool Stack
* IntelliJ
* Insomnia
* emacs(Doom)
* BeeKeeper Studio
* Alacritty
* Xmonad
* Google Chrome
* FireFox
* Byobu
* Zsh
* Linux (Manjaro)
* Vim

## Technologies Used
<img height="100" style="display: inline" src="./README/spring-logo.svg" alt=""/>
<img height="100" style="display: inline" src="./README/junit.png" alt=""/>
<img height="100" style="display: inline" src="./README/lombok.png" alt=""/>
<img height="100" style="display: inline" src="./README/postgres.png" alt=""/>
<img height="100" style="display: inline" src="./README/javalogo.png" alt=""/>

* Angular
* Heroku


## API endpoints
| Request Type | URL                          | Request Body      | Request Header | Function                 | 
|--------------|------------------------------|-------------------|----------------|--------------------------|
| GET          | /api/project/{projId}        | None              | None           | Get a specific project   |
| POST         | /api/project                 | title, content    | JPA Token      | Create new project       |
| GET          | /api/project/{id}/issue/{id} | None              | None           | Get a specific issue     |
| POST         | /api/project/{id}/issue      | title, content    | JPA Token      | Create A new issue       |
| PUT          | /api/project/{id}/issue/{id} | title, content    | JPA Token      | Update an existing issue |
----
