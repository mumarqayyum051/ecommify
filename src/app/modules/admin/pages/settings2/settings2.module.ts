import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsAccountComponent } from 'app/modules/admin/pages/settings2/account/account.component';
import { SettingsSecurityComponent } from 'app/modules/admin/pages/settings2/security/security.component';
import { SettingsPlanBillingComponent } from 'app/modules/admin/pages/settings2/plan-billing/plan-billing.component';
import { SettingsNotificationsComponent } from 'app/modules/admin/pages/settings2/notifications/notifications.component';
import { SettingsTeamComponent } from 'app/modules/admin/pages/settings2/team/team.component';
import { settings2Routes } from 'app/modules/admin/pages/settings2/settings2.routing';
import { Settings2Component } from './settings2.component';

@NgModule({
    declarations: [
        SettingsAccountComponent,
        SettingsSecurityComponent,
        SettingsPlanBillingComponent,
        SettingsNotificationsComponent,
        SettingsTeamComponent,
        Settings2Component,
    ],
    imports: [
        RouterModule.forChild(settings2Routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        SharedModule,
    ],
})
export class Settings2Module {}
