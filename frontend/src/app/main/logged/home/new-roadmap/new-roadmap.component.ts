import { RoadmapNoId } from './../../../../shared/interfaces/roadmap';
import { RoadmapService } from './../../../../core/services/roadmap.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DestinyService } from 'src/app/core/services/destiny.service';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';
import { parseJwt } from 'src/app/shared/utils/parseJson';
import { UserService } from 'src/app/core/services/user.service';

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
    private roadmapService: RoadmapService,
    private userService: UserService
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
      name: this.newRoadmapForm.get('name')?.value,
      totalPrice: 0.0,
      initialDate: this.newRoadmapForm.get('initialDate')?.value,
      finalDate: this.newRoadmapForm.get('finalDate')?.value
    }

    let idUser = localStorage.getItem('idUser');

    let ids = this.arrDestinies.join('-');

    this.roadmapService.newRoadmap(newRoadmap).subscribe(
      success => {
        const res: any = success;
        console.log("CERTO: ", res.id)

        this.roadmapService.roadmapInUser(res.id, idUser, this.arrDestinies).subscribe(
          () => {
            this.alertService.showAlertSuccess("Roteiro criado!");
            // let roadmap: any = ;
            // if (this.arrDestinies.length > 0) {
            //   this.arrDestinies.forEach(id => {
            //     this.roadmapService.addDestiniesInRoadmap(roadmap.id, id).subscribe(
            //       success => {
            //         console.log("Aqui")
            //       },
            //       error => console.log("Deu ruim")
            //     );
            //   })
            // }
          }
        )
      },
      error => {
        console.log("ERROR: ", error)
      }
    )
  }

}
