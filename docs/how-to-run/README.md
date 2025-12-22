# ▶️ How to Run the Project Beginner

This guide explains step-by-step how to create the folder, install dependencies, run the dev server, and build the project.

---

## 🗂️ 1. Create Project Folder

1. Go to Desktop  
2. Right-click → **New Folder**  
3. Name it: **Floder Name**


---

## 🖥️ 2. Open in VS Code

1. Open **VS Code**  
2. File → **Open Folder**  
3. Select the folder  
4. Click **OK**

---

## To Create a New vite project
```sh
npm create vite@latest ts-npm-vite-tailwind 
```
## Navigate into the Project Folder
```sh
cd ts-npm-vite-tailwind
```

## install Dependencies
```sh
npm install
```

## Install Tailwind Css
```sh
npm install tailwindcss @tailwindcss/vite
```

## Configure the Vite plugin
- Add the @tailwindcss/vite plugin to your Vite configuration

```sh
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react()
  ],
})
```

## Import Tailwind Css
- Add an @import to your CSS file that imports Tailwind CSS.
```sh
@import "tailwindcss";
```

## Start Your Build Process
```sh
npm run dev
```

