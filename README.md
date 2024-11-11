# Luxe Hotel

<a href="https://jibab96.github.io/Luxe-Hotel-Front-End/">Here is a link to the full website</a>

This platform is a complete hotel reservation system crafted to simplify operations for both hotel owners and guests. It’s designed to elevate the experience of users looking for accommodations, providing a smooth journey from browsing to booking.

This site is a fully responsive hotel reservation system designed for an enhanced user experience, providing a seamless journey from browsing to booking. Guests can easily create, edit, or delete profiles and reservations, while hotel owners have the same flexibility to manage hotel and room details.

This site was built using HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js and it uses a PostgreSQL database.

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


#### User Profile Page
- This feature allows users to:
    - View their personal information provided during registration.
    - Edit and update their personal details.
    - Receive a success message upon submitting profile edits.
    - Delete their profile and account.
    - See a confirmation page upon selecting delete, prompting them to confirm the account deletion.

### Room Category Page
- This feature allows user to:
    - View all hotel room categories available on the website.
    - Access room categories via the main navigation bar or directly from the homepage.
    - Get an overview of each room category, including an image, brief description of features and amenities, capacity, and price.    
- Click on a room card to navigate to a detailed page with full room information.

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

### Booking Page
- This feature allows users:
    - Make a reservation while logged in.
    - 👤 Automatically use their profile details for the reservation.
    - In the booking form, users will fill out:
        - Check-in date
        - Check-out date
        - Room Category
        - Number of guests    

#### Reservation Confirmation
- In case the reservation fails:
    - The user is redirected back to the reservation form.
    - A message appears explaining the failure, such as "Check-in date must be before check-out date"
- If the reservation succeeds:
    - The user sees a confirmation page displaying their reservation details.
    - The confirmation page includes complete booking information and a unique booking ID.
    - 👤 The reservation is added to the user’s reservations page.
### Reservation Page
- This feature allows users to:
    - View their reservation details.
    - Edit their reservation information.
    - Receive a success message upon submitting reservation changes.
    - Delete their reservation.
    - See a confirmation page when deleting a reservation, asking for confirmation before finalizing the deletion.
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
| Sign In           | &#9989;   | &#10060;  |
### About Section
- This feature allows the user to:
    - Read about the hotel and it's offers.

### Footer
- This feature allows the user to:
    - Navigate to any of the hotel's social media pages.
    - See the payment methods the hotel accepts
    - See the hotels contact details
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
- Error Handling:
 - If a form contains invalid data or an action fails due to system constraints, users are 
   immediately notified with specific and actionable error messages or a confirmation page. 
   These messages provide guidance on how to resolve issues, helping users continue their 
   tasks smoothly.
### Database Design
This database uses a PostgreSQL database.
<a href="">ER Diagram</a> for this project.

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
### MoSCoW Prioritization

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

## Deployment

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

[Back to the top](# Luxe Hotel) 

</details>

### Testing

### Solved Bugs

### Known Bugs

<hr>

## Credits
### Code 
### Content
### Acknowledgements 

