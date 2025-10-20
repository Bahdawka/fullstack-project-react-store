# React Store & Products Management

## Progect was deployed on VERCEL : https://fullstack-project-react-store-three.vercel.app

Responsive web application built with React, TypeScript, and Redux for managing posts, users, products, and todos. This project demonstrates advanced React patterns, state management, and modern web development practices.

## Features

### Core Functionality
- **Multi-section Dashboard** - Centralized statistics and navigation
- **Posts Management** - View and browse blog posts with pagination
- **User Profiles** - Display user information and contact details
- **Product Catalog** - Full CRUD operations for product management
- **Todo Tasks** - Task list with completion status tracking
- **Authentication System** - Login/logout functionality with protected routes

### Technical Features
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Real-time Data** - Integration with JSONPlaceholder API and MockAPI
- **State Management** - Redux Toolkit with async thunks
- **TypeScript** - Full type safety and IntelliSense support
- **Modern UI** - Clean, professional interface with smooth animations
- **Error Handling** - Comprehensive error boundaries and loading states

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Static type checking and enhanced developer experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing with nested routes

### State Management
- **Redux Toolkit** - Modern Redux with simplified setup
- **React Redux** - Official React bindings for Redux
- **Custom Hooks** - Reusable logic for API operations

### Styling
- **CSS3** - Custom styles with CSS variables and grid/flexbox
- **Responsive Design** - Mobile-first responsive layouts
- **CSS Variables** - Consistent color palette and theming

### API Integration
- **Axios** - HTTP client for API requests
- **JSONPlaceholder** - Fake REST API for posts, users, and todos
- **MockAPI** - Custom API for product CRUD operations

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared components
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   └── Navbar.tsx   # Navigation component
│   ├── form/            # Form-related components
│   │   ├── InputField.tsx
│   │   ├── SelectField.tsx
│   │   └── ProductForm.tsx
│   ├── modals/          # Modal components
│   │   └── Modal.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Dashboard with statistics
│   │   ├── Posts.tsx    # Posts listing
│   │   ├── Users.tsx    # Users listing
│   │   ├── Todos.tsx    # Todos listing
│   │   └── Products.tsx # Products management
│   └── products/        # Product-specific components
│       ├── AddProduct.tsx
│       ├── EditProduct.tsx
│       ├── Product.tsx
│       └── Pagination.tsx
├── redux/
│   ├── store.ts         # Redux store configuration
│   └── slices/          # Redux slices
│       ├── authSlice.ts
│       ├── postsSlice.ts
│       ├── usersSlice.ts
│       ├── productsSlice.ts
│       ├── createFetchSlice.ts
│       └── createFetchThunk.ts
├── hooks/               # Custom React hooks
│   ├── useFetch.ts      # Generic data fetching
│   ├── useAdd.ts        # Add operations
│   ├── useUpdate.ts     # Update operations
│   └── useDelete.ts     # Delete operations
├── router/              # Routing configuration
│   ├── router.tsx
│   ├── routes.tsx
│   └── index.ts
├── types/               # TypeScript interfaces
│   ├── Post.interface.ts
│   ├── User.interface.ts
│   ├── Product.interface.ts
│   └── Common.ts
├── utils/               # Utility functions
│   ├── mockapi.ts       # API URL management
│   └── debounce.ts      # Debounce utility
├── data/                # Static data and configurations
│   ├── mockData.ts      # Initial data and options
│   └── db.json          # Local data storage
├── ui/                  # UI components
│   └── Loading.tsx      # Loading spinner
├── App.tsx              # Main app component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Key Features Breakdown

### 1. Dashboard (Home Page)
- **Statistics Cards** - Real-time counts of posts, users, and todos
- **Navigation Cards** - Quick access to all sections
- **Responsive Grid Layout** - Adapts to all screen sizes

### 2. Posts Management
- **Post Listing** - Display all posts with pagination (limited to 20 posts)
- **Post Details** - Title, content, and author information
- **Loading States** - Smooth loading experience

### 3. User Management
- **User Profiles** - Complete user information display
- **Contact Details** - Email, phone, website information
- **Status Indicators** - Active user status

### 4. Product Catalog
- **Full CRUD Operations** - Create, Read, Update, Delete
- **Advanced Filtering** - Search by name, sort by various fields
- **Pagination** - Efficient data loading
- **Authentication Protected** - Login required for modifications
- **Modal Forms** - Clean add/edit interfaces

### 5. Todo Management
- **Task Listing** - All todos with completion status (limited to 30 tasks)
- **Status Indicators** - Visual completion status  
- **User Assignment** - Track task ownership

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-final-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

```

## Configuration

### Environment Setup
The project uses the following APIs:
- **JSONPlaceholder** - `https://jsonplaceholder.typicode.com/`
- **MockAPI** - `https://68c86f805d8d9f5147355d22.mockapi.io/`

### Authentication State
- **Default Login State** - Users are logged in by default for demo purposes
- **Persistent Sessions** - Authentication state is preserved using localStorage
- **Protected Features** - Product creation, editing, and deletion require authentication

### Display Limitations
- **Posts Page** - Shows first 20 posts out of total available
- **Todos Page** - Displays first 30 todos out of total available  
- **Users Page** - Shows all users without pagination

## Error Handling

### 404 Page
The application includes a custom 404 Not Found page for invalid routes with options to:
- Navigate back to home page
- Go back to previous page

### Loading States
All data fetching operations include proper loading indicators and error handling for improved user experience.

## License

This project is created for educational purposes and demonstrates modern React development practices.
