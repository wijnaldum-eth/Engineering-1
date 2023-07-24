import { connectToDatabase } from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { campaignId, userId, vote } = req.body;

    // Connect to the database
    const client = await connectToDatabase();

    // Access the votes collection
    const votesCollection = client.db().collection('votes');

    // Insert the vote into the collection
    await votesCollection.insertOne({
      campaignId,
      userId,
      vote,
    });

    res.status(201).json({ message: 'Vote submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}