# WebDriverIO Automation Project – "Negative & Edge Cases"

## 📌 Project Description

This project automates testing of the SauceDemo website focusing on:

- Negative testing (form validation)
- Edge cases (missing inputs)
- Handling latency using proper wait strategies

## 🚀 Technologies

- WebDriverIO
- Mocha
- Allure Reporter

## 🧪 Test Scenarios

### UC-1: Form Validation

- Empty username & password → error
- Missing password → error
- Missing postal code → error

### UC-2: Handling Latency

- Login with performance_glitch_user
- Handle slow loading without pause()
- Reset app state
- Logout

## ▶️ How to Run Tests

```bash
npm install
npm run wdio
```

## 📊 Generate Allure Report

```bash
npm run allure
npm run allure-open
```

## 🌐 Browsers

- Firefox
- Microsoft Edge (parallel execution)

## 🧱 Design Pattern

- Page Object Model (POM)

## 📍 Notes

- CSS selectors are used
- No hardcoded waits (pause)
- WDIO assertions are used
