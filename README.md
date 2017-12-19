# DropDownList to better performance 

## Query

 When the data source is large, the dropdown becomes really slow. It is taking too much time to load and even when the data is loaded, the time taken in between user click and opening of the pop up list of dropdown is way too much.
 

We are removed the popup element from DOM while close the popup. Browser has been taken some times while append to DOM. 

## Solution

We can config the DropDownList to better performance for large data’s in DropDownList.
	
-	If we have large data, we can set it to DropDownList and to show the limited items in popup, use query property with take method. Refer the below code snippet.

```

public dataQuery: Query = new Query().take(50);

```

-	We can filter the items with startswith from full large data through filtering events .

```
public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
    let query: Query = new Query();
    // frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('Number', 'startswith', e.text, true) : query;
    // pass the filter data source, filter query to updateData method.
    e.updateData(this.data, query);
  }
```

-	Whenever open the popup, the popup list contains only initial list. If we will search for an item that will not exist in initial list, it will be added along with initial list.

## Installing and Running Application

### Installing

To install all dependent packages, use the below command

```
npm install
```

### Run the application

To compile and run the source files, use the below command

```
npm start
```
