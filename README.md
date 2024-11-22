# Luxe Hotel

<a href="https://luxe-hotel.netlify.app" target="_blank">Here is a link to the full website</a>

This platform is a complete hotel reservation system crafted to simplify operations for both hotel owners and guests. It’s designed to elevate the experience of users looking for accommodations, providing a smooth journey from browsing to booking.

This site is a fully responsive hotel reservation system designed for an enhanced user experience, providing a seamless journey from browsing to booking. Guests can easily create, edit, or delete profiles and reservations, while hotel owners have the same flexibility to manage hotel and room details.

This site was built using HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js and it uses a PostgreSQL database.

![Am I Responsive Screenshot](/frontend/src/docs-images/Am-I-Resp-Luxe.png)

<br>

## Icon Keys
👤 <-- Logged In Only

🚫 <-- Logged Out only

✅ <-- Yes / Visible

❌ <-- No / Not visible

## User Experience

### Initial Discussion
- This project stems from my passion for travel. Having used many hotel booking sites, I was inspired to create a simple, seamless platform for booking accommodations.
- My goal was to develop a website connected to a database, where users can create profiles, log in, explore hotel and room information, and make reservations.


### User Stories
#### Epics
- The project was organized into multiple epics, each representing a significant area of functionality with potential features for development.
- These epics were then divided into smaller user stories, each aimed at delivering specific value to users.
- User stories were crafted to reflect the perspectives of both hotel owners and website visitors.

### Project Goals
- The main objective is to build a site that enhances the guest experience while streamlining hotel operations and remains easy to update.
- Designed with a user-centered approach, the platform is tailored to meet the needs of visitors, site owners, staff, and administrators alike.
- This project also demonstrates my expertise in managing a fully integrated database with complete CRUD (Create, Read, Update, Delete) capabilities, utilizing the PostgreSQL database.
<hr>

## Design

### Color Scheme

- The main colors used in this site are Feldgrau Green, Aliceblue and Cloudy White.
- These main colors are the colors in the hotels's logo, and they permeate through the site 
- The color palette of the website captures the luxury and nature-inspired ambiance of the hotel, evoking a sense of refined tranquility and sophisticated charm.
- A light green has been used for the sucess messages, to signify that this is a successful action.
- A dark red has been used for all delete buttons and light red for error messages, to signify that this is a destructive action.
- The gold yellow has been used for the star-ratings from the reviews of past users.

![Coloors image with color palette](/frontend/src/docs-images/Color%20Palette%20(1).png)

### Typography

- I chose Josefin Sans for the Luxe Hotel majority and Cormorant Garamond for specifc 
  headings, both accessible through Google Fonts. 
- These fonts were carefully selected for their readability and accessibility, especially to 
  provide a comfortable experience for users with dyslexia or partial visual impairments.
- The combination of elegance and legibility enhances the app’s sophistication and usability.
- The font sizes follow the standard HTML font size of 16px, with no text smaller than 12px 
  to support visual accessibility.
- This aligns with accessibility guidelines, including the minimum recommended 12px font size for
  accessible websites, ensuring readability for all users according to the
  <a href="https://accessibility.psu.edu/accommodations/policy/">Penn State University Accessibility and Usability Guidelines.</a> 
- Font sizes can also be zoomed up to 200% without any loss of contrast or functionality, 
  fully adhering to the <a href="https://webaim.org/techniques/fonts/">WCAG Guidelines</a> on 
  font accessibility.

![Google Fonts screenshot](/frontend/src/docs-images/Luxe-Hotel-fonts.png)

### Imagery

- Subtle box shadows have been artfully applied. These design elements echo the hotel's graphic styling, characterized by neutral, soft colors and refined lines, enhancing the app's aesthetic appeal.
- All links have their underlines removed for stylistic purposes.
- All interactable objects have hover and focus styles applied to make it clear to the user that those objects are interactable.
- Icons from Font Awesome have been used on the site to add meaning where relevant and suitable. These icons are accompanied by either visible text or descriptive aria-labels, ensuring inclusivity and accessibility.
- Button colors have been used to convey meaning, mainly in the use of the color dark red to convey 'Delete' or 'Cancel' as dangerous actions.

<hr>

## Features

### Home page
- This feature allows users to:
    - Get a sense of the hotel's ambiance through images and engaging text, giving visitors an immersive glimpse into what the hotel offers.
    - Browse through guest reviews in a carousel, each linking to a detailed review page, helping prospective visitors learn from others' experiences.
    - Access contact information and view the hotel's location for easy planning and inquiries.

