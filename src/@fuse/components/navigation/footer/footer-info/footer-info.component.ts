import { takeUntil } from 'rxjs';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer-info',
    templateUrl: './footer-info.component.html',
    styleUrls: ['./footer-info.component.scss'],
})
export class FooterInfoComponent implements OnInit {
    user: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(private _userService: UserService, private _router: Router) {}

    ngOnInit() {
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: any) => {
                this.user = user;

                // Mark for check
            });
    }
    updateUserStatus(status: string): void {
        // Return if user is not available
        if (!this.user) {
            return;
        }

        // Update the user
        this._userService
            .update({
                ...this.user,
                status,
            })
            .subscribe();
    }

    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
}
