#!/bin/bash

if [ -d "env" ] 
then
    echo "Python virtual environment exists." 
else
    sudo apt-get install python3-pip
    sudo pip3 install virtualenv 
    sudo virtualenv env
    
fi


source env/bin/activate
sudo apt-get -y install python3-pip

sudo pip3 install -r requirements.txt

if [ -d "logs" ] 
then
    echo "Log folder exists." 
else
    mkdir logs
    touch logs/error.log logs/access.log
fi

sudo chmod -R 777 logs
echo "env ended"
