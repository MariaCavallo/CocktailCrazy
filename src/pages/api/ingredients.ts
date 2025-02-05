import type { NextApiRequest, NextApiResponse } from 'next';
import { ingredients } from '../../utils/data/ingredients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(ingredients);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}