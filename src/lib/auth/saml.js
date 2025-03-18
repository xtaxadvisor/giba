import { supabase } from '../supabase/client';
export const SAML_CONFIG = {
    entityId: 'protaxadvisors.tax',
    acsUrl: 'https://asdthnxphqjpxzyhpylr.supabase.co/auth/v1/sso/saml/acs',
    metadataUrl: 'https://asdthnxphqjpxzyhpylr.supabase.co/auth/v1/sso/saml/metadata',
    provider: 'okta'
};
export async function initiateSAMLLogin() {
    try {
        const { data, error } = await supabase.auth.signInWithSSO({
            providerId: SAML_CONFIG.provider,
            options: {
                redirectTo: window.location.origin
            }
        });
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        console.error('SAML login error:', error);
        throw error;
    }
}
