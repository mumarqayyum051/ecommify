import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'dashboards/project',
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m: any) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m: any) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m: any) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m: any) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m: any) => m.AuthSignUpModule
                    ),
            },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m: any) => m.AuthSignOutModule
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m: any) => m.AuthUnlockSessionModule),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('app/modules/landing/home/home.module').then(
                        (m: any) => m.LandingHomeModule
                    ),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            // Dashboards
            {
                path: 'dashboards',
                children: [
                    {
                        path: 'project',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/project/project.module'
                            ).then((m: any) => m.ProjectModule),
                    },
                    {
                        path: 'analytics',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/analytics/analytics.module'
                            ).then((m: any) => m.AnalyticsModule),
                    },
                    {
                        path: 'finance',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/finance/finance.module'
                            ).then((m: any) => m.FinanceModule),
                    },
                    {
                        path: 'crypto',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/crypto/crypto.module'
                            ).then((m: any) => m.CryptoModule),
                    },
                ],
            },

            // Apps
            {
                path: 'apps',
                children: [
                    {
                        path: 'academy',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/academy/academy.module'
                            ).then((m: any) => m.AcademyModule),
                    },
                    {
                        path: 'chat',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/chat/chat.module'
                            ).then((m: any) => m.ChatModule),
                    },
                    {
                        path: 'contacts',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/contacts/contacts.module'
                            ).then((m: any) => m.ContactsModule),
                    },
                    {
                        path: 'ecommerce',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/ecommerce/ecommerce.module'
                            ).then((m: any) => m.ECommerceModule),
                    },
                    {
                        path: 'file-manager',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/file-manager/file-manager.module'
                            ).then((m: any) => m.FileManagerModule),
                    },
                    {
                        path: 'help-center',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/help-center/help-center.module'
                            ).then((m: any) => m.HelpCenterModule),
                    },
                    {
                        path: 'mailbox',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/mailbox/mailbox.module'
                            ).then((m: any) => m.MailboxModule),
                    },
                    {
                        path: 'notes',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/notes/notes.module'
                            ).then((m: any) => m.NotesModule),
                    },
                    {
                        path: 'scrumboard',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/scrumboard/scrumboard.module'
                            ).then((m: any) => m.ScrumboardModule),
                    },
                    {
                        path: 'tasks',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/tasks/tasks.module'
                            ).then((m: any) => m.TasksModule),
                    },
                ],
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/settings/settings.module'
                    ).then((m: any) => m.SettingsModule),
            },

            // User Interface
            {
                path: 'ui',
                children: [
                    // Material Components
                    {
                        path: 'material-components',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/material-components/material-components.module'
                            ).then((m: any) => m.MaterialComponentsModule),
                    },

                    // Fuse Components
                    {
                        path: 'fuse-components',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/fuse-components/fuse-components.module'
                            ).then((m: any) => m.FuseComponentsModule),
                    },

                    // Other Components
                    {
                        path: 'other-components',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/other-components/other-components.module'
                            ).then((m: any) => m.OtherComponentsModule),
                    },

                    // TailwindCSS
                    {
                        path: 'tailwindcss',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/tailwindcss/tailwindcss.module'
                            ).then((m: any) => m.TailwindCSSModule),
                    },

                    // Advanced Search
                    {
                        path: 'advanced-search',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/advanced-search/advanced-search.module'
                            ).then((m: any) => m.AdvancedSearchModule),
                    },

                    // Animations
                    {
                        path: 'animations',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/animations/animations.module'
                            ).then((m: any) => m.AnimationsModule),
                    },

                    // Cards
                    {
                        path: 'cards',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/cards/cards.module'
                            ).then((m: any) => m.CardsModule),
                    },

                    // Colors
                    {
                        path: 'colors',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/colors/colors.module'
                            ).then((m: any) => m.ColorsModule),
                    },

                    // Confirmation Dialog
                    {
                        path: 'confirmation-dialog',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/confirmation-dialog/confirmation-dialog.module'
                            ).then((m: any) => m.ConfirmationDialogModule),
                    },

                    // Datatable
                    {
                        path: 'datatable',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/datatable/datatable.module'
                            ).then((m: any) => m.DatatableModule),
                    },

                    // Forms
                    {
                        path: 'forms',
                        children: [
                            {
                                path: 'fields',
                                loadChildren: () =>
                                    import(
                                        'app/modules/admin/ui/forms/fields/fields.module'
                                    ).then((m: any) => m.FormsFieldsModule),
                            },
                            {
                                path: 'layouts',
                                loadChildren: () =>
                                    import(
                                        'app/modules/admin/ui/forms/layouts/layouts.module'
                                    ).then((m: any) => m.FormsLayoutsModule),
                            },
                            {
                                path: 'wizards',
                                loadChildren: () =>
                                    import(
                                        'app/modules/admin/ui/forms/wizards/wizards.module'
                                    ).then((m: any) => m.FormsWizardsModule),
                            },
                        ],
                    },

                    // Icons
                    {
                        path: 'icons',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/icons/icons.module'
                            ).then((m: any) => m.IconsModule),
                    },

                    // Page Layouts
                    {
                        path: 'page-layouts',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/page-layouts/page-layouts.module'
                            ).then((m: any) => m.PageLayoutsModule),
                    },

                    // Typography
                    {
                        path: 'typography',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/ui/typography/typography.module'
                            ).then((m: any) => m.TypographyModule),
                    },
                ],
            },

            // Documentation
            {
                path: 'docs',
                children: [
                    // Changelog
                    {
                        path: 'changelog',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/docs/changelog/changelog.module'
                            ).then((m: any) => m.ChangelogModule),
                    },

                    // Guides
                    {
                        path: 'guides',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/docs/guides/guides.module'
                            ).then((m: any) => m.GuidesModule),
                    },
                ],
            },

            // 404 & Catch all
            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/error/error-404/error-404.module'
                    ).then((m: any) => m.Error404Module),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
