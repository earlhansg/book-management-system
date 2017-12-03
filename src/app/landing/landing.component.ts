
import { Component } from '@angular/core';

import { MdlDialogReference, MdlDialogService } from '@angular-mdl/core';

import { LoginComponent } from './login/login.component';


@Component({
  moduleId   : module.id,
  selector   : 'bbs-landing',
  templateUrl: 'landing.component.html',
  styleUrls  : ['landing.component.css']
})
export class LandingComponent {

  constructor(private dialogService: MdlDialogService) {
  }
  showLoginDialog() {
		const dialog = this.dialogService.showCustomDialog({
			component: LoginComponent,
			isModal: true,
			clickOutsideToClose: true
		});
	}
}
