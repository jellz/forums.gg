import { CommunityService } from './../../services/community.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor(
      public communityService: CommunityService
    ) {
        
    }

    ngOnInit() {
        
    }

}
