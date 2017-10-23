#!/bin/bash

npm run build

rsync -avz --delete ./dist/ vpsx:/var/docker/django/wecanlive-admin/dist/
rsync -avz --delete ./dist/ wecan:/var/www/wecanlive-admin/dist/
