# usertest
This is a repository for testing user creation, session initiation and management, JWT, and localStorage.

## Instructions:

1. Run `npm i` in the `back` and `front` folders.
2. Create a PostgreSQL database named `usertest`.
3. Check the `.env` file and replace the PostgreSQL username and password with your own to connect to the database.
4. Run `npm start` in the `back` folder.
5. Run `npm run dev` in the `front` folder.
6. Open the application in a web browser and create an account.
7. Log in with that account.
8. Open the developer tools, go to the 'Application' tab, and look for 'localStorage'. Confirm that you have the JWT token.
