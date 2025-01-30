import express from 'express';
const app = express();
import cors from "cors"
const port = process.env.PORT || 4747;
import {prisma} from "../lib/prisma.js"; // Adjust path as needed

app.use(cors({ origin: 'http://localhost:3000' })); 

app.get('/', async (req,res ) => {
    const videos = await prisma.videos.findMany();
    console.log(videos)
    res.json(videos)
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});