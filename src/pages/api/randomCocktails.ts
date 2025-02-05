import type { NextApiRequest, NextApiResponse } from 'next';
import { cocktails } from '../../utils/data/cocktails';

export default async function getRandomCocktails(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const randomCocktails = cocktails.sort(() => 0.5 - Math.random()).slice(0, 4);
    res.status(200).json(randomCocktails);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}