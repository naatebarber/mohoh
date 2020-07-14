#!/bin/bash

rm -r node_modules
cd ..
zip -r moho.zip mohohdesigns
scp ./moho.zip nathanbarber@$barbernet_ip:~/
`barbernet`