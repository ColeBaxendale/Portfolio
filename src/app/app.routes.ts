import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'work', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'ideas', component: ProjectsComponent, pathMatch: 'full' }, //CREATE 
    { path: 'cv', component: ProjectsComponent, pathMatch: 'full' }, //CREATE 
    
    { path: 'full-stack/overhead-doors', component: ContactComponent, pathMatch: 'full' }, //CREATE
    { path: 'full-stack/stock-simulator', component: ContactComponent, pathMatch: 'full' }, //CREATE

    { path: 'machine-learning/chess', component: ContactComponent, pathMatch: 'full' },
    { path: 'machine-learning/project', component: ContactComponent, pathMatch: 'full' },

    { path: 'innovations/software1', component: ContactComponent, pathMatch: 'full' },
    { path: 'innovations/software2', component: ContactComponent, pathMatch: 'full' },

    { path: 'contact/allinfo', component: ContactComponent, pathMatch: 'full' },
    { path: 'contact/email', component: ContactComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
