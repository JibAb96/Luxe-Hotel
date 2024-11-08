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
<ul>
    <li>
        This project stems from my passion for travel. Having used many hotel booking sites, I was inspired to create a simple, seamless platform for booking accommodations.
    </li>
    <li>
        My goal was to develop a website connected to a database, where users can create profiles, log in, explore hotel and room information, and make reservations.
    </li>
</ul>

### User Stories
#### Epics
<ul>
    <li>
        The project was organized into multiple epics, each representing a significant area of functionality with potential features for development.
    </li>
    <li>
        These epics were then divided into smaller user stories, each aimed at delivering specific value to users.
    </li>
    <li>
        User stories were crafted to reflect the perspectives of both hotel owners and website visitors.
    </li>
</ul>

### Project Goals

<ul>
    <li>
        The main objective is to build a site that enhances the guest experience while streamlining hotel operations and remains easy to update.
    </li>
    <li>
        Designed with a user-centered approach, the platform is tailored to meet the needs of visitors, site owners, staff, and administrators alike.
    </li>
    <li>
        This project also demonstrates my expertise in managing a fully integrated database with complete CRUD (Create, Read, Update, Delete) capabilities, utilizing the PostgreSQL database.
    </li>
</ul>

<hr>

## Design

### Color Scheme
<ul>
    <li>The main colors used in this site are Feldgrau Green, Aliceblue and Cloudy White.</li>
    <li>
        These main colors are the colors in the hotels's logo, and they permeate through the site 
    </li>
    <li>
        The color palette of the website captures the luxury and nature-inspired ambiance of the hotel, evoking a sense of refined tranquility and sophisticated charm.
    </li>
    <li>
        A light green has been used for the sucess messages, to signify that this is a successful action.
    </li>
    <li>
        A dark red has been used for all delete buttons and light red for error messages, to signify that this is a destructive action.
    </li>
    <li>
        The gold yellow has been used for the star-ratings from the reviews of past users.
    </li>
</ul>

### Typography
<ul>
    <li>
        I chose Josefin Sans for the Luxe Hotel majority and Cormorant Garamond for specifc headings, both accessible through Google Fonts. 
    </li>
    <li>
        These fonts were carefully selected for their readability and accessibility, especially to provide a comfortable experience for users with dyslexia or partial visual impairments.
    </li>
    <li>
        The combination of elegance and legibility enhances the app’s sophistication and usability.
    </li>
    <li>
        The font sizes follow the standard HTML font size of 16px, with no text smaller than 12px to support visual accessibility.
    </li>
    <li>
        This aligns with accessibility guidelines, including the minimum recommended 12px font size for accessible websites, ensuring readability for all users according to the <a href="https://accessibility.psu.edu/accommodations/policy/">Penn State University Accessibility and Usability Guidelines.</a> 
    </li>
    <li>
        Font sizes can also be zoomed up to 200% without any loss of contrast or functionality, fully adhering to the <a href="https://webaim.org/techniques/fonts/">WCAG Guidelines</a> on font accessibility.
    </li>
</ul>

### Imagery
<ul>
    <li>
        Subtle box shadows have been artfully applied. These design elements echo the hotel's graphic styling, characterized by neutral, soft colors and refined lines, enhancing the app's aesthetic appeal.
    </li>
    <li>
        All links have their underlines removed for stylistic purposes.
    </li>
    <li>
        All interactable objects have hover and focus styles applied to make it clear to the user that those objects are interactable.
    </li>
    <li>
        Icons from Font Awesome have been used on the site to add meaning where relevant and suitable. These icons are accompanied by either visible text or descriptive aria-labels, ensuring inclusivity and accessibility.
    </li>
    <li>
        Button colors have been used to convey meaning, mainly in the use of the color dark red to convey 'Delete' or 'Cancel' as dangerous actions.
    </li>
</ul>
<hr>

## Features

### Home page
This feature allows users to:
<ul>
    <li>
        Get a sense of the hotel's ambiance through images and engaging text, giving visitors an immersive glimpse into what the hotel offers.
    </li>
    <li>
        Browse through guest reviews in a carousel, each linking to a detailed review page, helping prospective visitors learn from others' experiences.
    </li>
    <li>
        Access contact information and view the hotel's location for easy planning and inquiries.
    </li>
</ul>

