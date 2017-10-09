<img alt="Crescer" src="https://pedrorohr.github.io/crescer-cwi/assets/img/logo-cwi-crescer-01.png" width="300"/>

Crescer is a responsive web application that presents information about [Projeto Crescer](https://www.cwi.com.br/empresa/crescer), a project from CWI Software.

It uses [Angular](https://angular.io/), [Angular Material Desing Components](https://trimox.github.io/angular-mdc-web/) and [Gravatar](https://gravatar.com).

## Installing

### Prerequisites
To get started, you need the following dependencies installed:

* [Git](https://git-scm.com)
* [Node](https://nodejs.org)
* [npm](https://www.npmjs.com/)

### Steps

Clone the Git repository.

```bash
git clone git@github.com:pedrorohr/crescer-cwi.git
```

After cloning the Git repository, you have to install the Node dependencies. Navigate to the root of your cloned repository and use npm to install all necessary dependencies.

```bash
npm install
```

## Running

You can use the previously installed Angular CLI to run the project locally.

```bash
ng serve -o
```

This command builds the application, starts a web server and opens the url in the default browser.

## Building

Angular CLI also allows you to build the code in production mode.

```bash
ng build --prod
```

It will output the result on /dist folder.

### GitHub Pages

The project website is hosted on GitHub Pages.

To update the page, you need to build the project and output the result on /docs folder.

```bash
ng build --prod --output-path docs --base-href https://pedrorohr.github.io/crescer-cwi/
cp docs/index.html docs/404.html
```

## Guidelines

We follow [Angular Git Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

## License

[MIT](https://github.com/atom/atom/blob/master/LICENSE.md)

When using any CWI logo, be sure to follow the [Manual de utilização da marca](http://marketing.cwi.com.br/).

