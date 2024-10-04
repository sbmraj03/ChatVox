## Presentation
You can view and download the presentation about the application here: [Download the Presentation]([https://github.com/username/repo_name/blob/main/your_ppt_file.pptx](https://github.com/user-attachments/files/17260088/ChatVox_shubhamKumar.pptx)

# ChatVox

ChatVox is a feature-rich chat application designed to enable smooth and real-time communication among users. Built with a contemporary technology stack, ChatVox uses React for the front-end, Node.js with Express for the back-end, and MongoDB for data storage. Real-time communication is handled through WebSockets with Socket.io.

## System Architecture

### Front-End

- **Framework**: React
- **UI Library**: Chakra UI
- **Real-Time Communication**: Socket.io-client
- **HTTP Requests**: axios

### Back-End

- **Framework**: Express.js
- **Real-Time Communication**: Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Database Design

MongoDB has been selected for its flexibility and scalability, providing an efficient solution for managing and storing data within ChatVox.

## User Authentication and Security

Authentication is secured using JWT, which provides a robust token-based system for user access. Additionally, bcrypt is employed to encrypt user passwords, ensuring the confidentiality and security of user information.

## Client-Side Components

The client-side of ChatVox includes:

- **Chat Interface**: A user-centric interface for engaging in conversations.
- **Message Input**: A component for typing and sending messages.
- **Authentication**: Manages user login and registration processes.

Real-time updates are managed through Socket.io-client, while Chakra UI is utilized to enhance the visual appeal of the application.

## Server-Side Components

On the server side, ChatVox features:

- **API Endpoints**: Responsible for handling user authentication, managing messages, and overseeing group chats.
- **Real-Time Communication**: Powered by Socket.io to facilitate live message exchanges.
- **Error Handling**: Middleware is in place to catch and manage errors effectively.


