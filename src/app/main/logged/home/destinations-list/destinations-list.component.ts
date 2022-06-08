import { DestinyService } from './../../../../core/services/destiny.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.scss']
})
export class DestinationsListComponent implements OnInit {

  data: any = [];

  constructor(
    private destinyService: DestinyService
  ) { }

  ngOnInit(): void {
    this.destinyService.findAll().subscribe(
      success => {
        this.data = success
      }
    )
  }

}
