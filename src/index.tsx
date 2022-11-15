import React from "react";
import { createRoot } from 'react-dom/client'
import App from './pages/app';
// import '@/assets/css/common.scss';
// import '@/assets/css/index.css';
import '@/assets/css/global.scss';


createRoot(
    document.getElementById("root") as HTMLElement
).render(<App />);