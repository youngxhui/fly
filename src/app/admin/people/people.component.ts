import { Component, OnInit } from '@angular/core';
import { People } from '../../../proto/people.pb';
import { PeopleServiceClient } from '../../../proto/people.pbsc';
import { PeopleService } from '../../service/people.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {
    peopleList = new Array<People>();
    page = 1;
    size = 10;

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit(): void {
        this.peopleService.peopleList(this.page, this.size).subscribe(next => {
            this.peopleList = next.peoples;
        });
    }

}
