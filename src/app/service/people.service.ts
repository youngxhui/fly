import { Injectable } from '@angular/core';
import { PeopleServiceClient } from '../../proto/people.pbsc';
import { ListPeoplesRequest, ListPeoplesResponse } from '../../proto/people.pb';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private client: PeopleServiceClient) {
    }

    /**
     * 返回list
     * @param page 页数
     * @param size 数量
     */
    peopleList(page: number, size: number): Observable<ListPeoplesResponse> {
        const listRequestData = new ListPeoplesRequest();
        listRequestData.page = page;
        listRequestData.size = size;
        return this.client.listPeoples(listRequestData);
    }
}
