(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <header id=\"main-header\">\n    <!-- The only Row -->\n    <div class=\"row no-gutters\">\n\n      <!-- The column with Image my_pic -->\n      <div class=\"col-lg-4 col-md-5\">\n        <img src=\"../assets/portfoliogrid/my_pic.jpg\" alt=\"\" height=\"743\" width=\"755\">\n      </div>\n\n      <!-- The column with all the content -->\n      <div class=\"col-lg-8 col-md-7\">\n\n        <!-- The fist sub-row with Title ... Flex column vertical-->\n        <div class=\"d-flex flex-column\">\n          <div class=\"p-5 bg-dark text-white\">\n            <div class=\"d-flex flex-row justify-content-between align-items-center\">\n\n              <h1 class=\"display-4 d-none d-md-block\">Tomas Mali</h1>\n\n              <div>\n                <a href=\"https://www.linkedin.com/in/tomas-mali-777916170/\" class=\"text-white\">\n                  <i class=\"fab fa-linkedin\"></i>\n                </a>\n              </div>\n\n              <div>\n                <a href=\"https://www.facebook.com/tomas.mali.3\" class=\"text-white\">\n                  <i class=\"fab fa-facebook\"></i>\n                </a>\n              </div>\n\n              <div>\n                <a href=\"https://www.facebook.com/tomas.mali.3\" class=\"text-white\">\n                  <i class=\"fab fa-github\"></i>\n                </a>\n              </div>\n\n              <div>\n                <a href=\"#\" class=\"text-white\" data-toggle=\"modal\" data-target=\"#loginModal\">\n                  <i class=\"fas fa-lock\"></i>\n                </a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n\n        <!--  --------------------------------------------------------Modal Login------------------------------------------------------------- -->\n        <div #btnClose class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\"\n          aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-dismiss=\"modal\">\n\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login administrator</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n\n              <div class=\"modal-body\">\n                <div class=\"container\">\n                  <h2>Stacked form</h2>\n\n                  <form #userlogin=\"ngForm\" (ngSubmit)=\"onClickSubmit(userlogin.value) \">\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email:</label>\n                      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"emailid\"\n                        ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"pwd\">Password:</label>\n                      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"psswd\"\n                        ngModel>\n                    </div>\n                    <div class=\"form-group form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\n                      </label>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"['/contact']\">Submit</button>\n                  </form>\n\n                </div>\n              </div>\n\n              <div class=\"modal-footer\">\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n\n\n        <!-- Slogan experience-->\n        <div class=\"p-4 bg-black\">\n          If you cannot do great things, do small things in a great way.\n          <small>\n            <i> \"Napoleon Hill\"</i>\n          </small>\n        </div>\n        <div>\n\n          <!-- HOME-RESUME-WORK-CONTACT Flex-Box-->\n          <div class=\"d-flex flex-row text-white align-items-stretch text-center\">\n            <!--  5. routerLink]=\"['/home']\" -->\n            <div class=\"port-item p-4 bg-primary\" [routerLink]=\"['/home']\">\n              <i class=\"fas fa-home fa-lg block\"></i>\n              <span class=\"d-none d-sm-block\">Home</span>\n            </div>\n            <div class=\"port-item p-4 bg-success\" [routerLink]=\"['/resume']\">\n              <i class=\"fas fa-graduation-cap fa-lg block\"></i>\n              <span class=\"d-none d-sm-block\">Resume</span>\n            </div>\n            <div class=\"port-item p-4 bg-warning\" [routerLink]=\"['/work']\">\n              <i class=\"fas fa-folder-open fa-lg block\"></i>\n              <span class=\"d-none d-sm-block\">Work</span>\n            </div>\n            <div class=\"port-item p-4 bg-danger\" [routerLink]=\"['/contact']\">\n              <i class=\"fas fa-envelope fa-lg block\"></i>\n              <span class=\"d-none d-sm-block\">Contact</span>\n            </div>\n\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <!-- END HEADER -->\n  </header>\n\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n\n\n  <!-- downloadResume --------------------------------------------------------Modal Login------------------------------------------------------------- -->\n  <!-- FOOTER -->\n  <footer id=\"main-footer\" class=\"p-5 bg-dark text-white\">\n    <div class=\"row\">\n      <div class=\"col-md-6\" (click)=\"downloadResume()\" target=\"_blank\">\n        <a href=\"#\" class=\"btn btn-outline-light\">\n          <i class=\"fas fa-cloud\"></i> Download Resume\n        </a>\n      </div>\n    </div>\n\n  </footer>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card card-body bg-danger text-white py-5\">\n  <h2>Contact</h2>\n  <p class=\"lead\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, laborum.</p>\n</div>\n\n<div class=\"card card-body py-5\">\n  <h3>Get In Touch</h3>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum cum!</p>\n\n      <form>\n        <div class=\"form-group\">\n          <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text bg-danger text-white\">\n                <i class=\"fas fa-user\">\n                </i>\n              </span>\n            </div>\n            <input type=\"text\" class=\"form-control bg-dark text-white\" placeholder=\"Name\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text bg-danger text-white\">\n                <i class=\"fas fa-envelope\">\n                </i>\n              </span>\n            </div>\n            <input type=\"email\" class=\"form-control bg-dark text-white\" placeholder=\"Email\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text bg-danger text-white\">\n                <i class=\"fas fa-pencil-alt\">\n                </i>\n              </span>\n            </div>\n            <textarea class=\"form-control bg-dark text-white\" placeholder=\"Name\">\n              </textarea>\n          </div>\n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-danger btn-block btn-lg\">\n\n      </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body bg-primary text-white py-5\">\n  <h2>Welcome To My Page</h2>\n  <p class=\"lead\">Here you can find some information about me! </p>\n</div>\n\n\n\n\n<div class=\"jumbotron mt-0\">\n\n  <div class=\"container about_me\">\n\n\n\n    <div style=\"text-align: center;\"> <b> Hello, I am Tomas Mali! </b> </div>\n    <br>\n    <p>\n      I have to tell something about myself. Sometimes it is hard to introduce yourself because you know yourself so\n      well\n      that you don't know where to start with. Let me give a try to see what kind of image you have about me through my\n      self-description.\n    </p>\n    <p>\n      <!--\n      I am 26 years old and I am from Albania, a little country situated in Southeast Europe on the Atlantic and Ionian\n      Sea.\n      I attended the high school in Italy (San Benedetto del Tronto) where I get the diploma with highest rank.\n      Since first year in high school I realized that\n      the technology is moving very fast and in the Computer Science area, jobs are getting more required from the big\n      companies. That's why i decided to\n      continue my studies from Computer Science University Of Padua where I have graduated in April 2018.\n      Since then I have started to explore, learn and create some small and medium projects on my own.\n      I am a very positive person about every aspect of life.\n      \n         The slideshow -->\n\n      There are many things I like to do, to see, and to\n      experience.\n      Here is a portion of that:\n      I like to travel a lot, I like to read good books, I like to make new friends every day, to be surrounded by\n      people.\n      I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the\n      clouds in the sky with a blank mind, I like the land and i like the nature.\n\n      Of course, I am nowhere close to what I wantesd to be, yet. I am just someone who does some learning, some\n      research,\n      and\n      some writing. But my dream is still alive.\n    </p>\n    <p>\n      This is a brief introduction of myself. If you are interested in knowing more, read my resume or take a look at my\n      works. Do not expect too much, and keep your sense of humor.\n    </p>\n\n  </div>\n\n  <br>\n  <hr>\n  <div class=\"row\">\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ciao in login page!");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body bg-success text-white py-5\">\n  <h2>My Resume</h2>\n  <p class=\"lead\">Here you can find some information about my resume</p>\n</div>\n\n\n\n<div class=\"card-deck\">\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h6 class=\"card-title p-3 mb-3 bg-success text-white font-weight-bold\">\n        Informazioni personali\n      </h6>\n      <div class=\"container\">\n        <p> <i class=\"fa fa-user\" style=\"color: green\"></i> &nbsp; <b> Nome: </b> Tomas</p>\n        <p> <i class=\"fa fa-user\" style=\"color:green\"></i> &nbsp; <b> Cognome: </b> Mali</p>\n        <p> <i class=\"fas fa-globe\" style=\"color:green\"></i> &nbsp; <b> Città: </b> Italia/Padova</p>\n        <p> <i class=\"fa fa-envelope\" style=\"color:green\"></i> &nbsp; <b> E-mail: </b> tomasmali08@gmail.com</p>\n        <p> <i class=\"fas fa-map-marker-alt\" style=\"color:green\"></i> &nbsp; <b> Indirizzo: </b> Via Antonio Pertile\n          nr.13/5</p>\n        <p> <i class=\"fas fa-phone-square\" style=\"color:green\"></i> &nbsp; <b> Telefono: </b> (+39) 388 8246051</p>\n      </div>\n\n    </div>\n    <div class=\"card-footer\">\n      <h6 class=\"text-muted\">\n        Dates: 2015 - 2018\n      </h6>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h6 class=\"card-title p-3 mb-3 bg-success text-white font-weight-bold\">\n        Diploma IPSIA (Operatore Elettronico)\n      </h6>\n\n      <div class=\"container\">\n        <p> <i class=\"fas fa-graduation-cap\" style=\"color:green\"></i> &nbsp; <b>Scuola: </b> IPSIA ,San Benedetto del\n          Tronto</p>\n      <!-- <p> <i class=\"fas fa-book\" style=\"color:green\"></i> &nbsp; <b>Voto Finale: </b> 100/100 </p> --> \n      </div>\n      <div class=\"container\">\n          <div class=\"container\">\n        <ul class=\"list-group mt-1\">\n\n          <li class=\"list-group-item list-group-item item_card item_card text-center bg-secondary  text-white\"\n            data-toggle=\"collapse\" data-target=\"#discipline\">\n            <b class=\"text-center\"> Discipline </b>\n          </li>\n\n\n\n          <div id=\"discipline\" class=\"collapse show\">\n            <li class=\"list-group-item  list-group-item item_card \"> <i\n                class=\"fas fa-angle-right \" style=\"color:green\"></i> &nbsp;\n              Tecniche di rappresentazione grafica\n            </li>\n            <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                style=\"color:green\"></i>\n              &nbsp;Tecnologie dell'informazione e comunicazione</li>\n            <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                style=\"color:green\"></i>\n              &nbsp;Laboratori tecnologici ed esercitazione</li>\n            <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                style=\"color:green\"></i>\n              &nbsp;Scienze integrate: fisica</li>\n            <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                style=\"color:green\"></i>\n              &nbsp;Scienze integrate: chimica</li>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <h6 class=\"text-muted\">\n      Dates: 2015 - 2018\n    </h6>\n  </div>\n</div>\n\n</div>\n\n\n\n<div class=\"card-deck\">\n\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <h6 class=\"card-title p-3 mb-3 bg-success text-white font-weight-bold\">\n        Laurea in Informatica, Padova (Italia)\n      </h6>\n\n\n      <div class=\"container\">\n        <p> <i class=\"fas fa-graduation-cap\" style=\"color:green\"></i> &nbsp; <b>Università: </b> Università degli Studi\n          di\n          Padova</p>\n        <div class=\"container\">\n          <ul class=\"list-group mt-1\">\n\n            <li class=\"list-group-item list-group-item item_card item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#conoscenze_tecniche\">\n              <b>Conoscenze tecniche</b>\n            </li>\n\n            <div id=\"conoscenze_tecniche\" class=\"collapse show\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Architettura degli elaboratori</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Sistemi operativi</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Algoritmi e strutture dati</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Reti</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Calcolo numerico</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Basi di dati</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Progettazione web con focus su accessibilità</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Ingegneria del software</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Programmazione ad ogetti (C++,Java)</li>\n            </div>\n          </ul>\n        </div>\n      </div>\n\n\n      <div class=\"container\">\n        <div class=\"container\">\n          <ul class=\"list-group mt-1\">\n\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#linguaggi\"> <b>Linguaggi di programmazione</b> </li>\n\n            <div id=\"linguaggi\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                C++</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Java</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Javascript, NodeJs</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;MySql</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;XML, XMLSchema, XSLT</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;XHTML, HTML5</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;XSS3, SCSS</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;LateX</li>\n            </div>\n\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"container\">\n        <div class=\"container\">\n          <ul class=\"list-group mt-1\">\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#librerie\"> <b>Librerie e frameworks</b> </li>\n            <div id=\"librerie\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Qt5 per C++</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Meteor per NodeJs</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;ReactJS per JavaScript</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;AngularJS, Angular >= 2</li>\n            </div>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"container\">\n        <div class=\"container\">\n          <ul class=\"list-group mt-1\">\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#tecnologie\"> <b>Tecnologie collaborative</b> </li>\n\n            <div id=\"tecnologie\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Git, utilizzato con git-flow</li>\n\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i> &nbsp;\n                Atlassian/Bitbucket/Confluence/Jira</li>\n\n            </div>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"card-footer\">\n      <h6 class=\"text-muted\">\n        Dates: 2015 - 2018\n      </h6>\n    </div>\n  </div>\n\n\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h6 class=\"card-title p-3 mb-3 bg-success text-white font-weight-bold\">Esperienza personale</h6>\n\n      <div class=\"container mb-4\">\n        <p> <i class=\"far fa-building\" style=\"color: green\"></i> &nbsp; <b> Telecomputers: </b> San Benedetto Del Tronto\n          (Italia)</p>\n\n        <div class=\"container\">\n          <ul class=\"list-group \">\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#tecnico_di_sistemi_informatici\"> <b>Tecnico di sistemi\n                informatici</b>\n            </li>\n\n            <div id=\"tecnico_di_sistemi_informatici\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Manutenzione di computers</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Relazioni con i fornitori</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Relazioni con i clienti</li>\n            </div>\n          </ul>\n        </div>\n      </div>\n\n\n      <div class=\"container mb-4\">\n        <p> <i class=\"far fa-building\" style=\"color: green\"></i> &nbsp; <b> UNIPD: </b>\n          Addetto allo sportello per compilazione moduli</p>\n\n        <div class=\"container\">\n          <ul class=\"list-group mb-1\">\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#collaborazione\"> <b>Collaboratore in Segreteria di Studenti\n                (Padova)</b>\n            </li>\n\n            <div id=\"collaborazione\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Compilazione modulo online</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Ritiro libretti</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Consegne certificati di laurea</li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Riordino fascicoli</li>\n            </div>\n          </ul>\n        </div>\n      </div>\n\n\n\n      <div class=\"container mb-4\">\n        <p> <i class=\"far fa-building\" style=\"color: green\"></i> &nbsp; <b> Azienda: </b>\n          Sanmarco Informatica S.p.A, Grisignano di Zocco</p>\n\n        <div class=\"container\">\n          <ul class=\"list-group mb-1\">\n            <li class=\"list-group-item list-group-item item_card text-center bg-secondary  text-white\"\n              data-toggle=\"collapse\" data-target=\"#assistenza\"> <b>Assistente informatico</b>\n            </li>\n\n            <div id=\"assistenza\" class=\"collapse\">\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Sviluppo back-end (Java)\n              </li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right \"\n                  style=\"color:green\"></i> &nbsp;\n                Sviluppo front-end (JavaScript, HTML,CSS,AngularJs,JQuery)\n              </li>\n              <li class=\"list-group-item list-group-item item_card\"> <i class=\"fas fa-angle-right\"\n                  style=\"color:green\"></i>\n                &nbsp;Sviluppo con piattaforma Telegram Bot</li>\n            </div>\n          </ul>\n        </div>\n      </div>\n\n\n\n\n    </div>\n    <div class=\"card-footer\">\n      <h6 class=\"text-muted\">\n        Dates: 2015 - 2018\n      </h6>\n    </div>\n  </div>\n\n\n  \n\n</div>\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"card card-body py-5\">\n\n  <h3>My Skills</h3>\n  <p>Here I present some level of my skills aquired during my studies</p>\n  <hr>\n\n  <h5>HTML 5 CSS</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:90%;\">\n    </div>\n  </div>\n\n  <h5>JavaScript</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:70%;\">\n    </div>\n  </div>\n\n  <h5>SQL</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:70%;\">\n    </div>\n  </div>\n\n  <h5>Angular</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:70%;\">\n    </div>\n  </div>\n\n  <h5>ReactJs</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:40%;\">\n    </div>\n  </div>\n\n\n  <h5>Java</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:70%;\">\n    </div>\n  </div>\n\n  <h5>Telegram Bot</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:70%;\">\n    </div>\n  </div>\n\n  <h5>Android</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:60%;\">\n    </div>\n  </div>\n\n  <h5>RPG (piattaforma IBM)</h5>\n  <div class=\"progress mb-2\">\n    <div class=\"progress-bar bg-success\" style=\"width:50%;\">\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sanshi/sanshi.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sanshi/sanshi.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <hr> \n  <h4 class=\"text-center \"> Resoconto tavolo: {{response.message[0].table}} </h4>\n  <hr> \n  <div class=\"container\">\n  <table class=\"table table-condensed table-light table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Nome</th>\n        <th>Ordinate</th>\n        <th>Arrivate</th>\n        <th>Da Arrivare</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-mini\" *ngFor=\"let item_list of response.message\">\n      <h5 class=\"text-center text-success\">{{item_list.name}}</h5 >\n      <tr *ngFor=\"let item of item_list.menus\">\n          <td>{{item.name}}</td>\n          <td>{{item.quantity}}</td>\n          <td>{{item.arrived}}</td>\n          <td>{{item.quantity-item.arrived}}</td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body bg-warning text-white py-5\">\n  <h2>Work</h2>\n  <p class=\"lead\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, laborum.</p>\n</div>\n\n<div class=\"card card-body py-5\">\n  <h3>\n    What Have I Built?\n  </h3>\n  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, natus.</p>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);





