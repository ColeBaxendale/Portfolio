import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'resume', component: ProjectsComponent, pathMatch: 'full' }, //CREATE 
    
    { path: 'full-stack/overhead-doors', component: ContactComponent, pathMatch: 'full' }, //CREATE
    { path: 'full-stack/stock-simulator', component: ContactComponent, pathMatch: 'full' }, //CREATE
    { path: 'full-stack/project', component: ContactComponent, pathMatch: 'full' }, //CREATE

    { path: 'machine-learning/chess', component: ContactComponent, pathMatch: 'full' },
    { path: 'machine-learning/project', component: ContactComponent, pathMatch: 'full' },
    { path: 'machine-learning/project2', component: ContactComponent, pathMatch: 'full' },

    { path: 'innovations/software1', component: ContactComponent, pathMatch: 'full' },
    { path: 'innovations/software2', component: ContactComponent, pathMatch: 'full' },
    { path: 'innovations/software3', component: ContactComponent, pathMatch: 'full' },

    { path: 'contact', component: ContactComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
