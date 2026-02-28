# University Platform Frontend

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/university-platform-frontend.git
cd university-platform-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
university-platform-frontend/
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── about-bg.jpg
│   │       ├── banner-bg.jpg
│   │       ├── campus-life.jpg
│   │       ├── contact-bg.jpg
│   │       ├── graduation-family.jpg
│   │       ├── hero-bg.jpg
│   │       ├── ibnKhaldoun.jpg
│   │       ├── login-illustration.jpg
│   │       ├── professor-teaching.jpg
│   │       ├── register-illustration.jpg
│   │       ├── students-group.jpg
│   │       └── team-bg.jpg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Skeleton.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── DashboardCard.tsx
│   │   ├── features/
│   │   │   ├── about/
│   │   │   │   ├── AboutHero.tsx
│   │   │   │   ├── HistorySection.tsx
│   │   │   │   ├── MissionSection.tsx
│   │   │   │   ├── StatisticsSection.tsx
│   │   │   │   └── TeamSection.tsx
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactHero.tsx
│   │   │   │   ├── ContactInfo.tsx
│   │   │   │   └── MapSection.tsx
│   │   │   ├── home/
│   │   │   │   ├── BannerSection.tsx
│   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   ├── GallerySection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── StatisticsSection.tsx
│   │   │   ├── student/
│   │   │   │   ├── StudentSidebar.tsx
│   │   │   │   ├── StudentHeader.tsx
│   │   │   │   ├── OverviewStats.tsx
│   │   │   │   ├── RecentGrades.tsx
│   │   │   │   ├── UpcomingEvents.tsx
│   │   │   │   └── MyCourses.tsx
│   │   │   ├── teacher/
│   │   │   │   ├── TeacherSidebar.tsx
│   │   │   │   ├── TeacherHeader.tsx
│   │   │   │   ├── OverviewStats.tsx
│   │   │   │   ├── RecentCourses.tsx
│   │   │   │   ├── PendingTasks.tsx
│   │   │   │   └── UpcomingClasses.tsx
│   │   │   ├── delegate/
│   │   │   │   ├── DelegateSidebar.tsx
│   │   │   │   ├── DelegateHeader.tsx
│   │   │   │   └── GroupManagement.tsx
│   │   │   ├── specialite-chef/
│   │   │   │   ├── SpecialiteChefSidebar.tsx
│   │   │   │   ├── SpecialiteChefHeader.tsx
│   │   │   │   └── SpecialiteManagement.tsx
│   │   │   ├── department-chef/
│   │   │   │   ├── DepartmentChefSidebar.tsx
│   │   │   │   ├── DepartmentChefHeader.tsx
│   │   │   │   └── DepartmentManagement.tsx
│   │   │   ├── faculty-admin/
│   │   │   │   ├── FacultyAdminSidebar.tsx
│   │   │   │   ├── FacultyAdminHeader.tsx
│   │   │   │   └── FacultyManagement.tsx
│   │   │   ├── super-admin/
│   │   │   │   ├── SuperAdminSidebar.tsx
│   │   │   │   ├── SuperAdminHeader.tsx
│   │   │   │   └── SystemManagement.tsx
│   │   │   ├── assignment-manager/
│   │   │   │   ├── AssignmentManagerSidebar.tsx
│   │   │   │   ├── AssignmentManagerHeader.tsx
│   │   │   │   └── AssignmentManagement.tsx
│   │   │   ├── committee-member/
│   │   │   │   ├── CommitteeMemberSidebar.tsx
│   │   │   │   ├── CommitteeMemberHeader.tsx
│   │   │   │   └── CaseManagement.tsx
│   │   │   └── committee-president/
│   │   │       ├── CommitteePresidentSidebar.tsx
│   │   │       ├── CommitteePresidentHeader.tsx
│   │   │       └── HearingManagement.tsx
│   │   └── layout/
│   │       ├── MainLayout/
│   │       │   ├── MainLayout.tsx
│   │       │   └── index.ts
│   │       └── AuthLayout/
│   │           ├── AuthLayout.tsx
│   │           └── index.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useLocalStorage.ts
│   │   └── useNotification.ts
│   ├── layouts/
│   │   ├── StudentLayout.tsx
│   │   ├── TeacherLayout.tsx
│   │   ├── DelegateLayout.tsx
│   │   ├── SpecialiteChefLayout.tsx
│   │   ├── DepartmentChefLayout.tsx
│   │   ├── FacultyAdminLayout.tsx
│   │   ├── SuperAdminLayout.tsx
│   │   ├── AssignmentManagerLayout.tsx
│   │   ├── CommitteeMemberLayout.tsx
│   │   └── CommitteePresidentLayout.tsx
│   ├── pages/
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── index.ts
│   │   ├── ChangePassword/
│   │   │   ├── ChangePassword.tsx
│   │   │   └── index.ts
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── index.ts
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── index.ts
│   │   ├── Login/
│   │   │   ├── Login.tsx
│   │   │   └── index.ts
│   │   ├── NotFound/
│   │   │   ├── NotFound.tsx
│   │   │   └── index.ts
│   │   ├── Register/
│   │   │   ├── Register.tsx
│   │   │   └── index.ts
│   │   ├── Student/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── MyCourses.tsx
│   │   │   ├── MyGrades.tsx
│   │   │   ├── MyProjects.tsx
│   │   │   ├── MyComplaints.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── Teacher/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── MyCourses.tsx
│   │   │   ├── MyStudents.tsx
│   │   │   ├── GradeManagement.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── Delegate/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── GroupManagement.tsx
│   │   │   ├── Attendance.tsx
│   │   │   ├── Complaints.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── SpecialiteChef/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── SpecialiteManagement.tsx
│   │   │   ├── StudentAssignment.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── Teachers.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── DepartmentChef/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DepartmentManagement.tsx
│   │   │   ├── Specialites.tsx
│   │   │   ├── Teachers.tsx
│   │   │   ├── Budget.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── FacultyAdmin/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Departments.tsx
│   │   │   ├── Specialites.tsx
│   │   │   ├── Users.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── SuperAdmin/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── SystemConfig.tsx
│   │   │   ├── Users.tsx
│   │   │   ├── Roles.tsx
│   │   │   ├── Logs.tsx
│   │   │   ├── Backup.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── AssignmentManager/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── GroupAssignment.tsx
│   │   │   ├── ProjectAssignment.tsx
│   │   │   ├── Students.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   ├── CommitteeMember/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Cases.tsx
│   │   │   ├── Hearings.tsx
│   │   │   ├── Decisions.tsx
│   │   │   ├── Documents.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── index.ts
│   │   └── CommitteePresident/
│   │       ├── Dashboard.tsx
│   │       ├── AllCases.tsx
│   │       ├── ScheduleHearings.tsx
│   │       ├── FinalDecisions.tsx
│   │       ├── CommitteeMembers.tsx
│   │       ├── Reports.tsx
│   │       ├── Profile.tsx
│   │       └── index.ts
│   ├── routes/
│   │   ├── index.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── StudentRoutes.tsx
│   │   ├── TeacherRoutes.tsx
│   │   ├── DelegateRoutes.tsx
│   │   ├── SpecialiteChefRoutes.tsx
│   │   ├── DepartmentChefRoutes.tsx
│   │   ├── FacultyAdminRoutes.tsx
│   │   ├── SuperAdminRoutes.tsx
│   │   ├── AssignmentManagerRoutes.tsx
│   │   ├── CommitteeMemberRoutes.tsx
│   │   └── CommitteePresidentRoutes.tsx
│   ├── services/
│   │   ├── apiClient.ts
│   │   └── auth.service.ts
│   ├── store/
│   │   ├── authSlice.ts
│   │   ├── uiSlice.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── api.types.ts
│   │   ├── auth.types.ts
│   │   └── user.types.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── formatters.ts
│   │   └── validators.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🎨 Built With

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Lucide React Icons

---

## 📄 License

This project is for educational purposes.


