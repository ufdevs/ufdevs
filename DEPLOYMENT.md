# Deployment Guide for UFDev Agency Website

This guide will help you deploy the UFDev Agency website to Vercel. Follow these steps to ensure a successful deployment.

## Prerequisites

- A GitHub repository with your project code
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Node.js version 18 or higher

## Step 1: Prepare Your Project

Ensure your project has the correct configuration files:

1. Make sure your `package.json` has the necessary dependencies:
   - `tailwindcss`, `postcss`, and `autoprefixer` should be in both `dependencies` and `devDependencies`
   - The build script should include installing these dependencies: `"build": "npm install tailwindcss postcss autoprefixer && next build"`

2. Verify you have these configuration files:
   - `tailwind.config.js` - Tailwind CSS configuration
   - `postcss.config.js` - PostCSS configuration
   - `next.config.js` - Next.js configuration
   - `.npmrc` - NPM configuration with `legacy-peer-deps=true`
   - `vercel.json` - Vercel deployment configuration

## Step 2: GitHub Repository

1. Commit all your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

## Step 3: Deploy to Vercel

1. Log in to your Vercel account
2. Click "Add New..." and select "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: Leave as default (uses the one from package.json)
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

5. Environment Variables (add these if needed):
   - `MONGODB_URI` - Your MongoDB connection string
   - `NODE_ENV` - Set to `production`
   - Any other environment variables your app needs

6. Click "Deploy"

## Step 4: Troubleshooting

If you encounter build issues:

1. **Tailwind CSS Not Found**:
   - Check your package.json to ensure tailwindcss is in regular dependencies
   - Verify your build command installs tailwindcss first

2. **Module Resolution Issues**:
   - Ensure your .npmrc file has `legacy-peer-deps=true`
   - Check that all config files are using CommonJS format (not ESM)

3. **Next.js Build Issues**:
   - Make sure you're using a compatible Node.js version
   - Check the Vercel build logs for specific errors

## Step 5: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain and follow the verification steps
3. Update DNS records at your domain registrar as instructed by Vercel

## Continuous Deployment

Vercel automatically deploys new commits to your main branch. To change this behavior:

1. Go to your project settings
2. Under "Git", modify the production branch or deployment settings

## Important Notes

- The `vercel.json` file overrides Vercel's default build settings
- Changes to environment variables require a redeployment
- Using `.next` as the output directory is important for proper Next.js deployment

For more help, refer to the [Vercel documentation](https://vercel.com/docs) or contact UFDev Agency support. 