import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-games',
  	templateUrl: './games.component.html',
  	styleUrls: ['./games.component.css']
})
export class GamesComponent {
	
	public constructor(private titleService: Title ) {
		this.titleService.setTitle("Starwind Games");
	}

}
