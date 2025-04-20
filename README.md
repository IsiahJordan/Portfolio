# Portfolio 2025

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js (v22)**  
2. **Docker & Docker Compose**

---

## 1. Install Node.js (v22)

### For macOS and Linux:

You can install **Node.js v22** using **nvm** (Node Version Manager):

1. Install `nvm` (Node Version Manager), if it's not installed yet:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. Install **Node.js v22** using `nvm`:

   ```bash
   nvm install 22
   nvm use 22
   ```

### For Windows:

1. Download **Node.js v22** from the official site: [Node.js Downloads](https://nodejs.org/download/release/v22.x.x/)
2. Follow the installation prompts to install Node.js.

---

## 2. Set Up Authentication

In the **`server/`** directory, there's an `auth-example.js` file that you can refer to when creating your own authentication logic.

### Steps to Create Your `auth.js`:

1. Open the `auth-example.js` file located in the **`server/`** folder.
2. Create a new file called **`auth.js`** in the same directory based on the example provided in `auth-example.js`.
3. Modify `auth.js` to suit your authentication needs (e.g., token-based auth, sessions, etc.).

> **Note:** This file is just an example and can be customized as per your project’s authentication requirements.

---

## 3. Run the Project with Docker

### Step 1: Build the Docker Containers

To build and start the project with Docker Compose, run the following command from the root of your project:

```bash
docker-compose up --build
```

This will build the Docker images and start the services defined in `docker-compose.yml`.

### Step 2: Access the App

Once the containers are up and running, you can access the following:

- **Client**: [http://localhost:5173](http://localhost:5173) — Your Vite React app.
- **Server**: [http://localhost:5000](http://localhost:5000) — Your Express API server.


