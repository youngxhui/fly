import { Injectable } from '@angular/core';
import { UserServiceClient } from '../../proto/auth.pbsc';
import { LoginUserRequest, LoginUserResponse } from '../../proto/auth.pb';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private client: UserServiceClient, private message: NzMessageService) {
    }

    /**
     * 用户登录
     * @param username 用户名
     * @param password 密码
     */
    public login(username: string, password: string): void {
        console.log('username', username, 'password', password);
        const loginRequest: LoginUserRequest = new LoginUserRequest();
        loginRequest.user.username = username;
        loginRequest.user.password = password;
        this.client.loginUser(loginRequest).subscribe(result => {
                console.log(result.header);
            },
            error => {
                console.log('error', error);
                // this.message.error(error);
            });
        return null;
    }
}
