# Gadget Heaven

Gadget Heaven is a React-based e-commerce website where users can browse and purchase a variety of electronic gadgets, including laptops, mobiles, smartwatches, and more. It offers a user-friendly interface with features designed to enhance the online shopping experience.

## Table of Contents

- [Live Demo](#live-demo)
- [Requirement Document](#requirement-document)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [React Fundamental Concepts Used](#react-fundamental-concepts-used)
- [Data Handling and Management](#data-handling-and-management)

## Live Demo

https://gadget-heaven12.netlify.app/

## Requirement Document

[Project Requirements](https://drive.google.com/file/d/1LNFDEYVEN_RFxYmbMRBqmRGNSfo_Vzqo/view)

## Features

- **Intuitive Product Browsing:** Easily browse the products by specific category for quick and efficient discovery.
- **Detailed Product Information:** View comprehensive details of spcecific product on dedicated product details page, including specification, image, price and more.
- **Persistent Cart & Wishlist:**  Never lose your saved items! Cart and wishlist are saved across sessions, so users can always pick up where they left off.
- **Streamlined Cart Management:** Sort cart items by price (descending) and proceed to purchase with ease.
- **Wishlist to Cart Functionality:** Move items directly from your wishlist to your cart for streamlined purchasing.
- **Real-time Cart Updates:** Cart updates are reflected instantly, providing a smooth user experience.
- **Informative Product Statistics:** Visualize product pricing and ratings to make informed decisions.
- **Engaging Blog:** Stay up-to-date with the latest tech trends and news through our blog.

## Technologies Used

- React
- React Router
- Recharts (for statistics)
- React Hot Toast (for notifications)
- Local Storage (for cart and wishlist persistence)
- Tailwind CSS (for styling)
- DaisyUI (component library built on Tailwind CSS)

## React Fundamental Concepts Used

*   **Components:** Used components to build different parts of the application, making it easier to manage.
*   **JSX:** Employed JSX syntax to write HTML-like code within JavaScript files for creating UI elements.
*   **Props:** Passed data between components using props to make components dynamic and flexible.
*   **State:** Managed component-specific data and reactivity by using state to update the UI when data changes.
*   **Hooks:** Utilized React Hooks (e.g., `useState`, `useEffect`, `useNavigate`, `useLocation`, `useRef`, `useLoaderData`) in functional components. Also used a Custom Hook named `useTitle`.
*   **Event Handling:** Implemented event handlers to respond to user interactions.

## Data Handling and Management

This project uses a combination of strategies for efficient data management:

*   **Local Storage:** Cart and wish list data are persisted across sessions using local storage, preserving user selections.
*   **Context API:** Products data are efficiently shared between components (e.g., "Cart", "Wishlist") from Dashboard via Context, avoiding prop drilling.
