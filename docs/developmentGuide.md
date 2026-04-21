## GCP Setup Guide:
Set region to us-central1
set zone to any

set the machine family to e2
select the type as e2 micro

Next go to the firewall settings
make sure to allow HTTP traffic
and https traffic


### Networking:
Change the ephemeral external IPv4 to a static IP
Set the name, type, and region
reserve


Add ssh key or use the ssh 


## NGINX and PM2
For setting up NGINX and PM2

First run: sudo apt update

Then install node: sudo apt install nodejs npm git nginx -y

Verify version looks correct: node -v
npm -v

Then install PM2: sudo npm install pm2 -g

Clone project in to server:
git clone repolink

cd folder/name

touch .env
cat .env

sudo vim .env

copy in MONGO_URI = connection_string

esc
:wq

npm i dotenv

npm install

Use node app.mjs to see if its working

## NGINX Setup:
sudo systemctl start nginx
sudo system enable nginx

remove the default site: 
sudo unlink /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-enabled/default

make the reverse proxy:
sudo vim /etc/nginx/sites-available/reverse-proxy

Paste this in:
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

Enable the sites:
sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/

Reload nginx:
sudo systemctl reload nginx

PM2:
pm2 start app.mjs
pm2 status
pm2 save

pm2 startup






