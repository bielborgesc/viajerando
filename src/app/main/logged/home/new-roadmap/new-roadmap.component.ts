import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestinyService } from 'src/app/core/services/destiny.service';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';

@Component({
  selector: 'app-new-roadmap',
  templateUrl: './new-roadmap.component.html',
  styleUrls: ['./new-roadmap.component.scss']
})
export class NewRoadmapComponent implements OnInit {

  newRoadmapForm = new FormGroup({
    
  })

  data: any = [];
  price: any = 0;

  constructor(
    private alertService: AlertModalService,
    private destinyService: DestinyService
  ) { }

  ngOnInit(): void {
    this.destinyService.findAll().subscribe(
      success => {
        this.data = success;
      }
    )
  }

}
