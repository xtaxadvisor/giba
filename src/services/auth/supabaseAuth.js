import { supabase } from '../../lib/supabase/client';
export const supabaseAuth = {
    async signUp(email, password, userData) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: userData.name,
                    role: userData.role
                }
            }
        });
        if (error)
            throw error;
        if (data.user) {
            // Create profile in users table
            const { error: profileError } = await supabase
                .from('users')
                .insert({
                auth_id: data.user.id,
                name: userData.name,
                email: data.user.email,
                role: userData.role
            });
            if (profileError)
                throw profileError;
        }
        return data;
    },
    async signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error)
            throw error;
        return data;
    },
    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error)
            throw error;
    },
    async getCurrentUser() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user)
            return null;
        // Get extended profile from users table
        const { data: profile } = await supabase
            .from('users')
            .select('*')
            .eq('auth_id', user.id)
            .single();
        return profile;
    },
    async resetPassword(email) {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error)
            throw error;
    },
    async updatePassword(newPassword) {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        });
        if (error)
            throw error;
    },
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange((_, session) => {
            callback(session?.user ?? null);
        });
    }
};
