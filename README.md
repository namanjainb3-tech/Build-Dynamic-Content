# 🚀 BuilderPro — Dynamic Content Builder

A modern no-code page builder that enables users to create, organize, and customize content layouts through an intuitive drag-and-drop interface.

BuilderPro allows users to dynamically build pages using reusable content blocks while providing real-time updates, persistent storage, dark mode support, and a responsive user experience.

---

## 🌐 Live Demo

🔗 https://build-dynamic-content.vercel.app/

---

## 📌 Overview

BuilderPro is a React-based visual content builder designed around modular UI principles.

Users can add content blocks, rearrange them using native drag-and-drop interactions, customize content in real time, and persist their workspace automatically using LocalStorage.

The project demonstrates frontend architecture, state management, dynamic rendering, drag-and-drop functionality, and responsive UI development.

---

## ✨ Features

### 🧩 Dynamic Content Blocks

Create pages using reusable components:

* Headings
* Paragraphs
* Image Cards

Each block can be added instantly from the component palette.

---

### 🎯 Native Drag & Drop

Reorder content blocks seamlessly using the HTML5 Drag and Drop API.

* Real-time movement
* Smooth user interaction
* Dynamic content restructuring

---

### 💾 Persistent Workspace

All content is automatically stored using LocalStorage.

Users can:

* Refresh the browser
* Close and reopen the application

without losing their progress.

---

### 🌙 Dark Mode Support

Modern dark/light theme system with:

* Theme persistence
* Instant switching
* Consistent UI experience

---

### 📱 Fully Responsive

Optimized for:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

using responsive layouts and scalable UI components.

---

### ⚡ Real-Time Rendering

All modifications are reflected immediately without page reloads, creating a seamless editing experience.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)

### Styling

* Bootstrap 5.3
* Tailwind CSS

### Icons

* Lucide React

### State Management

* React Hooks

  * useState
  * useEffect

### Storage

* Browser LocalStorage

### Deployment

* Vercel

---

## 🏗️ Architecture

The application follows a modular component-based architecture.

```text
Build-Dynamic-Content/
│
├── docs/                         
│   └── screenshots/
│       ├── homepage.png
│       ├── builder.png
│       └── darkmode.png
│
├── public/                       
│   └── favicon.ico
│
├── src/                          
│   ├── components/               
│   │   ├── ContentBlock.jsx      
│   │   ├── Navbar.jsx            
│   │   └── Sidebar.jsx           
│   │
│   ├── utils/                    
│   │   └── Types.js              
│   │
│   ├── App.css                   
│   ├── App.jsx                   
│   |── main.jsx
|   └── index.css                 
│
├── index.html                    
├── package.json                  
└── vite.config.js
```

---               

### Core Components

#### App.jsx

* Global state management
* Drag-and-drop logic
* LocalStorage synchronization

#### Sidebar.jsx

* Component palette
* Block creation controls

#### Navbar.jsx

* Theme toggle
* Reset functionality
* Workspace controls

#### ContentBlock.jsx

* Dynamic rendering engine
* Block editing
* Content updates

#### Types.js

* Centralized constants
* Prevents hardcoded values
* Improves maintainability

---

## 📸 Screenshots

### Homepage

![Homepage](docs/screenshots/homepage.png)

### Content Builder

![Builder](docs/screenshots/builder.png)

### Dark Mode

![Dark Mode](docs/screenshots/darkmode.png)

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/namanjainb3-tech/Build-Dynamic-Content.git
```

Navigate into the project:

```bash
cd Build-Dynamic-Content
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 📚 Key Learnings

During this project, I explored:

* Component-based architecture in React
* Dynamic UI rendering
* HTML5 Drag & Drop API
* State synchronization
* LocalStorage persistence
* Responsive design systems
* UI/UX optimization

---

## 🔮 Future Improvements

* Nested content blocks
* Export page as JSON
* Import saved layouts
* Undo / Redo support
* Template system
* Cloud synchronization
* Multi-page builder support

---

## 👨‍💻 Author

### Naman Jain

Computer Science Engineering Student (Data Science & Analytics)

* IIIT Sonepat
* Software Development
* AI & Intelligent Systems
* Frontend Engineering
* Scalable Web Applications

---

⭐ If you found this project interesting, consider giving it a star.

