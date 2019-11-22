(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<!--<app-dashboard></app-dashboard>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            Test 1\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>\n\n            <!--            <app-drag-drop></app-drag-drop>-->\n            <app-flat-tree></app-flat-tree>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-table/demo-table.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-table/demo-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/drag-drop/drag-drop-navigation.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/drag-drop/drag-drop-navigation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>To do</h2>\n  <app-activity-manager-upgraded [KeyManager]=\"FocusKeyManager\" tabindex=\"1\" #todoActivityManager\n                                 [config]=\"activityManagerConfig\"\n  >\n    <div cdkDropList #todoList=\"cdkDropList\" class=\"list\"\n         [cdkDropListData]=\"todo\"\n         [cdkDropListConnectedTo]=\"doneList\"\n         (cdkDropListDropped)=\"drop($event)\"\n    >\n      <div class=\"list-item\" *ngFor=\"let item of todo; let i = index\" cdkDrag>\n        <app-focusable-option [value]=\"item\" (keydown.arrowRight)=\"markDone(i)\"></app-focusable-option>\n      </div>\n    </div>\n  </app-activity-manager-upgraded>\n</div>\n\n<div class=\"container\">\n  <h2>Done</h2>\n  <app-activity-manager-upgraded [KeyManager]=\"FocusKeyManager\" tabindex=\"1\" #doneActivityManager\n                                 [config]=\"activityManagerConfig\"\n                                 [keydown$]=\"keydownDone$\"\n                                 (keydown)=\"keydownDone$.next($event)\"\n  >\n    <div cdkDropList #doneList=\"cdkDropList\" class=\"list\"\n         [cdkDropListData]=\"done\"\n         [cdkDropListConnectedTo]=\"todoList\"\n         (cdkDropListDropped)=\"drop($event)\"\n    >\n      <div class=\"list-item\" *ngFor=\"let item of done; let i = index\" cdkDrag>\n        <app-focusable-option [value]=\"item\" (keydown.arrowLeft)=\"markToDo(i)\"></app-focusable-option>\n      </div>\n    </div>\n  </app-activity-manager-upgraded>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/drag-drop/drag-drop.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/drag-drop/drag-drop.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>To do</h2>\n\n  <div cdkDropList #todoList=\"cdkDropList\" class=\"list\"\n       [cdkDropListData]=\"todo\"\n       [cdkDropListConnectedTo]=\"doneList\"\n       (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"list-item\" *ngFor=\"let item of todo; let i = index\" cdkDrag>\n      {{item}}\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2>Done</h2>\n\n  <div cdkDropList #doneList=\"cdkDropList\" class=\"list\"\n       [cdkDropListData]=\"done\"\n       [cdkDropListConnectedTo]=\"todoList\"\n       (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"list-item\" *ngFor=\"let item of done; let i = index\" cdkDrag>\n      {{item}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           #inputRef\n           autocomplete=\"off\"\n           (blur)=\"resetDisplayValue()\"\n           (focus)=\"selectInput()\"\n           (keydown)=\"onKeydown.emit($event)\"\n           [formControl]=\"displayValueControl\"\n           placeholder=\"select option\">\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lazy-dropdown/lazy-dropdown.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lazy-dropdown/lazy-dropdown.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container [style.width.px]=\"300\">\n  <app-dropdown-origin [selection]=\"selection\"\n                       [getLabel]=\"getLabel\"\n                       [disabled]=\"disabled\"\n                       [isOverlayVisible]=\"isOverlayVisible()\"\n                       (onSearch)=\"onSearch.next($event)\"\n                       (onKeydown)=\"keydown$.next($event)\"\n                       (hideOverlay)=\"hideOverlay()\"\n  ></app-dropdown-origin>\n\n  <p-overlayPanel [parent]=\"container\">\n    <mat-card *ngIf=\"overlayPanel.visible\">\n      <cdk-virtual-scroll-viewport [appOptionsVirtualScrollManager]=\"lazyOptionsListConfig\"\n                                   itemSize=\"40\" class=\"example-viewport\">\n        <u-options-selection-manager (detectChanges)=\"detectChanges()\"\n                                     (added)=\"select($event)\"\n                                     [compareWith]=\"compareWith\"\n                                     [selection]=\"selection\"\n        >\n          <u-options-activity-manager (onActiveChange)=\"onActiveOptionChange($event)\"\n                                      [KeyManager]=\"KeyManager\"\n                                      [keydown$]=\"keydown$\"\n          >\n            <highlightable-content-option *cdkVirtualFor=\"let item of dataSource\"\n                                          [splitOptions]=\"true\"\n                                          [value]=\"item\"\n            >\n              {{getLabel(item) || 'loading...'}}\n            </highlightable-content-option>\n          </u-options-activity-manager>\n        </u-options-selection-manager>\n      </cdk-virtual-scroll-viewport>\n    </mat-card>\n  </p-overlayPanel>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <a *ngFor=\"let link of links\" class=\"link\" [routerLink]=\"link.url\">{{link.label}}</a>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/options-group-list/option-group/option-group.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/options-group-list/option-group/option-group.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">{{label}}</div>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/options-group-list/options-group-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/options-group-list/options-group-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"dashboard-card\">\n  <mat-card-header>\n    <mat-card-title>\n      Options Group\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"dashboard-card-content\">\n    <div>\n      <u-options-activity-manager [KeyManager]=\"FocusKeyManager\"\n                                  [keydown$]=\"keydown$\"\n                                  (keydown)=\"keydown$.next($event)\"\n                                  tabindex=\"1\"\n      >\n        <app-option-group *ngFor=\"let group of groups\"\n                          [label]=\"group.label\"\n        >\n          <app-focusable-option *ngFor=\"let option of group.options\"\n                                [value]=\"option.value\"\n          >\n            {{option.viewValue}}\n          </app-focusable-option>\n        </app-option-group>\n      </u-options-activity-manager>\n\n\n      <!--      <app-tree></app-tree>-->\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/focusable-option/focusable-option.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/focusable-option/focusable-option.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [tabindex]=\"active ? 1 : -1\" #label\n     (focus)=\"focus()\"\n     (click)=\"activateViaInteraction()\"\n     (focusout)=\"deactivate()\"\n>\n  {{getLabel()}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tree/flat-tree/flat-tree.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tree/flat-tree/flat-tree.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"\n          [appActivityManagerDirective]=\"KeyManager\"\n          [config]=\"activityManagerConfig\"\n          (keydown.arrowLeft)=\"onArrowLeft()\"\n          (keydown.arrowRight)=\"onArrowRight()\"\n          tabindex=\"1\"\n>\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <ng-template [ngIf]=\"shouldRender(node)\">\n      <button *ngIf=\"treeControl.isExpandable(node)\" mat-icon-button cdkTreeNodeToggle\n              [attr.aria-label]=\"'toggle ' + node.filename\"\n              [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      <button *ngIf=\"!treeControl.isExpandable(node)\" mat-icon-button disabled></button>\n      <app-highlightable-content-option [value]=\"node\" [getLabel]=\"labelGetter\"></app-highlightable-content-option>\n    </ng-template>\n  </cdk-tree-node>\n</cdk-tree>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tree/nested-tree/nested-tree.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tree/nested-tree/nested-tree.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<u-options-activity-manager [KeyManager]=\"KeyManager\"\n                            [keydown$]=\"keydown$\"\n                            (keydown)=\"keydown$.next($event)\"\n                            tabindex=\"1\">\n  <cdk-tree [dataSource]=\"dataSource\"\n            [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"example-tree-node\">\n      <ng-template [ngIf]=\"hasChild(null, node )\" >\n        <button mat-icon-button cdkTreeNodeToggle\n                (click)=\"node.isExpanded = !node.isExpanded\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n\n        <highlightable-content-option>\n          {{node.name}}\n        </highlightable-content-option>\n\n        <div *ngIf=\"treeControl.isExpanded(node)\">\n          <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n      </ng-template>\n\n      <ng-template [ngIf]=\"!hasChild(null, node )\">\n        <button mat-icon-button disabled></button>\n        <highlightable-content-option>\n          {{node.name}}\n        </highlightable-content-option>\n      </ng-template>\n    </cdk-nested-tree-node>\n  </cdk-tree>\n</u-options-activity-manager>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/virtual-scroll/virtual-scroll.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/virtual-scroll/virtual-scroll.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\"\n                             class=\"example-viewport\"\n                             [appActivityManagerDirective]=\"FocusKeyManager\"\n                             [config]=\"activityManagerConfig\"\n                             [keydown$]=\"keydown$.asObservable()\"\n                             (keydown)=\"keydown$.next($event)\"\n                             tabindex=\"1\">\n\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">\n    <app-focusable-option [value]=\"item\"></app-focusable-option>\n  </div>\n\n</cdk-virtual-scroll-viewport>\n"

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _options_group_list_options_group_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options-group-list/options-group-list.component */ "./src/app/options-group-list/options-group-list.component.ts");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");
/* harmony import */ var _tree_flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree/flat-tree/flat-tree.component */ "./src/app/tree/flat-tree/flat-tree.component.ts");
/* harmony import */ var _drag_drop_drag_drop_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag-drop/drag-drop-navigation.component */ "./src/app/drag-drop/drag-drop-navigation.component.ts");
/* harmony import */ var _demo_table_demo_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo-table/demo-table.component */ "./src/app/demo-table/demo-table.component.ts");
/* harmony import */ var _virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./virtual-scroll/virtual-scroll.component */ "./src/app/virtual-scroll/virtual-scroll.component.ts");
/* harmony import */ var _root_path_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root-path.enum */ "./src/app/root-path.enum.ts");
/* harmony import */ var _tree_nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/nested-tree/nested-tree.component */ "./src/app/tree/nested-tree/nested-tree.component.ts");
/* harmony import */ var _lazy_dropdown_lazy_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lazy-dropdown/lazy-dropdown.component */ "./src/app/lazy-dropdown/lazy-dropdown.component.ts");













