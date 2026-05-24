CoffeeCart POM Automation Project
An end-to-end automated testing project for the CoffeeCart web application, implemented using Playwright and the Page Object Model (POM) design pattern.

🚀 Project Overview
This project is designed to practice and showcase skills in writing reliable E2E tests. The implementation focuses on the Page Object Model architecture, ensuring that tests are easily maintainable and scalable.

🛠 Tech Stack
Language: JavaScript

Framework: Playwright

Pattern: Page Object Model (POM)

Package Manager: npm

📋 Key Functionality
The test suite covers the following scenarios:

Adding items to the cart (cappuccino, espresso, mocha).

Verifying the accuracy of total costs in the cart.

Removing items from the cart.

Checking cart persistence after page refreshes.

Handling promo code interactions.

⚙️ Installation and Execution
Clone the repository:


git clone https://github.com/drozdik29/CoffeCart_POM.git
cd CoffeCart_POM

**Install dependencies:**
npm install
Run tests:

npx playwright test

**View the report:**
   npx playwright show-report
👨‍💻 Author
Maksym Drozdovskyi — QA Engineer.