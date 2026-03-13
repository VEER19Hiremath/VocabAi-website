# 📚 Vocab Master - Web Portal

A React-based frontend for the Vocab Master platform, designed to provide an interactive vocabulary learning experience. This portal is optimized for development with modern Node.js and deployment within WordPress environments.

---

## 🚀 Getting Started

Follow these steps to set up your local development environment.

### 1. Clone the Repository
``
git clone [https://gitlab.com/mathangisravan7/vocab-website.git](https://gitlab.com/mathangisravan7/vocab-website.git)
cd vocab-website
2. Environment Setup
To manage local scripts and tooling alongside the React environment, we use a Python virtual environment.

Create and activate the environment:

# Create the environment
python -m venv .venv

# Activate it (Windows)
.\.venv\Scripts\activate
3. Install Dependencies
Ensure you have Node.js (v22.11.0+) installed.

# Clean install of all packages
npm install
Note: If you encounter dependency resolution errors due to versioning, use:
npm install --legacy-peer-deps

# 🛠 Development & Build
Running Locally
To start the development server with hot-reloading:

npm start
The site will be available at http://localhost:3000.

Production Build
To create an optimized production bundle for deployment:

npm run build
This generates a build/ folder containing the static assets.

# 📝 WordPress Deployment Guide (Main Domain)
This project is configured to run as the primary application for vocab-ai.com. By using ReactPress Canvas mode, the React app takes over the entire domain, removing standard WordPress theme elements.

Step 1: Server Upload
Use SFTP or your hosting File Manager to navigate to:

wp-content/plugins/reactpress/apps/

Upload the vocab-website project folder into this directory.

Step 2: ReactPress Configuration
Open the ReactPress menu in the WordPress Dashboard.

Link the uploaded folder to a new page slug (e.g., home).

Set the Page Template to ReactPress Canvas within the WordPress page editor to ensure a full-screen React experience.

Step 3: Launch as Main Site
Navigate to Settings > Reading in WordPress.

Under Your homepage displays, select A static page.

Set your Homepage to the ReactPress page you just created.

Run npm run build inside the server folder to go live.

# 📺 Reference Guide
For a detailed visual walkthrough of the integration process, refer to the following video:
https://www.youtube.com/watch?v=uY_qWygLwcU

# 🛠 Tech Stack
Frontend: React 17

Styling: Tailwind CSS & Bootstrap 5

Routing: React Router DOM v6

Environment: Node.js v22

# 👥 Authors
Mathangi Sravan — Lead Developer
