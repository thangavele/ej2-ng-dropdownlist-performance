import { Component } from '@angular/core';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'my-app',
  // specifies the template string for the DropDownList component with change event
  template: `<ej-dropdownlist id='ddlelement' #samples [allowFiltering]='true' (filtering)='onFiltering($event)' [query]='dataQuery' [dataSource]='data' [fields]='fields' [placeholder]='text'>
  <template #footerTemplate="" let-data="">
  <div style="text-align:center;line-height:40px;background-color:#DCDCDC;">Search more result</div>
  </template>
  </ej-dropdownlist>`
})
export class AppComponent {

  // defined the array of data
  public data: { [key: string]: Object }[];
  constructor() {
    this.data = [];
    for (let i: number = 0; i < 10000; i++) {
      this.data[i] = { Number: (1001 + i).toString(), Id: i };
    }
  }
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Number', value: 'Id' };

  //set the placeholder to DropDownList input
  public text: string = "Select a number";

  public dataQuery: Query = new Query().take(50);

  public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
    let query: Query = new Query();
    // frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('Number', 'startswith', e.text, true) : query;
    // pass the filter data source, filter query to updateData method.
    e.updateData(this.data, query);
  }

}

