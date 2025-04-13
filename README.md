# UFDev Agency Website

A modern, responsive website for UFDev Agency showcasing our services, portfolio, and contact information.

## Features

- Modern UI with smooth animations using Framer Motion
- Responsive design for all device sizes
- Contact form with email functionality
- Blog section with dynamic content
- Portfolio showcase
- Service descriptions

## Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ufdev-agency.git
   cd ufdev-agency
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string  # REQUIRED
   EMAIL_USER=your_email_for_contact_form
   EMAIL_PASS=your_email_password
   ```

   > **IMPORTANT**: The MONGODB_URI is required for the application to function. You can get a free MongoDB Atlas database at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Quick deployment steps for Vercel:

1. Ensure all configuration files are set up correctly
2. Connect your GitHub repository to Vercel
3. Configure build settings as specified in the deployment guide
4. Set up environment variables
5. Deploy!

## Project Structure

```
src/
├── app/             # Next.js app router pages
├── components/      # React components
│   ├── common/      # Shared components
│   ├── contact/     # Contact form components
│   ├── home/        # Homepage components
│   └── ...          # Other component groups
├── lib/             # Utility functions and helpers
└── models/          # MongoDB models
```

## Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vercel.json` - Vercel deployment settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

© 2024 UFDev Agency. All rights reserved.
