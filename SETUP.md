# Project Setup Guide

This guide will walk you through setting up and running the Cierra Smart Home project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 18.x or later recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Step 1: Clone the Project

If you have received this project as a zip file, unzip it to your desired directory. If you are working with a Git repository, clone it:

```bash
git clone <your-repository-url>
cd <project-directory>
```

## Step 2: Install Dependencies

Open your terminal in the project's root directory and run the following command to install all the required packages:

```bash
npm install
```

## Step 3: Configure Environment Variables

The project uses Google's Generative AI (Genkit) for its AI-powered features. To use these features, you need to provide a Google AI API key.

1.  **Create a `.env` file**: In the root directory of the project, create a new file named `.env`.

2.  **Get your API Key**:
    -   Go to the [Google AI Studio](https://makersuite.google.com/app/apikey) to get your API key.
    -   If you don't have one, you can create one for free.

3.  **Add the API Key to `.env`**: Open the `.env` file and add the following line, replacing `YOUR_API_KEY` with the key you just obtained:

    ```
    GEMINI_API_KEY=YOUR_API_KEY
    ```

    The application is configured to automatically load this key for all AI-related functionalities.

## Step 4: Run the Development Server

You are now ready to run the application. Use the following command:

```bash
npm run dev
```

This command starts the Next.js development server. Once it's running, you will see a message in your terminal indicating the local address, which is typically:

**http://localhost:9002**

Open this URL in your web browser to see the website. The server will automatically reload when you make changes to the source code.

## (Optional) Step 5: Running Genkit in a Separate Process

For advanced AI development, you might want to run the Genkit tools in a separate process to test flows or see detailed logs.

```bash
npm run genkit:watch
```

This will start the Genkit development UI, usually available at `http://localhost:4000`, where you can inspect, run, and trace your AI flows independently from the main web application.

You are all set! Happy coding.
