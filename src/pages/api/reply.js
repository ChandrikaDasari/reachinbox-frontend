export default function handler(req, res) {
  if (req.method === 'POST') {
    const { reply } = req.body;
    // Handle the reply logic here (e.g., save to database)
    res.status(200).json({ message: 'Reply sent successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
