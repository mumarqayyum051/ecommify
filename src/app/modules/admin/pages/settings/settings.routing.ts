import { Route } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { TestComponent } from './test/test.component';

export const settingsRoutes: Route[] = [
    {
        path: '',
        component: SettingsComponent,
    },
];