var routes = [
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].OptionsGroupListComponent, component: _options_group_list_options_group_list_component__WEBPACK_IMPORTED_MODULE_4__["OptionsGroupListComponent"] },
    // {path: RootPathEnum.DashboardComponent, component: DashboardComponent},
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].DragDropComponent, component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__["DragDropComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].DragDropNavigationComponent, component: _drag_drop_drag_drop_navigation_component__WEBPACK_IMPORTED_MODULE_7__["DragDropNavigationComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].TreeComponent, component: _tree_flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_6__["FlatTreeComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].NestedTreeComponent, component: _tree_nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_11__["NestedTreeComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].DemoTableComponent, component: _demo_table_demo_table_component__WEBPACK_IMPORTED_MODULE_8__["DemoTableComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].VirtualScrollComponent, component: _virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_9__["VirtualScrollComponent"] },
    { path: _root_path_enum__WEBPACK_IMPORTED_MODULE_10__["RootPathEnum"].LazyDropdownComponent, component: _lazy_dropdown_lazy_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["LazyDropdownComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'u-cdk-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _tree_flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/flat-tree/flat-tree.component */ "./src/app/tree/flat-tree/flat-tree.component.ts");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");
/* harmony import */ var primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng-iow/cdk/options */ "./node_modules/primeng-iow/cdk/options/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _options_group_list_options_group_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./options-group-list/options-group-list.component */ "./src/app/options-group-list/options-group-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _options_group_list_option_group_option_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./options-group-list/option-group/option-group.component */ "./src/app/options-group-list/option-group/option-group.component.ts");
/* harmony import */ var _shared_focusable_option_focusable_option_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/focusable-option/focusable-option.component */ "./src/app/shared/focusable-option/focusable-option.component.ts");
/* harmony import */ var _drag_drop_drag_drop_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drag-drop/drag-drop-navigation.component */ "./src/app/drag-drop/drag-drop-navigation.component.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _demo_table_demo_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./demo-table/demo-table.component */ "./src/app/demo-table/demo-table.component.ts");
/* harmony import */ var _virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./virtual-scroll/virtual-scroll.component */ "./src/app/virtual-scroll/virtual-scroll.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _tree_nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tree/nested-tree/nested-tree.component */ "./src/app/tree/nested-tree/nested-tree.component.ts");
/* harmony import */ var _lazy_dropdown_lazy_dropdown_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lazy-dropdown/lazy-dropdown.module */ "./src/app/lazy-dropdown/lazy-dropdown.module.ts");
/* harmony import */ var _shared_highlightable_content_option_upgraded_highlightable_content_option_upgraded_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/highlightable-content-option-upgraded/highlightable-content-option-upgraded.component */ "./src/app/shared/highlightable-content-option-upgraded/highlightable-content-option-upgraded.component.ts");
/* harmony import */ var primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng-iow/cdk/options-selection-manager */ "./node_modules/primeng-iow/cdk/options-selection-manager/index.js");
/* harmony import */ var primeng_iow_cdk_scrolling_scrolling_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng-iow/cdk/scrolling/scrolling.module */ "./node_modules/primeng-iow/cdk/scrolling/scrolling.module.js");
/* harmony import */ var _shared_activity_manager_upgraded_activity_manager_upgraded_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/activity-manager-upgraded/activity-manager-upgraded.component */ "./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.component.ts");
/* harmony import */ var _shared_activity_manager_upgraded_activity_manager_upgraded_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/activity-manager-upgraded/activity-manager-upgraded.directive */ "./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.directive.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragDropComponent"],
                _drag_drop_drag_drop_navigation_component__WEBPACK_IMPORTED_MODULE_20__["DragDropNavigationComponent"],
                _tree_flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_11__["FlatTreeComponent"],
                _options_group_list_options_group_list_component__WEBPACK_IMPORTED_MODULE_15__["OptionsGroupListComponent"],
                _options_group_list_option_group_option_group_component__WEBPACK_IMPORTED_MODULE_18__["OptionGroupComponent"],
                _shared_focusable_option_focusable_option_component__WEBPACK_IMPORTED_MODULE_19__["FocusableOptionComponent"],
                _shared_activity_manager_upgraded_activity_manager_upgraded_component__WEBPACK_IMPORTED_MODULE_30__["ActivityManagerUpgradedComponent"],
                _shared_activity_manager_upgraded_activity_manager_upgraded_directive__WEBPACK_IMPORTED_MODULE_31__["ActivityManagerUpgradedDirective"],
                _demo_table_demo_table_component__WEBPACK_IMPORTED_MODULE_22__["DemoTableComponent"],
                _virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_23__["VirtualScrollComponent"],
                _tree_nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_25__["NestedTreeComponent"],
                _shared_highlightable_content_option_upgraded_highlightable_content_option_upgraded_component__WEBPACK_IMPORTED_MODULE_27__["HighlightableContentOptionUpgradedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"],
                _lazy_dropdown_lazy_dropdown_module__WEBPACK_IMPORTED_MODULE_26__["LazyDropdownModule"],
                primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_12__["OptionsActivityManagerModule"],
                primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_28__["OptionsSelectionManagerModule"],
                primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_13__["OptionsModule"],
                primeng_iow_cdk_scrolling_scrolling_module__WEBPACK_IMPORTED_MODULE_29__["UScrollingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/demo-table/demo-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-table/demo-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DemoTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTableDataSource", function() { return DemoTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 121, name: 'Hydrogen' },
    { id: 122, name: 'Helium' },
    { id: 123, name: 'Lithium' },
    { id: 124, name: 'Beryllium' },
    { id: 125, name: 'Boron' },
    { id: 126, name: 'Carbon' },
    { id: 127, name: 'Nitrogen' },
    { id: 128, name: 'Oxygen' },
    { id: 129, name: 'Fluorine' },
    { id: 1210, name: 'Neon' },
    { id: 1211, name: 'Sodium' },
    { id: 1212, name: 'Magnesium' },
    { id: 1213, name: 'Aluminum' },
    { id: 1214, name: 'Silicon' },
    { id: 1215, name: 'Phosphorus' },
    { id: 1216, name: 'Sulfur' },
    { id: 1217, name: 'Chlorine' },
    { id: 1218, name: 'Argon' },
    { id: 1219, name: 'Potassium' },
    { id: 1220, name: 'Calcium' },
];
/**
 * Data source for the DemoTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DemoTableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemoTableDataSource, _super);
    function DemoTableDataSource() {
        var _this = _super.call(this) || this;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DemoTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](dataMutations)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.data)));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DemoTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DemoTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DemoTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return DemoTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/demo-table/demo-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/demo-table/demo-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby10YWJsZS9kZW1vLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kZW1vLXRhYmxlL2RlbW8tdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/demo-table/demo-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/demo-table/demo-table.component.ts ***!
  \****************************************************/
