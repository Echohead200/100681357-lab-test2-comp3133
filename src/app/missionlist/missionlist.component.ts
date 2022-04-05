import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {


  private getspaceinfo = "https://api.spacexdata.com/v3/launches";
  //getspaceinfo
  // REST_API_END_POINT
  //res
  dataList: any[] = [];
  constructor(private getEndPoint: HttpClient) { }

  ngOnInit(): void {
    this.getEndPoint.get(this.getspaceinfo).subscribe((response: any) => {
      console.log(response)
      this.dataList =  response
    })
  }

}