![Luxe Hotel homepage screenshot](/frontend/src/docs-images/Luxe-Hotel-Homepage.png)
#### User profile registration
- This feature allows users to:
    - Create an account by entering personal details, streamlining future room reservations. Required details include:
        - Email
        - Username
        - First Name
        - Last Name
        - Address
        - Country
        - Postal Code
        - Phone Number
        - Date of Birth

- Minimize password errors by entering it twice, with the system verifying both entries match
- 👤 Save personal information for quicker booking.
- 👤 Maintain a record of past reservations.

![Luxe Hotel registration screenshot](/frontend/src/docs-images/Luxe-Hotel-Registration-cropped.png)
#### Login
- This feature allows users to:
    - Sign in to the site using their email and password.
    - Select "Remember me" for easier access on future logins.
    - Reset their password if forgotten through a quick link.
    - Show the passowrd to check for errors.
    - Access their profile page
    - View, update or delete their profile information
    - Review their room reservations(if any)
    - Update or cancel room reservations as needed

![Luxe Hotel login page screenshot](/frontend/src/docs-images/Luxe-Hotel-Login-Page.png)
#### User Profile Page
- This feature allows users to:
    - View their personal information provided during registration.
    - Edit and update their personal details.
    - Receive a success message upon submitting profile edits.
    - Delete their profile and account.
    - See a confirmation page upon selecting delete, prompting them to confirm the account deletion.

![Luxe Hotel profile page screenshot](/frontend/src/docs-images/Luxe-Hotel-Profile.png)
### Room Category Page
- This feature allows user to:
    - View all hotel room categories available on the website.
    - Access room categories via the main navigation bar or directly from the homepage.
    - Get an overview of each room category, including an image, brief description of features and amenities, capacity, and price.    
- Click on a room card to navigate to a detailed page with full room information.

![Luxe Hotel room options page screenshot](/frontend/src/docs-images/Luxe-Hotel-Rooms.png)
### Room Detail Page
- This feature allows user to:
    - View detailed information about each room category, including:          
        - Category: Type of room (e.g., Standard, Deluxe, Suite).
        - Price Per Night: Nightly rate for the room.
        - Capacity: Maximum guest occupancy.
        - Image: High-quality photo showcasing the room.
        - Description: In-depth details on the room’s features, amenities, and unique highlights.
        - Booking Option: Users can proceed to book the selected room by clicking the "Book" button.
    - Clicking "Book" takes users to a dedicated reservation page to complete their booking details.

![Luxe Hotel detailed room info page screenshot](/frontend/src/docs-images/Luxe-Hotel-ViewRoom.png)
### Booking Page
- This feature allows users:
    - Make a reservation while logged in.
    - 👤 Automatically use their profile details for the reservation.
    - In the booking form, users will fill out:
        - Check-in date
        - Check-out date
        - Room Category
        - Number of guests    

![Luxe Hotel booking page screenshot](/frontend/src/docs-images/Luxe-Hotel-Book.png)
#### Reservation Confirmation
- In case the reservation fails:
    - The user is redirected back to the reservation form.
    - A message appears explaining the failure, such as "Check-in date must be before check-out date"
- If the reservation succeeds:
    - The user sees a confirmation page displaying their reservation details.
    - The confirmation page includes complete booking information and a unique booking ID.
    - 👤 The reservation is added to the user’s reservations page.

![Luxe Hotel reservation confirmation screenshot](/frontend/src/docs-images/Luxe-Hotel-BookingConfirmation.png)
### Reservations Page
- This feature allows users to:
    - View their reservations details.
    - Edit their reservations information.
    - Receive a success message upon submitting reservations changes.
    - Delete their reservations.
    - See a confirmation page when deleting a reservations, asking for confirmation before finalizing the deletion.

![Luxe Hotel reservations page screentshot](/frontend/src/docs-images/Luxe-Hotel-Reservations.png)
### Navigation Bar
The navigation bar changes based on user status and screen size:
| Nav Link         | &#128683; | &#128100; |
| ---------------- | --------- | --------- |
| Logo (Homepage)  | &#9989;   | &#9989;   |
| Home             | &#9989;   | &#9989;   |
| Rooms            | &#9989;   | &#9989;   | 
| Book             | &#10060;  | &#9989;   | 
| About            | &#9989;   | &#9989;   |
| Profile          | &#10060;  | &#9989;   |
| Reservations     | &#10060;  | &#9989;   |
| Log Out          | &#10060;  | &#9989;   |
| Sign In          | &#9989;   | &#10060;  |

