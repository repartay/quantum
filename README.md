# quantum

This is code for a multi-part React search form that sends a query to a MySQL db. It uses a node server and express.
I wired together the front end using create-react-app.

The db connection config is for my local version of Sequel Pro.

Because of how I set this project up, you'll have to install node_modules in two different places (sorry!):
1. `npm i` from root directory
2. `cd client`
3. `npm i`
4. `cd ..` (back to root dir)
5. Start the project with `npm run dev`

6. your browser will open itself at localhost:3000 !

When you fill in the search form and hit "Search" you will see the response logged in the browser.

Things that I would do if this were a real form and not a demo:

- input validation by type
- prevent creating a 2nd row if input validation fails on the first row
- some sort of indication that the search is in progress
- input fields are slightly stylistically inconsistant bc I used react-select for the dropdown and vanilla text inputs
