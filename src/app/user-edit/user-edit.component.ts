import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userForm !: FormGroup;

  constructor(private formbuilder: FormBuilder, private route: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formbuilder.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'mail': ['', Validators.compose([Validators.required, Validators.email])],
      'bestDrink': ['', Validators.compose([Validators.required])],
      'hobbies': this.formbuilder.array([]),
    });
  }

  onSubmit() {
    let formValue = this.userForm.value;
    console.log("hobbies")
    console.log(formValue['hobbies'])
    let user = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['mail'],
      formValue['bestDrink'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(user);
    this.route.navigate(['/users']);
  }

  onAddHobby() {
    //creation control
    let control = this.formbuilder.control('', Validators.required);

    // get Emptylist control for hobbies input
    let controls = this.getHobbies().controls;

    //insert control 
    controls.push(control);

  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }
}
