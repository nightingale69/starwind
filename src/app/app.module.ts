import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { GamesComponent } from './games/games.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ 
		path: '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},
	{ 
		path: 'home', 
		component: HomeComponent 
	},
	{ 
		path: 'not_found', 
		component: NotFoundComponent 
	},
	{ 
		path: 'content',
		component: ContentContainerComponent,
		children: 
		[ 
			{
				path: 'applications',
            	component: ApplicationsComponent
			},
			{ 
				path: 'games',
				component: GamesComponent
			},
			{ 
				path: 'contacts',
				component: ContactsComponent
			}
		] 
	},
	{ 
		path: '**', 
		redirectTo: '/not_found', 
		pathMatch: 'full'
	}
];

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	ApplicationsComponent,
  	  	GamesComponent,
  	  	ContactsComponent,
  	  	ContentContainerComponent,
  	  	NotFoundComponent,
  	  	HomeComponent
  	],
  	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
