const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eahhj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Database connection
    const jobsCollection = client.db("skillmatch").collection("jobs");
    const bidsCollection = client.db("skillmatch").collection("bids");

    // get all jobs data from database
    app.get("/jobs", async (req, res) => {
      const query = {};
      const cursor = jobsCollection.find(query);
      const jobs = await cursor.toArray();
      res.send(jobs);
    });

    // single job data using _id
    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const job = await jobsCollection.findOne(query);
      res.send(job);
    });
    // save data in job
    app.post("/job", async (req, res) => {
      const jobData = req.body;
      const result = await jobsCollection.insertOne(jobData);
      res.send(result);
    });

    // get posted job by a specific user
    app.get("/jobs/:email", async (req, res) => {
      const email = req.params.email;
      const query = { "buyer.email": email };
      const cursor = jobsCollection.find(query);
      const jobs = await cursor.toArray();
      res.send(jobs);
    });

    // delete a job by id
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.deleteOne(query);
      res.send(result);
    });
    // update a job by id
    app.put("/job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...jobData,
        },
      };
      const result = await jobsCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // save data in bid
    app.post("/bid", async (req, res) => {
      const bidData = req.body;
      const result = await bidsCollection.insertOne(bidData);
      res.send(result);
    });
    // get all bids data from database
    app.get("/bid", async (req, res) => {
      const query = {};
      const cursor = bidsCollection.find(query);
      const bids = await cursor.toArray();
      res.send(bids);
    });
    // get all bids data by email from database
    app.get("/mybids/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = bidsCollection.find(query);
      const bids = await cursor.toArray();
      res.send(bids);
    });

    //  get bid req for job owner
    app.get("/bidrequest/:email", async (req, res) => {
      const email = req.params.email;
      const query = { buyer_email : email };
      const cursor = bidsCollection.find(query);
      const bids = await cursor.toArray();
      res.send(bids);
    });

    // Update Bid status
    app.patch("/bid/:id", async (req, res) => {
      const id = req.params.id;
      const { status } = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { status },
      };
      const result = await bidsCollection.updateOne(query, updateDoc);
      res.send(result);
    });

 


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

