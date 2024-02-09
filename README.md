
# Chartify

Chartify is a data visualization website powered by Chart.js! This platform is designed to help you easily visualize JSON data using intuitive charts and graphs.


## Demo


https://github.com/SrivastavaArjit/Chartify/assets/82926673/7032e831-92b0-4147-8219-723f4d2396ca



## Prerequisites
Before you begin, ensure you have met the following requirements:
- Git installed on your local machine. You can download it from [here](https://git-scm.com/downloads).
- Node.js installed on your local machine. You can download it from [here](https://nodejs.org/).

## Clone the repository

- Open your terminal or command prompt.
- Navigate to the directory where you want to clone the repository.
- Run the following command:

```bash
git clone https://github.com/SrivastavaArjit/Chartify.git
```

## How to install

- Navigate to the project directory:
```bash
cd Chartify
```
- Open the repository in your code editor and use your terminal or command prompt to navigate to the client folder.

-Run the following command to install all the dependencies for the cliend side:

```bash
npm install
```
- Run the above same command for the server to install its dependencies.

## The Client

- To run the Client code, in your terminal or command prompt navigate to the client folder and run the following command:

```bash
npm run dev
```

## The server

You have two choices for the server.

### 1. Localhost:

- Createa a .env file in the server folder of the project and add your MongoDB URI:

```makefile
MONGODB_URI = your_mongodb_uri_here
```
if you don't have a MongoDB URI, checkout the docs [here](https://www.mongodb.com/atlas/database)

- Start the Server:
```bash
npm start
```

- The server will start running at `http://localhost:3000`.

### 2. Hosted Server

If you Prefet to use the hosted server, you can acess it at the following URL:

`https://chartify-server-sigma.vercel.app/dashboard`

Please note that you won't need to set up a local environment or MongoDB URI for the hosted server.

- Finally, Comment out the code respective the server you are not using. 
- Refer the following code image.

  ![Screenshot 2024-02-09 162502](https://github.com/SrivastavaArjit/Chartify/assets/82926673/7c79e7ef-2851-4cd3-be75-beecb0fabb3d)




    