![Luxe Hotel navigation when signed out screenshot](/frontend/src/docs-images/Luxe-Hotel-Logged-Out-Nav.png)

![Luxe Hotel navigation when signed in screenshot](/frontend/src/docs-images/Luxe-Hotel-Logged-In-Nav.png)

![Luxe Hotel navigation bar on smaller devices screenshot](/frontend/src/docs-images/Luxe-Hotel-Mobile-Nav.png)
### About Section
- This feature allows the user to:
    - Read about the hotel and it's offers.
![Luxe Hotel about page screenshot](/frontend/src/docs-images/Luxe-Hotel-About-Page.png)
### Footer
- This feature allows the user to:
    - Navigate to any of the hotel's social media pages.
    - See the payment methods the hotel accepts
    - See the hotels contact details

![Luxe Hotel footer screenshot](/frontend/src/docs-images/Luxe-Hotel-Footer.png)
### Future Features
- Future features would include:
    - Enhanced Room Customization: Provide a more tailored experience by allowing guests to 
      select specific room amenities or services (e.g., breakfast, airport pickup) when booking. 
      This could include special requests for events or occasions.
    - Automated Room Assignment and Availability Checker: Implement a dynamic room assignment 
      feature to automate room allocation based on real-time availability and user preferences. 
      Integrate this with a calendar view for easy availability checks by guests and staff.
    - Comprehensive Staff and Admin Dashboards:
        - Staff Dashboard: To efficiently manage daily operations, including check-in/check-out, room status updates, and guest services.
        - Admin Dashboard: Equip admins with tools to oversee hotel operations, adjust room categories and pricing, manage promotions, and generate analytics reports on booking trends and guest demographics.
These features would enhance the guest experience while providing powerful management tools for hotel staff and administrators.
### Defensive Design
- This project incorporates defensive design principles to improve user experience and system 
stability. Users receive clear, helpful feedback through success and error messages, enhancing 
guidance and transparency.
- Success Messages:
 - When a form is submitted or an action completes successfully, users receive clear 
   confirmation messages to assure them that their request has been processed. This transparency 
   builds trust and keeps users informed about the status of their actions.

![Luxe Hotel success alert message screenshot](/frontend/src/docs-images/Luxe-Hotel-Success-Alert.png)
- Error Handling:
 - If a form contains invalid data or an action fails due to system constraints, users are 
   immediately notified with specific and actionable error messages or a confirmation page. 
   These messages provide guidance on how to resolve issues, helping users continue their 
   tasks smoothly.
 - Also users are warned before deleting bookings or a profile to avoid mistakes.
![Luxe Hotel error alert message screenshot](/frontend/src/docs-images/Luxe-Hotel-Danger-Alert.png)

![Luxe Hotel confirmation of deletion screenshot](/frontend/src/docs-images/Luxe-Hotel-Delete-Profile.png)
### Database Design
This database uses a PostgreSQL database.
<a href="/frontend/src/docs-images/Luxe-Hotel-ER-Diagram.png">ER Diagram</a> for this project.

<hr>

## Agile Development

### Overview of Agile Methodology
- The development of Luxe Hotel follows Agile-inspired principles, prioritizing flexibility, 
continuous improvement, and quick adaptation to changes. Although it does not adhere strictly 
to traditional Agile practices like sprints or scrums, the project is guided by Agile methodology.

- Instead of using scheduled sprints, Luxe Hotel development is organized around key milestones 
leading up to the project’s overall deadline. This streamlined approach allows for focusing on 
essential functionalities first, before expanding to more advanced features.

- Bugs or issues are logged as bug reports and added to a backlog. This approach enables continuous 
work on other aspects of the project, while the backlog is revisited and prioritized based on the 
severity and impact of each issue. This method helps maintain development momentum while 
systematically addressing and resolving issues.

- User feedback is actively collected and reviewed to find improvement areas, ensuring that the 
project evolves to meet user needs and expectations effectively.

<hr>

## Techonologies Used

### Languages Used

#### HTML

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

#### CSS

- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3#:~:text=CSS3%20is%20the%20latest%20evolution,flexible%20box%20or%20grid%20layouts.)

#### JavaScript

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Workspace

#### GitPod & Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com/) was used as a local IDE workspace to build the site.

