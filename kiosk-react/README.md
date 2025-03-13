# Kiosk Project (latest update 14/03/2025)
"kiosk-react" folder is for React Project "frontend-csharp" is for CSharp Project

kiosk-react can work by itself, but the frontend-csharp must be connected to work with kiosk-react again.

Kiosk-React npm install npm start

Frontend-CSharp dotnet run (CSharp 'NOT COMPLETE!') --> Cannot fetch data!

***Data that is still "Hard Coded"***
    1. VerifyID.css
        1.1 line:22 -> function fetchCardData()
    2. ConfirmData.js
        2.1 line:47 -> name (Hello Kitty)
        2.2 line:54 -> HN number (3456789)


## Table of Contents
- [Folders and Files](#folder-files)
    - Information about Folders and Files
- [Getting Start](#getting-start)
    - See Available Scripts

---

## Folders and Files
    ::Describe just Used Folders & Files
kiosk-react/
├── src/
│   ├── components/
│       ├── images/
│       ├── video/
│       ├── pages/                 # Import & rendes others React components.
│           └── Home.js                 # (Step1) page1
│           └── ThaiorForeigner.js      # (Step1) page2
│           └── EnterIDthai.js          # (Step1) page3
│           └── EnterIDPassport.js      # (Step1) page3
│           └── VerifyIdentity.js       # (Step1) page4
│           └── QueueType.js            # (Step2) page1
│           └── Clinic.js               # (Step2) page2
│           └── Payment.js              # (Step3)
│           └── Confirm.js              # (Step4)
│
│       ├── Styles/                #Keep all .CSS files
│       ├── StoredData/
│           └── StoredData.js           #  Interaction with localStorage
│           └── ViewStoredData.js       #  [For checking data] Show stored data 
│
│       └── Header.js              # Header Section (contain logo and date&time)
│       └── Step1, 2, 3, 4.js      # Show Steps Section
│       └── Footer.js              # Footer Section (no 'back' button)
│       └── Footer2.js             # Footer Section (have 'back' button)
│       └── FirstPage.js           # (Step1 - page 1) Please Insert Card/ Click to exit queue Page
│       └── ThaiForeigner.js       # (Step1 - page 2) Select Thai/Foreingner Page
│       └── EnterIDnumThai.js      # (Step1 - page 3) For Thai Enter ID
│       └── EnterPassportID.js     # (Step1 - page 3) For Foreigner Type ID
│       └── VerifyID.js            # (Step1 - page 4) See Information and Enter phone number
│       └── SelectQueueType.js     # (Step2 - page 1) Select Queue Type
│       └── SelectClinic.js        # (Step2 - page 2) Select Clinic
│       └── PaymentMethod.js       # (Step3) Select Payment Method
│       └── ConfirmData.js         # (Step4) Show all data and exit queue
│
│   └── i18n.js                    # Handle internationalization - Language translations (en<->th)
│   └── App.js                     # Main entry point

---
## Getting Start
    - Available Scripts : In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
