import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-applications',
  	templateUrl: './applications.component.html',
  	styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

	public constructor(private titleService: Title ) {
		this.titleService.setTitle("Starwind apps");
	}

}
