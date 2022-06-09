import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: any;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("Username");
  }

  exit(): void{
    localStorage.removeItem("Authorization");
    this.router.navigate(['/auth/login']);
  }

  roadmapList(): void {
    this.router.navigate(['/lista-destinos'], {relativeTo: this.activatedRoute});
  }

  myDestinations(): void {
    this.router.navigate(['/meus-roteiros'], {relativeTo: this.activatedRoute})
  }

  newRoadmap(): void {
    this.router.navigate(['/novo-roteiro'], {relativeTo: this.activatedRoute})
  }

}
