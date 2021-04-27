import { Injectable } from '@angular/core';
import { PeopleServiceClient } from '../../proto/people.pbsc';
import { CreatePeopleRequest, ListPeoplesRequest, ListPeoplesResponse, People } from '../../proto/people.pb';
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

    peopleCreate(people: CreatePeopleRequest): Observable<People> {
        return this.client.createPeople(people);
    }
}
