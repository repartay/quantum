# quantum

This is code for a multi-part React search form that sends a query to a MySQL db. It uses a node server and express.
I wired together the front end using create-react-app.

The db connection config is for my local version of Sequel Pro.

Start the project with `npm run dev`

When you fill in the search form and hit "Search" you will see the response logged in the browser.

Things that I would do if this were a real form and not a demo:

- input validation by type
- prevent creating a 2nd row if input validation fails on the first row
- some sort of indication that the search is in progress
- input fields are slightly stylistically inconsistant bc I used react-select for the dropdown and vanilla text inputs

