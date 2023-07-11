# Search_Git_Repo

The RepoFinder is a web application that allows users to search for repositories on GitHub based on their query. It utilizes the GitHub Search API to fetch relevant repository data and display the results to the user.

## Features

- Search for repositories on GitHub based on a user-provided query.
- Display search results with relevant repository information.
- Each search result includes the repository name, URL, description, and primary programming language used.
- Pagination to handle large result sets.
- Error handling for server errors and empty result sets.

## Technologies Used

The application is built using the following technologies:

- Front-end: HTML, CSS, JavaScript, jQuery
- Backend: Node.js, Express.js
- APIs: GitHub Search API
- Libraries: axios (for making HTTP requests), DataTables (for data table display), SweetAlert (for displaying alerts)

## Usage

1. Clone the repository or download the source code.

2. Install the dependencies using the package manager of your choice. Run the following command in the project root directory:

    npm install

3. Start the application by running the following command:

    npm start


4. Access the application in your web browser at `http://localhost:3000`.

5. Enter your search query in the provided input field and click the search button or press Enter to perform the search.

6. The search results will be displayed in a table format, showing the repository name, URL, description, and programming language used.

7. Pagination controls are provided at the bottom of the results table to navigate through multiple pages of results.

8. If no results are found or a 'Not Available' error occurs,and for other scenarios appropriate error messages will be displayed.




