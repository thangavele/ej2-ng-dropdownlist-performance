import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent, FilteringEventArgs, PopupEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { Query, Predicate, DataManager } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';
import { debug } from 'util';
import { ChangeArgs } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'my-app',
  // specifies the template string for the DropDownList component with change event
  template: `<ej-dropdownlist id='ddlelement' #samples  [value]='ddlValue' [allowFiltering]='true' (open)='onOpen($event)' (filtering)='onFiltering($event)'  [dataSource]='data' [fields]='fields' [placeholder]='text'>
  <template #footerTemplate="" let-data="">
  <div style="text-align:center;line-height:40px;background-color:#DCDCDC;">Search more result</div>
  </template>
  </ej-dropdownlist>
  <h4>Type value</h4>
  <input type="number" [value]='1000' (input)='onChange($event)' style="padding:5px;width:100%;margin-top: 20px;"/>
  `
})
export class AppComponent {
  @ViewChild('samples')

  public ddlObj: DropDownListComponent;

  // defined the array of data
  public data: { [key: string]: Object }[];

  public ddlValue: number = 1000;

  public initialData: any;

  public fullData: any = [];

  constructor() {
    for (let i: number = 0; i < 10000; i++) {
      this.fullData[i] = { Number: (1001 + i).toString(), Id: i };
    }

    // Get the first 50 data items from fullData and assign it to this.initialData.
    this.initialData = new DataManager(this.fullData).executeLocal(new Query().take(50));

    // Get the DropDownList initial render value from fullData and assign it to this.initialData.
    let secondData: any = new DataManager(this.fullData).executeLocal(new Query().where('Id', 'equal', this.ddlValue));

    // Concat the this.initialData and secondData and then assign it to this.data for DropDownList dataSource
    this.data = this.initialData.concat(secondData);

    // Set the current DropDownList dataSource to this.initialData.
    this.initialData = this.data;
  }

  // maps the appropriate column to fields property
  public fields: Object = { text: 'Number', value: 'Id' };

  //set the placeholder to DropDownList input
  public text: string = "Select a number";

  // Open event callback function
  public onOpen: EmitType<PopupEventArgs> = (e: PopupEventArgs) => {
    // override the popup position to avoid the confusion with bottom textbox
    (this.ddlObj as any).popupObj.offsetY = -((this.ddlObj as any).inputWrapper.container.offsetHeight + 2); // 2 for border of textbox wrapper element
  }

  // filtering event callback function
  public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
    let query: Query = new Query();
    // frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('Number', 'startswith', e.text, true) : query;
    // pass the filter data source, filter query to updateData method.
    e.updateData(this.data, query);
  }

  public onChange(e: any) {
    // Get the current value item from full data.
    let secondData: any = new DataManager(this.fullData).executeLocal(new Query().where('Id', 'equal', e.target.valueAsNumber));

    // Concat the current value item with initial loaded data.
    this.data = this.initialData.concat(secondData);

    // Set the current DropDownList dataSource to this.initialData.
    this.initialData = this.data;

    // Set the current numeric textbox value to DropDownList value property.
    this.ddlValue = e.target.valueAsNumber;
  }
}

