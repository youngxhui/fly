import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-empty',
    templateUrl: './empty.component.html',
    styleUrls: ['./empty.component.less']
})
export class EmptyComponent implements OnInit {

    validateForm!: FormGroup;


    constructor(private fb: FormBuilder, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    submitForm(): void {
        // tslint:disable-next-line:forin
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        this.authService.login(this.validateForm.get('userName').value, this.validateForm.get('password').value); //.subscribe(
        //     result => {
        //         const header = result.header;
        //         const token = result.token;
        //         console.log('header', header, 'token', token);
        //     }
        // );

    }

}
