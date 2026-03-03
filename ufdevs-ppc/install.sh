#!/bin/bash

# Exit on error
set -e

# Print commands
set -x

# Install dependencies
npm install

# Build the package
npm run build

echo "UFDevs Price Calculator has been successfully built!"
echo "You can now import it in your React projects." 