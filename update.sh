#!/bin/bash
cd /var/www/akcenta-hridel && yarn install && yarn run build  && pm2 delete akcenta_hridel || : && pm2 start "yarn start-prod" --name "akcenta_hridel"