#### User profile registration
This feature allows users to:
<ul>
    <li>
        Create an account by entering personal details, streamlining future room reservations. Required details include: 
            <ul>
                <li>Email</li>
                <li>Username</li>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Address</li>
                <li>Country</li>
                <li>Postal Code</li>
                <li>Phone Number</li>
                <li>Date of Birth</li>
            </ul>
    </li>
    <li>
        Minimize password errors by entering it twice, with the system verifying both entries match
    </li>
    <li>👤 Save personal information for quicker booking.</li>
    <li>👤 Maintain a record of past reservations.</li>
</ul>

#### Login
This feature allows users to:
<ul>
    <li>Sign in to the site using their email and password.</li>
    <li>Select "Remember me" for easier access on future logins.</li>
    <li>Reset their password if forgotten through a quick link.</li>
    <li>Show the passowrd to check for errors.</li>
    <li>Access their profile page</li>
    <li>View, update or delete their profile information</li>
    <li>Review their room reservations(if any)</li>
    <li>Update or cancel room reservations as needed</li>
</ul>

#### User Profile Page
This feature allows users to:
<ul>
    <li>
        View their personal information provided during registration.
    </li>
    <li>
        Edit and update their personal details.
    </li>
    <li>
        Receive a success message upon submitting profile edits.
    </li>
    <li>
        Delete their profile and account.
    </li>
    <li>
        See a confirmation page upon selecting delete, prompting them to confirm the account deletion.
    </li>

</ul>

### Room Category Page
This feature allows user to:
<ul>
    <li>View all hotel room categories available on the website.</li>
    <li>Access room categories via the main navigation bar or directly from the homepage.</li>
    <li>
        Get an overview of each room category, including an image, brief description of features and amenities, capacity, and price.
    </li>
    <li>Click on a room card to navigate to a detailed page with full room information.</li>
</ul>

### Room Detail Page
This feature allows user to:
<ul>
    <li>
        View detailed information about each room category, including:
            <ul>
                <li>Category: Type of room (e.g., Standard, Deluxe, Suite).</li>
                <li>Price Per Night: Nightly rate for the room.</li>
                <li>Capacity: Maximum guest occupancy.</li>
                <li>Image: High-quality photo showcasing the room.</li>
                <li>
                    Description: In-depth details on the room’s features, amenities, and unique highlights.
                </li>
                <li>
                    Booking Option: Users can proceed to book the selected room by clicking the "Book" button.
                </li>
            </ul>
    </li>
    Clicking "Book" takes users to a dedicated reservation page to complete their booking details.
</ul>

### Booking Page
This feature allows users:
<ul>
    <li>Make a reservation while logged in.</li>
    <li>👤 Automatically use their profile details for the reservation.</li>
</ul>
In the booking form, users will fill out:
<ul>
    <li>Check-in date</li>
    <li>Check-out date</li>
    <li>Room Category</li>
    <li>Number of guests</li>    
</ul>

#### Reservation Confirmation
In case the reservation fails:
<ul>
    <li>The user is redirected back to the reservation form.</li>
    <li>
        A message appears explaining the failure, such as "Check-in date must be before check-out date"
    </li>
</ul>

If the reservation succeeds:
<ul>
    <li>The user sees a confirmation page displaying their reservation details.</li>
    <li>The confirmation page includes complete booking information and a unique booking ID.</li>
    <li>👤 The reservation is added to the user’s reservations page.</li>
</ul>

### Reservation Page
This feature allows users to:
<ul>
    <li>View their reservation details.</li>
    <li>Edit their reservation information.</li>
    <li>Receive a success message upon submitting reservation changes.</li>
    <li>Delete their reservation.</li>
    <li>
        See a confirmation page when deleting a reservation, asking for confirmation before finalizing the deletion.
    </li>
</ul>

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
| Log In           | &#9989;   | &#10060;  |
### About Section

### Contact Section

### Footer

### Future Features

### Defensive Design

### Database Design

<hr>

## Agile Development

### Overview of Agile Methodology

### MoSCoW Prioritization

<hr>

## Techonologies Used

### Languages Used

### Workspace

### Version Control

### Responsive Deign

### Documentation

### Site Design

### Tiny PNG

### Coolors

### Packages

### Hosting

### Framework, Libraries and Others

<hr>

## Deployment

### Testing

### Solved Bugs

### Known Bugs

<hr>

## Credits
### Code 
### Content
### Acknowledgements 

