## User Story:
As someone tracking their finances, I want to store my income and expense information so that I can save more money.
## App Description:
This app will allow users to save, edit and delete budgets based on their monthly spending amounts that they enter. It will also calculate their total discretionary income. Users will be able to save thier budgets to their account if they intend to track changes or different people's finances.

## Target User:
People trying to manage their expenses with a detailed record of new and past budgets.

## What Problem it Solves:
This app provides a budgeting calculator solution for people who want to track their spending in a localized place. It provides users the capability to save their budgets to reference back to them at a later time as well, unlike many popular budget calculators.

## Live App:
[App Link](https://bud.barrycumbie.com/login.html)

## Value Proposition:
This app provides a free, simple, convienent and localized way to track spending and discretionary income that can help someone who is looking to start tracking their spending habits but doesnt want to generate thier own budgeting process. 

![Budget App comparison](https://raw.githubusercontent.com/znasser46/finalApp/refs/heads/main/public/assets/image.png)

[App Comparison](https://www.icansucceed.org/)


# Capability Boxes: (70 pts)

| Category | Description | Links | Notes |
|----------|-------------|-------|-------|
| Advanced Architecture (10) | I refactored to the modern node structure. This includes routes, controllers, models, and middlewares. | [Entry #2](https://github.com/znasser46/finalApp/blob/main/docs/devNotebook.md#42026:~:text=4/20/26,NGINX%20and%20PM2) [Code Example](https://github.com/znasser46/finalApp/blob/878294d58acd5c6c4e25489c4ec904e9ee1c47b2/routes/budgetRoutes.mjs#L1-L3) | The process primairy consisted of seperating the logic of the code, making it more modular. |
| Authentication Upgrade (10) | Added a register and login system using json web tokens (JWT). Implemented Protected routes for CRUD operations. | [Code Example](https://github.com/znasser46/finalApp/blob/878294d58acd5c6c4e25489c4ec904e9ee1c47b2/routes/budgetRoutes.mjs#L7-L12) | The authentication system was built using a seperate set of files while maintaining the MVC structure. | 
| Database Upgrade (10) | I connected to my own MongoDB Atlas cloud database. I changed my production server environment to the correct connection string. | [issue](https://github.com/znasser46/finalApp/issues/3)  [debug](https://github.com/znasser46/finalApp/blob/main/docs/debug.md) | The debugging process for the database change required a lot of networking research. |
| UI / UX Design Improvement (10) | Designed a boostrap based layout featuring a grid system and simple navigation. Continued implementation of form validation with attributes such as "required". | [Code example](https://github.com/znasser46/finalApp/blob/878294d58acd5c6c4e25489c4ec904e9ee1c47b2/public/index.html#L49-L59) | Div layout was also changed for moving new elements. |
| Deployment Guide / DevOps Write-Up (10) | Created a guide for setting up GCP and an explanation of NGINX and PM2. | [Development Guide](https://github.com/znasser46/finalApp/blob/main/docs/developmentGuide.md) | Also noted environment variables. |
| Debug Case Study (10) | Documented issues from the development process, why they happened and how they were fixed. | [Debug Case Study](https://github.com/znasser46/finalApp/blob/main/docs/debug.md) | Debug case study includes two primary examples. |
| Search (10) | Added a search feature for any budgets a user created once logged in to their account. | [Code Example](https://github.com/znasser46/finalApp/blob/878294d58acd5c6c4e25489c4ec904e9ee1c47b2/public/js/scripts.js#L210-L214) | This snippet shows the js for activating the event listener. |

# Milestone 99:
[Milestone](https://github.com/znasser46/finalApp/milestone/5)

