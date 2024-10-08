import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Obtener el parámetro 'count' de la consulta (si existe)
    const count = parseInt(req.query.count as string, 15) || 15; // Por defecto, traer todos los cócteles

    // Traer todos los cócteles de la base de datos
    let { data: cocktails, error: error } = await supabase
      .from('cocktails')
      .select('*');

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      if (!cocktails || cocktails.length === 0) {
        // Verificamos si la lista es null o vacía
        res.status(404).json({ error: 'No cocktails found' });
        return;
    }
      // Mezclar los cócteles aleatoriamente y seleccionar los primeros 'count'
      const randomCocktails = cocktails.sort(() => 0.5 - Math.random()).slice(0, count);
      res.status(200).json(randomCocktails);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
