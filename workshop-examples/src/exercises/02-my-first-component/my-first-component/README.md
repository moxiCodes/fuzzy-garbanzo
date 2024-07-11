## Create a simple stateless component - part 1

Create a stateless component called MyFirstComponent which returns the message "Hello World" in a H2 tag

1. Create it using function syntax
2. Create it using const syntax

   to see the differences check out - [https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9] - warning it gets gnarly, you don't need to read the whole thing!

### Questions

1. What is the return type of the component?

2. What was different about the filename of the component compared to the non component functions?

3. Why is this called a stateless component? What would stop it being a stateless component?

## Create a simple stateless component - part 2

- I don't want this component to just display "Hello World", I want to pass my own message. I would like to do this using TypeScript Props and where the message is a `string`

### Questions

1. How is this different to non-TS javascript?

## Create a simple stateless component - Non-snapshot testing

Although I would recommend snapshot testing for a stateless UI component, not all teams will use that. Test this stateless component using react testing library renders without using snapshots (https://testing-library.com/docs/react-testing-library/intro/)

### Questions

1. How did you verify the element was there?

2. Why does the screen object have so many methods, what do they all do? (https://www.codecademy.com/learn/learn-react-testing/modules/react-testing-library/cheatsheet)

Snapshot testing is an effective way to test a stateless component. Write unit tests in jest and React testing Library to render the component you created in part 2 and snapshot test it.

### Questions

1. What happens the first time you run the snapshot testing?

2. What happens the 2nd time?

3. Change the component to return an H3 instead of an H2 and see what happens?

4. What could be the danger of this approach?
