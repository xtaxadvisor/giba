import { supabase } from '../../lib/supabase/client';
export class DatabaseService {
    table;
    constructor(table) {
        this.table = table;
    }
    async getAll() {
        const { data, error } = await supabase
            .from(this.table)
            .select('*');
        if (error)
            throw error;
        return data;
    }
    async getById(id) {
        const { data, error } = await supabase
            .from(this.table)
            .select('*')
            .eq('id', id)
            .single();
        if (error)
            throw error;
        return data;
    }
    async create(data) {
        const { data: created, error } = await supabase
            .from(this.table)
            .insert(data)
            .select()
            .single();
        if (error)
            throw error;
        return created;
    }
    async update(id, data) {
        const { data: updated, error } = await supabase
            .from(this.table)
            .update(data)
            .eq('id', id)
            .select()
            .single();
        if (error)
            throw error;
        return updated;
    }
    async delete(id) {
        const { error } = await supabase
            .from(this.table)
            .delete()
            .eq('id', id);
        if (error)
            throw error;
    }
}
