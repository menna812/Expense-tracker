# 💰 Expense Tracker

A simple React + Zod + typeScript + Vite application to track your expenses and manage your budget.

## 🚀 Features
- Add new expenses with details (title, amount, date)
- View a list of all expenses
- Delete or edit expenses (optional if you add later)
- Responsive design for desktop & mobile

## 🛠️ Tech Stack
- [React](https://react.dev/) (Frontend)
- [Vite](https://vitejs.dev/) (Fast development & build tool)
- [TypeScript](https://www.typescriptlang.org/) (for type safety)
- [react-hook-form](https://react-hook-form.com/) (form handling)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/menna812/Expense-tracker.git
   --------------------------
Go to the project folder:
cd Expense-tracker
Install dependencies:
npm install
Start the development server:
npm run dev

## This how it looks after adding some expenses by filling the form and submitting 
notice that after submitting the form the form got cleared (using the reset method from RHF)
<img width="587" height="507" alt="image" src="https://github.com/user-attachments/assets/567df0fd-c986-4b05-b4d3-3cea0f40fc0c" />
## This is how it looks if we submit without filling the fields (handling errors using Zod)
<img width="588" height="536" alt="image" src="https://github.com/user-attachments/assets/ae22f9b3-8a0e-43bf-81ef-ece3140fd897" />

##     This is how it looks after filtering by groceries
<img width="585" height="495" alt="image" src="https://github.com/user-attachments/assets/8a708d65-e2ed-40c0-9e8e-aa0929e32af3" />

