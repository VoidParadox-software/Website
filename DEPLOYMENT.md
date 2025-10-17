# Deploying Your Next.js Application

This guide provides step-by-step instructions for deploying your Next.js application to your own server and connecting a custom domain.

## Prerequisites

Before you begin, ensure your server meets the following requirements:

-   **Operating System**: A modern Linux distribution (e.g., Ubuntu 20.04 or later).
-   **Node.js**: Version 18.x or later.
-   **Nginx**: Installed and running. Nginx will act as a reverse proxy.
-   **PM2**: A process manager for Node.js to keep your application running.
-   **Firewall**: A configured firewall (like `ufw`) to manage network traffic.
-   **Domain Name**: A registered domain name that you own.

## Step 1: Prepare Your Server

1.  **Install Node.js**:
    Follow the official instructions to install Node.js 18.x or newer on your server. You can find them on the [NodeSource GitHub repository](https://github.com/nodesource/distributions).

2.  **Install Nginx**:
    ```bash
    sudo apt update
    sudo apt install nginx
    ```

3.  **Install PM2**:
    ```bash
    sudo npm install -g pm2
    ```

4.  **Configure Firewall**:
    Allow HTTP and HTTPS traffic, and SSH.
    ```bash
    sudo ufw allow 'Nginx Full'
    sudo ufw allow OpenSSH
    sudo ufw enable
    ```

## Step 2: Deploy Your Application Code

1.  **Clone Your Repository**:
    Transfer your project files to the server. The simplest way is to use `git`.
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Build the Application**:
    This command creates an optimized production build of your application in the `.next` directory.
    ```bash
    npm run build
    ```

## Step 3: Run the Application with PM2

1.  **Start the Application**:
    Use PM2 to start your Next.js application. PM2 will automatically restart it if it crashes and manage it as a background process.
    ```bash
    pm2 start npm --name "next-app" -- start
    ```

2.  **Enable PM2 Startup Script**:
    This ensures your application will automatically restart after a server reboot.
    ```bash
    pm2 startup
    # Follow the on-screen instructions, which will look something like this:
    # sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u <username> --hp /home/<username>

    pm2 save
    ```

Your application is now running on `http://localhost:3000`.

## Step 4: Configure Nginx as a Reverse Proxy

Create an Nginx server block file for your domain.

1.  **Create the Nginx Configuration File**:
    Replace `your_domain` with your actual domain name.
    ```bash
    sudo nano /etc/nginx/sites-available/your_domain
    ```

2.  **Add the Server Block Configuration**:
    Paste the following configuration into the file. This tells Nginx to listen for requests on your domain and forward them to your Next.js app running on port 3000.

    ```nginx
    server {
        listen 80;
        listen [::]:80;

        server_name your_domain www.your_domain;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  **Enable the Server Block**:
    Create a symbolic link to enable the site.
    ```bash
    sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/
    ```

4.  **Test and Restart Nginx**:
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

## Step 5: Connect Your Domain

1.  **Update DNS Records**:
    Go to your domain registrar's DNS management panel. Create an **`A` record** that points your domain (`your_domain`) to your server's public IP address.
    
    If you want `www.your_domain` to work as well, create a **`CNAME` record** for `www` that points to `your_domain`.

2.  **Verify**:
    DNS changes can take some time to propagate. Once they do, you should be able to access your site by visiting `http://your_domain` in a browser.

## Step 6: Secure Your Site with SSL (HTTPS)

Using SSL is essential for security and user trust. We'll use Let's Encrypt to get a free SSL certificate.

1.  **Install Certbot**:
    Certbot is a tool that automates the process of obtaining and renewing Let's Encrypt certificates.
    ```bash
    sudo apt install certbot python3-certbot-nginx
    ```

2.  **Obtain the SSL Certificate**:
    Certbot will automatically edit your Nginx configuration to enable HTTPS.
    ```bash
    sudo certbot --nginx -d your_domain -d www.your_domain
    ```
    Follow the prompts. It will ask if you want to redirect HTTP traffic to HTTPS. It is highly recommended to choose the redirect option.

3.  **Automatic Renewal**:
    Certbot automatically sets up a cron job or systemd timer to renew your certificates before they expire. You can test the renewal process with:
    ```bash
    sudo certbot renew --dry-run
    ```

Congratulations! Your Next.js application is now deployed, running on your own server, and secured with HTTPS.
