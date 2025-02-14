import MainContent from './MainContent';
import SettingsAppProvider, {OfficialTheme, UpgradeStatusType} from './components/providers/SettingsAppProvider';
import SettingsRouter, {loadModals, modalPaths} from './components/providers/SettingsRouter';
import {DesignSystemApp, DesignSystemAppProps} from '@tryghost/admin-x-design-system';
import {FrameworkProvider, TopLevelFrameworkProps} from '@tryghost/admin-x-framework';
import {ZapierTemplate} from './components/settings/advanced/integrations/ZapierModal';

interface AppProps {
    framework: TopLevelFrameworkProps;
    designSystem: DesignSystemAppProps;
    officialThemes: OfficialTheme[];
    zapierTemplates: ZapierTemplate[];
    upgradeStatus?: UpgradeStatusType;
}

function App({framework, designSystem, officialThemes, zapierTemplates, upgradeStatus}: AppProps) {
    return (
        <FrameworkProvider basePath='settings' modals={{paths: modalPaths, load: loadModals}} {...framework}>
            <SettingsAppProvider officialThemes={officialThemes} upgradeStatus={upgradeStatus} zapierTemplates={zapierTemplates}>
                <DesignSystemApp className='admin-x-settings' {...designSystem}>
                    <SettingsRouter />
                    <MainContent />
                </DesignSystemApp>
            </SettingsAppProvider>
        </FrameworkProvider>
    );
}

export default App;
