/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() {}
    isDrawerOpened: boolean = false;
    private settingsSideNav = new BehaviorSubject<boolean>(false);

    toggleDrawer(value: boolean) {
        this.settingsSideNav.next(value);
        console.log(this.getDrawerState());
    }

    getDrawerState(): any {
        return this.settingsSideNav.value;
    }
}
