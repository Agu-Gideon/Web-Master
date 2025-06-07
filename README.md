// This is the complete project that covers all the functionality requested
// all the styles are in the "Styles" folder while all the images in the "asset" folder
// main pages are in the "Pages" folder and sections like the Hero, Navbar, Courses etc are in the "component" folder, the private routing is in the
component folder as well

// PrivateRoute component protects routes from unauthenticated access
// If a JWT token exists in sessionStorage, render the children (protected content)
// Otherwise, redirect the user to the login page

/

- Login.jsx
- ***
- This component renders the login page for the application.
-
- Features:
- - Provides a styled login form for user authentication.
- - Uses local state to manage username, password, loading, and error messages.
- - Encodes credentials and sends them to the backend authentication endpoint.
- - On successful login, stores the JWT token in sessionStorage and redirects to the homepage.
- - Displays error messages for invalid credentials or network issues.
- - Responsive layout with a left-side welcome panel and right-side login form.
-
- Dependencies:
- - React (useState, useNavigate)
- - react-router-dom (for navigation)
- - Login.css (for styling)
-
- Usage:
- Import and use as a route/page in your React Router setup. \*

// Navbar component displays the top navigation bar with logo, links, and login/profile button

// HeroSection component displays the main landing section with a headline, description, search bar, and image

// Courses component renders the courses section with a grid of course cards
