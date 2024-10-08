import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {

        let { data: cocktail_ingredients, error } = await supabase
            .from('cocktail_ingredients')
            .select('*')

        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(cocktail_ingredients);
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
