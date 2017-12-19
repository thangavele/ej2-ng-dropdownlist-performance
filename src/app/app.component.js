"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        // maps the appropriate column to fields property
        this.fields = { text: 'Number', value: 'Id' };
        //set the placeholder to DropDownList input
        this.text = "Select a number";
        this.dataQuery = new ej2_data_1.Query().take(50);
        this.onFiltering = function (e) {
            var query = new ej2_data_1.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Number', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(_this.data, query);
        };
        this.data = [];
        for (var i = 0; i < 10000; i++) {
            this.data[i] = { Number: (1001 + i).toString(), Id: i };
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // specifies the template string for the DropDownList component with change event
        template: "<ej-dropdownlist id='ddlelement' #samples [allowFiltering]='true' (filtering)='onFiltering($event)' [query]='dataQuery' [dataSource]='data' [fields]='fields' [placeholder]='text'>\n  <template #footerTemplate=\"\" let-data=\"\">\n  <div style=\"text-align:center;line-height:40px;background-color:#DCDCDC;\">Search more result</div>\n  </template>\n  </ej-dropdownlist>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map