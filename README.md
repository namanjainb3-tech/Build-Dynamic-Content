BuilderPro | Dynamic Content Builder
Live Demo: https://builder-three-theta.vercel.app/

BuilderPro is a high-performance, modular No-Code Page Builder created as part of the Conversely AI technical assessment. The application allows users to build custom layouts using a drag-and-drop interface, featuring real-time synchronization and persistent storage.

🚀 Features
Modular Component Library: Add Headings, Paragraphs, and Image Cards with a single click from the sidebar.

Native Drag & Drop: Intuitive reordering of content blocks using the HTML5 Drag and Drop API.

LocalStorage Persistence: Your canvas and theme preferences are automatically saved and restored on page refresh.

Bootstrap 5.3 Dark Mode: Full support for system-wide dark/light themes with a seamless toggle.

Responsive Design: Fully optimized for mobile, tablet, and desktop views using Bootstrap’s grid system.

Professional UI: Features a custom "Dot Grid" canvas background and cinematic UI enhancements.

🛠️ Tech Stack
Frontend Library: React.js

Styling: Bootstrap 5.3 & Tailwind CSS

Icons: Lucide React

Deployment: Vercel

State Management: React Hooks (useState, useEffect)

🏗️ Architecture
The project follows a Component-Based Architecture to ensure code maintainability and scalability:

App.jsx: Manages the global state, drag-and-drop logic, and LocalStorage sync.

Sidebar.jsx: The "Palette" containing available building blocks.

Navbar.jsx: Handles branding, block counting, and global actions like Reset/Theme toggle.

ContentBlock.jsx: A recursive-ready component that renders specific block types and handles individual updates.

Types.js: Centralized constant definitions to prevent "magic strings".

🔧 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/namanjainb3-tech/Build-Dynamic-Content.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
👨‍💻 Author
Naman Jain Computer Science & Engineering Student @ IIIT Sonepat ('29)

Specialization: Data Science & Analytics

GitHub: namanjainb3-tech

Interests: Software Development, Photography, and Sketching

Developed with ❤️ for the Conversely AI Internship Assignment.
