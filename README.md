# Patient Management System (PMS)

## Team: Websmiths

### Team Information
- **Team Name:** Websmith
- **Team Members:**
  - Abdul Moiz - Group Leader
  - M. Tayyab - Frontend Developer
  - Mutahir - Backend Developer

## Project Overview
The Patient Management System (PMS) is a comprehensive web-based platform designed to streamline healthcare operations, offering a variety of features to enhance user experience and system efficiency. The system aims to provide a seamless experience for both healthcare providers and patients, focusing on privacy, security, and ease of use.

## Key Features
1. **Authentication:**
   - Secure user authentication system to ensure that only authorized personnel and patients can access the system.
   - Role-based access control (admin, doctor, patient, etc.) to grant appropriate permissions.

2. **Encrypted Data:**
   - All patient data, including medical records and billing information, is encrypted to ensure maximum security.
   - Sensitive information follows HIPAA compliance (or other relevant healthcare standards).

3. **Appointment Booking System:**
   - Patients can easily schedule appointments with their healthcare providers.
   - Doctors and administrators can manage, approve, or reschedule appointments.
   - Automated notifications and reminders for upcoming appointments.

4. **Medical Records Management:**
   - Efficient handling of patient medical history, diagnoses, treatments, and ongoing care plans.
   - Doctors and medical staff can securely access, update, and store patient records in real-time.

5. **Billing and Payments:**
   - A complete billing system that generates invoices for patient visits, treatments, and procedures.
   - Supports online payments through multiple gateways, ensuring convenient and secure transactions.

6. **Notification System:**
   - Real-time notifications for patients and staff regarding appointments, billing updates, and system alerts.
   - Email and SMS notification integration for improved communication and reminders.

7. **Admin Dashboard:**
   - A fully functional admin dashboard designed using Chakra UI, Tailwind CSS, and Framer Motion.
   - Provides an overview of the system’s status, including patient records, appointments, billing, and user activity.
   - Easy-to-navigate interface with real-time updates on system performance.

8. **Performance and Reliability:**
   - Optimized system performance for handling large amounts of patient data without compromising speed or reliability.
   - Backup and recovery mechanisms ensure data is safe and easily retrievable.

## Technology Stack
- **Frontend:**
  - Framework: React.js
  - UI Libraries: Chakra UI, Tailwind CSS, Framer Motion
  - Styling Tools: Custom Tailwind integration, Shedcn Library
  - Features: Responsive design, seamless user interface, smooth animations using Framer Motion, custom-built components for scalability and ease of use.

- **Backend:**
  - Framework: Node.js (Express.js)
  - Database: MongoDB
  - Authentication & Security: JWT (JSON Web Tokens) for secure user authentication, data encryption
  - APIs: RESTful API for handling data and communication between the frontend and backend
  - Functionality: The backend is fully functional and finalized, ensuring efficient data flow and operations across all modules.

- **Full-Stack Integration:** MERN (MongoDB, Express.js, React.js, Node.js) stack ensures smooth interaction between the front-end and backend components, providing a robust and scalable platform for both patients and healthcare providers.

## Admin Panel Overview for Patient Management System
The Admin Panel is designed for administrators to manage various aspects of the Patient Management System. It includes key management features like doctor verification, payments, patient and doctor management, appointments, and registration requests.

### Libraries and Their Usage
- **@chakra-ui/react:** Used for building accessible and responsive UI components.
- **@emotion/react and @emotion/styled:** For dynamic and styled component-based CSS.
- **@radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-slot:** For accessible and reusable UI components.
- **@stripe/react-stripe-js:** For handling secure payment processing.
- **Axios:** For making HTTP requests and handling API interactions.
- **class-variance-authority:** To handle class-based styling logic.
- **clsx:** For conditionally combining CSS class names.
- **Formik:** For managing form states, especially in registration and verification processes.
- **Framer Motion:** To add animations and enhance user interaction within the admin panel.
- **lucide-react:** To incorporate scalable icons into the admin dashboard.
- **next-themes:** For handling theme switching (dark/light mode).
- **React:** For building the core of the user interface.
- **react-dom:** For rendering React components into the DOM.
- **react-icons:** For adding iconography to the UI.
- **react-router-dom:** For managing page routing in the admin panel.
- **react-scroll:** To implement smooth scrolling behavior within the interface.
- **react-slick & slick-carousel:** For creating interactive sliders (e.g., for displaying notifications or summaries).
- **Sonner:** To provide toast notifications and alerts.
- **tailwind-merge:** For merging Tailwind CSS classes efficiently.
- **tailwindcss-animate:** For implementing CSS animations with Tailwind.
- **Yup:** For schema-based form validation, used especially in doctor verification and registration requests.
- **Zustand:** For global state management in the admin panel.