var AppComponent = /** @class */ (function () {
    // 4.
    function AppComponent(router, db) {
        var _this = this;
        this.router = router;
        this.validation = false;
        this.title = 'Resume';
        db.list('/user').valueChanges().subscribe(function (user) {
            _this.user_name = user;
            console.log("valore: " + _this.user_name);
        });
    }
    AppComponent.prototype.isValid = function (username, pass) {
        for (var i = 0; i < this.user_name.length; i++) {
            // console.log("Username is: " + this.user_name[i].username)
            // console.log("Password is: " + this.user_name[i].password)
        }
    };
    AppComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
        for (var i = 0; i < this.user_name.length; i++) {
            if (this.user_name[i].username !== data.emailid || this.user_name[i].password !== data.psswd) {
                alert('Username or Password invalid!');
                return false;
            }
            if (this.user_name[i].username === data.emailid && this.user_name[i].password === data.psswd) {
                this.validation = true;
                this.btnClose.nativeElement.click();
                return true;
            }
        }
    };
    AppComponent.prototype.downloadResume = function () {
        window.open("../assets/CV-Europass-20180504-Mali-IT.pdf");
        return false;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnClose', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "btnClose", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_github_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/github.service */ "./src/app/home/github.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sanshi_sanshi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sanshi/sanshi.component */ "./src/app/sanshi/sanshi.component.ts");














// 1.





// 2.
var routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: 'contactus', redirectTo: 'contact' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: 'myprojects/sanshi', component: _sanshi_sanshi_component__WEBPACK_IMPORTED_MODULE_18__["SanshiComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _sanshi_sanshi_component__WEBPACK_IMPORTED_MODULE_18__["SanshiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                // 3.
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes),
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"]
            ],
            providers: [
                _home_github_service__WEBPACK_IMPORTED_MODULE_10__["GithubService"],
                _user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/github.service.ts":
/*!****************************************!*\
  !*** ./src/app/home/github.service.ts ***!
  \****************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.about_me{\n    font-family: \"serif\";\n    font-style: italic;\n}\n\n.carousel-inner img {\n    width: 100%;\n    height: 100%;\n}   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hYm91dF9tZXtcbiAgICBmb250LWZhbWlseTogXCJzZXJpZlwiO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNhcm91c2VsLWlubmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSAgICJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.service */ "./src/app/home/github.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(github, http) {
        this.github = github;
        this.http = http;
        this.userName = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getMyReopos = function () {
        this.http
            .get('https://api.github.com/users/TomasMali/').subscribe(function (response) {
            console.log(response);
        });
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.http
            .get('https://api.github.com/users/' + this.userName).subscribe(function (response) {
            _this.response = response;
        });
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        this.http
            .get('https://resttomas.herokuapp.com/users').subscribe(function (response) {
            console.log(response);
            _this.response = response;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.container{\nheight: 100%;\nalign-content: center;\n}\n\n.card{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n\n.social_icon span{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #FFC312;\n}\n\n.social_icon span:hover{\ncolor: white;\ncursor: pointer;\n}\n\n.card-header h3{\ncolor: white;\n}\n\n.social_icon{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n\n.input-group-prepend span{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: black;\nborder:0 !important;\n}\n\ninput:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n\n.remember{\ncolor: white;\n}\n\n.remember input\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n\n.login_btn{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n\n.login_btn:hover{\ncolor: black;\nbackground-color: white;\n}\n\n.links{\ncolor: white;\n}\n\n.links a{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsY0FBYztBQUNkOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbmhlaWdodDogMTAwJTtcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmR7XG5oZWlnaHQ6IDM3MHB4O1xubWFyZ2luLXRvcDogYXV0bztcbm1hcmdpbi1ib3R0b206IGF1dG87XG53aWR0aDogNDAwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW57XG5mb250LXNpemU6IDYwcHg7XG5tYXJnaW4tbGVmdDogMTBweDtcbmNvbG9yOiAjRkZDMzEyO1xufVxuXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcbmNvbG9yOiB3aGl0ZTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgze1xuY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFsX2ljb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMjBweDtcbnRvcDogLTQ1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG53aWR0aDogNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXI6MCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1c3tcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbWVtYmVye1xuY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtZW1iZXIgaW5wdXRcbntcbndpZHRoOiAyMHB4O1xuaGVpZ2h0OiAyMHB4O1xubWFyZ2luLWxlZnQ6IDE1cHg7XG5tYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0bntcbmNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG53aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXJ7XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtze1xuY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickSubmit = function (data) {
        alert("Entered Email id : " + data.emailid + "\n Password is" + data.passwd);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item_card{\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1fY2FyZHtcbiAgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/sanshi/sanshi.component.css":
/*!*********************************************!*\
  !*** ./src/app/sanshi/sanshi.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-mini{\n    font-size: 12px;\n  }\n\n  .table-condensed{\n    font-size: 14px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fuc2hpL3NhbnNoaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9zYW5zaGkvc2Fuc2hpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtbWluaXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAudGFibGUtY29uZGVuc2Vke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/sanshi/sanshi.component.ts":
/*!********************************************!*\
  !*** ./src/app/sanshi/sanshi.component.ts ***!
  \********************************************/
/*! exports provided: SanshiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanshiComponent", function() { return SanshiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SanshiComponent = /** @class */ (function () {
    function SanshiComponent(http) {
        var _this = this;
        this.http = http;
        this.http
            .get('http://93.49.6.246:3000/users/').subscribe(function (response) {
            console.log(response);
            _this.response = response;
        });
    }
    SanshiComponent.prototype.ngOnInit = function () {
    };
    SanshiComponent.prototype.getTables = function () {
        var _this = this;
        this.http
            .get('http://93.49.6.246:3000/users/').subscribe(function (response) {
            console.log(response);
            _this.response = response;
        });
    };
    SanshiComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SanshiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sanshi',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sanshi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sanshi/sanshi.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sanshi.component.css */ "./src/app/sanshi/sanshi.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SanshiComponent);
    return SanshiComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var UserService = /** @class */ (function () {
    function UserService(db) {
        var _this = this;
        this.db = db;
        db.list('/user').valueChanges().subscribe(function (user) {
            _this.user_name = user;
            console.log("valore: " + _this.user_name);
        });
    }
    UserService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDZG2kqzzaOXBgGUU_fXvLZ_JdFbdBcKFY",
        authDomain: "user-service-b9b59.firebaseapp.com",
        databaseURL: "https://user-service-b9b59.firebaseio.com",
        projectId: "user-service-b9b59",
        storageBucket: "",
        messagingSenderId: "578220639623"
    },
    themes: "https://bootswatch.com/4/sketchy/bootstrap.min.css"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomas/Desktop/MyWeb_Now_Deploy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map