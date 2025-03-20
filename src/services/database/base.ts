import { supabase } from '../../lib/supabase.js';
import type { Database } from '../../lib/supabase/types.js'; // Ensure the correct path and type definition

export abstract class BaseService<T extends Extract<keyof Database['public']['Tables'], string>> {
  constructor(protected readonly table: T) {}

  protected get tableRef() {
    return supabase.from(this.table);
  }

  async getAll() {
    const { data, error } = await this.tableRef.select('*');
    if (error) throw error;
    return data;
  }

  async getById(id: string) {
    const { data, error } = await this.tableRef
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(data: Database['public']['Tables'][T]['Insert']) {
    const { data: created, error } = await this.tableRef
      .insert(data)
      .select()
      .single();
    if (error) throw error;
    return created;
  }

  async update(id: string, data: Database['public']['Tables'][T]['Update']) {
    const { data: updated, error } = await this.tableRef
      .update(data)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return updated;
  }

  async delete(id: string) {
    const { error } = await this.tableRef.delete().eq('id', id);
    if (error) throw error;
  }
}