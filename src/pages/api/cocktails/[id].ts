import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Obtener el parámetro 'id' de la consulta
        const id = parseInt(req.query.id as string, 10);

        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid or missing id' });
            return;
        }

        try {
            // Consultar la base de datos para obtener el cóctel con el 'id' especificado
            const { data: cocktail, error: cocktailError } = await supabase
                .from('cocktails')
                .select('*')
                .eq('cocktail_id', id)
                .single(); // `.single()` para obtener solo un registro

            if (cocktailError) {
                throw new Error(cocktailError.message);
            }
            if (!cocktail) {
                res.status(404).json({ error: 'Cocktail not found' });
                return;
            }

            // Devolver el cóctel
            res.status(200).json(cocktail);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
