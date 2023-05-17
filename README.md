# CRUD on Profiles

React.js application UI that allows CRUD operations on user profiles based on a Figma design. The application should allow the user to switch between themes (dark and light) and include pagination, sorting, and searching (with debounce) functionality

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository.
2. Navigate to the root directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Create a `.env` file based on the provided `.env.sample` file and update the necessary configuration.

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and access the application at `http://localhost:3000`.


## Folder Structure

```
├───public
│   ├───index.html
│   ├───manifest.json
│   ├───profile.ico
│   ├───profile.png
│   ├───robots.txt
│   └───_redirects
│
└───src
    ├───Components
    │   ├───Profiles
    │   │   ├───AddEditProfile.js
    │   │   └───Profiles.js
    │   ├───ResponseSnackBar
    │   │   └───ShowSnackBar.js
    │   └───Views
    │       ├───CardView.js
    │       ├───GridView.js
    │       └───ProfileActions.js
    └───GraphQL
        └───queries.js
```
