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


  @Input() item = ''
  //@Input() Flightin = 0

  private getspaceinfo = "https://api.spacexdata.com/v3/launches?mission_name=FalconSat";

  //private getspaceinfo = "https://api.spacexdata.com/v3/launches?mission_name=";
  missionDetails: any[] = []
  constructor(private activeRoute: ActivatedRoute, private getEndPoint: HttpClient) { }
  //testString: string = "Hello"

  ngOnInit(): void {

    console.log("OVER HERE!:"+ this.item)
     console.log("Item was bound" + this.item)
    //console.log("Flightin is "+this.Flightin)
    //let flight_number = this.activeRoute.snapshot.paramMap.get('mission_name')
    let flight_number = this.item
    //console.log(flight_number)
    //console.log(this.getspaceinfo+flight_number)
    //Make HTTP Call to fetch the flight with given ID ${flight_number}
    //coundn't make it work
    
    // this.getEndPoint.get(`${this.getspaceinfo}${flight_number}`).subscribe((response: any) => {
    //   console.log(response)
    //   this.missionDetails = response
    // })

    this.getEndPoint.get(`${this.getspaceinfo}`).subscribe((response: any) => {
      console.log(response)
      this.missionDetails = response
    })
  }

}
