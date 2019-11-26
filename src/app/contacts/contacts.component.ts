import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-contacts',
  	templateUrl: './contacts.component.html',
  	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

	public constructor(private titleService: Title ) {
		this.titleService.setTitle("Starwind contacts");
	}

}