/*! exports provided: DemoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTableComponent", function() { return DemoTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _demo_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-table-datasource */ "./src/app/demo-table/demo-table-datasource.ts");




var DemoTableComponent = /** @class */ (function () {
    function DemoTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    DemoTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _demo_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DemoTableDataSource"]();
    };
    DemoTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DemoTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DemoTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], DemoTableComponent.prototype, "table", void 0);
    DemoTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-table',
            template: __webpack_require__(/*! raw-loader!./demo-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo-table/demo-table.component.html"),
            styles: [__webpack_require__(/*! ./demo-table.component.css */ "./src/app/demo-table/demo-table.component.css")]
        })
    ], DemoTableComponent);
    return DemoTableComponent;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop-navigation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop-navigation.component.ts ***!
  \*************************************************************/
/*! exports provided: DragDropNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropNavigationComponent", function() { return DragDropNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");
/* harmony import */ var _drag_drop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");







var DragDropNavigationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DragDropNavigationComponent, _super);
    function DragDropNavigationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FocusKeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusKeyManager"];
        _this.keydownToDo$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.keydownDone$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.activityManagerConfig = {
            withWrap: true,
            withTypeAhead: { debounceInterval: 0 },
            selfService: true
        };
        return _this;
    }
    DragDropNavigationComponent.prototype.markDone = function (index) {
        this.updateActiveItem(index, this.todoActivityManager.keyManager);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(this.todoList.data, this.doneList.data, index, 0);
    };
    DragDropNavigationComponent.prototype.markToDo = function (index) {
        this.updateActiveItem(index, this.doneActivityManager.keyManager);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(this.doneList.data, this.todoList.data, index, 0);
    };
    DragDropNavigationComponent.prototype.updateActiveItem = function (index, keyManager) {
        if (index > 0) {
            keyManager.setPreviousItemActive();
        }
        else {
            keyManager.setActiveItem(1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"])
    ], DragDropNavigationComponent.prototype, "todoList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doneList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"])
    ], DragDropNavigationComponent.prototype, "doneList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoActivityManager', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_5__["OptionsActivityManagerComponent"])
    ], DragDropNavigationComponent.prototype, "todoActivityManager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doneActivityManager', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_5__["OptionsActivityManagerComponent"])
    ], DragDropNavigationComponent.prototype, "doneActivityManager", void 0);
    DragDropNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./drag-drop-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/drag-drop/drag-drop-navigation.component.html"),
            styles: [__webpack_require__(/*! ./drag-drop.component.css */ "./src/app/drag-drop/drag-drop.component.css")]
        })
    ], DragDropNavigationComponent);
    return DragDropNavigationComponent;
}(_drag_drop_component__WEBPACK_IMPORTED_MODULE_6__["DragDropComponent"]));



/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.css":
/*!***************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n}\n\n.list-item {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  color: black;\n  font-size: 14px;\n  max-height: 400px;\n}\n\n.list-item:last-child {\n  border: none;\n}\n\n/* Highlight the list item that is being dragged. */\n\n.cdk-drag-preview {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-dragging .cdk-drag {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0Usa0JBQWtCO0VBQ2xCOztnREFFOEM7QUFDaEQ7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRDtBQUN4RDs7QUFFQSwyQ0FBMkM7O0FBQzNDO0VBQ0Usc0VBQXNEO0VBQXRELDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ubGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIEhpZ2hsaWdodCB0aGUgbGlzdCBpdGVtIHRoYXQgaXMgYmVpbmcgZHJhZ2dlZC4gKi9cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi8qIEFuaW1hdGUgaXRlbXMgYXMgdGhleSdyZSBiZWluZyBzb3J0ZWQuICovXG4uY2RrLWRyb3AtZHJhZ2dpbmcgLmNkay1kcmFnIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4vKiBBbmltYXRlIGFuIGl0ZW0gdGhhdCBoYXMgYmVlbiBkcm9wcGVkLiAqL1xuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.ts":
/*!**************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.ts ***!
  \**************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DragDropComponent = /** @class */ (function () {
    function DragDropComponent(cd) {
        this.cd = cd;
        this.FocusKeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusKeyManager"];
        this.keydownToDo$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.keydownDone$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    DragDropComponent.prototype.detectChanges = function () {
        this.cd.detectChanges();
    };
    DragDropComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    DragDropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    DragDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drag-drop',
            template: __webpack_require__(/*! raw-loader!./drag-drop.component.html */ "./node_modules/raw-loader/index.js!./src/app/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__(/*! ./drag-drop.component.css */ "./src/app/drag-drop/drag-drop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LocalDropdownOriginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDropdownOriginComponent", function() { return LocalDropdownOriginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_infinite_dropdown_dropdown_origin_dropdown_origin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/infinite-dropdown/dropdown-origin/dropdown-origin.component */ "./node_modules/primeng-iow/infinite-dropdown/dropdown-origin/dropdown-origin.component.js");



var LocalDropdownOriginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalDropdownOriginComponent, _super);
    function LocalDropdownOriginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalDropdownOriginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown-origin',
            template: __webpack_require__(/*! raw-loader!./local-dropdown-origin.component.html */ "./node_modules/raw-loader/index.js!./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.html"),
        })
    ], LocalDropdownOriginComponent);
    return LocalDropdownOriginComponent;
}(primeng_iow_infinite_dropdown_dropdown_origin_dropdown_origin_component__WEBPACK_IMPORTED_MODULE_2__["DropdownOriginComponent"]));



