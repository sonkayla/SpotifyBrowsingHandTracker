import { Component, OnInit } from '@angular/core';
import {SpotifyService} from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;
  gesture:String="";

  //TODO: inject the Spotify service
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  aboutMe() {
    this.spotifyService.aboutMe().then((data)=>{
      this.name = data.name; 
      this.profile_pic = data.imageURL;
      this.profile_link = data.spotifyProfile;
    });
  }

  prediction(event: PredictionEvent) { 
    this.gesture = event.getPrediction();
    if (this.gesture == "1 Closed Hand") { 
      let button = document.getElementsByClassName("btn btn-light")[0] as HTMLElement | null; 
      button.click();
    }
  }

  loadAboutMe() {
    document.getElementById("loadAboutMe").click(); 
  }

  openSpotify() {
    document.getElementById("openSpotify").click();
  }

  goToLink(){
    window.open(this.profile_link, "_blank");
  }

}
