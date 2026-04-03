# 🚀 AI-Powered Playwright + TypeScript Automation Framework (CRM)

## 📌 Overview

This project is a **production-grade, AI-first test automation framework** built using **Playwright + TypeScript** for testing **CRM Service Dashboards**.

It goes beyond traditional automation by integrating **AI capabilities** for:

* Self-healing locators
* Test generation from requirements
* Failure auto-debugging
* Dashboard graph validation
* Smart data handling
* Microservices contract testing

---

## 🎯 Key Features

### 🧠 AI Capabilities

* ✅ AI-based test generation from requirements
* ✅ Self-healing locators (resilient to UI changes)
* ✅ NLP-based smart locator generation
* ✅ AI-powered failure analysis & debugging
* ✅ Dashboard validation using screenshot + AI
* ✅ AI-driven test data generation

---

### 🧪 Automation Coverage

* ✅ UI Automation (Playwright)
* ✅ API Testing (Playwright Request)
* ✅ End-to-End CRM workflows (Service Requests)
* ✅ API ↔ UI Data Validation
* ✅ Microservices Contract Testing (AJV schema validation)

---

### ⚙️ Framework Capabilities

* ✅ Page Object Model (POM)
* ✅ Environment-based execution (dev / qa / prod)
* ✅ Parallel execution
* ✅ Retry mechanism for flaky tests
* ✅ CI/CD integration (GitHub Actions)
* ✅ Rich reporting (HTML reports, traces, videos)

---

## 🏗️ Project Structure

```
qa-ai-playwright-framework/
│
├── tests/
│   ├── ui/
│   ├── api/
│
├── pages/
│
├── utils/
│   ├── ai/
│   ├── api/
│   ├── helpers/
│
├── fixtures/
│   ├── testData.json
│   └── schemas/
│
├── hooks/
├── config/
├── .github/workflows/
│
├── playwright.config.ts
├── package.json
```

---

## 🧠 AI Architecture

```
Requirement → AI Test Generator → Playwright Tests
                         ↓
                Smart Locator Generator
                         ↓
Test Execution → Self-Healing Locators → Stable Tests
                         ↓
Failure → AI Debugger → Root Cause Analysis
                         ↓
Dashboard → Screenshot → AI Graph Validation
                         ↓
API → Contract Validation → Data Integrity
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo

```
git clone <your-repo-url>
cd qa-ai-playwright-framework
```

---

### 2️⃣ Install Dependencies

```
npm install
npx playwright install
```

---

### 3️⃣ Configure Environment

Create `.env` file:

```
OPENAI_KEY=your_openai_key
ENV=qa
```

---

### 4️⃣ Run Tests

#### ▶️ Run All Tests

```
npm test
```

#### ▶️ Run UI Tests

```
npm run test:ui
```

#### ▶️ Run API Tests

```
npm run test:api
```

#### ▶️ Debug Mode

```
npm run test:debug
```

---

## 🌍 Environment Support (Not Real Env's)

| ENV  | URL                  |
| ---- | -------------------- |
| dev  | https://dev.crm.com  |
| qa   | https://qa.crm.com   |
| prod | https://prod.crm.com |

Run:

```
ENV=dev npm test
```

---

## 🔗 CI/CD Integration

GitHub Actions pipeline automatically:

* Installs dependencies
* Runs Playwright tests
* Uploads reports

File: `.github/workflows/playwright.yml`

---

## 🧪 Sample Test Scenarios

### ✔ Service Request Workflow

* Create SR
* Update status
* Validate lifecycle

### ✔ Dashboard Validation

* Validate SR counts
* AI-based graph validation

### ✔ API Testing

* Validate SR API
* Compare UI vs API

### ✔ Contract Testing

* Validate schema using AJV

---

## 🤖 AI Use Cases

| Feature               | Benefit                        |
| --------------------- | ------------------------------ |
| Self-healing locators | Reduces flaky tests            |
| AI debugging          | Faster root cause analysis     |
| AI test generation    | Improves coverage              |
| Graph validation      | Validates analytics dashboards |
| Smart locators        | Reduces maintenance            |



