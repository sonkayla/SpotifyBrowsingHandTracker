import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() name:string; 
  @Input() color:string;
  @Input() percentageString:string; 

  constructor() { }

  ngOnInit() {
  }

}
