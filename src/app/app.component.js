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
var ej2_ng_dropdowns_1 = require("@syncfusion/ej2-ng-dropdowns");
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.ddlValue = 1000;
        this.fullData = [];
        // maps the appropriate column to fields property
        this.fields = { text: 'Number', value: 'Id' };
        //set the placeholder to DropDownList input
        this.text = "Select a number";
        // Open event callback function
        this.onOpen = function (e) {
            // override the popup position to avoid the confusion with bottom textbox
            _this.ddlObj.popupObj.offsetY = -(_this.ddlObj.inputWrapper.container.offsetHeight + 2); // 2 for border of textbox wrapper element
        };
        // filtering event callback function
        this.onFiltering = function (e) {
            var query = new ej2_data_1.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Number', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(_this.data, query);
        };
        for (var i = 0; i < 10000; i++) {
            this.fullData[i] = { Number: (1001 + i).toString(), Id: i };
        }
        // Get the first 50 data items from fullData and assign it to this.initialData.
        this.initialData = new ej2_data_1.DataManager(this.fullData).executeLocal(new ej2_data_1.Query().take(50));
        // Get the DropDownList initial render value from fullData and assign it to this.initialData.
        var secondData = new ej2_data_1.DataManager(this.fullData).executeLocal(new ej2_data_1.Query().where('Id', 'equal', this.ddlValue));
        // Concat the this.initialData and secondData and then assign it to this.data for DropDownList dataSource
        this.data = this.initialData.concat(secondData);
        // Set the current DropDownList dataSource to this.initialData.
        this.initialData = this.data;
    }
    AppComponent.prototype.onChange = function (e) {
        // Get the current value item from full data.
        var secondData = new ej2_data_1.DataManager(this.fullData).executeLocal(new ej2_data_1.Query().where('Id', 'equal', e.target.valueAsNumber));
        // Concat the current value item with initial loaded data.
        this.data = this.initialData.concat(secondData);
        // Set the current DropDownList dataSource to this.initialData.
        this.initialData = this.data;
        // Set the current numeric textbox value to DropDownList value property.
        this.ddlValue = e.target.valueAsNumber;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('samples'),
    __metadata("design:type", ej2_ng_dropdowns_1.DropDownListComponent)
], AppComponent.prototype, "ddlObj", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // specifies the template string for the DropDownList component with change event
        template: "<ej-dropdownlist id='ddlelement' #samples  [value]='ddlValue' [allowFiltering]='true' (open)='onOpen($event)' (filtering)='onFiltering($event)'  [dataSource]='data' [fields]='fields' [placeholder]='text'>\n  <template #footerTemplate=\"\" let-data=\"\">\n  <div style=\"text-align:center;line-height:40px;background-color:#DCDCDC;\">Search more result</div>\n  </template>\n  </ej-dropdownlist>\n  <h4>Type value</h4>\n  <input type=\"number\" [value]='1000' (input)='onChange($event)' style=\"padding:5px;width:100%;margin-top: 20px;\"/>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map