#!/bin/bash

rm -r node_modules
rm -r mohopkg
rm -r mohopkg.zip

yarn && yarn build


mkdir mohopkg
mkdir mohopkg/build

cp build/* mohopkg/build
cp index.js mohopkg

cd mohopkg
yarn init -y && yarn add express contentful nodemailer fallback
cd ..

zip -r mohopkg.zip mohopkg

scp ./mohopkg.zip nathanbarber@$barbernet_ip:~/
ssh nathanbarber@$barbernet_ip