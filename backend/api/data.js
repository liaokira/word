import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'your_supabase_url';
const supabaseKey = 'your_supabase_key';
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchData = async (req, res) => {
    const { data, error } = await supabase
        .from('your_table_name')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};

export const createData = async (req, res) => {
    const { body } = req;
    const { data, error } = await supabase
        .from('your_table_name')
        .insert([body]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
};

export const updateData = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { data, error } = await supabase
        .from('your_table_name')
        .update(body)
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};

export const deleteData = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('your_table_name')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(204).send();
};