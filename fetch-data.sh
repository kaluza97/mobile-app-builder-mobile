#!/bin/bash

API_URL="http://localhost:9000/api/navigation"
FILE_PATH="src/data"

response=$(curl -s -w "%{http_code}" -o data.json "$API_URL")
http_code="${response: -3}"

if [ "$http_code" -eq 200 ]; then
    echo "Data fetched successfully."

    if [ -f "$FILE_PATH" ]; then
        echo "File $FILE_PATH exists. Overwriting..."
    else
        echo "File $FILE_PATH does not exist. Creating it..."
    fi

    mv data.json "$FILE_PATH"
    echo "Data saved to $FILE_PATH."

else
    echo "Failed to fetch data from API. HTTP status: $http_code"
    rm data.json
fi
