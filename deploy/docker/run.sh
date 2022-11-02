#!/bin/sh

touch .env
cat /etc/secrets/.env > .env

dotenv list

python3 manage.py runserver 0.0.0.0:8000