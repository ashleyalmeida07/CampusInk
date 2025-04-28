# CampusLink

CampusLink is a dynamic, full-stack academic platform designed to seamlessly connect students, faculty, and campus activities. It serves as a centralized portal for managing academic events, forums, study resources, and real-time communication within educational institutions.

---

## 🚀 Project Overview

Many campuses struggle with fragmented communication, inefficient event management, and resource sharing. CampusLink addresses these challenges by providing:

- A unified platform for both academic and extracurricular engagement.
- Real-time event creation, updates, and participation.
- Study material sharing for easy collaboration.
- Discussion forums and group chats to boost interaction.
- A mobile-first, responsive interface with Dark/Light mode options.
- A scalable and easy-to-deploy solution with minimal server-side management.

CampusLink empowers students to stay updated, organized, and actively involved in campus life, while providing faculty with tools to better coordinate academic initiatives.

---

## 🛠️ Technologies Used

**Frontend:**
- Next.js (React framework)
- TypeScript (for type-safe, scalable code)
- Tailwind CSS (utility-first styling framework)
- PostCSS (for CSS transformations)

**Backend:**
- Next.js Serverless API Routes
- (Optional future integration) Firebase / Supabase for authentication and database

**Deployment:**
- Vercel (serverless deployment and hosting)

**Package Management:**
- PNPM (fast, disk-space efficient package manager)

**Configuration Tools:**
- ESLint and Prettier for code quality and formatting
- Tailwind Config & TypeScript Config for project customization

---

## 🔧 Setup Instructions

Follow these steps to set up CampusLink locally on your machine:

### Prerequisites
- Node.js (v18 or above)
- PNPM (preferred) or npm/yarn
- Git

### Installation Steps

1. **Clone the Repository**
```bash
git clone <your-repository-link>
```

2. **Navigate to the Project Directory**
```bash
cd academic-platform
```

3. **Install Dependencies**
```bash
pnpm install
```

4. **Run the Development Server**
```bash
pnpm dev
```

5. **Access the Application**
Open your browser and navigate to:
```
http://localhost:3000
```

### Deployment
- Push your repository to GitHub.
- Connect it to Vercel.
- Vercel will auto-detect the Next.js app and deploy it!

---

## 📊 Project Structure

| Folder/File         | Purpose                                             |
|---------------------|-----------------------------------------------------|
| `app/`              | Pages and layout using Next.js App Router            |
| `components/`       | Reusable UI components (e.g., Navbar, Cards)         |
| `hooks/`            | Custom React Hooks for state management             |
| `lib/`              | Utility functions and constants                     |
| `public/`           | Static files like images, icons                     |
| `styles/`           | Global and component-specific Tailwind styles       |
| `next.config.mjs`   | Next.js configuration                               |
| `tailwind.config.ts`| Tailwind configuration                              |
| `pnpm-lock.yaml`    | Dependency lock file for reproducible installs      |

---

## 🔍 Key Features

- **User Authentication:** Secure login and profile management.
- **Event Management:** Create, join, and manage campus events.
- **Study Material Sharing:** Upload and download notes, assignments.
- **Discussion Forums:** Topic-specific chats and Q&A sections.
- **Dark/Light Theme:** User-customizable UI for comfort.
- **Mobile-First Design:** Fully responsive for smartphones and tablets.

---

## 📊 System Architecture

```
User Browser
    ↓
Next.js Frontend (React Components)
    ↓
API Routes (Serverless Functions)
    ↓
(Optionally Connected Database / Auth Services)
    ↓
Deployed on Vercel
```

---

## 🌐 Future Enhancements

- Integration with academic ERP systems (attendance, grades).
- Mobile app version using React Native.
- AI-powered event and course recommendations.
- Secure role-based access control (students, faculty, admin).
- Multi-language support to cater to diverse campuses.
- Gamification (rewards for event participation).

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository, create a feature branch, and submit a pull request.

Before submitting, ensure:
- Code is linted and formatted.
- Features are properly tested.

---

## 📝 License

This project is licensed under the **MIT License**. See the LICENSE file for more information.

---

## 💖 Acknowledgements

Special thanks to the open-source community and Next.js team for enabling fast, scalable development.

---

**Built with passion to enhance campus connectivity and collaboration!**

---
[▶️ Watch Demo Video](https://github.com/ashleyalmeida07/CampusInk/blob/main/CampusInk_AshleyAlmeida_10227.mp4)
