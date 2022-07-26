/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { settingsRoutes } from './settings.routing';
import { DataService } from 'app/core/services/data.service';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
    @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    panels: any[] = [];
    generalSettings: any[] = [];
    integrationSettings: any[] = [];
    pimSettings: any[] = [];
    information: any[] = [];
    selectedPanel: string = 'account';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    // eslint-disable-next-line @typescript-eslint/member-ordering
    settingRoutes: any = settingsRoutes;
    open: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private dataService: DataService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // general settings
        this.generalSettings = [
            {
                id: 'details',
                title: 'Your details',
                icon: 'heroicons_outline:plus-circle',
            },
            {
                id: 'user',
                title: 'User',
                icon: 'heroicons_outline:user-add',
            },
        ];
        // integration setting
        this.integrationSettings = [
            {
                id: 'all-integrations',
                title: 'All integrations',
                icon: 'heroicons_outline:clipboard-list',
                counter: 46,
            },
            {
                id: 'default-mapping',
                title: 'Default mapping',
                icon: 'heroicons_outline:clipboard-copy',
                counter: 0,
            },
            {
                id: 'custom-inegration-request',
                title: 'Custom integraion request',
                icon: 'heroicons_outline:clipboard-check',
                counter: 0,
            },
        ];
        this.pimSettings = [
            {
                id: 'categores',
                title: 'Categories',
                icon: 'heroicons_outline:cog',
            },
            {
                id: 'customer-fields',
                title: 'Customer fields',
                icon: 'heroicons_outline:user-circle',
            },
            {
                id: 'source-mapping',
                title: 'Source mapping',
                icon: 'heroicons_outline:user-circle',
            },
        ];
        this.information = [
            {
                title: 'SKUs',
                icon: 'heroicons_solid:database',
                total: 20000,
                used: 12000,
            },
            {
                title: 'Integrations',
                icon: 'heroicons_solid:users',
                total: 3,
                used: 2,
            },
        ];
        // Setup available panels
        this.panels = [
            {
                id: 'general_settings',
                title: 'General Settings',
                description: 'Task, project and team',
            },
            {
                id: 'account',
                icon: 'heroicons_outline:user-circle',
                title: 'Account',
                description:
                    'Manage your public profile and private information',
            },
            {
                id: 'users',
                icon: 'heroicons_outline:lock-closed',
                title: 'Users',
                description:
                    'Manage your password and 2-step verification preferences',
            },
            {
                id: 'plan-billing',
                icon: 'heroicons_outline:credit-card',
                title: 'Plan & Billing',
                description:
                    'Manage your subscription plan, payment method and billing information',
            },
            {
                id: 'notifications',
                icon: 'heroicons_outline:bell',
                title: 'Notifications',
                description: "Manage when you'll be notified on which channels",
            },
            {
                id: 'team',
                icon: 'heroicons_outline:user-group',
                title: 'Team',
                description:
                    'Manage your existing team and change roles/permissions',
            },
        ];

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode and drawerOpened
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    onNavigationOptClick(settings) {
        console.log(settings);
        if (settings.id === 'all-integrations') {
            this.open = !this.open;
            this.dataService.isDrawerOpened = !this.dataService.isDrawerOpened;
        }
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Navigate to the panel
     *
     * @param panel
     */
    goToPanel(panel: string): void {
        this.selectedPanel = panel;

        // Close the drawer on 'over' mode
        if (this.drawerMode === 'over') {
            this.drawer.close();
        }
    }

    /**
     * Get the details of the panel
     *
     * @param id
     */
    getPanelInfo(id: string): any {
        return this.panels.find((panel: any) => panel.id === id);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
