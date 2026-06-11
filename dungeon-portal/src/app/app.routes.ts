import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import {roleGuard} from './core/guards/role.guard';
import { ROLES } from './core/models/role.model';

export const routes: Routes = [

  // ==========================
  // AUTH (FUORI DAL LAYOUT)
  // ==========================

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component')
        .then(m => m.RegisterComponent),
  },

  // ==========================
  // LAYOUT CON NAVBAR
  // ==========================

  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component')
        .then(m => m.ShellComponent),

    children: [

      // PUBLIC
      {
        path: '',
        loadComponent: () =>
          import('./features/public/home/home.component')
            .then(m => m.HomeComponent),
      },
      {
        path: 'masters',
        loadComponent: () =>
          import('./features/public/masters/masters.component')
            .then(m => m.MastersComponent),
      },
      {
        path: 'styleguide',
        loadComponent: () =>
          import('./features/public/styleguide/styleguide.component')
            .then(m => m.StyleguideComponent),
      },

      // PROTECTED
      {
        path: 'dashboard',
        canActivate: [
          authGuard,
          roleGuard([ROLES.Master, ROLES.Admin])
        ],
        loadComponent: () =>
          import('./features/master/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
      },
      {
        path: 'dashboard/campagne',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/master/campagne-manager/campagne-manager.component')
            .then(m => m.CampagneManagerComponent),
      },
      {
        path: 'dashboard/cronache',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/master/cronache-editor/cronache-editor.component')
            .then(m => m.CronacheEditorComponent),
      },
      {
        path: 'campagne',
        canActivate: [authGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/public/campagne/campagne.component')
                .then(m => m.CampagneComponent)
          },
          {
            path: ':slug',
            children: [
              {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                  import('./features/public/campagne/campagne-detail/campagne-detail.component')
                    .then(m => m.CampaignDetailComponent)
              },
              {
                path: 'sessione/:sessionId',
                loadComponent: () =>
                    import('./features/public/campagne/dynamic-session/dynamic-session.component')
                        .then(m => m.DynamicSessionComponent)
              },
              {
                path: 'personaggi',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/personaggi/personaggi-page/personaggi-page.component')
                    .then(m => m.PersonaggiPageComponent)
              },
              {
                path: 'luoghi',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/luoghi/luoghi-page/luoghi-page.component')
                    .then(m => m.LuoghiPageComponent)
              },
              {
                path: 'eventi',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/eventi/eventi-page/eventi-page.component')
                    .then(m => m.EventiPageComponent)
              },
              {
                path: 'grafo',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/grafo/grafo.component')
                    .then(m => m.GrafoComponent)
              },
              {
                path: 'galleria',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/galleria/galleria-page/galleria-page.component')
                    .then(m => m.GalleriaPageComponent)
              }
            ]
          }
        ]
      },
      {
        path: 'land',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/public/land/land.component')
            .then(m => m.LandComponent),
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/user/profile/profile.component')
            .then(m => m.ProfileComponent),
      },
      {
        path: 'admin/users',
        canActivate: [
          authGuard,
          roleGuard([ROLES.Admin])
        ],
        loadComponent: () =>
          import('./features/admin/users/users.component')
            .then(m => m.UsersComponent),
      },

    ]
  },

  { path: '**', redirectTo: '' }

];
