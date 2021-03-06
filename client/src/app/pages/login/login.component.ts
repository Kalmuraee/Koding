import { Component } from '@angular/core';
import { User } from 'src/app/domain/koding_db/user';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/security/authentication.service';
import {Md5} from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { store } from 'src/app/security/current-user';
import { SecurityService } from 'src/app/security/services/security.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: User = new User(null, null, null, null);
    showError: boolean;
    remember: boolean;
    constructor(
        private securityService: SecurityService,
        private router: Router
    ) {}
    login(form: NgForm) {
        if (form.valid) {
            const md5pass = Md5.hashStr(this.user.password).toString();
            this.securityService.login(this.user.username, md5pass, this.remember === undefined ? false : this.remember)
            .subscribe(
                user => {
                    this.showError = false;
                    this.router.navigate(['/']);
                    this.setUser(user);
                },
                err => this.showError = true
            );
        }
    }
    private setUser(user: User) {
        store.setUser(user);
    }
}
