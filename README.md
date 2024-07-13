 # Prompt Hub

Prompt Hub is a web application built using Next.js that offers various features for users to interact with. It leverages NextAuth for secure user authentication, Tailwind CSS for an elegant and responsive design, and MongoDB to store user data and posts.

## Tech Stack

- **Next.js**: A React framework that simplifies server-side rendering and routing.
- **MongoDB**: A NoSQL database for storing AI prompts and user data.
- **NextAuth**: Provides secure authentication using Google accounts.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Features

- **Modern Design with Glassmorphism Trend Style**: Incorporates the glassmorphism trend style for a sleek and contemporary appearance.
- **Discover and Share AI Prompts**: Allows users to discover AI prompts shared by the community and create their own prompts to share with the world.
- **Edit and Delete Created Prompts**: Users have the ability to edit their created prompts at any time and delete them when needed.
- **Profile Page**: Each user gets a dedicated profile page showcasing all the prompts they've created.
- **View Other People's Profiles**: Users can explore the profiles of other creators to view the prompts they've shared.
- **Copy to Clipboard**: Implements a convenient "Copy to Clipboard" functionality for users to easily copy AI prompts.
- **Search Prompts by Specific Tag**: Allows users to search for prompts based on specific tags.

## Quick Start

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root of your project and add the following content:

    ```
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=
    GOOGLE_ID=
    GOOGLE_CLIENT_SECRET=
    MONGODB_URI=
    ```

    Replace the placeholder values with your actual credentials.

4. Run the application using `npm run dev`.

##Error
The MongoDB Cluster is connection to server

 

 