### Admin Panel Features
1. **Doctor Verification:** Manage and verify doctor credentials before they are granted access to the system.
2. **Payment Management:** View and process payments securely, utilizing Stripe integration for smooth transactions.
3. **Doctor & Patient Management:** Manage all registered doctors and patients, including viewing their records and statuses.
4. **Appointment Management:** View and manage appointments between doctors and patients, including scheduling, rescheduling, and cancellations.
5. **Registration Requests:** Handle new user registration requests, including approving or rejecting users (doctors and patients).

This combination of tools and features ensures that the admin panel provides a powerful, efficient, and user-friendly experience for administrators managing the system.

## User Panel Overview for Patient Management System
The User Panel provides a smooth and user-friendly interface for patients accessing the system. It features a well-designed landing page with interactive sections, allowing users to easily navigate through the platform.

### Key Sections of the Landing Page:
1. **Hero Section:**
   - This is the first section that users see when they land on the page. It typically contains a prominent headline, a brief description of the services offered, and a call-to-action button (e.g., “Book an Appointment”).
   - The hero section is visually appealing, featuring a background image or animation that aligns with the healthcare theme of the system.

2. **Responsive Navbar:**
   - The navigation bar is fully responsive, ensuring optimal usability on both desktop and mobile devices.
   - It includes links to key pages like Home, About, Doctors, and Contact.
   - On smaller screens, the navbar collapses into a hamburger menu, allowing users to easily access the site’s sections without cluttering the screen.

3. **About Section:**
   - This section provides information about the healthcare platform, its mission, and services.
   - It gives users a clear understanding of the system's value proposition, focusing on the quality of care, ease of use, and system reliability.

4. **Doctor Section (with Slider):**
   - This section showcases a list of available doctors in a slider format, allowing users to scroll through cards displaying doctors’ names, specialties, and brief bios.
   - Each card has a clickable button that directs users to a more detailed doctor description page, where users can learn more about the doctor’s qualifications, experience, and available appointment slots.

5. **Footer:**
   - The footer contains useful links such as contact information, social media handles, terms of service, and privacy policies.
   - It provides a quick way for users to navigate to important pages or get in touch with the platform’s support team.

### Key Interactions:
- **Doctor Card Click:** When a user clicks on a doctor card within the slider, they are redirected to a Doctor Description page that contains more details about the doctor’s profile, including their specialization, experience, and reviews.
- **Appointment Button:** If a user chooses to book an appointment with a doctor, they can click the Appointment button on the doctor’s description page. This action will take them directly to the Payment Page, where they can confirm the appointment and proceed with the payment process.

This intuitive flow from browsing doctors to booking appointments ensures a seamless experience for patients, making it easy for them to find and connect with the healthcare professionals they need.

## The Key Features of the Project 

### Registration with Stepper
- **User Type Selection:** The registration process starts with a stepper where users select their type: either Patient or Doctor.
- **Conditional Data Collection:**
  - **For Patients:** Users provide relevant personal information and diagnosis details.
  - **For Doctors:** Users enter their qualifications, specialties, and other pertinent professional details.

### Payment Processing
- **Stripe Integration:** The application incorporates Stripe for secure payment processing.
  - **Frontend:** Users can input their card details (number, expiration date, CVV).
  - **Backend:** The server-side implementation creates a payment intent and handles the payment confirmation process. Payment workflows are designed to be secure and compliant with PCI standards.

### Real-time Notifications
- **Socket Integration:** The application utilizes WebSockets for live notifications regarding appointments.
  - **User Notifications:** Patients receive updates about appointment confirmations, cancellations, and reminders in real time.
  - **Doctor Notifications:** Doctors are alerted about new appointments and any changes to their schedules instantly.

### Additional Features
- **User-Friendly Interface:** The application boasts a responsive design, ensuring usability across various devices.
- **Data Validation:** Input validation is implemented to ensure accurate