/***/ }),

/***/ "./src/app/lazy-dropdown/lazy-dropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lazy-dropdown/lazy-dropdown.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 400px;\n  /*width: 200px;*/\n  /*border: 1px solid black;*/\n}\n\ncdk-virtual-scroll-viewport {\n  overflow-x: hidden;\n}\n\n.example-item {\n  height: 50px;\n}\n\ncdk-virtual-scroll-viewport {\n  margin: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF6eS1kcm9wZG93bi9sYXp5LWRyb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xhenktZHJvcGRvd24vbGF6eS1kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdmlld3BvcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICAvKndpZHRoOiAyMDBweDsqL1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG5cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/lazy-dropdown/lazy-dropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lazy-dropdown/lazy-dropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: LazyDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDropdownComponent", function() { return LazyDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_infinite_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/infinite-dropdown */ "./node_modules/primeng-iow/infinite-dropdown/index.js");
/* harmony import */ var _lazy_scroll_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-scroll-data-source */ "./src/app/lazy-dropdown/lazy-scroll-data-source.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");





var LazyDropdownComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LazyDropdownComponent, _super);
    function LazyDropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataSource = new _lazy_scroll_data_source__WEBPACK_IMPORTED_MODULE_3__["LazyDataSource"]();
        _this.KeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["ActiveDescendantKeyManager"];
        _this.lazyOptionsListConfig = { maxHeight: 400 };
        _this.getLabel = function (option) { return option; };
        return _this;
    }
    LazyDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lazy-dropdown',
            template: __webpack_require__(/*! raw-loader!./lazy-dropdown.component.html */ "./node_modules/raw-loader/index.js!./src/app/lazy-dropdown/lazy-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./lazy-dropdown.component.css */ "./src/app/lazy-dropdown/lazy-dropdown.component.css")]
        })
    ], LazyDropdownComponent);
    return LazyDropdownComponent;
}(primeng_iow_infinite_dropdown__WEBPACK_IMPORTED_MODULE_2__["InfiniteDropdownComponent"]));



/***/ }),

/***/ "./src/app/lazy-dropdown/lazy-dropdown.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lazy-dropdown/lazy-dropdown.module.ts ***!
  \*******************************************************/
/*! exports provided: LazyDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDropdownModule", function() { return LazyDropdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lazy_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-dropdown.component */ "./src/app/lazy-dropdown/lazy-dropdown.component.ts");
/* harmony import */ var primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-iow/cdk/options */ "./node_modules/primeng-iow/cdk/options/index.js");
/* harmony import */ var primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng-iow/cdk/options-selection-manager */ "./node_modules/primeng-iow/cdk/options-selection-manager/index.js");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");
/* harmony import */ var primeng_iow_cdk_scrolling_scrolling_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng-iow/cdk/scrolling/scrolling.module */ "./node_modules/primeng-iow/cdk/scrolling/scrolling.module.js");
/* harmony import */ var primeng_iow_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng-iow/progressspinner */ "./node_modules/primeng-iow/progressspinner/index.js");
/* harmony import */ var primeng_iow_overlaypanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng-iow/overlaypanel */ "./node_modules/primeng-iow/overlaypanel/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dropdown_origin_local_dropdown_origin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dropdown-origin/local-dropdown-origin.component */ "./src/app/lazy-dropdown/dropdown-origin/local-dropdown-origin.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _options_virtual_scroll_manager_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./options-virtual-scroll-manager.directive */ "./src/app/lazy-dropdown/options-virtual-scroll-manager.directive.ts");















var LazyDropdownModule = /** @class */ (function () {
    function LazyDropdownModule() {
    }
    LazyDropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _lazy_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["LazyDropdownComponent"],
                _dropdown_origin_local_dropdown_origin_component__WEBPACK_IMPORTED_MODULE_12__["LocalDropdownOriginComponent"],
                _options_virtual_scroll_manager_directive__WEBPACK_IMPORTED_MODULE_14__["OptionsVirtualScrollManagerDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                primeng_iow_overlaypanel__WEBPACK_IMPORTED_MODULE_9__["OverlayPanelModule"],
                primeng_iow_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinnerModule"],
                primeng_iow_cdk_scrolling_scrolling_module__WEBPACK_IMPORTED_MODULE_7__["UScrollingModule"],
                primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_6__["OptionsActivityManagerModule"],
                primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_5__["OptionsSelectionManagerModule"],
                primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_4__["OptionsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]
            ],
            exports: [
                _lazy_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["LazyDropdownComponent"],
            ]
        })
    ], LazyDropdownModule);
    return LazyDropdownModule;
}());



/***/ }),

/***/ "./src/app/lazy-dropdown/lazy-scroll-data-source.ts":
/*!**********************************************************!*\
  !*** ./src/app/lazy-dropdown/lazy-scroll-data-source.ts ***!
  \**********************************************************/
/*! exports provided: LazyDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDataSource", function() { return LazyDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LazyDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LazyDataSource, _super);
    function LazyDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        _this._length = 100000;
        _this._pageSize = 100;
        _this._cachedData = Array.from({ length: _this._length });
        _this._fetchedPages = new Set();
        _this._dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_this._cachedData);
        _this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        return _this;
    }
    LazyDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
            var startPage = _this._getPageForIndex(range.start);
            var endPage = _this._getPageForIndex(range.end - 1);
            for (var i = startPage; i <= endPage; i++) {
                _this._fetchPage(i);
            }
        }));
        return this._dataStream;
    };
    LazyDataSource.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    LazyDataSource.prototype._getPageForIndex = function (index) {
        return Math.floor(index / this._pageSize);
    };
    LazyDataSource.prototype._fetchPage = function (page) {
        var _this = this;
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(function () {
            var _a;
            (_a = _this._cachedData).splice.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([page * _this._pageSize, _this._pageSize], Array.from({ length: _this._pageSize })
                .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); })));
            _this._dataStream.next(_this._cachedData);
        }, Math.random() * 1000 + 200);
    };
    return LazyDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/lazy-dropdown/options-virtual-scroll-manager.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/lazy-dropdown/options-virtual-scroll-manager.directive.ts ***!
  \***************************************************************************/
/*! exports provided: OptionsVirtualScrollManagerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsVirtualScrollManagerDirective", function() { return OptionsVirtualScrollManagerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/cdk/scrolling */ "./node_modules/primeng-iow/cdk/scrolling/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");




var OptionsVirtualScrollManagerDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OptionsVirtualScrollManagerDirective, _super);
    function OptionsVirtualScrollManagerDirective(scrollable) {
        var _this = _super.call(this) || this;
        _this.scrollable = scrollable;
        return _this;
    }
    OptionsVirtualScrollManagerDirective.prototype.scrollToOption = function (item) {
        var start = this.scrollable.getRenderedRange().start;
        var index = this.options.toArray().indexOf(item) + start;
        this.scrollToIndex(index);
    };
    OptionsVirtualScrollManagerDirective.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["CdkVirtualScrollViewport"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appOptionsVirtualScrollManager'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OptionsVirtualScrollManagerDirective.prototype, "config", void 0);
    OptionsVirtualScrollManagerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOptionsVirtualScrollManager]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["CdkVirtualScrollViewport"]])
    ], OptionsVirtualScrollManagerDirective);
    return OptionsVirtualScrollManagerDirective;
}(primeng_iow_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["OptionsScrollManagerComponent"]));



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  /* Dimensions */\n  --small-width: 494px;\n  --medium-width: 656px;\n  --large-width: 816px;\n  --extra-large-width: 976px;\n\n  --header-height: 64px;\n\n  --small-indent: 8px;\n  --medium-indent: 16px;\n  --large-indent: 24px;\n  --extra-large-indent: 32px;\n\n  --border-radius: 4px;\n  --page-padding: 128px;\n\n  /* grid */\n  --container-gutter: 16px;\n  --gutter: 16px;\n  --rows-space: 8px;\n\n  /* Colors:basic-theme */\n  --primary: #007aff;\n  --secondary: #5ac8fa;\n  --header-bg: #3E3F41;\n  --header-links: #ffffff;\n  --global-bg: #e3e3e5;\n  --primary-hover-bg: color(var(--primary) blend(#fff 85%));\n  --primary-focus-shadow: 0 0 0 2px color(var(--primary) blend(#fff 70%));\n  --primary-active-bg: color(var(--primary) blend(#fff 70%));\n  --secondary-hover-bg: color(var(--secondary) blend(#fff 85%));\n  --secondary-active-bg: color(var(--secondary) blend(#fff 70%));\n  --error-bg: color(var(--error) blend(#fff 80%));\n\n  /* Colors:system */\n  --text: #202020;\n  --secondary-text: #666;\n  --caption: #8a8a8f;\n  --divider: #c8c7cc;\n  --cards-bg: #ffffff;\n  --content-bg: #efeff4;\n\n  /* Colors:semantic */\n  --success: #32b643;\n  --warning: #ffb700;\n  --error: #ff3b30;\n\n  /* Typographics */\n  --main-font: \"Roboto\", Arial, Helvetica, sans-serif;\n\n  /* Decorations */\n  --cards-shadow: 0 0 1px 0 rgba(45, 49, 56, 0.2), 0 8px 24px 0 rgba(0, 0, 0, 0.2);\n  --cards-border: 0;\n  --menu-shadow: 0 0 1px 0 rgba(45, 49, 56, 0.2), 0 8px 24px 0 rgba(0, 0, 0, 0.2);\n  --menu-border: 0;\n  --inputs-shadow: 0px 0px 1px 2px color(var(--primary) blend(#fff 85%));\n\n  /* Layout */\n  --logo-image: \"u-workflow.core/app/styles/main-logo.svg\";\n  --logo-image-inline: inline(\"u-workflow.core/app/styles/main-logo.svg\");\n\n  --copyright-text: \"© IPONWEB, All Rights Reserved\";\n}\n\n\n.sidenav-container {\n  height: 100%;\n}\n\n\n.sidenav {\n  width: 200px;\n}\n\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n\n.link {\n  margin-right: var(--medium-indent);\n  color: var(--header-links);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQiwwQkFBMEI7O0VBRTFCLHFCQUFxQjs7RUFFckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsMEJBQTBCOztFQUUxQixvQkFBb0I7RUFDcEIscUJBQXFCOztFQUVyQixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxpQkFBaUI7O0VBRWpCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlEQUF5RDtFQUN6RCx1RUFBdUU7RUFDdkUsMERBQTBEO0VBQzFELDZEQUE2RDtFQUM3RCw4REFBOEQ7RUFDOUQsK0NBQStDOztFQUUvQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7O0VBRXJCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsaUJBQWlCO0VBQ2pCLG1EQUFtRDs7RUFFbkQsZ0JBQWdCO0VBQ2hCLGdGQUFnRjtFQUNoRixpQkFBaUI7RUFDakIsK0VBQStFO0VBQy9FLGdCQUFnQjtFQUNoQixzRUFBc0U7O0VBRXRFLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsdUVBQXVFOztFQUV2RSxrREFBa0Q7QUFDcEQ7OztBQzVEQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC8qIERpbWVuc2lvbnMgKi9cbiAgLS1zbWFsbC13aWR0aDogNDk0cHg7XG4gIC0tbWVkaXVtLXdpZHRoOiA2NTZweDtcbiAgLS1sYXJnZS13aWR0aDogODE2cHg7XG4gIC0tZXh0cmEtbGFyZ2Utd2lkdGg6IDk3NnB4O1xuXG4gIC0taGVhZGVyLWhlaWdodDogNjRweDtcblxuICAtLXNtYWxsLWluZGVudDogOHB4O1xuICAtLW1lZGl1bS1pbmRlbnQ6IDE2cHg7XG4gIC0tbGFyZ2UtaW5kZW50OiAyNHB4O1xuICAtLWV4dHJhLWxhcmdlLWluZGVudDogMzJweDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDEyOHB4O1xuXG4gIC8qIGdyaWQgKi9cbiAgLS1jb250YWluZXItZ3V0dGVyOiAxNnB4O1xuICAtLWd1dHRlcjogMTZweDtcbiAgLS1yb3dzLXNwYWNlOiA4cHg7XG5cbiAgLyogQ29sb3JzOmJhc2ljLXRoZW1lICovXG4gIC0tcHJpbWFyeTogIzAwN2FmZjtcbiAgLS1zZWNvbmRhcnk6ICM1YWM4ZmE7XG4gIC0taGVhZGVyLWJnOiAjM0UzRjQxO1xuICAtLWhlYWRlci1saW5rczogI2ZmZmZmZjtcbiAgLS1nbG9iYWwtYmc6ICNlM2UzZTU7XG4gIC0tcHJpbWFyeS1ob3Zlci1iZzogY29sb3IodmFyKC0tcHJpbWFyeSkgYmxlbmQoI2ZmZiA4NSUpKTtcbiAgLS1wcmltYXJ5LWZvY3VzLXNoYWRvdzogMCAwIDAgMnB4IGNvbG9yKHZhcigtLXByaW1hcnkpIGJsZW5kKCNmZmYgNzAlKSk7XG4gIC0tcHJpbWFyeS1hY3RpdmUtYmc6IGNvbG9yKHZhcigtLXByaW1hcnkpIGJsZW5kKCNmZmYgNzAlKSk7XG4gIC0tc2Vjb25kYXJ5LWhvdmVyLWJnOiBjb2xvcih2YXIoLS1zZWNvbmRhcnkpIGJsZW5kKCNmZmYgODUlKSk7XG4gIC0tc2Vjb25kYXJ5LWFjdGl2ZS1iZzogY29sb3IodmFyKC0tc2Vjb25kYXJ5KSBibGVuZCgjZmZmIDcwJSkpO1xuICAtLWVycm9yLWJnOiBjb2xvcih2YXIoLS1lcnJvcikgYmxlbmQoI2ZmZiA4MCUpKTtcblxuICAvKiBDb2xvcnM6c3lzdGVtICovXG4gIC0tdGV4dDogIzIwMjAyMDtcbiAgLS1zZWNvbmRhcnktdGV4dDogIzY2NjtcbiAgLS1jYXB0aW9uOiAjOGE4YThmO1xuICAtLWRpdmlkZXI6ICNjOGM3Y2M7XG4gIC0tY2FyZHMtYmc6ICNmZmZmZmY7XG4gIC0tY29udGVudC1iZzogI2VmZWZmNDtcblxuICAvKiBDb2xvcnM6c2VtYW50aWMgKi9cbiAgLS1zdWNjZXNzOiAjMzJiNjQzO1xuICAtLXdhcm5pbmc6ICNmZmI3MDA7XG4gIC0tZXJyb3I6ICNmZjNiMzA7XG5cbiAgLyogVHlwb2dyYXBoaWNzICovXG4gIC0tbWFpbi1mb250OiBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4gIC8qIERlY29yYXRpb25zICovXG4gIC0tY2FyZHMtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSg0NSwgNDksIDU2LCAwLjIpLCAwIDhweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtLWNhcmRzLWJvcmRlcjogMDtcbiAgLS1tZW51LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoNDUsIDQ5LCA1NiwgMC4yKSwgMCA4cHggMjRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLS1tZW51LWJvcmRlcjogMDtcbiAgLS1pbnB1dHMtc2hhZG93OiAwcHggMHB4IDFweCAycHggY29sb3IodmFyKC0tcHJpbWFyeSkgYmxlbmQoI2ZmZiA4NSUpKTtcblxuICAvKiBMYXlvdXQgKi9cbiAgLS1sb2dvLWltYWdlOiBcInUtd29ya2Zsb3cuY29yZS9hcHAvc3R5bGVzL21haW4tbG9nby5zdmdcIjtcbiAgLS1sb2dvLWltYWdlLWlubGluZTogaW5saW5lKFwidS13b3JrZmxvdy5jb3JlL2FwcC9zdHlsZXMvbWFpbi1sb2dvLnN2Z1wiKTtcblxuICAtLWNvcHlyaWdodC10ZXh0OiBcIsKpIElQT05XRUIsIEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuY3NzXCI7XG5cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubGluayB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWVkaXVtLWluZGVudCk7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItbGlua3MpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_path_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../root-path.enum */ "./src/app/root-path.enum.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.links = [
            // {label: 'Dashboard', url: `/${RootPathEnum.DashboardComponent}`},
            // {label: 'Options Group', url: `/${RootPathEnum.OptionsGroupListComponent}`},
            { label: 'Drag & Drop', url: "/" + _root_path_enum__WEBPACK_IMPORTED_MODULE_2__["RootPathEnum"].DragDropComponent },
            { label: 'Drag & Drop Navigation', url: "/" + _root_path_enum__WEBPACK_IMPORTED_MODULE_2__["RootPathEnum"].DragDropNavigationComponent },
            { label: 'Flat Tree', url: "/" + _root_path_enum__WEBPACK_IMPORTED_MODULE_2__["RootPathEnum"].TreeComponent },
            { label: 'Nested Tree', url: "/" + _root_path_enum__WEBPACK_IMPORTED_MODULE_2__["RootPathEnum"].NestedTreeComponent },
            // {label: 'InfiniteScroll', url: `/${RootPathEnum.VirtualScrollComponent}`},
            { label: 'LazyDropdown', url: "/" + _root_path_enum__WEBPACK_IMPORTED_MODULE_2__["RootPathEnum"].LazyDropdownComponent },
        ];
    }
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/options-group-list/option-group/option-group.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/options-group-list/option-group/option-group.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label{\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy1ncm91cC1saXN0L29wdGlvbi1ncm91cC9vcHRpb24tZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMtZ3JvdXAtbGlzdC9vcHRpb24tZ3JvdXAvb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/options-group-list/option-group/option-group.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/options-group-list/option-group/option-group.component.ts ***!
  \***************************************************************************/
/*! exports provided: OptionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionGroupComponent", function() { return OptionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionGroupComponent = /** @class */ (function () {
    function OptionGroupComponent() {
    }
    OptionGroupComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OptionGroupComponent.prototype, "label", void 0);
    OptionGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-option-group',
            template: __webpack_require__(/*! raw-loader!./option-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/options-group-list/option-group/option-group.component.html"),
            styles: [__webpack_require__(/*! ./option-group.component.css */ "./src/app/options-group-list/option-group/option-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionGroupComponent);
    return OptionGroupComponent;
}());



/***/ }),

