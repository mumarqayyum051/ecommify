import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationsComponent } from './integrations.component';
import { IntegrationRoutes } from './integration-routing.module';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(IntegrationRoutes)],
    declarations: [IntegrationsComponent],
})
export class IntegrationsModule {}
