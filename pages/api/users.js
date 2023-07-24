import { connectToDatabase } from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Connect to the database
    const client = await connectToDatabase();

    // Access the users collection
    const usersCollection = client.db().collection('users');

    // Insert the user into the collection
    await usersCollection.insertOne({
      name,
      email,
    });

    res.status(201).json({ message: 'User created successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}