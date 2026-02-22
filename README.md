# Sairam Consultation Website

A modern, responsive website for Sairam consultation services built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🔐 Authentication system (Login/Signup with email/password and Google OAuth)
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🐳 Docker support for easy deployment
- 🎭 Smooth animations with Framer Motion

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose** (for Docker deployment)

## Quick Start (Without Docker)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Docker Deployment

### Option 1: Production Build with Docker

This option builds the application and serves it with Nginx.

#### Step 1: Build the Docker Image

```bash
docker build -t sairam-consultation .
```

#### Step 2: Run the Container

```bash
docker run -d -p 3000:80 --name sairam-consultation sairam-consultation
```

The application will be available at `http://localhost:3000`

#### Step 3: Stop the Container

```bash
docker stop sairam-consultation
docker rm sairam-consultation
```

### Option 2: Using Docker Compose (Production)

This is the easiest way to run the production build.

#### Step 1: Build and Start

```bash
docker-compose up -d --build
```

#### Step 2: View Logs

```bash
docker-compose logs -f
```

#### Step 3: Stop the Container

```bash
docker-compose down
```

The application will be available at `http://localhost:3000`

### Option 3: Development Mode with Docker

For development with hot-reload support.

#### Step 1: Build and Start Development Container

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

#### Step 2: View Logs

```bash
docker-compose -f docker-compose.dev.yml logs -f
```

#### Step 3: Stop the Container

```bash
docker-compose -f docker-compose.dev.yml down
```

The development server will be available at `http://localhost:5173`

## Docker Commands Reference

### Production Commands

```bash
# Build image
docker build -t sairam-consultation .

# Run container
docker run -d -p 3000:80 --name sairam-consultation sairam-consultation

# View logs
docker logs -f sairam-consultation

# Stop container
docker stop sairam-consultation

# Remove container
docker rm sairam-consultation

# Using Docker Compose
docker-compose up -d --build    # Build and start
docker-compose ps               # Check status
docker-compose logs -f          # View logs
docker-compose restart          # Restart containers
docker-compose down             # Stop and remove
```

### Development Commands

```bash
# Start development container
docker-compose -f docker-compose.dev.yml up -d --build

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development container
docker-compose -f docker-compose.dev.yml down
```

## Project Structure

```
├── Components/
│   ├── ui/              # UI components (shadcn/ui)
│   │   └── home/        # Home page components
│   └── UserNotRegisteredError.tsx
├── Pages/
│   └── Home.tsx         # Main home page
├── lib/
│   └── utils.ts         # Utility functions
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── Dockerfile           # Production Dockerfile
├── Dockerfile.dev       # Development Dockerfile
├── docker-compose.yml   # Production compose file
├── docker-compose.dev.yml # Development compose file
├── nginx.conf          # Nginx configuration
└── package.json        # Dependencies
```

## Environment Variables

Currently, no environment variables are required. If you need to add API keys or other configuration:

1. Create a `.env` file in the root directory
2. Add your variables:
   ```
   VITE_API_URL=https://api.example.com
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   ```
3. Access them in your code using `import.meta.env.VITE_API_URL`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Docker** - Containerization
- **Nginx** - Web server (production)

## Troubleshooting

### Docker Issues

**Issue: Port already in use**
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process or use a different port
docker run -d -p 3001:80 sairam-consultation
```

**Issue: Container won't start**
```bash
# Check logs
docker logs sairam-consultation
# Rebuild without cache
docker build --no-cache -t sairam-consultation .
```

**Issue: Changes not reflecting in development**
```bash
# Rebuild the container
docker-compose -f docker-compose.dev.yml up -d --build
```

### Build Issues

**Issue: Build fails**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, email hello@sairam.com or open an issue in the repository.

---

Built with ❤️ by Sairam Team
