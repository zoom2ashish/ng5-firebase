webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'My Firebase Integration App';
        this.isLoggedIn = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire__ = __webpack_require__("../../../fire/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__("../../../fire/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__("../../../fire/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");



var routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '*',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Ashish Patel</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n  </div>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <button class=\"btn btn-default my-2 my-sm-0\" (click)=\"onSignOut()\">Sign Out</button>\n  </form>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSignOut = function () {
        var _this = this;
        this.authService.doLogout().then(function (res) {
            console.log('Logged Out');
            _this.router.navigate(['login']);
        }, function (err) {
            console.log('Failed to log out');
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <!-- <img class=\"mb-4\" src=\"../../assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\"> -->\n  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n  <div class=\"checkbox mb-3\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>\n<button class=\"btn btn-google-signin\" (click)=\"doGoogleSignIn()\"></button>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 400px;\n  display: block;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.btn-google-signin {\n  width: 382px;\n  height: 92px;\n  background: url(\"/assets/images/google-signin-button/btn_google_signin_dark_normal_web@2x.png\"); }\n\n.btn-google-signin:focus {\n  background: url(\"/assets/images/google-signin-button/btn_google_signin_dark_focus_web@2x.png\"); }\n\n.btn-google-signin[disabled] {\n  background: url(\"/assets/images/google-signin-button/btn_google_signin_dark_disabled_web@2x.png\"); }\n\n.btn-google-signin:active {\n  background: url(\"/assets/images/google-signin-button/btn_google_signin_dark_pressed_web@2x.png\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doGoogleSignIn = function () {
        var _this = this;
        this.authService.doGoogleLogin().then(function (res) {
            _this.router.navigate(['home']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['login']);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__("../../../fire/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (x) {
            _this.user = x;
        });
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return !!this.user;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log('Login Failed. ', err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"])().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAJEAg5Oar0ywNPsSYIhV0WHXMMGV1RhvU',
        authDomain: 'ng5-firebase-27bad.firebaseapp.com',
        databaseURL: 'https://ng5-firebase-27bad.firebaseio.com',
        projectId: 'ng5-firebase-27bad',
        storageBucket: 'ng5-firebase-27bad.appspot.com',
        messagingSenderId: '201814028118'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map