
# URL Shortener 🔗

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB**.  
It generates short IDs for long URLs, redirects users to the original link, and tracks visit history.

---

##  Features
- Generate a short ID for any long URL
- Redirect to the original URL using the short ID
- Track visit history (timestamps of visits)
- REST API endpoints for creating and accessing short URLs

---

##  Project Structure
```
url_shortner/
├── index.js          # Main server file
├── connect.js        # MongoDB connection helper
├── models/
│   └── url.js        # Mongoose schema for URLs
├── routes/
│   └── url.js        # Routes for creating short URLs
└── controllers/
    └── url.js        # (optional) Controller logic
```

---

---
---POSTMAN
## 🛠️ API Endpoints

### 1. Create a Short URL
**POST** `/url`

Request body:
```json
{
  "url": "https://leetcode.com/"
}
```

Response:
```json
{
  "_id": "6a3bbcf6343bbd15af8e51b7",
  "shortID": "Fhkr-IP9C",
  "redirectURL": "https://leetcode.com/",
  "visitHistory": [],
  "createdAt": "2026-06-24T11:18:14.765Z",
  "updatedAt": "2026-06-24T11:18:14.765Z",
  "__v": 0
}
```

---

### 2. Redirect to Original URL
**GET** `/:shortID`

Example:
```
GET http://localhost:8001/Fhkr-IP9C
```

Redirects to:
```
https://leetcode.com/
```

---

### 3. Analytics (Optional)
**GET** `/url/:shortID/stats`

Response:
```json
{
  "totalVisits": 5,
  "visitHistory": [
    { "timestamp": 1719234567890 },
    { "timestamp": 1719234678901 }
  ]
}
```

---

##  Tech Stack
- **Node.js** – backend runtime
- **Express.js** – web framework
- **MongoDB + Mongoose** – database and ODM
- **Nodemon** – auto-restart during development
- **Nanoid** – short ID generator

---

##  Notes
- Ensure MongoDB is running locally on `mongodb://localhost:27017/short-url`.
- Field names in schema are case-sensitive (`shortID`, `redirectURL`).
- Keep naming consistent across schema, routes, and DB.

---

##  Author
Built by Samyak  
3rd-year engineering student at YCCE, Nagpur.
```

---

