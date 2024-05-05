#!/bin/bash
sudo rm -r /var/www/chatgpt/build/*
sudo cp -R /var/www/chatgpt-copy/build/* /var/www/chatgpt/build
sudo service nginx restart
sudo rm -r /var/www/chatgpt-copy