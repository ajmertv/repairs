#!/bin/bash

# Install dependencies
npm install

# Create necessary directories
mkdir -p components pages public styles types

# Move existing images to public directory
mv images public/ 2>/dev/null || true

# Create public directory structure
mkdir -p public/images

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
fi

# Create .gitignore
cat > .gitignore << EOL
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOL

# Make the script executable
chmod +x setup.sh

echo "Setup complete! Run 'npm run dev' to start the development server." 