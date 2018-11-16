import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import{Routes , RouterModule} from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path:'courses', component :CoursesComponent},
  {path:'events', component : EventsComponent},
  {path:'contactus', component : ContactusComponent},
  {path:'blogs', component : BlogsComponent}

]
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
  })
  export class AppRoutingModule {}
  export const routingComponents =[HomeComponent,CoursesComponent,EventsComponent,BlogsComponent,ContactusComponent]