sudo rm -rf /var/www/chatgpt/build
sudo npm run build
forever stopall
cd /var/www/chatgpt/build
forever start -c "node -r esm" App.js