### Version Control

#### Git

- [Git](https://git-scm.com/) Git was used for version control. The Gitpod and VS Code terminals were utilized to add, commit to Git and pushed to GitHub.

#### GitHub

- [GitHub](https://github.com/) is used to store the code for this project.


### Responsive Deign

#### Am I Responsive Design

- [Am I Responsive Design](http://ami.responsivedesign.is/#) was used to check the site's responsive design and create the final site image.

#### Responsinator

- [Responsinator](http://www.responsinator.com/) was used to improve the site's responsive design on a variety of devices.

### Documentation

#### Shields.io

- [Shields.io](https://shields.io/) was used to create the GitHub badges for the top of this README.md file.


### Site Design

#### Font Awesome

- [Font Awesome](https://fontawesome.com/) was used on all pages to add icons.

#### Google Fonts

- [Google Fonts](https://fonts.google.com/) was used to select the fonts for the site.

#### Favicon.io

- [favicon.io](https://favicon.io/) was used to create the site favicon.

### Tiny PNG

- [TinyPNG](https://tinypng.com/) was used to compress images.

### Coolors

- [Coolors](https://coolors.co/) was used to create the site color palette.


### Packages
#### Front-End Packages

| Package           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `react`           | Front-end framework for building the UI   |
| `react-bootstrap` | UI library for styling components         |
| `npx`             | Command-line tool to run Node packages    |
| `date fns`        | For date and time formatting              |

#### Back-End Packages

| Package          | Purpose                                      |
| ---------------- | -------------------------------------------- |
| `node`           | Runtime for executing JavaScript back-end code |
| `sendgrid`       | Email API for sending password recovery emails |
| `dotenv`         | Environment variable management              |
| `pg`             | PostgreSQL database adapter for Node.js      |

### Hosting
- Heroku
    - Github Pages was used to deploy the live site.
### Framework, Libraries and Others
#### Heroku

- [Heroku](https://www.heroku.com) was used to deploy the live site.

### Frameworks, Libraries, and Others

#### Google DevTools

- [Google DevTools](https://developer.chrome.com/docs/devtools/)was used to identify the code corresponding to specific features.

#### Lighthouse

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to ensure the code was performant, followed best practices, and adhered to SEO and accessibility guidelines.

#### React

- [React](https://react.dev/) to build a great user interface.

#### Bootstrap

- [Bootstrap](https://getbootstrap.com/) was used to create a beautiful, responsive website.

#### npm

- [npm](https://www.npmjs.com/) was used to install the required dependencies for this site.

[Back to the top](#luxe-hotel)

<hr>

### Deployment
<details id="netifly-deployment">
<summary style="font-size: 1.2em; font-weight: bold;">Netifly Deployment</summary>
1. Netlify Account
  - Create or log in to a Netlify account.
2. GitHub Repository
  - Ensure your frontend project is hosted on GitHub and is production-ready.
  - Your repository should include a build script in package.json (e.g., "build": "react-scripts build" for React).
3. Create a New Site
  - In the Netlify dashboard, click Add New Site > Import an Existing Project.
  - Connect your GitHub account and authorize access.
  - Select your frontend repository.
4. Configure Build Settings
  - Set up the following:
    - Branch to Deploy: Choose your main branch (e.g., main or master).
    - Build Command: Enter the command to build your app (e.g., npm run build or yarn build).
    - Publish Directory: Specify the build output directory (e.g., build for React).
5. Add Environment Variables
  - In the Site Settings, go to Environment Variables.
  - Add variables your frontend needs, such as:
  - REACT_APP_API_URL for your backend URL.
  - Any other environment-specific variables.
6. Deploy the Site
  - Click Deploy Site.
  - Netlify automatically builds your project and deploys it.
  - Monitor the deployment logs for errors.
7. Test the Site
  - Once deployed, Netlify provides a unique domain (e.g., https://luxe-hotel.netlify.app).
  - Test your site functionality to ensure everything works as expected.
8. Configure Custom Domain (Optional)
  - If you have a custom domain:
    - Go to the Domain Settings in Netlify.
    - Add your custom domain and update your DNS settings to point to Netlify.
9. Enable Continuous Deployment
  - Netlify will automatically rebuild and deploy your site whenever you push changes to the selected branch on GitHub.
10. Optimize for Production
  - Enable optimizations in Site Settings, such as:
  - Asset Optimization: Minify CSS, JavaScript, and images.
  - Redirects: Create a _redirects file in the public folder if your site has routing.
</details>

<details id="render-deployment">
<summary style="font-size: 1.2em; font-weight: bold;">Render Deployment</summary>
1. Render Account
  - Create a Render account if you don’t already have one: render.com.
2. GitHub Repository
  - Ensure your backend project is hosted on GitHub and contains a package.json file specifying dependencies.
  - Add .env to .gitignore to avoid pushing sensitive data.
3. Create a New Web Service on Render
  - Log in to Render and navigate to Dashboard.
  - Click New > Web Service.
4. Link Repository
  - Select Connect a GitHub Repo and grant permissions if prompted.
  - Choose your backend repository.
5. Configure the Web Service
  - Name: Give a unique name to your service (e.g., luxe-hotel-backend).
  - Environment: Select Node.js.
  - Region: Pick a region closest to your target audience.
  - Start Command: Enter the command to start your app (e.g., node index.js or npm start).
  - Environment Variables: Add the necessary environment variables (DATABASE_URL, SECRET_KEY, etc.).
6. Deploy Database on Render
  - Go to the Render Dashboard > Databases > Create Database.
  - Select PostgreSQL and configure the database settings.
  - Copy the DATABASE_URL provided after creation.
7. Update Environment Variables
  - Return to your Web Service and update the DATABASE_URL with the one from your Render database.
  - Add other production-ready environment variables (e.g., CLOUDINARY_URL, SECRET_KEY).
8. Push Code to GitHub
  - Ensure your backend code is production-ready and pushed to GitHub.
  - Include a Dockerfile if you're using Docker, or configure your service as necessary.
9. Build and Deploy
  - Render automatically builds and deploys your app after linking the repository.
  - Monitor build logs for errors and resolve them if necessary.
10. Verify and Test
  - Once deployed, Render provides a unique domain for your service (e.g., https://luxe-hotel-backend.onrender.com).
  - Test the endpoints and confirm database connectivity.
11. Enable Continuous Deployment
  - In the Render dashboard, enable Auto Deploy for updates from your GitHub repository.
</details>

<details id="local-deployment">
<summary style="font-size: 1.2em; font-weight: bold;">Local Deployment</summary>

<br>

#### How to Fork

1. Log in (or sign up) to Github.
2. Go to the [repository](https://github.com/JibAb96/Luxe-Hotel-Front-End) for this project, 
3. Click the Fork button in the top right corner and select create a fork.
4. One can change the name of the fork and add description
5. Choose to copy only the main branch or all branches to the new fork.
6. Click Create a Fork. A repository should appear in your GitHub

#### How to Clone

1. Log in (or sign up) to GitHub.
2. Go to the [repository](https://github.com/JibAb96/Luxe-Hotel-Front-End) for this project, 
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor or open command-line interface on your computer and change the current working directory to the location you want to use for the cloned directory. 
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.
    - `$ git clone https://github.com/JibAb96/Luxe-Hotel-Front-End`
6. Press Enter. Your local clone will be created.
#### Local Deployment

##### Frontend Setup (React)

- If you haven’t already, navigate to your React app’s root directory and install dependencies:
  - npm install
- Start the React app locally:
- npm start

##### Backend Setup (Node.js)

- Create a .env File
- In the root directory of your backend, create a .env file.
- Add the following environment variables. You’ll need your PostgreSQL connection string for the    database:
  JWT_SECRET=<secretkey>
  DATABASE_HOST=<host>
  DATABASE_USER=<username>
  DATABASE=<database_name>
  DATABASE_PASSWORD=<password>
  DATABASE_PORT=<port>
- Replace <port>,<host>, <username>, <password>, and <database_name> with your local PostgreSQL credentials.
- Use a strong, unique value for SECRET_KEY (it can be any random string for Node.js).

Install Dependencies
- Navigate to your Node.js backend directory and install necessary packages:
  - npm install
  - Configure the Local Database

- Ensure PostgreSQL is running and create a new database for your app if needed:
  - CREATE DATABASE <database_name>;

- Start the Node.js server on the specified port:
  - nodemon server.js
###### Connecting Frontend and Backend

- In your React frontend, update any API endpoints to use http://localhost:3001 (or the port you specified in the .env file) to point to the locally running backend.
Testing the Setup
- With both the React frontend and Node.js backend running, check if the app functions correctly by accessing http://localhost:3000 in your browser.



</details>

[Back to the top](#luxe-hotel)

### Testing

[Click here to view the full testing steps](), which were completed on Google Chrome, Firefox, Abdroid, iOS and MUIU operative systems.

### Solved Bugs
- Styling and Layout Adjustments: Addressed various issues with component layout and styling, particularly in ensuring responsive design across different devices and fixing specific CSS issues such as unwanted scrollbars and inconsistent padding/margins in certain sections.

- Backend and API Connection Issues: Resolved bugs related to backend connectivity, including CORS issues, server port conflicts, and data inconsistencies in API responses. This included ensuring smooth communication between the React frontend and Node.js backend.

- Authentication and Security: Troubleshot issues around authentication flow, including session handling and token management. These fixes involved configuring secure handling of sensitive data, such as improving the usage of tokens and managing user sessions effectively.

- Database and Data Handling: Fixed issues in data retrieval and storage, such as ensuring correct database queries and handling edge cases with null or undefined data. This included adjustments to database queries to improve efficiency and correct data output for frontend display.

- Conditional Rendering and Routing: Addressed bugs in the conditional rendering of components, ensuring correct display logic across routes based on user state and data availability. Improved routing flows to enhance user experience and prevent unnecessary re-renders or errors when accessing certain pages.
### Known Bugs

- If you discover any bugs in my project, please let me know so that I can promptly address them.

[Back to the top](#luxe-hotel)
<hr>

## Credits
### Code 
- **Bootstrap**: 
  - Extensively used for styling and responsive design to ensure accessibility across diverse devices. - [Bootstrap documentation](https://getbootstrap.com/).
- **React**:
  - React's documentation has been crucial for front-end development, providing the core framework for the platform's interface. - [React documentation](https://react.dev/)
- **Node**:
  - Node's documentation has been invaluable for backend development, forming the foundation of the platform. - [Node documentation](https://nodejs.org/docs/latest/api/).
- **MDN Server-async functions**:
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) -  How to use async functions.
- **JWT-Tokens**:
  - Gaining an understanding of exactly how jwt-tokens work and there usage in the back-end of applications.
  - [jwt-tokens](https://jwt.io/introduction)
- **Sources of inspiration and guidance in general**:
    - Complete Web Developer in 2024: Zero to Mastery tutorial creating a react app front-end - [Inspecting Faces Repo](https://github.com/JibAb96/Inspecting-Faces-Front-End).
    - [Inspecting Faces Back-End Repo](https://github.com/JibAb96/Inspecting-Faces-Back-End) Complete Web Developer in 2024: Zero to Mastery tutorial creating a back-end server with node. 
- **W3 Schools**:
  - [W3Schools](https://www.w3schools.com/) - Providing HTML and JavaScript refreshers for particular syntax. 
- **Gork Coder**:
  - [Gork Coder](https://www.youtube.com/watch?v=hyATLBn6EM8&ab_channel=GorkCoder) - Providing inspiration with a hotel reservation management tutorial. 

- **Lucid Software**:
  - [Diagramming in Lucidcharts](https://www.youtube.com/watch?v=xsg9BDiwiJE&t=25s) -  Offers a foundational overview of ERDs, followed by step-by-step guidance on creating an ER diagram with accurate cardinality
### Content
#### Hompage
- [Hero Image](https://www.zfu.com/nature-is-home/)
- [Hotel Lobby](https://www.destinationfrance.org/latest-travel-news/new-sindhorn-kempinski-hotel-opens-restaurants-bar-fitness-studios/)
- [Hotel Room](https://vacayvoice.com/blog/famous-tourist-hotels-in-venice-a-guide-to-luxurious-stays)
- [Photos for reviews](https://unsplash.com/s/photos/profile-picture)

#### Rooms
- [Suite](https://gulfhotelbahrain.com/rooms)
- [Deluxe](https://in.hotels.com/ho2933571648/the-peninsula-london-london-united-kingdom/)
- [Standard](https://enchantedinteriorsandsolar.com/product/design-three/)

#### About
- [Hotel Reception](https://jamessupply.com/hospitality-project-tracker-week-of-august-23rd-2021/)
- [Dining Room](https://se.pinterest.com/pin/409827634817392907/)

- All text content was generated with ChatGPT.
### Acknowledgements 
- I would like to thank the Zero To Mastery academy for helping understand how to use
the technologies in this project.
- Special thanks to the Zero To Mastery discord group for always being available for help.
- I would like to also thank the Caawi(translation is Help) platform created by the organisation
Somalis in Tech for also being available for support.
