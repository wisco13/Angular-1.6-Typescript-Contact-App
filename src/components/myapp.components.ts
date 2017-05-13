
// 'use strict'
import * as angular from "angular";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SideMenuComponent} from "./sidebar/sidebar.component";

// declare var angular;
// declare var HeaderComponent;
// declare var FooterComponent;
// declare var SideMenuComponent;

angular.module('myApp.components', [])
.component('appHeader',new HeaderComponent())
.component('appFooter',FooterComponent)
.component('appSideMenu',SideMenuComponent)