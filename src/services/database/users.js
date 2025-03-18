import { supabase } from '../../lib/supabase';
class UserService {
    async getByAuthId(authId) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('auth_id', authId)
            .single();
        if (error)
            throw error;
        return data;
    }
    async updateProfile(userId, profile) {
        const { data, error } = await supabase
            .from('users')
            .update({
            ...profile,
            updated_at: new Date().toISOString()
        })
            .eq('id', userId)
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
}
export const userService = new UserService();
