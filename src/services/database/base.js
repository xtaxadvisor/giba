import { supabase } from '../../lib/supabase';
export class BaseService {
    table;
    constructor(table) {
        this.table = table;
    }
    get tableRef() {
        return supabase.from(this.table);
    }
    async getAll() {
        const { data, error } = await this.tableRef.select('*');
        if (error)
            throw error;
        return data;
    }
    async getById(id) {
        const { data, error } = await this.tableRef
            .select('*')
            .eq('id', id)
            .single();
        if (error)
            throw error;
        return data;
    }
    async create(data) {
        const { data: created, error } = await this.tableRef
            .insert(data)
            .select()
            .single();
        if (error)
            throw error;
        return created;
    }
    async update(id, data) {
        const { data: updated, error } = await this.tableRef
            .update(data)
            .eq('id', id)
            .select()
            .single();
        if (error)
            throw error;
        return updated;
    }
    async delete(id) {
        const { error } = await this.tableRef.delete().eq('id', id);
        if (error)
            throw error;
    }
}