/***/ "./src/app/options-group-list/options-group-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/options-group-list/options-group-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMtZ3JvdXAtbGlzdC9vcHRpb25zLWdyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/options-group-list/options-group-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/options-group-list/options-group-list.component.ts ***!
  \********************************************************************/
/*! exports provided: OptionsGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsGroupListComponent", function() { return OptionsGroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var OptionsGroupListComponent = /** @class */ (function () {
    function OptionsGroupListComponent() {
        this.FocusKeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusKeyManager"];
        this.keydown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.groups = [
            {
                label: 'Grass',
                options: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                label: 'Water',
                options: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                label: 'Fire',
                options: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                label: 'Psychic',
                options: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    OptionsGroupListComponent.prototype.ngOnInit = function () {
    };
    OptionsGroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-group-list',
            template: __webpack_require__(/*! raw-loader!./options-group-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/options-group-list/options-group-list.component.html"),
            styles: [__webpack_require__(/*! ./options-group-list.component.css */ "./src/app/options-group-list/options-group-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsGroupListComponent);
    return OptionsGroupListComponent;
}());



/***/ }),

/***/ "./src/app/root-path.enum.ts":
/*!***********************************!*\
  !*** ./src/app/root-path.enum.ts ***!
  \***********************************/
/*! exports provided: RootPathEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPathEnum", function() { return RootPathEnum; });
var RootPathEnum;
(function (RootPathEnum) {
    RootPathEnum["OptionsGroupListComponent"] = "options-group-list-component";
    RootPathEnum["DashboardComponent"] = "dashboard-component";
    RootPathEnum["DragDropComponent"] = "drag-drop-component";
    RootPathEnum["DragDropNavigationComponent"] = "drag-drop-navigation-component";
    RootPathEnum["TreeComponent"] = "tree-component";
    RootPathEnum["NestedTreeComponent"] = "nested-tree-component";
    RootPathEnum["DemoTableComponent"] = "demo-table-component";
    RootPathEnum["VirtualScrollComponent"] = "virtual-scroll-component";
    RootPathEnum["LazyDropdownComponent"] = "lazy-dropdown-component";
})(RootPathEnum || (RootPathEnum = {}));


/***/ }),

/***/ "./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActivityManagerUpgradedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityManagerUpgradedComponent", function() { return ActivityManagerUpgradedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");



var ActivityManagerUpgradedComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActivityManagerUpgradedComponent, _super);
    function ActivityManagerUpgradedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityManagerUpgradedComponent_1 = ActivityManagerUpgradedComponent;
    ActivityManagerUpgradedComponent.prototype.ngAfterContentInit = function () {
        _super.prototype.ngAfterContentInit.call(this);
        this.keyManager.setFirstItemActive();
    };
    var ActivityManagerUpgradedComponent_1;
    ActivityManagerUpgradedComponent = ActivityManagerUpgradedComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-manager-upgraded',
            template: '<ng-content></ng-content>',
            providers: [{
                    provide: primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__["OptionsActivityManagerComponent"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ActivityManagerUpgradedComponent_1; }),
                }]
        })
    ], ActivityManagerUpgradedComponent);
    return ActivityManagerUpgradedComponent;
}(primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__["OptionsActivityManagerComponent"]));



/***/ }),

