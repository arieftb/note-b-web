# NoteB - Simple Note Taking App

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Version](#version)
- [License](#license)

This is a simple front-end web application for managing notes, developed as part of the Dicoding "Belajar Fundamental Front-End Web Development" course.

## Getting Started

To run this project locally, you need a local web server due to browser security policies (Cross-Origin Request Blocked for `file:///` URLs).

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd noteb
   ```

2. **Start the local web server:**

   Navigate to the project's root directory in your terminal and run the following command:

   ```bash
   python3 -m http.server 8000
   ```

   (Note: This command was previously run for you in the background. If you restart your terminal or the process is killed, you may need to run it again.)

3. **Access the application:**

   Open your web browser and go to: `http://localhost:8000`

## Project Structure

```text
.
├── index.html
└── assets/
    ├── component/
    │   ├── field-component.js
    │   ├── form-add-component.js
    │   ├── form-add-content-component.js
    │   ├── header-component.js
    │   ├── note-item-component.js
    │   └── note-list-component.js
    ├── css/
    │   └── styles.css
    └── js/
        ├── notes.js
        ├── script.js
        └── utils.js
```

## Features

This application provides the following features:

- **Display Notes:** View a list of existing notes.
- **Add New Notes:** Create and save new notes with a title and content.
- **Form Validation:** Basic input validation for note titles.
- **Date Formatting:** Notes display their creation date in a readable format.
- **Modular UI:** Built with custom web components for a structured and reusable interface.
- **Toggle Add Form:** The form for adding new notes can be shown or hidden.

## Tech Stack

This project is built using the following core web technologies:

- HTML5
- CSS3
- JavaScript (ES6+)

## Version

Current version: 1.0.0

The application has evolved through several versions:

- **1.0.0:** Initial release with basic note-taking functionality.

For a detailed list of changes, please see the [CHANGELOG.md](CHANGELOG.md) file.

## License

Copyright (c) 2025 arieftb

This project is created for educational purposes as part of
the [Belajar Fundamental Front-End Web Development](https://www.dicoding.com/academies/163/)
course from Dicoding.
You may use this code as a reference only.
Reusing this code for submission, plagiarism, or commercial use is strictly prohibited.
