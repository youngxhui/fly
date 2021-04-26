import { Injectable } from '@angular/core';
import { UserServiceClient } from '../../proto/auth.pbsc';
import { ToolServiceClient } from '../../proto/tool.pbsc';
import { ListToolsRequest, ListToolsResponse, Tool } from '../../proto/tool.pb';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToolService {

    constructor(private client: ToolServiceClient) {
    }

    /**
     * 获取所有的tool list
     * @param page 页数
     * @param size 数量
     */
    list(page: number, size: number): Observable<ListToolsResponse> {
        // let tools = Tool[size];
        const request = new ListToolsRequest();
        request.page = page;
        request.size = size;
        return this.client.listTools(request);
        //     .subscribe(next => {
        //     tools = next.tools;
        // });
        // return tools;
    }
}
