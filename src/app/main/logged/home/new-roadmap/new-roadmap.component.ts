import { RoadmapNoId } from './../../../../shared/interfaces/roadmap';
import { RoadmapService } from './../../../../core/services/roadmap.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DestinyService } from 'src/app/core/services/destiny.service';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';

@Component({
  selector: 'app-new-roadmap',
  templateUrl: './new-roadmap.component.html',
  styleUrls: ['./new-roadmap.component.scss']
})
export class NewRoadmapComponent implements OnInit {

  newRoadmapForm = new FormGroup({
    name: new FormControl('', Validators.required),
    initialDate: new FormControl('', Validators.required),
    finalDate: new FormControl('', Validators.required),
  })

  data: any = [];
  price: any = 0;
  arrDestinies: any[] = [];
  totalValue = 0;

  constructor(
    private alertService: AlertModalService,
    private destinyService: DestinyService,
    private roadmapService: RoadmapService
  ) { }

  ngOnInit(): void {
    this.destinyService.findAll().subscribe(
      success => {
        this.data = success;
      }
    )
  }

  addDestinies(id: any, price: any) {
    if (!this.arrDestinies.includes(id)) {
      this.arrDestinies.push(id);
      this.totalValue += price;
    } else {
      var index = this.arrDestinies.indexOf(id);
      this.arrDestinies.splice(index, 1)
      this.totalValue -= price;
    }
  }

  createRoadmap() {
    const newRoadmap = {
      name: this.newRoadmapForm.get('name').value,
    }
    console.log(newRoadmap);
    // this.roadmapService.newRoadmap(this.newRoadmapForm).subscribe(
    //   success => {
    //     console.log("CERTO: ", success)
    //   },
    //   error => {
    //     console.log("ERROR: ", error)
    //   }
    // )
  }

}
