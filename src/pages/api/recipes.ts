import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Obtener el parámetro 'cocktail_id' de la query
        const cocktail_id = req.query.cocktail_id ? parseInt(req.query.cocktail_id as string, 10) : null;

        // Validar que se ha proporcionado el 'cocktail_id'
        if (!cocktail_id) {
            return res.status(400).json({ error: 'cocktail_id is required' });
        }

        try {
            // Consultar la tabla 'recipes' para obtener los pasos de la receta asociados a 'cocktail_id'
            const { data: recipes, error } = await supabase
                .from('recipes')
                .select('*')
                .eq('cocktail_id', cocktail_id)
                .order('step_number', { ascending: true }); // ordena por el número de paso

            // Manejar errores en la consulta
            if (error) {
                throw new Error(error.message);
            }

            // Si no se encuentran pasos
            if (!recipes || recipes.length === 0) {
                return res.status(404).json({ error: 'No recipes found for this cocktail' });
            }

            // Devolver los pasos de la receta
            res.status(200).json(recipes);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        // Método no permitido
        res.status(405).json({ error: 'Method not allowed' });
    }
}