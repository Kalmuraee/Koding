// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { UserService } from '../../services/user.service';

// START - USED SERVICES
/**
* UserService.changePassword
*	@description Change password of user from admin
*	@returns object
*
* UserService.create
*	@description CRUD ACTION create
*
* UserService.delete
*	@description CRUD ACTION delete
*
* UserService.get
*	@description CRUD ACTION get
*
* UserService.list
*	@description CRUD ACTION list
*
* UserService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * Home Component
 */
@Component({
    selector: 'app-home',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
        private userService: UserService,
        private location: Location
        ) {

    }
}
