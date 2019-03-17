# nodejs-dish-poll-user-authentication-app

NodeJS Application that provides user to register, login, add dishes to the poll and finally see the result of the dish poll.  Developed using Nodejs, Express, and MongoDB. JWT is used to manage user authentication.

### Requirements
  - NodeJS
  - MongoDB
  - ExpressJS

---

### Usecase 
  - A user can register by entering email and password. 
  - Can log in using the same credentials.
  - Authentication is handled using JWT. 
  - A parent user can list all his child users and edit their profile. 

---
### Development
   - API is built using Node/Express and handles data creation, updates, and retrieval
   - The backend is a MongoDB document database that stores users, dishes and poll data

---
### User Stories:
   - A new user can register to the dish poll by posting an email address and password to /api/auth/signup.
   - User can log in to the app by posting an email address and password to /api/auth/login which returns a unique JWT token for authentication.
   - Each user can add a dish to the poll by posting the dish's details to /api/dish/add.
   - Can retrieve a list of all dishes entered by getting /api/dish/list.
   - Each user can make a selection of 3 dishes from the poll that has been created. Each selection is given points based on the rank (Dish 1 gets 30 points, Dish 2 gets 20, Dish 3 gets 10) /api/dish/poll
   - A user can view the result of the poll which is displayed in descending order of points received. /api/dish/result

---
### Usage:

#### Registering a New User
**Endpoint:**  
```/api/auth/signup```

**Method:**  
```POST```

**Body:**
```
{
    email: 'EMAIL',
    password: '******'
}
```
---
#### Login to generate JWT
**Endpoint:**  
```/api/auth/login```

**Method:**  
```POST```

**Body:**
```
{
    email: 'EMAIL',
    password: '******'
}
```
---
#### Add dishes to the poll
**Endpoint:**  
```/api/dish/add```

**Method:**  
```POST```

**Body:**
```
{
    description: 'masala dose'
}
```
---
#### List all dishes of all users
**Endpoint:**  
```/api/dish/list```

**Method:**  
```GET```

---
#### Add vote to the poll
**Endpoint:**  
```/api/dish/poll```

**Method:**  
```POST```

**Body:**
```
{
	UserId1: "5c765********a18b6f1920b",
	DishId1: "5c765********a18b6f19204",
  	UserId2: "5c765********a18b6f19206",
	DishId2: "5c765********a18b6f1920c",
  	UserId3: "5c765********a18b6f1920v",
	DishId3: "5c765********a18b6f19201",
}
```
---
#### View result of the poll
**Endpoint:**  
```/api/dish/result```

**Method:**  
```GET```

---

### Demo
  - Hosted on [Heroku](https://dashboard.heroku.com) - [https://dish-poll-api.herokuapp.com/](https://dish-poll-api.herokuapp.com/)

