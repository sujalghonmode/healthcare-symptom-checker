# 🏥 Healthcare Symptom Checker

An intelligent symptom checker application that uses AI to analyze symptoms and provide health insights. Built with React frontend and Node.js backend, powered by Google's Gemini AI.

## 🌟 Features

- **Smart Symptom Analysis**: AI-powered symptom evaluation using Google Gemini
- **Interactive UI**: Modern, responsive design with Tailwind CSS
- **Real-time Processing**: Instant symptom analysis with loading indicators
- **Comprehensive Results**: Detailed health insights and recommendations
- **Form Validation**: Robust input validation for accurate symptom data

## 🏗️ Project Structure

```
Healthcare Symptom Checker/
├── 📁 backend/           # Node.js API server
│   ├── 🔧 src/
│   │   ├── server.js     # Express server setup
│   │   ├── config/       # Prompt templates & configurations
│   │   ├── routes/       # API endpoints
│   │   ├── services/     # AI integration & utilities
│   │   └── utils/        # Validation helpers
│   └── 📄 package.json
├── 📁 frontend/             # React frontend application
│   ├── 🔧 src/
│   │   ├── App.jsx       # Main application component
│   │   └── components/   # UI components
│   └── 📄 package.json
└── 📄 README.md         # You are here!
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Google Gemini API key

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd "Healthcare Symptom Checker"
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your Gemini API key to .env file

# Start the backend server
npm start
```
The backend will run on `http://localhost:3000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
The frontend will run on `http://localhost:5173`

## 🔧 Configuration

### Backend Environment Variables
Create a [`.env`](backend/.env) file in the backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

### API Integration
The application uses Google's Gemini AI through the [`gemini.js`](backend/src/services/gemini.js) service for symptom analysis.

## 🎯 Usage

1. **Open the Application**: Navigate to `http://localhost:5173`
2. **Enter Symptoms**: Use the [`SymptomForm`](frontend/src/components/SymptomForm.jsx) to input your symptoms
3. **Get Analysis**: The AI will process your symptoms and provide insights
4. **View Results**: See detailed analysis in the [`ResultCard`](frontend/src/components/ResultCard.jsx) component

## 🛠️ Development

### Frontend Technologies
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Component Architecture**: Modular, reusable components

### Backend Technologies
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Google Gemini AI**: Advanced language model
- **JSON Recovery**: Error handling and data validation

### Key Components

#### Frontend
- [`App.jsx`](frontend/src/App.jsx) - Main application component
- [`SymptomForm.jsx`](frontend/src/components/SymptomForm.jsx) - Symptom input form
- [`ResultCard.jsx`](frontend/src/components/ResultCard.jsx) - Results display
- [`Loader.jsx`](frontend/src/components/Loader.jsx) - Loading indicator

#### Backend
- [`server.js`](backend/src/server.js) - Express server configuration
- [`symptoms.js`](backend/src/routes/symptoms.js) - API routes
- [`gemini.js`](backend/src/services/gemini.js) - AI service integration
- [`validator.js`](backend/src/utils/validator.js) - Input validation

## 📝 API Endpoints

### POST `/api/symptoms`
Analyze symptoms using AI
- **Body**: Symptom data
- **Response**: AI analysis and recommendations

## 🔍 Available Scripts

### Backend
```bash
npm start          # Start the production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🚨 Important Notes

- This application is for **informational purposes only**
- **Always consult healthcare professionals** for medical advice
- Do not use this as a substitute for professional medical diagnosis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🆘 Support

If you encounter any issues:
1. Check the [backend README](backend/README.md) for backend-specific setup
2. Check the [frontend README](frontend/README.md) for frontend-specific setup
3. Ensure all environment variables are properly configured
4. Verify that both servers are running on the correct ports

---

**⚠️ Medical Disclaimer**: This application provides general health information only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.