/***/ "./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/activity-manager-upgraded/activity-manager-upgraded.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActivityManagerUpgradedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityManagerUpgradedDirective", function() { return ActivityManagerUpgradedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");
/* harmony import */ var _is_with_type_ahead_config_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-with-type-ahead-config.guard */ "./src/app/shared/activity-manager-upgraded/is-with-type-ahead-config.guard.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ActivityManagerUpgradedDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActivityManagerUpgradedDirective, _super);
    function ActivityManagerUpgradedDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keydown$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        return _this;
    }
    ActivityManagerUpgradedDirective_1 = ActivityManagerUpgradedDirective;
    ActivityManagerUpgradedDirective.prototype.select = function ($event) {
        if (this.config.selfService) {
            this.keyManager.onKeydown($event);
        }
    };
    ActivityManagerUpgradedDirective.prototype.ngAfterContentInit = function () {
        _super.prototype.ngAfterContentInit.call(this);
        if (!this.config) {
            return;
        }
        if (this.config.withWrap) {
            this.keyManager.withWrap(true);
        }
        if (this.config.withTypeAhead) {
            var withTypeAheadConfig = this.config.withTypeAhead;
            var debounce = Object(_is_with_type_ahead_config_guard__WEBPACK_IMPORTED_MODULE_3__["isWithTypeAheadConfig"])(withTypeAheadConfig) ? withTypeAheadConfig.debounceInterval : 300;
            this.keyManager.withTypeAhead(debounce);
        }
    };
    var ActivityManagerUpgradedDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActivityManagerUpgradedDirective.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appActivityManagerDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActivityManagerUpgradedDirective.prototype, "KeyManager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ActivityManagerUpgradedDirective.prototype, "select", null);
    ActivityManagerUpgradedDirective = ActivityManagerUpgradedDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appActivityManagerDirective]',
            providers: [{
                    provide: primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__["OptionsActivityManagerComponent"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ActivityManagerUpgradedDirective_1; }),
                }],
            exportAs: 'appActivityManagerDirective',
        })
    ], ActivityManagerUpgradedDirective);
    return ActivityManagerUpgradedDirective;
}(primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_2__["OptionsActivityManagerComponent"]));



/***/ }),

/***/ "./src/app/shared/activity-manager-upgraded/is-with-type-ahead-config.guard.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/activity-manager-upgraded/is-with-type-ahead-config.guard.ts ***!
  \*************************************************************************************/
/*! exports provided: isWithTypeAheadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWithTypeAheadConfig", function() { return isWithTypeAheadConfig; });
function isWithTypeAheadConfig(value) {
    return typeof value.debounceInterval === 'number';
}


/***/ }),

/***/ "./src/app/shared/focusable-option/focusable-option.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/focusable-option/focusable-option.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb2N1c2FibGUtb3B0aW9uL2ZvY3VzYWJsZS1vcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/focusable-option/focusable-option.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/focusable-option/focusable-option.component.ts ***!
  \***********************************************************************/
/*! exports provided: FocusableOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusableOptionComponent", function() { return FocusableOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/cdk/options */ "./node_modules/primeng-iow/cdk/options/index.js");
/* harmony import */ var primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng-iow/cdk/options-selection-manager */ "./node_modules/primeng-iow/cdk/options-selection-manager/index.js");




var FocusableOptionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FocusableOptionComponent, _super);
    function FocusableOptionComponent(cd, selectionManager) {
        var _this = _super.call(this) || this;
        _this.cd = cd;
        _this.selectionManager = selectionManager;
        _this.getLabel = function () { return _this.value; };
        return _this;
    }
    FocusableOptionComponent_1 = FocusableOptionComponent;
    FocusableOptionComponent.prototype.focus = function (origin) {
        this.label.nativeElement.focus();
        this.activateViaInteraction();
    };
    var FocusableOptionComponent_1;
    FocusableOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_3__["OptionsSelectionManagerComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FocusableOptionComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('label', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FocusableOptionComponent.prototype, "label", void 0);
    FocusableOptionComponent = FocusableOptionComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-focusable-option',
            template: __webpack_require__(/*! raw-loader!./focusable-option.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/focusable-option/focusable-option.component.html"),
            providers: [primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__["BaseOption"].provideBaseOption(FocusableOptionComponent_1)],
            styles: [__webpack_require__(/*! ./focusable-option.component.css */ "./src/app/shared/focusable-option/focusable-option.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            primeng_iow_cdk_options_selection_manager__WEBPACK_IMPORTED_MODULE_3__["OptionsSelectionManagerComponent"]])
    ], FocusableOptionComponent);
    return FocusableOptionComponent;
}(primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__["BaseOption"]));



/***/ }),

/***/ "./src/app/shared/highlightable-content-option-upgraded/highlightable-content-option-upgraded.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/highlightable-content-option-upgraded/highlightable-content-option-upgraded.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HighlightableContentOptionUpgradedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightableContentOptionUpgradedComponent", function() { return HighlightableContentOptionUpgradedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-iow/cdk/options */ "./node_modules/primeng-iow/cdk/options/index.js");



var HighlightableContentOptionUpgradedComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HighlightableContentOptionUpgradedComponent, _super);
    function HighlightableContentOptionUpgradedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLabel = function () { return _this.labelGetter(_this.value); };
        return _this;
    }
    HighlightableContentOptionUpgradedComponent_1 = HighlightableContentOptionUpgradedComponent;
    var HighlightableContentOptionUpgradedComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('getLabel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], HighlightableContentOptionUpgradedComponent.prototype, "labelGetter", void 0);
    HighlightableContentOptionUpgradedComponent = HighlightableContentOptionUpgradedComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-highlightable-content-option',
            template: '{{getLabel()}}',
            providers: [primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__["BaseOption"].provideBaseOption(HighlightableContentOptionUpgradedComponent_1)],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], HighlightableContentOptionUpgradedComponent);
    return HighlightableContentOptionUpgradedComponent;
}(primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_2__["HighlightableContentOption"]));



/***/ }),

/***/ "./src/app/tree/flat-tree/flat-tree.component.css":
/*!********************************************************!*\
  !*** ./src/app/tree/flat-tree/flat-tree.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-icon {\n  color: #757575;\n  margin-right: 5px;\n}\n\n.example-tree-node {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS9mbGF0LXRyZWUvZmxhdC10cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvZmxhdC10cmVlL2ZsYXQtdHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUtaWNvbiB7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmV4YW1wbGUtdHJlZS1ub2RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tree/flat-tree/flat-tree.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tree/flat-tree/flat-tree.component.ts ***!
  \*******************************************************/
/*! exports provided: FlatTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeComponent", function() { return FlatTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _flat_tree_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flat-tree.const */ "./src/app/tree/flat-tree/flat-tree.const.ts");
/* harmony import */ var primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng-iow/cdk/options-activity-manager */ "./node_modules/primeng-iow/cdk/options-activity-manager/index.js");
/* harmony import */ var primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng-iow/cdk/options */ "./node_modules/primeng-iow/cdk/options/index.js");








