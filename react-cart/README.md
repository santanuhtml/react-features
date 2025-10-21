# React Shopping Cart

A modern shopping cart implementation built with React, featuring a responsive design and context-based state management.

## Features

- 📱 Responsive design that works on desktop and mobile browsers
- 🛍️ Product listing with image and price details
- 🛒 Add/Remove items from cart
- 💰 Real-time cart total calculation
- 🔍 Product details page with detailed information
- 🧭 React Router integration for seamless navigation
- 💾 Context API for global state management

## Tech Stack

- React 18
- React Router v6
- Context API for state management
- Vite for build tooling
- CSS for styling

## Project Structure

```
src/
├── assets/         # Static assets (images, CSS)
├── component/      # Reusable components
├── context/        # Context providers
└── pages/         # Route components
```

## Components

- `Layout`: Main layout wrapper with header and footer
- `Header`: Navigation and cart icon
- `ProductList`: Displays grid of available products
- `ProductCart`: Individual product card component
- `Footer`: Site footer with links

## Pages

- `Home`: Landing page with product listings
- `About`: Information about the store
- `ProductDetails`: Detailed view of individual products
- `CartPage`: Shopping cart with item management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Start the JSON server (for product data):
   ```bash
   json-server --watch db.json --port 3000
   ```

## State Management

The application uses React's Context API for state management. The cart state is managed through `CartContext.jsx`, which provides:

- Cart items array
- Add to cart functionality
- Remove from cart functionality
- Cart total calculation
- Item quantity management

## Routes

- `/`: Home page with product listings
- `/about`: About page
- `/:slug`: Dynamic product details page
- `/cart`: Shopping cart page

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
