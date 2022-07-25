/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
/** @title Drawer with explicit backdrop setting */
@Component({
    selector: 'side-drawer',
    templateUrl: 'side-drawer.component.html',
    styleUrls: ['side-drawer.component.scss'],
})
export class SideDrawerComponent implements OnInit {
    showFiller = false;
    integrationLinks: any[] = [];
    accountForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    ngOnInit(): void {
        // Create the form
        this.accountForm = this._formBuilder.group({
            name: ['Brian Hughes'],
            username: ['brianh'],
            title: ['Senior Frontend Developer'],
            company: ['YXZ Software'],
            about: [
                "Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! 🍫",
            ],
            email: ['hughes.brian@mail.com', Validators.email],
            phone: ['121-490-33-12'],
            country: ['usa'],
            language: ['english'],
        });
        this.integrationLinks = [
            {
                title: 'Connection',
                icon: 'heroicons_outline:user-circle',
            },
            {
                title: 'Insertion',
                icon: 'heroicons_outline:user-circle',
            },
            {
                title: 'Order',
                icon: 'heroicons_outline:bell',
            },
            {
                title: 'Tracking',
                icon: 'heroicons_outline:bell',
            },
        ];
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