var FlatTreeComponent = /** @class */ (function () {
    function FlatTreeComponent() {
        this.KeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["ActiveDescendantKeyManager"];
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.data = _flat_tree_const__WEBPACK_IMPORTED_MODULE_5__["TREE_DATA"];
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["ArrayDataSource"](this.data);
        this.activityManagerConfig = {
            withTypeAhead: { debounceInterval: 0 },
            selfService: true,
        };
    }
    Object.defineProperty(FlatTreeComponent.prototype, "activeNode", {
        get: function () {
            var activeOption = this.activityManager.keyManager.activeItem;
            return activeOption && activeOption.value;
        },
        enumerable: true,
        configurable: true
    });
    FlatTreeComponent.prototype.labelGetter = function (node) {
        return node.name;
    };
    FlatTreeComponent.prototype.ngOnInit = function () {
        this.treeControl.dataNodes = this.data;
    };
    FlatTreeComponent.prototype.onArrowLeft = function () {
        var _this = this;
        if (this.activeNode && this.treeControl.isExpandable(this.activeNode) && this.treeControl.isExpanded(this.activeNode)) {
            this.treeControl.collapseDescendants(this.activeNode);
        }
        else {
            var parentOption = this.options.find(function (option) { return option.value === _this.getParentNode(_this.activeNode); });
            parentOption ? this.activityManager.keyManager.setActiveItem(parentOption) : this.activityManager.keyManager.setPreviousItemActive();
        }
    };
    FlatTreeComponent.prototype.onArrowRight = function () {
        if (this.activeNode && this.treeControl.isExpandable(this.activeNode) && !this.treeControl.isExpanded(this.activeNode)) {
            this.treeControl.expand(this.activeNode);
        }
        else {
            this.activityManager.keyManager.setNextItemActive();
        }
    };
    FlatTreeComponent.prototype.shouldRender = function (node) {
        return !this.hasCollapsedParent(node);
    };
    FlatTreeComponent.prototype.hasCollapsedParent = function (node) {
        var parent = this.getParentNode(node);
        if (!parent) {
            return false;
        }
        return !this.treeControl.isExpanded(parent) || this.hasCollapsedParent(parent);
    };
    FlatTreeComponent.prototype.getParentNode = function (node) {
        var nodeIndex = this.data.indexOf(node);
        for (var i = nodeIndex - 1; i >= 0; i--) {
            if (this.data[i].level === node.level - 1) {
                return this.data[i];
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_6__["OptionsActivityManagerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_iow_cdk_options_activity_manager__WEBPACK_IMPORTED_MODULE_6__["OptionsActivityManagerComponent"])
    ], FlatTreeComponent.prototype, "activityManager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(primeng_iow_cdk_options__WEBPACK_IMPORTED_MODULE_7__["BaseOption"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FlatTreeComponent.prototype, "options", void 0);
    FlatTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flat-tree',
            template: __webpack_require__(/*! raw-loader!./flat-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/tree/flat-tree/flat-tree.component.html"),
            styles: [__webpack_require__(/*! ./flat-tree.component.css */ "./src/app/tree/flat-tree/flat-tree.component.css")]
        })
    ], FlatTreeComponent);
    return FlatTreeComponent;
}());



/***/ }),

/***/ "./src/app/tree/flat-tree/flat-tree.const.ts":
/*!***************************************************!*\
  !*** ./src/app/tree/flat-tree/flat-tree.const.ts ***!
  \***************************************************/
/*! exports provided: TREE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_DATA", function() { return TREE_DATA; });
var TREE_DATA = [
    { name: 'Fruit', expandable: true, level: 0 },
    { name: 'Apple', expandable: false, level: 1 },
    { name: 'Banana', expandable: false, level: 1 },
    { name: 'Fruit loops', expandable: false, level: 1 },
    { name: 'Vegetables', expandable: true, level: 0 },
    { name: 'Orange', expandable: true, level: 1 },
    { name: 'Pumpkins', expandable: false, level: 2 },
    { name: 'Carrots', expandable: false, level: 2 },
    { name: 'Green', expandable: true, level: 1 },
    { name: 'Broccoli', expandable: false, level: 2 },
    { name: 'Sprouts', expandable: true, level: 2 },
    { name: 'Brussel sprouts', expandable: false, level: 3 },
    { name: 'Alien sprouts', expandable: false, level: 3 },
    { name: 'My Awesome sprouts', expandable: false, level: 3 },
];


/***/ }),

/***/ "./src/app/tree/nested-tree/example-data.ts":
/*!**************************************************!*\
  !*** ./src/app/tree/nested-tree/example-data.ts ***!
  \**************************************************/
/*! exports provided: TREE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_DATA", function() { return TREE_DATA; });
var TREE_DATA = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/tree/nested-tree/nested-tree.component.css":
/*!************************************************************!*\
  !*** ./src/app/tree/nested-tree/nested-tree.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\nhighlightable-content-option {\n  display: initial;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS9uZXN0ZWQtdHJlZS9uZXN0ZWQtdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvbmVzdGVkLXRyZWUvbmVzdGVkLXRyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmV4YW1wbGUtdHJlZSB1bCxcbi5leGFtcGxlLXRyZWUgbGkge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5leGFtcGxlLXRyZWUtbm9kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhhbXBsZS10cmVlLW5vZGUgLmV4YW1wbGUtdHJlZS1ub2RlIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG5oaWdobGlnaHRhYmxlLWNvbnRlbnQtb3B0aW9uIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tree/nested-tree/nested-tree.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tree/nested-tree/nested-tree.component.ts ***!
  \***********************************************************/
/*! exports provided: NestedTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeComponent", function() { return NestedTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _example_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-data */ "./src/app/tree/nested-tree/example-data.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var NestedTreeComponent = /** @class */ (function () {
    function NestedTreeComponent() {
        this.KeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["ActiveDescendantKeyManager"];
        this.keydown$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["NestedTreeControl"](function (node) { return node.children; });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["ArrayDataSource"](_example_data__WEBPACK_IMPORTED_MODULE_4__["TREE_DATA"]);
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
    }
    NestedTreeComponent.prototype.labelGetter = function (node) {
        return node.name;
    };
    NestedTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nested-tree',
            template: __webpack_require__(/*! raw-loader!./nested-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/tree/nested-tree/nested-tree.component.html"),
            styles: [__webpack_require__(/*! ./nested-tree.component.css */ "./src/app/tree/nested-tree/nested-tree.component.css")]
        })
    ], NestedTreeComponent);
    return NestedTreeComponent;
}());



/***/ }),

/***/ "./src/app/virtual-scroll/virtual-scroll.component.css":
/*!*************************************************************!*\
  !*** ./src/app/virtual-scroll/virtual-scroll.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 400px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n\ncdk-virtual-scroll-viewport {\n  margin: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/virtual-scroll/virtual-scroll.component.ts":
/*!************************************************************!*\
  !*** ./src/app/virtual-scroll/virtual-scroll.component.ts ***!
  \************************************************************/
/*! exports provided: VirtualScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollComponent", function() { return VirtualScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var VirtualScrollComponent = /** @class */ (function () {
    function VirtualScrollComponent() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        this.FocusKeyManager = _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusKeyManager"];
        this.activityManagerConfig = {
            withWrap: true,
            withTypeAhead: { debounceInterval: 0 },
        };
        this.keydown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    VirtualScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-virtual-scroll',
            template: __webpack_require__(/*! raw-loader!./virtual-scroll.component.html */ "./node_modules/raw-loader/index.js!./src/app/virtual-scroll/virtual-scroll.component.html"),
            styles: [__webpack_require__(/*! ./virtual-scroll.component.css */ "./src/app/virtual-scroll/virtual-scroll.component.css")]
        })
    ], VirtualScrollComponent);
    return VirtualScrollComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
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

module.exports = __webpack_require__(/*! /Users/ymasian/iponweb/core/u-cdk-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map