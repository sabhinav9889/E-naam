# 🏆 E-Naam – Employee Reward & Recognition System

**E-Naam** is a web-based employee reward system built with **Next.js**, **Tailwind CSS**, and **TypeScript**.  
It allows users within an organization to recognize their peers, view and redeem reward points, and track their badges and praise history.

---

## 🚀 Features

- 🙌 **Praise Employees** – Send appreciation to coworkers.
- 🎖️ **View Badges** – Track earned recognition badges.
- 💰 **Reward Points** – Accumulate and encash points.
- 📜 **Praise History** – See who praised you and when.
- 👤 **Profile Management** – Update and view personal details.

---

## 🔐 Authentication

| Action | Route          |
| ------ | -------------- |
| Login  | `/auth/login`  |
| Signup | `/auth/signup` |

---

## 🧭 Post-Login Routes

| Page           | Route             |
| -------------- | ----------------- |
| Home           | `/home`           |
| Profile        | `/home/profile`   |
| Dashboard      | `/home/dashboard` |
| Employees List | `/home/employees` |
| Praise Someone | `/home/praise`    |

---

## 🛠 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Project Structure

app/
├── auth/ # Login & Signup pages
├── home/ # Dashboard, profile, employees, praise
├── layout.tsx # Global layout
├── page.tsx # Landing page
...
