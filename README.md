# 🏗️ SweetHome Construction Company Profile Website


This is a **Company Profile Website** built with a **separated frontend-backend architecture** using:

- 🔧 **Backend**: [Laravel](https://laravel.com/) (API)
- 💡 **Frontend**: [React.js](https://reactjs.org/) (SPA)

---

## 📂 Repository Structure

- `backend/` – Laravel project (RESTful API)
- `frontend/` – React project (consuming the API)

---

## 🚀 Features

### ✅ Frontend (React.js)
- Interactive landing page
- About the company section

### ✅ Backend (Laravel)
- Admin panel for content management

---

## 🛠️ Getting Started (Local Development)

### 🔁 1. Clone the Repository

```bash
git clone https://github.com/rizaljihadudin/sweethome-construction.git
cd sweethome-construction

#SETUP BACKEND
cd backend

# Install PHP dependencies
composer install

# Copy and configure .env
cp .env.example .env

# Generate app key
php artisan key:generate

# Setup your database and run migrations
php artisan migrate --seed

# Run Laravel development server
php artisan serve


#SETUP FRONTEND
cd ../frontend

# Install Node dependencies
npm install

# Start development server
npm run dev



