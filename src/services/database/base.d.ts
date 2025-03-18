import type { Database } from '../../lib/supabase';
export declare abstract class BaseService<T extends keyof Database['public']['Tables']> {
    protected readonly table: T;
    constructor(table: T);
    protected get tableRef(): any;
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    create(data: Database['public']['Tables'][T]['Insert']): Promise<any>;
    update(id: string, data: Database['public']['Tables'][T]['Update']): Promise<any>;
    delete(id: string): Promise<void>;
}
