# Deployment Guide for UFDev Agency Website

This guide will help you deploy the UFDev Agency website to Vercel. Follow these steps to ensure a successful deployment.

## Prerequisites

- A GitHub repository with your project code
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Node.js version 18 or higher
- MongoDB Atlas account (free tier is sufficient)

## Step 1: Set Up MongoDB Atlas (Required for Production)

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier works fine)
3. Create a database user with password
4. Set network access to allow connections from anywhere (0.0.0.0/0)
5. Get your connection string by clicking "Connect" > "Connect your application"
6. Keep this connection string ready for the Vercel deployment

## Step 2: Prepare Your Project

Ensure your project has the correct configuration files:

1. Make sure your `package.json` has the necessary dependencies:
   - `tailwindcss`, `postcss`, and `autoprefixer`
   - `typescript`, `critters`, and related ESLint packages
   - The build script should include installing these dependencies

2. Verify you have these configuration files:
   - `tailwind.config.js` - Tailwind CSS configuration
   - `postcss.config.js` - PostCSS configuration
   - `next.config.js` - Next.js configuration
   - `tsconfig.json` - TypeScript configuration
   - `.npmrc` - NPM configuration with `legacy-peer-deps=true`
   - `vercel.json` - Vercel deployment configuration

## Step 3: GitHub Repository

1. Commit all your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

## Step 4: Deploy to Vercel

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
   - `MONGODB_URI` - Your MongoDB connection string **(REQUIRED for Full Functionality)**
   - `NODE_ENV` - Set to `production`
   - Any other environment variables your app needs

   > **IMPORTANT**: While the site will build without MONGODB_URI, for actual production use with working contact forms, you MUST provide a valid MongoDB connection string. Without it, contact form submissions will not be saved.

6. Click "Deploy"

## Step 5: Troubleshooting

If you encounter build issues:

1. **Missing Dependencies**:
   - Check if you've added all required dependencies: `typescript`, `critters`, etc.
   - Make sure you have the proper TypeScript configuration files

2. **MongoDB Connection Issues**:
   - Verify your MongoDB Atlas cluster is properly set up
   - Ensure your connection string has the correct username, password and database name
   - Test the connection in development before deploying

3. **ESLint or TypeScript Issues**:
   - Ensure your tsconfig.json is properly configured
   - If needed, temporarily disable ESLint by adding `NEXT_DISABLE_ESLINT=1` to environment variables

## Step 6: Custom Domain (Optional)

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
- For testing builds without MongoDB, the system will use a placeholder connection, but this is **not suitable for production**

For more help, refer to the [Vercel documentation](https://vercel.com/docs) or contact UFDev Agency support. 