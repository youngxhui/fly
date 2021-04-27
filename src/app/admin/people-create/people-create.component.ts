import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../service/people.service';
import { CreatePeopleRequest, People } from '../../../proto/people.pb';

@Component({
    selector: 'app-people-create',
    templateUrl: './people-create.component.html',
    styleUrls: ['./people-create.component.less']
})
export class PeopleCreateComponent implements OnInit {


    validateForm!: FormGroup;

    submitForm(): void {

        // tslint:disable-next-line:forin
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        const request = new CreatePeopleRequest();
        const people = new People();
        people.name = this.validateForm.get('email').value;
        people.password = this.validateForm.get('password').value;
        request.people = people;
        this.peopleService.peopleCreate(request).subscribe(next => {
            console.log(request.people);
        });

    }

    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.validateForm.controls.password.value) {
            return {confirm: true, error: true};
        }
        return {};
    };

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }

    constructor(private fb: FormBuilder, private peopleService: PeopleService) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]],
            checkPassword: [null, [Validators.required, this.confirmationValidator]]
        });
    }
}
