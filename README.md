# CDB-Front

4.8. Front End
Create another project on your Github : cdb-front.

cdb-front is a Single Page Application (SPA) that enables the listing, creation, deletion and modification of compagnies for an admin user.

You must choose one of the 3 following frameworks (choose wisely) :

AngularJs
Angular
React
This SPA must use the webservices you just created.

This SPA must be responsive. You can use any css library or create your own CSS.

Don't forget that this project is not on your tomcat, and that the address of your webservices may change from an environment to another.

4.8.1 AngularJs
You must use a generator from either Yeoman or Npm, but you'll have to justify your choice.

Don't forget to split your logic between controllers and services.

You can test your SPA with karma + jasmine.

If you can, respect the style guide of John Papa.

4.8.2 Angular
Angular is the rework of AngularJS framework. It's a brand new framework that is component oriented.

It is recommended to write code using Typescript, a typed and object oriented Javascript. But you can still use latest Javascript.

Angular-CLI
You can bootstrap your Angular project with Angular-CLI tools.

Angular-CLI provides you a pre-configured boilerplate project with all the tools generally used like Karma, Protractor and Jasmine for your tests, the compiler for Typescript and Sass and a first sample component.

For the use of Angular-CLI, we invite you to read the manual on the Angular-CLI github page.

Base architecture
In Angular, almost everything is a component, you must think your application like a house (which is a component, basically, your app.component) composed of walls (components too) which are themselves composed of bricks , etc ... Each room of your house could be a module (see documentation for more informations)

We recommend you to follow the style guide of John Papa (same person than AngularJS style guide)

Usefull links
Angular Tower of Heroes Tutorial
Angular Docs
Angular Style guide
