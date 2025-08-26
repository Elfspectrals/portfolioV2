#!/usr/bin/env bash
set -euo pipefail

# --- CONFIG ---
FIREBASE_PROJECT_ID="portfoliojerome-7db78"
PUBLIC_DIR="dist"   # Vite build output
# ---------------

echo "==> Checking prerequisites..."
command -v npm >/dev/null 2>&1 || { echo "npm is required."; exit 1; }
command -v firebase >/dev/null 2>&1 || { echo "Firebase CLI is required. Install with: npm i -g firebase-tools"; exit 1; }

# Install deps & build
echo "==> Installing dependencies..."
npm install

echo "==> Building Vite app..."
npm run build

# Generate firebase.json if missing
if [ ! -f "firebase.json" ]; then
  echo "==> Creating firebase.json"
  cat > firebase.json <<EOF
{
  "hosting": {
    "public": "${PUBLIC_DIR}",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
EOF
fi

# Generate .firebaserc if missing
if [ ! -f ".firebaserc" ]; then
  echo "==> Creating .firebaserc"
  cat > .firebaserc <<EOF
{
  "projects": {
    "default": "${FIREBASE_PROJECT_ID}"
  }
}
EOF
fi

echo "==> Deploying to Firebase Hosting (project: ${FIREBASE_PROJECT_ID})..."
firebase deploy --only hosting --project "${FIREBASE_PROJECT_ID}"

echo "✅ Done! Your Vite app is now live on Firebase Hosting."
