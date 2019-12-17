/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";

// pages for this kit
import LoginPage from "./views/examples/LoginPage.js";
import SocialSecurityTool from "./views/SocialSecurityTool.js";


ReactDOM.render(
    <SocialSecurityTool/>,
    document.getElementById("root")
);
