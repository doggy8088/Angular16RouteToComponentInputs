import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route = inject(ActivatedRoute);

  id: string | null = '';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
