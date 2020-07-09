import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drill-library-skeleton',
  templateUrl: './drill-library-skeleton.component.html',
  styleUrls: ['./drill-library-skeleton.component.scss'],
})
export class DrillLibrarySkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  skeletonArray = ["", "", "", "", "", "", "", "", "", "", "", "",];
}
