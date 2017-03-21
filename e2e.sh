#!/bin/bash
while ! timeout 1 wget -qO- http://localhost:4444/wd/hub > /dev/null ; do sleep 1; done; protractor --seleniumAddress http://localhost:4444/wd/hub /app/protractor.conf.js --params.meshHost localhost --params.meshPort 8080
