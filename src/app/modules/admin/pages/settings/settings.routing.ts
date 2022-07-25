import { Route } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { TestComponent } from './test/test.component';

export const settingsRoutes: Route[] = [
    {
        path: '',
        component: SettingsComponent,
    },
    {
        path: 'side-drawer',
        component: SideDrawerComponent,
    },
];
