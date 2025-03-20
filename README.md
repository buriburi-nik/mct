# Restaurant Web Application

## Overview

This web application provides a modern, responsive interface for a restaurant business. The platform offers an intuitive user experience with features like authentication, menu display, and contact functionality.

## Features

- User authentication and account management
- Interactive menu display
- Responsive design for all device sizes
- Contact form functionality
- Modern UI with appealing food visuals
- Mobile-friendly navigation

## Technologies Used

- React.js
- Next.js
- Tailwind CSS
- Firebase Authentication
- Web3Forms API for contact form submission
- Vercel for hosting and deployment

## Live Demo

You can access the live application at: [https://mct-5fcl.vercel.app/](https://mct-5fcl.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Firebase account for authentication services

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/restaurant-app.git
cd restaurant-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure Firebase

   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication service
   - Add your Firebase configuration to the project

4. Configure Web3Forms

   - Get your API key from [web3forms.com](https://web3forms.com)
   - Add your API key to the contact form configuration

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

6. Open your browser and navigate to `http://localhost:3000`

## Firebase Authentication Setup

This project uses Firebase for user authentication:

1. Create a `.env.local` file in the project root with your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

2. Import and initialize Firebase in your application

## Contact Form Integration

The contact form uses Web3Forms API:

1. Configure your form with the endpoint: `https://api.web3forms.com/submit`
2. Include your access key in the form data
3. Handle form submission responses appropriately

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to your GitHub repository
2. Connect your repository to Vercel
3. Set up environment variables in the Vercel dashboard
4. Vercel will automatically build and deploy your application

## Project Structure

```
restaurant-app/
├── components/        # React components
│   ├── auth/          # Authentication components
│   ├── layout/        # Layout components
│   ├── menu/          # Menu-related components
│   └── contact/       # Contact form components
├── pages/             # Next.js pages
├── public/            # Static assets and images
├── styles/            # CSS/Tailwind styles
├── lib/               # Utility functions
│   ├── firebase.js    # Firebase configuration
│   └── api.js         # API helpers
├── .env.local         # Environment variables (git-ignored)
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Web3Forms](https://web3forms.com/)
- [Vercel](https://vercel.com/)
