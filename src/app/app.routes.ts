import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { NosotrosPage } from './features/nosotros-page/nosotros-page';
import { ConsultasPage } from './features/consultas-page/consultas-page';
import { MascotasPage } from './features/mascotas-page/mascotas-page';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { authChildGuard } from './guards/auth-child-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    {path:'',component: HomePage},
    {path:'nosotros', component:NosotrosPage},
    {path:'consultas', component:ConsultasPage},
    {path:'mascotas', component: MascotasPage},
    {path:'usuarios', component:Usuarios, 
        canMatch: [adminGuard],
        canActivate:[authGuard], 
        canActivateChild:[authChildGuard],children:[]  },
    {path: 'login', component: Login}

];