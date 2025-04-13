# UFDev Agency Website

This is a modern agency website built with Next.js and Tailwind CSS featuring a dark mode design with emerald accents.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Comprehensive Deployment Guide for Non-Technical Users](#comprehensive-deployment-guide-for-non-technical-users)
  - [Part 1: Frontend Deployment](#part-1-frontend-deployment)
  - [Part 2: Backend Deployment](#part-2-backend-deployment)
  - [Part 3: Setting Up Your Database](#part-3-setting-up-your-database)
  - [Part 4: Domain and Email Configuration](#part-4-domain-and-email-configuration)
  - [Part 5: Maintenance and Updates](#part-5-maintenance-and-updates)
- [Customization Guide](#customization-guide)
  - [Basic Customization](#basic-customization)
  - [Intermediate Customization](#intermediate-customization)
  - [Advanced Customization](#advanced-customization)
- [For Node.js Developers](#for-node-js-developers-understanding-next-js)
- [Vercel Deployment Guide](#vercel-deployment-guide)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
ufdev-agency/
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   │   ├── about/      # About page
│   │   ├── services/   # Services pages
│   │   ├── contact/    # Contact page
│   │   ├── globals.css # Global styles
│   │   └── layout.js   # Root layout
│   ├── components/     # Reusable components
│   │   ├── common/     # Shared components
│   │   ├── home/       # Homepage components
│   │   └── layout/     # Layout components
├── tailwind.config.js  # Tailwind configuration
└── next.config.mjs     # Next.js configuration
```

## Comprehensive Deployment Guide for Non-Technical Users

This guide will walk you through deploying your UFDev Agency website from scratch, even if you have no technical background.

### Part 1: Frontend Deployment

#### Step 1: Sign up for Vercel
1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com) and click "Sign Up"
   - Choose to sign up with GitHub for the simplest setup
   - Complete the registration process

#### Step 2: Prepare your project
1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com) and click "Sign up"
   - Follow the registration process

2. **Create a new repository**
   - Once logged in to GitHub, click the "+" icon in the top right corner
   - Select "New repository"
   - Name your repository (e.g., "ufdev-agency-website")
   - Choose "Private" if you want to keep your code private
   - Click "Create repository"

3. **Upload your project**
   - If you're unfamiliar with Git, the easiest way is to use GitHub Desktop:
     - Download [GitHub Desktop](https://desktop.github.com/)
     - Install and sign in with your GitHub account
     - Choose "File" > "Add local repository"
     - Browse to your UFDev Agency folder
     - Write a summary (e.g., "Initial commit")
     - Click "Commit to main"
     - Click "Publish repository"
     - Select your new GitHub repository and click "Publish"

#### Step 3: Deploy with Vercel
1. **Import your project**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub account
   - Find and select your repository
   - Click "Import"

2. **Configure the project**
   - Project Name: Enter a name for your project (this affects the default URL)
   - Framework Preset: Should automatically detect Next.js
   - Root Directory: Leave as is (unless your project is in a subfolder)
   - Build Command: Leave as default (`npm run build`)
   - Install Command: Leave as default (`npm install`)
   - Output Directory: Leave as default (`.next`)

3. **Environment Variables**
   - Scroll down to "Environment Variables"
   - Add the following variables (exactly as written):
     - Name: `NODE_ENV` | Value: `production`
     - Name: `NEXT_PUBLIC_SITE_URL` | Value: `https://your-project-name.vercel.app` (or your custom domain if you have one)
     - Name: `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Value: `/api/contact`

4. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete (this may take a few minutes)
   - Once done, Vercel will provide you with a URL where your site is live

#### Step 4: Custom Domain (Optional)
1. **Purchase a domain**
   - Buy a domain from providers like [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)

2. **Add domain to Vercel**
   - In your Vercel project dashboard, click "Settings"
   - Select "Domains" from the left menu
   - Enter your domain name and click "Add"
   - Follow the instructions to set up DNS records:
     - Option 1: Use Vercel's nameservers (easiest)
     - Option 2: Add specific DNS records with your domain provider

3. **Verify domain**
   - Wait for DNS changes to propagate (can take up to 48 hours)
   - Once verified, your website will be accessible via your custom domain

### Part 2: Backend Deployment

#### Step 1: Deploy the API server
1. **Set up the backend on Vercel**
   - Your project is already configured to use Vercel's serverless functions
   - With Next.js App Router, your API endpoints in `src/app/api/` are automatically deployed

2. **Verify API functionality**
   - After deployment, test your contact form to ensure the backend is working
   - Visit your live site and try to submit the contact form
   - If there are issues, check the logs in your Vercel dashboard under "Deployments"

#### Alternative: Using a Separate Backend (if needed)

If you need a separate backend server (for more complex needs):

1. **Sign up for Render**
   - Go to [render.com](https://render.com) and sign up
   - It's free for basic web services and easier to use than alternatives

2. **Create a new Web Service**
   - Click "New" and select "Web Service"
   - Connect your GitHub repository (give Render access if needed)
   - Name your service
   - Set the build command to: `npm install && npm run build`
   - Set the start command to: `npm start`
   - Choose the "Free" plan
   - Click "Create Web Service"

3. **Set Environment Variables**
   - In your Render dashboard, go to the "Environment" tab
   - Add your environment variables:
     - `NODE_ENV`: `production`
     - `MONGODB_URI`: Your MongoDB connection string (see Database section)
     - `CORS_ORIGIN`: Your frontend URL

4. **Connect frontend to backend**
   - In your Vercel project, add an environment variable:
     - `NEXT_PUBLIC_API_URL`: Your Render backend URL

### Part 3: Setting Up Your Database

#### Step 1: Create a MongoDB Atlas account
1. **Sign up for MongoDB Atlas**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Try Free" and create an account
   - Complete the registration process

2. **Create a new cluster**
   - Select "M0 FREE" tier
   - Choose a cloud provider (AWS is good default)
   - Choose a region close to your users
   - Click "Create Cluster" (creation takes a few minutes)

#### Step 2: Configure database access
1. **Create a database user**
   - In the left sidebar, click "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and strong password (save these!)
   - Set privileges to "Read and write to any database"
   - Click "Add User"

2. **Set up network access**
   - In the left sidebar, click "Network Access"
   - Click "Add IP Address"
   - For simplicity, click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

#### Step 3: Get your connection string
1. **Connect to your cluster**
   - Click "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Select "Node.js" and copy the connection string
   - Replace `<password>` with your database user's password
   - Replace `myFirstDatabase` with a name (e.g., "ufdev-agency")

2. **Add to your backend environment**
   - Add this as an environment variable in Vercel:
     - Name: `MONGODB_URI`
     - Value: Your full connection string with password and database name

### Part 4: Domain and Email Configuration

#### Step 1: Email setup for contact form
1. **Create a new email account**
   - Create a professional email with your domain provider
   - Or use services like [Google Workspace](https://workspace.google.com)

2. **Configure email settings**
   - In Vercel, add these environment variables:
     - `EMAIL_USER`: Your email address
     - `EMAIL_PASS`: Your email password or app-specific password
     - `EMAIL_HOST`: Your email provider's SMTP server (e.g., `smtp.gmail.com`)
     - `EMAIL_PORT`: SMTP port (usually `587`)
     - `EMAIL_RECIPIENT`: Email where you want to receive contact form submissions

#### Step 2: Google Analytics (Optional)
1. **Create a Google Analytics account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click "Start measuring" to create a new account
   - Follow the setup steps
   - Create a "Web" data stream and note your Measurement ID (starts with "G-")

2. **Add to your website**
   - In Vercel, add an environment variable:
     - Name: `NEXT_PUBLIC_GA_TRACKING_ID`
     - Value: Your Measurement ID (e.g., `G-XXXXXXXXXX`)

### Part 5: Maintenance and Updates

#### Regular maintenance
1. **Monitor your website**
   - Regularly check your website to ensure it's working properly
   - Check Vercel dashboard for any error alerts

2. **Regular backups**
   - GitHub already serves as a code backup
   - For the database, MongoDB Atlas has automatic backups on paid plans

#### Making updates
1. **Update content**
   - Edit files in your GitHub repository directly on the GitHub website
   - For text changes, edit the relevant `.js` files (look for text in quotes)
   - For images, upload new images to the `public` folder
   - Vercel will automatically deploy your changes

2. **Major updates**
   - For major updates, it's best to:
     - Make changes locally first
     - Test with `npm run dev`
     - Push to GitHub
     - Let Vercel deploy automatically

## Customization Guide

### Basic Customization

#### Changing Colors
1. **Edit main colors**
   - Open `src/app/globals.css`
   - Find the `:root` section
   - Change color values (use a tool like [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors))
   ```css
   :root {
     --primary-color: #10B981; /* Change to your preferred color */
     --accent-color: #34D399; /* Change to your preferred accent */
     /* Other colors */
   }
   ```

#### Updating Text Content
1. **Find text to change**
   - Text content is in the `src/components` and `src/app` folders
   - For example, to change the homepage text, look in `src/app/page.js`
   - For the about page, check `src/app/about/page.js`

2. **Make text changes**
   - Find the text between quotation marks or inside tags like `<p>Your text here</p>`
   - Edit the text, save the file, and push to GitHub

#### Changing Images
1. **Prepare your images**
   - Use square images for logos and icons
   - Use landscape orientation for banners and hero images
   - Optimize images with a tool like [TinyPNG](https://tinypng.com)

2. **Replace images**
   - Upload your new images to the `public` folder
   - If replacing existing images, use the same filenames
   - Update image paths in code if using different filenames

### Intermediate Customization

#### Changing the Layout
1. **Edit the navigation**
   - Open `src/components/layout/Header.js`
   - Modify the navigation links by changing, adding, or removing items
   
2. **Edit the footer**
   - Open `src/components/layout/Footer.js`
   - Update company information, links, and social media

#### Adding a New Page
1. **Create the page file**
   - In `src/app`, create a new folder with your page name (e.g., `portfolio`)
   - Inside that folder, create a `page.js` file
   - Use this template:
   ```jsx
   "use client";
   
   import SectionReveal from '@/components/common/SectionReveal';
   
   export default function PortfolioPage() {
     return (
       <section className="py-16 bg-dark-900">
         <div className="container mx-auto px-4">
           <SectionReveal>
             <h1 className="text-3xl font-bold mb-8">Our Portfolio</h1>
             {/* Your content here */}
           </SectionReveal>
         </div>
       </section>
     );
   }
   ```

2. **Add the page to navigation**
   - Open `src/components/layout/Header.js`
   - Add your new page to the navigation links

### Advanced Customization

#### Creating New Components
1. **Create a new component file**
   - In `src/components`, add a new file (e.g., `Testimonials.js`)
   - Use this template:
   ```jsx
   "use client";
   
   import { motion } from 'framer-motion';
   
   const Testimonial = ({ author, company, quote }) => {
     return (
       <motion.div 
         className="bg-dark-800 p-6 rounded-xl"
         whileHover={{ y: -5 }}
       >
         <p className="text-gray-300 italic mb-4">"{quote}"</p>
         <p className="font-bold text-white">{author}</p>
         <p className="text-emerald-400">{company}</p>
       </motion.div>
     );
   };
   
   const Testimonials = ({ items }) => {
     return (
       <section className="py-16 bg-dark-900">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {items.map((item, index) => (
               <Testimonial key={index} {...item} />
             ))}
           </div>
         </div>
       </section>
     );
   };
   
   export default Testimonials;
   ```

2. **Use the component**
   - Import and use your component in any page:
   ```jsx
   import Testimonials from '@/components/Testimonials';
   
   const testimonialData = [
     {
       author: "Jane Doe",
       company: "ABC Corp",
       quote: "Working with UFDev was amazing! They delivered on time and exceeded expectations."
     },
     // Add more testimonials
   ];
   
   // Then in your page component:
   <Testimonials items={testimonialData} />
   ```

#### Modifying the Contact Form
1. **Edit form fields**
   - Open `src/components/contact/ContactForm.js`
   - Add, remove, or modify form fields
   - Update the form handling logic

2. **Change form processing**
   - Open `src/app/api/contact/route.js` to modify how form submissions are processed
   - Update email settings or add integrations with services like Zapier

## For Node.js Developers: Understanding Next.js

Coming from Node.js, Next.js will feel familiar but with some key differences:

### Key Concepts

1. **Pages vs Routes**: 
   - In Node/Express: You define routes with `app.get('/path', handler)`
   - In Next.js: You create files in the `app` directory that automatically become routes

2. **Server-Side vs Client Components**:
   - Default components are server components
   - Add `"use client";` at the top to make client components (with interactivity)

3. **Data Fetching**:
   - Instead of Express middleware, use built-in data fetching in page components
   - Example: 
     ```js
     async function getData() {
       const res = await fetch('https://api.example.com/data')
       return res.json()
     }
     
     export default async function Page() {
       const data = await getData()
       return <div>{data.title}</div>
     }
     ```

## Vercel Deployment Guide

### Frontend Deployment

1. **Prepare your project for deployment**

   Make sure your Next.js project is ready for production with environment variables configured:

   ```bash
   # Create a .env.production file
   touch .env.production
   
   # Add any production environment variables (example)
   echo "NEXT_PUBLIC_API_URL=https://your-backend-api-url.vercel.app/api" >> .env.production
   ```

2. **Install Vercel CLI (optional)**

   ```bash
   npm install -g vercel
   ```

3. **Deploy to Vercel through Git Integration (recommended)**

   a. Push your code to a GitHub, GitLab, or Bitbucket repository

   b. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub/GitLab/Bitbucket account

   c. Click "New Project" and select your repository

   d. Configure your project:
      - Framework Preset: Next.js
      - Root Directory: `ufdev-agency` (if your project is in a subdirectory)
      - Build Command: `npm run build` (default)
      - Output Directory: `.next` (default)
      - Environment Variables: Add any needed environment variables

   e. Click "Deploy"

4. **Deploy using Vercel CLI**

   Alternatively, you can deploy using the Vercel CLI:

   ```bash
   # Login to Vercel
   vercel login

   # Deploy to production
   vercel --prod
   ```

5. **Configure your custom domain (optional)**

   a. Go to your project dashboard on Vercel
   
   b. Navigate to "Settings" > "Domains"
   
   c. Add your domain and follow the DNS configuration instructions

### Backend Deployment

For the backend API, you have several options with Vercel:

#### Option 1: Serverless API Routes with Next.js (simplest)

If your backend is built with Next.js API routes:

1. These are automatically deployed with your frontend
2. API routes will be available at `https://your-domain.com/api/*`

Example API route structure:
```
src/app/api/
├── route.js           # Handles /api requests
└── contact/
    └── route.js       # Handles /api/contact requests
```

#### Option 2: Separate Vercel Backend Project

For a separate backend codebase (Express, NestJS, etc.):

1. **Prepare your backend project**

   a. Make sure you have a `package.json` with correct scripts:
   ```json
   {
     "scripts": {
       "build": "your-build-command",
       "start": "node dist/server.js"
     }
   }
   ```

   b. Configure the `vercel.json` file in your backend project:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "dist/server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "dist/server.js"
       }
     ]
   }
   ```

2. **Deploy the backend to Vercel**

   Follow the same deployment process as the frontend:

   ```bash
   # Navigate to your backend directory
   cd path/to/backend

   # Deploy to Vercel
   vercel --prod
   ```

3. **Configure environment variables**

   a. Go to your backend project on Vercel
   
   b. Navigate to "Settings" > "Environment Variables"
   
   c. Add necessary variables such as:
      - `DATABASE_URL`
      - `JWT_SECRET`
      - `CORS_ORIGIN` (set to your frontend URL)

#### Option 3: MongoDB Atlas for Database

If your backend uses MongoDB:

1. **Create a MongoDB Atlas account** at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

2. **Create a new cluster**
   
   a. Choose the free tier option
   
   b. Select a cloud provider and region (choose closest to your users)
   
   c. Name your cluster (e.g., "ufdev-production")

3. **Configure database access**
   
   a. Create a database user with password
   
   b. Set network access to allow connections from anywhere (0.0.0.0/0)

4. **Get your connection string**
   
   a. Click "Connect" on your cluster
   
   b. Choose "Connect your application"
   
   c. Copy the connection string
   
   d. Add this as `MONGODB_URI` environment variable in your Vercel backend project

### Connecting Frontend and Backend

1. **Set API URL in frontend**
   
   Add your backend URL as an environment variable in your frontend project:
   
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api.vercel.app
   ```

2. **Configure CORS in backend**
   
   Make sure your backend allows requests from your frontend domain:
   
   ```javascript
   // Example Express CORS configuration
   app.use(cors({
     origin: process.env.CORS_ORIGIN || 'https://your-frontend-domain.com',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true
   }));
   ```

### Continuous Deployment

1. **Set up automatic deployments**
   
   Vercel automatically deploys when you push to your repository's main branch

2. **Configure preview deployments**
   
   Vercel creates preview deployments for pull requests by default

3. **Add a build badge to your README.md (optional)**
   
   ```markdown
   [![Vercel Deployment Status](https://vercel-badge.vercel.app/api/your-github-username/your-repo-name)](https://your-domain.com)
   ```

### Tips for Vercel Deployments

1. **Optimize build times**:
   - Use the `.vercelignore` file to exclude unnecessary files
   - Consider using Turborepo for monorepos

2. **Troubleshooting deployments**:
   - Check the deployment logs in Vercel dashboard
   - Test locally with `vercel dev` before pushing

3. **Handling environment variables**:
   - Use `.env.local` for local development
   - Add production variables through Vercel dashboard
   - Never commit sensitive information to git

4. **Monitor your application**:
   - Enable Vercel Analytics for performance monitoring
   - Set up error tracking with Sentry
