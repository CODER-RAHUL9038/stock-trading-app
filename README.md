# Quantify - Modern Stock Trading Platform

Quantify is a high-performance, responsive stock trading platform UI built with modern web technologies. It provides a seamless user experience for exploring market insights, understanding brokerage models, and accessing educational resources.

![Quantify Logo](frontend/src/assets/images/logo.svg)

## 🚀 Features

- **Comprehensive Landing Page:** An engaging homepage featuring awards, statistics, and educational highlights.
- **Product Showcase:** Detailed sections for various trading tools like Kite, Console, and specialized ecosystem integrations.
- **Transparent Pricing:** A dedicated pricing page with clear brokerage breakdowns for equity, intraday, and mutual funds.
- **Education & Support:** Integrated support portals and knowledge base sections to empower traders.
- **Responsive Design:** Fully optimized for different screen sizes, ensuring a consistent experience across devices.
- **Modern UI Components:** Built using React 19 for optimal performance and maintainability.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router 7
- **Styling:** Vanilla CSS
- **Assets:** Scalable Vector Graphics (SVG) and optimized image assets

## 📦 Project Structure

```text
quantify/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── assets/     # Images and static assets
│   │   ├── landing_page/ # UI Components organized by section
│   │   │   ├── home/
│   │   │   ├── products/
│   │   │   ├── pricing/
│   │   │   ├── about/
│   │   │   ├── support/
│   │   │   └── signup/
│   │   └── App.jsx     # Main routing and layout
│   └── package.json    # Frontend dependencies and scripts
└── backend/            # Future backend services (Placeholder)
```

## 🚥 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quantify.git
   cd quantify
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📈 Future Roadmap

- [ ] Implementation of a robust Node.js/Express backend.
- [ ] Real-time stock data integration using WebSockets.
- [ ] User authentication and profile management.
- [ ] Interactive charting and technical analysis tools.
- [ ] Paper trading functionality with virtual currency.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Your Name/Team]
