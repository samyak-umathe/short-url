const express = require('express');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');
const urlRoutes = require('./routes/url');
const app = express();
const port = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log('Connected to MongoDB'));

app.use(express.json());
app.use("/url",urlRoutes);
app.get('/', (req, res) => res.send('URL Shortener is running!'));

app.get('/:shortID', async (req, res) => {
  try {
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate(
      { shortID },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    if (!entry) {
      return res.status(404).send('Short URL not found');
    }

    res.redirect(entry.redirectURL); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


app.listen(port, () => console.log(`Server is running on port ${port}`));