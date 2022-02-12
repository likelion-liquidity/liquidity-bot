#!/bin/sh
zip -r function.zip .      
aws lambda update-function-code --function-name liquidity-bot --zip-file fileb://function.zip