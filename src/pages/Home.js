import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Features } from '../components/home/Features';
import { FeatureShowcase } from '../components/home/FeatureShowcase';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { Testimonials } from '../components/home/Testimonials';
import { Subscriptions } from '../components/home/Subscriptions';
import { AboutUs } from '../components/home/AboutUs';
import { Contact } from '../components/home/Contact';
import { Header } from '../components/layout/Header';
import { AIAssistantWidget } from '../components/ai/AIAssistantWidget';
function Home() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Services, {}), _jsx(Features, {}), _jsx(FeatureShowcase, {}), _jsx(Subscriptions, {}), _jsx(TrustIndicators, {}), _jsx(Testimonials, {}), _jsx(AboutUs, {}), _jsx(Contact, {})] }), _jsx(AIAssistantWidget, {})] }));
}
// Export as both default and named export
export { Home };
export default Home;
