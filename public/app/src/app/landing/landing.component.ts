
import { Component, OnInit } from '@angular/core';

import { MdlDialogReference, MdlDialogService } from '@angular-mdl/core';

import { LoginComponent } from './login/login.component';

import { LoginUserService } from './login/login-user.service';


@Component({
  moduleId   : module.id,
  selector   : 'bbs-landing',
  templateUrl: 'landing.component.html',
  styleUrls  : ['landing.component.css']
})
export class LandingComponent {

  constructor(private dialogService: MdlDialogService,
              private loginService: LoginUserService) {

  }

  ngOnInit() {
    this.loginService.logout();
  }

  showLoginDialog() {
		const dialog = this.dialogService.showCustomDialog({
			component: LoginComponent,
			isModal: true,
			clickOutsideToClose: true
		});
	}

}
