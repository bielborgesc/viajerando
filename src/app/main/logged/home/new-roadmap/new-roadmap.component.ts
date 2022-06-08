import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';

@Component({
  selector: 'app-new-roadmap',
  templateUrl: './new-roadmap.component.html',
  styleUrls: ['./new-roadmap.component.scss']
})
export class NewRoadmapComponent implements OnInit {

  newRoadmapForm = new FormGroup({
    
  })

  constructor(
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
  }

}
