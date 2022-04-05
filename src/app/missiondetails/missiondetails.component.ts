import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MissionlistComponent } from '../missionlist/missionlist.component';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {


  @Input() 

  private getspaceinfo = "https://api.spacexdata.com/v3/launches?flight_number=";
  missionDetails: any
  constructor(private activeRoute: ActivatedRoute, private getEndPoint: HttpClient) { }
  //testString: string = "Hello"

  ngOnInit(): void {
    console.log(this.getspaceinfo)
    let flight_id = this.activeRoute.snapshot.paramMap.get('flight_number')
    console.log(flight_id)
    //Make HTTP Call to fetch the flight with given ID

    this.getEndPoint.get(`${this.getspaceinfo}${flight_id}`).subscribe((response: any) => {
      console.log(response)
      this.missionDetails = response
    })
  }

}
