export interface SAMLConfig {
    entityId: string;
    acsUrl: string;
    metadataUrl: string;
    provider: 'okta' | 'azure' | 'auth0';
}
export declare const SAML_CONFIG: SAMLConfig;
export declare function initiateSAMLLogin(): Promise<any>;
