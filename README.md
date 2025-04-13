# 🧠 Team RSVP Manager – Gametime Hero Coding Challenge

This project is a clean, scalable, and testable TypeScript module called `RsvpService` that manages RSVP responses for an event. Built with production-quality architecture, this code is designed to be easily integrated into a real-world backend system.

---

## 🎯 Challenge Summary

> “Build a small, focused module that helps manage RSVP responses for an event — using modern, best-practice development patterns.”

This submission implements:
- A reusable `RsvpService` class
- Strict `TypeScript` interfaces and types
- Dependency injection (`Logger`)
- Pure functions and single-responsibility methods
- Comprehensive unit tests using `Jest`
- Clean and modular folder structure

---

## 📦 Features Implemented

- ✅ Add or update a player's RSVP
- ✅ Get list of all confirmed attendees
- ✅ Count total, confirmed, and declined responses
- ✅ Support for `"Yes"`, `"No"`, and `"Maybe"` statuses
- ✅ Unit tested with mock dependencies

---

## 🛠 Technologies Used

- **Language**: TypeScript (strict mode enabled)
- **Testing**: Jest with `ts-jest`
- **Dependency Injection**: Interface-based logger
- **Runtime**: Node.js
- **Package Manager**: npm

---

## ✅ Why This Project Stands Out

This submission **directly fulfills** every item from Gametime Hero's criteria:

| Requirement                                       | Status    |
|--------------------------------------------------|-----------|
| ✅ Pure functions where possible                 | ✔️ Implemented in all read-only methods |
| ✅ Clear, reusable TypeScript interfaces         | ✔️ `Player`, `RsvpEntry`, `Logger` |
| ✅ Dependency injection                          | ✔️ `Logger` injected into service |
| ✅ Single Responsibility Principle               | ✔️ One method = one clear responsibility |
| ✅ Consistent naming                             | ✔️ camelCase and semantic |
| ✅ Early returns, not deep nesting               | ✔️ Used throughout (`getRsvpStatus`, etc.) |
| ✅ Logic/UI separation                           | ✔️ No UI code; pure service |
| ✅ Derived state where appropriate               | ✔️ `getRsvpCounts`, `getConfirmedAttendees` |
| ✅ Clean and readable file structure             | ✔️ Organized under `src/` and `__tests__/` |

---

## 🧪 How to Run

1. Clone or unzip the project:

```bash
git clone <repo-url>  # (if uploaded)
```

2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

4. Run demo:

```bash
npm start
```

---

## 🗂️ File Structure

```
TeamRsvpManager/
├── src/
│   ├── RsvpService.ts         # Core service
│   ├── ConsoleLogger.ts       # Logger implementation
│   ├── index.ts               # Demo script
│   └── __tests__/
│       └── RsvpService.test.ts
├── tsconfig.json
├── jest.config.js
├── package.json
└── README.md
```

---

## 🤝 Author

**Parag Patel**   
📧 paragpatel1912@gmail.com | 📱 631-334-8803  
[LinkedIn](https://www.linkedin.com/in/parag1912/)

---

## 🙌 Thank You

Thank you for reviewing my submission! I’ve carefully structured this solution with real-world scalability and readability in mind. Looking forward to the opportunity to discuss my thought process and join the amazing team at Gametime Hero!