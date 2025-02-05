import type { NextApiRequest, NextApiResponse } from 'next';
import { cocktails } from '../../../utils/data/cocktails';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        const cocktail = cocktails.find(c => c.cocktail_id === id);
        if (cocktail) {
            res.status(200).json(cocktail);
        } else {
            res.status(404).json({ error: 'Cocktail not found' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}