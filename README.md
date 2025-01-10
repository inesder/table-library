# inesder-table 

**inesder-table** is a React component for displaying tabular data with built-in features such as search, sorting, and pagination.

--- 

## Sommaire 

- [Installation](#installation) 
- [Usage](#usage) 
- [Props](#props) 
	- [theadData (Array of strings)](#theaddata-array-of-strings)
	- [tbodyData (Array of objects)](#tbodydata-array-of-objects) 
	- [thBackgroundColor (String)](#thbackgroundcolor-string) 
	- [buttonBackgroundColor (String)](#buttonbackgroundcolor-string) 
- [Example](#example) 
- [Built-in Features](#built-in-features) 
- [Styles and Customization](#styles-and-customization) 
- [Contributing](#contributing) 
- [License](#license)

--- ## Installation 

```bash 
npm install inesder-table
```
Or (with Yarn):
```bash 
yarn add inesder-table
```
## Usage
To start using **inesder-table**, import the `Table` component:

```jsx 
import React from "react"; 
import Table from "inesder-table"; 

function MyComponent() { 
// Sample data 
const theadData = ["First Name", "Last Name", "Start Date", "Department"]; 
const tbodyData = [ 
{ 
id: "1", 
items: ["John", "Doe", "2023-01-01", "HR"] 
}, 
{ 
id: "2", 
items: ["Jane", "Smith", "2023-01-15", "Marketing"] 
} 
]; 

return ( 
   <Table 
	   theadData={theadData} 
	   tbodyData={tbodyData} 
	   thBackgroundColor="#04AA6D" 
	   buttonBackgroundColor="#04AA6D" 
	/> 
	); 
	} 
export default MyComponent;
``` 
> **Note:** Make sure each object in `tbodyData` has a unique `id` and an `items` array with the same number of elements as the headers in `theadData`.

--- 

## Props 

### `theadData` (Array of strings) 

- **Description :** An array of strings representing the table headers.
- **Type :** `string[]` 
- **Example :** 
	```js 
  const theadData = ["First Name", "Last Name", "Start Date", "Department"];
  ``` 

### `tbodyData` (Array of objects) 

- **Description :** An array of objects, each containing :
	- `id` : *String* or *Number* (unique key for React) 
	- `items` : *string[]* (the row values) 
- **Type :** 
	```ts 
  { 
	  id: string | number; 
	  items: string[];
	}[] 
	``` 
- **Exemple :** 
	```js 
  const tbodyData = [
   { 
	   id: "1", 
	   items: ["John", "Doe", "2023-01-01", "HR"] 
	   }, 
	   { 
	   id: "2", 
	   items: ["Jane", "Smith", "2023-01-15", "Marketing"] 
	   } 
	]; 
	``` 
- **Note:** The `items` array should match the order and number of columns defined in `theadData`. 

### `thBackgroundColor` (String)

- **Description :** The background color of the header row.
- **Valeur par défaut :** `#04AA6D` 
- **Type :** `string` 
- **Exemple :** 
	```jsx 
  <Table thBackgroundColor="#89A8B2" ... /> 
  ``` 

### `buttonBackgroundColor` (String) 

- **Description :** The background color of the pagination buttons (*Previous* et *Next*). 
- **Valeur par défaut :** `#04AA6D` 
- **Type :** `string` 
- **Exemple :** 
   ```jsx 
  <Table buttonBackgroundColor="#89A8B2" ... /> 
  ``` 
 
 --- 
## Exemple 

```jsx 
import React from "react"; 
import Table from "inesder-table"; 

function EmployeeTable() { 
	const theadData = ["First Name", "Last Name", "Start Date", "Department"]; 
	const tbodyData = [ 
	  { 
		  id: "emp1", 
		  items: ["John", "Doe", "2023-01-01", "HR"] }, 
	  { 
		  id: "emp2", 
		  items: ["Jane", "Smith", "2023-01-15", "Marketing"] 
	   } 
	  ]; 

	  return ( 
	  <Table 
		  theadData={theadData} 
		  tbodyData={tbodyData} 
		  thBackgroundColor="#89A8B2" 
		  buttonBackgroundColor="#89A8B2" 
		/> 
		); 
		} 
export default EmployeeTable; 
``` 

--- 

## Built-in Features 

1. **Search (Filter)**
    A search bar above the table filters rows based on the text entered, searching all columns.

2. **Sorting (Sort)**
	 -   Each header is clickable. The table is sorted in ascending then descending order. An arrow icon shows the current sort order.

3. **Pagination**
	 - Choose the number of items per page (5, 10, 25, 50, 100).
	 - *Previous* / *Next* buttons to navigate across pages.
	 - Displays the current page number and total pages.

4. **“No matching employees found.” message** 
	1.  Displayed if no rows match the search.

---

## Styles et personnalisation 

The component includes a minimal `styles.css` file. You can:

- **Customize** the header and buttons via the `thBackgroundColor` and `buttonBackgroundColor` props. 
- **Wrap** the `<Table>` component in your own container for additional layout or styling. 


 --- 

## Contributing

Feel free to open an **issue** or **Pull Request** on the [Github repository](https://github.com/inesder/table-library) if you find a bug or want to suggest a feature.

--- 

## License 

**MIT** – 2025 – [Inès Derraz](https://github.com/inesder) 

Happy coding!
