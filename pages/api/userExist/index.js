// pages/api/userexist.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db();
      const user = await db.collection('users').findOne({ email });

      client.close();

      res.status(200).json({ user: !!user });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao verificar o usuário.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
