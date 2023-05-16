#### src Folder Structure

│   .env.sample
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│
├───public
│       index.html
│       manifest.json
│       profile.ico
│       profile.png
│       robots.txt
│       _redirects
│
├───src
│   │   App.css
│   │   App.js
│   │   index.css
│   │   index.js
│   │   reportWebVitals.js
│   │
│   ├───Components
│   │   ├───Profiles
│   │   │       AddEditProfile.js //adds/edits profiles
│   │   │       Profiles.js //Shows basic functionality
│   │   │
│   │   ├───ResponseSnackBar
│   │   │       ShowSnackBar.js //snackbar to show error/success
│   │   │
│   │   └───Views
│   │           CardView.js //card view
│   │           GridView.js //grid view
│   │           ProfileActions.js //edit & delete menu actions
│   │
│   └───GraphQL
│           queries.js //graphql queries
│
└───Task Details
        Frontend Task Assessment (1).pdf
