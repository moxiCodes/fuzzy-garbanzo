### First emploeye exercise

There is an endpoint in the `players-api` project called `/employees` which returns employee data (try it!)

1. Your first mission is to create an `Employee` type to model this data
2. Create an `EmployeesTable` component that can display a list of Employees (use MUI table - https://mui.com/material-ui/react-table/)

### Second Employee exercise

I want to be able to search employees, but first I need an `EmployeeSearch` ![title](EmployeeSearch.png) component that will have a callback in its props every time a user initiates a search.

I want to be able to call this component like this:
`<EmployeeSearch onSearch={(searchTerm:string) => console.log(searchTerm)}/>`

And every time the user adds a string and presses "search", I want it to call the onSearch callback.
