import type { Database } from '../../lib/supabase/types';
type Tables = Database['public']['Tables'];
export declare class DatabaseService<T extends keyof Tables> {
    protected table: T;
    constructor(table: T);
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    create(data: Tables[T]['Insert']): Promise<any>;
    update(id: string, data: Tables[T]['Update']): Promise<any>;
    delete(id: string): Promise<void>;
}
export {};
