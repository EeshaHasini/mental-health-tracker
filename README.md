                                  README FILE 
                                  TEAM – EKA

Project Title - EKAMIND
EKAMIND
Track-Heal-Unite
A gamified experience to help you grow, one mindful level at a time.

Screenshots:
<img width="834" height="469" alt="image" src="https://github.com/user-attachments/assets/03e1ca47-93be-467d-b6ea-55ffb7ea2af0" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/da93939d-03cf-4404-a889-5e3366f3e331" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/f5b0c9ec-e2eb-4246-8851-86c6971ce508" />

<img width="689" height="387" alt="image" src="https://github.com/user-attachments/assets/bb05eec0-426d-4d62-9555-07f8fe75be61" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/3ce206c2-6345-48b2-8e66-a6eebbc2add4" />

<img width="589" height="331" alt="image" src="https://github.com/user-attachments/assets/21088e53-7966-475d-92b4-482cd6c7c5ac" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/51595377-bb6c-4ca9-8161-f27b287580b9" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/2bc65760-9688-4c38-b7b6-645744bc961f" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/688b8c0b-d8f4-4319-bfba-5c0e83c01bc7" />

<img width="693" height="390" alt="image" src="https://github.com/user-attachments/assets/8c8ec729-530a-4a7a-8093-ce724552fa78" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/f62b7c14-b945-4040-b5c0-61a55542fde3" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/a78d1312-5173-4acb-a5d6-62a472b0fa74" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/705e56da-06b6-4da7-9d73-ff6483b34153" />
                   
Features Implemented:
Frontend Features:

•	Interactive Dashboard showing daily mood, streaks, and overall      progress.
•	Mood Tracker UI with five mood options:
•	😁Delighted
•	🙂 Happy
•	😌 Calm
•	😢 Sad
•	😠 Angry
•	Mood Calendar to view daily entries and average mood for each day .                  
•	Daily Log Feature for daily reflections.
•         Settings page to update username , email , password.
•	Streak counters
•	Progress levels
•	Responsive Design for mobile and desktop.
•	Charts & Graphs for visualizing mood trends over weeks/months.
•	Smooth Navigation between Home, Profile, Assignments, Notifications, and Settings.
                           ________________________________________

Backend features : 
•	User Authentication:
•	Sign up, login, and logout
•	Secure password hashing with bcrypt
•	JWT-based authentication
•	Mood Tracking API:
•	Store multiple mood entries per day
•	Calculate daily average mood
•	Fetch mood history for calendar display
•	DailyLog API:
•	Create, edit, delete, and fetch Daily log entries	
•	Track user streaks
•	Update and fetch badges or achievements
•	Profile Management API:
•	Update and retrieve profile information
•	Optimized Data Models for efficient storage of mood and journal logs
•	Error Handling & Validation for clean API responses.
Technologies / Libraries / Packages Used:

Frontend
•	React.js – UI components & routing
•	Chart.js / Recharts – Data visualization
•	Axios – API communication
Backend
•	Node.js – Server environment
•	Express.js – REST API framework
•	MongoDB – Database
•	Mongoose – ODM for MongoDB
•	bcrypt.js – Password hashing
•	jsonwebtoken (JWT) – Authentication
•	.env – Environment variables
•	cors – Cross-Origin Resource Sharing
•	nodemon – Development server monitoring

Local Setup:

1. Clone the repository
git clone <repo-url>
cd mental-health-tracker
2. Setup Backend
cd backend
npm install
npm run dev
3. Setup Frontend
cd frontend
npm install
npm start
4. Environment Variables
Create a .env file in the backend folder and configure:
Copy code
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=5000
5. Access the Application
•	Frontend → http://localhost:3000
•	Backend → http://localhost:5000
Team Members:

•	Akshitha - Frontend 
•	Eesha Hasini – Backend
•	Kavya Hanishka – Database & Integration
GitHub Repo Link:
https://github.com/EeshaHasini/mental-health-tracker
Demo Video:
https://drive.google.com/file/d/10YEw2SqdOTNK30Lg0Z9m4EzZxyYQ9xRe/view?usp=drivesdk
 
                  
