# GCP Setup Guide

## GCP VM Configuration

Set region to `us-central1`  
Set zone to any  

Set the machine family to `e2`  
Select the type as `e2-micro`  

Next go to firewall settings:
*  Allow HTTP traffic
* Allow HTTPS traffic  

---

## Networking

Change the ephemeral external IPv4 to a static IP  

Set:
* Name
* Type
* Region  

Click **Reserve**

Add SSH key or use built-in SSH access  

---

# NGINX and PM2 Setup

## Install Dependencies

```bash
sudo apt update
sudo apt install nodejs npm git nginx -y
```

Check versions:

```bash
node -v
npm -v
```

---

## Install PM2

```bash
sudo npm install pm2 -g
```

---

## Clone Project

```bash
git clone repolink
cd folder/name
```

---

## Environment Setup

Create env file:

```bash
touch .env
cat .env
```

Edit env file:

```bash
sudo vim .env
```

Add:

```bash
MONGO_URI=connection_string
```

Save and exit:

```bash
esc
:wq
```

Install dotenv:

```bash
npm i dotenv
```

Install dependencies:

```bash
npm install
```

Test app:

```bash
node app.mjs
```

---

# NGINX Setup

Start nginx:

```bash
sudo systemctl start nginx
```

Enable nginx:

```bash
sudo systemctl enable nginx
```

Remove default site:

```bash
sudo unlink /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-enabled/default
```

---

# Reverse Proxy Setup

Create config:

```bash
sudo vim /etc/nginx/sites-available/reverse-proxy
```

Paste this:

```nginx
server {
  listen 80;
  server_name _;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/
```

Reload nginx:

```bash
sudo systemctl reload nginx
```

---

# PM2 Process Management

Start app:

```bash
pm2 start app.mjs
```

Check status:

```bash
pm2 status
```

Save process list:

```bash
pm2 save
```

Enable startup:

```bash
pm2 startup
```


# NGINX and PM2 Explanation:
NGINX was used for the reverse proxy in this server. It routes any client requests to the correct ports.

PM2 was used to keep the app running on the production server. The PM2 startup command tells the server to restart the app on server startup.

# Environment Variables
mongodb+srv://znasser:<dbPassword>@cluster0.gh5umgu.mongodb.net/?appName=Cluster0

JWT_SECRET= json_web_token_secret