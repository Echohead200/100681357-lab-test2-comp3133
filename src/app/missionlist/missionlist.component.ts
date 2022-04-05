import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {


  private getSpacedata = "https://api.spacexdata.com/v3/launches"
  dataList = []
  constructor(private getEndPoint: HttpClient) { }

  ngOnInit(): void {
    this.getEndPoint.get(this.getSpacedata).subscribe((response: any) => {
      console.log(response.data)
      this.dataList = response.data
    })
  }

}
