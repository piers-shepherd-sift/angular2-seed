import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'home',
    templateUrl: 'src/components/home/home.component.html',
    styleUrls: ['styles/components/home.css']
})

export class HomeComponent {
    constructor(private _router: Router, private _authService: AuthService) {
        if (this._authService.isUserAuthorized()) {
            this._router.navigate(['/dashboard']);
        }
    }
}
