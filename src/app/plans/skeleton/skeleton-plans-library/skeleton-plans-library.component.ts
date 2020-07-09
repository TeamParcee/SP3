import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-plans-library',
  templateUrl: './skeleton-plans-library.component.html',
  styleUrls: ['./skeleton-plans-library.component.scss'],
})
export class SkeletonPlansLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  skeleton = ["", "", "", "", "", "", "", "", "", "", "", "", "",];

  
}
