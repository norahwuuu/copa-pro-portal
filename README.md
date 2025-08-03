# copa-pro-portal

**copa-pro-portal** is a professional dental software frontend developed for **Ulab Systems**. It provides doctors with a browser-based interface to upload 3D oral scans, visualize models, and generate personalized dental treatment plans.

Designed for clinical use, this platform supports digital workflows in orthodontics and general dentistry.

---

## 🦷 Key Features

- Registration and Login
- Upload and interact with 3D oral scan models (STL/PLY/OBJ)
- Real-time model viewer: rotate, zoom, annotate
- Treatment planning interface with AI/manual options
- Patient and case file management
- Secure authentication & role-based access
- Internationalization (i18n) support
- Fully responsive UI for clinics and labs

---

## 🛠 Tech Stack

| Category        | Tech                                |
|----------------|-------------------------------------|
| Framework       | React + TypeScript                  |
| State           | Redux Toolkit, RTK Query            |
| Viewer          | Three.js / vtk.js / react-three-fiber |
| UI              | Tailwind CSS / Ant Design           |
| Routing         | React Router                        |
| Forms           | React Hook Form                     |
| Build Tool      | Vite or Webpack                     |
| Testing         | Jest                                |

---

## 📦 Installation

```bash
git clone https://github.com/norahwuuu/copa-pro-portal.git
cd copa-pro-portal
npm install


⸻

🚀 Start Development

npm run start

Then open http://localhost:3000 in your browser.

⸻

🗂 Folder Structure

src/
├── 📁 .umi/                    # UmiJS build artifacts and temporary files
├── 📁 assets/                  # Static resources (images, fonts, SVGs)
├── 📁 components/              # Reusable UI components
├── 📁 hooks/                   # Custom React hooks
├── 📁 layouts/                 # Layout components and page structure
├── 📁 locales/                 # Internationalization files (i18n)
├── 📁 pages/                   # Page components and route modules
├── 📁 services/                # API service layer
├── 📁 theme/                   # Theme configuration and styling
├── 📁 utils/                   # Utility functions and helpers
├── 📁 wrappers/                # Higher-order components (HOCs)
├── 📁 _tests_/                 # Test files and test utilities
├── 📄 declare.d.ts             # TypeScript declaration file
├── 📄 global.less              # Global stylesheet
├── 📄 global.tsx               # Global configuration file
└── 📄 setupTests.ts            # Test environment setup


⸻

📷 Screenshots

	./demo1.png
    ./demo2.png

⸻

🌐 Demo

Coming Soon

⸻

🔐 Data Privacy
	•	GDPR-compliant
	•	Token-based secure authentication
	•	No real patient data in development

⸻

👤 Author

Norah Wu
Frontend Developer – Essen, Germany
📧 norah.wuuu@gmail.com
🌐 github.com/norahwuuu

---