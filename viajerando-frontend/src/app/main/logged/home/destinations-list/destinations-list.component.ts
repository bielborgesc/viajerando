import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.scss']
})
export class DestinationsListComponent implements OnInit {

  mock: any[] = [
    {
      id: 1,
      name: 'Viagem 1',
      imgPath: '../../../../../assets/img/aviao-viajerando-1.jpg',
      description: 'Descrição da viagem',
      date: '22/03/2023'
    },
    {
      id: 2,
      name: 'Viagem 2',
      imgPath: '../../../../../assets/img/aviao-viajerando-1.jpg',
      description: 'Descrição da viagem',
      date: '22/03/2023'
    },
    {
      id: 3,
      name: 'Viagem 3',
      imgPath: '../../../../../assets/img/aviao-viajerando-1.jpg',
      description: 'Descrição da viagem',
      date: '22/03/2023'
    },
    {
      id: 4,
      name: 'Viagem 4',
      imgPath: '../../../../../assets/img/aviao-viajerando-1.jpg',
      description: 'Descrição da viagem',
      date: '22/03/2023'
    },
    {
      id: 5,
      name: 'Viagem 5',
      imgPath: '../../../../../assets/img/aviao-viajerando-1.jpg',
      description: 'Descrição da viagem',
      date: '22/03/2023'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
