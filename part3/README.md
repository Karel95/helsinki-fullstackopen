# Phonebook API

This is a simple backend for a phonebook application, built with Node.js and Express. It allows users to manage a list of contacts.

## Live Demo

You can access the live API here:
[https://helsinki-fullstackopen-part3.onrender.com/api/persons](https://helsinki-fullstackopen-part3.onrender.com/api/persons)

## Features

* **List all contacts:** Get a list of all stored contacts.
* **Get a single contact:** Get the details of a specific contact by its ID.
* **Add a new contact:** Add a new contact to the phonebook.
* **Delete a contact:** Delete an existing contact.
* **Update a contact:** Update the phone number of an existing contact.

## API Endpoints

| Method | Path | Description |
| :--- | :------------------------ | :--------------------------------------- |
| `GET` | `/api/persons` | Fetches all contacts. |
| `GET` | `/api/persons/:id` | Fetches a single contact by its ID. |
| `POST` | `/api/persons` | Adds a new contact. |
| `PUT` | `/api/persons/:id` | Updates a contact's number. |
| `DELETE`| `/api/persons/:id` | Deletes a contact by its ID. |
| `GET` | `/info` | Fetches information about the phonebook. |

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm
* MongoDB (a local instance or a cloud-hosted one like Atlas)

### Installation and Running

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Karel95/helsinki-fullstackopen.git
    cd helsinki-fullstackopen/part3
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the project root and add the following variables:

    ```bash
    MONGODB_URI=your-mongodb-connection-string
    PORT=3001
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:3001`.

### Available Scripts

* `npm start`: Starts the server in production mode.
* `npm run dev`: Starts the server in development mode using `nodemon`.
* `npm run lint`: Runs ESLint to analyze the code for errors.
