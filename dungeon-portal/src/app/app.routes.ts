import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import {roleGuard} from './core/guards/role.guard';

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

      // PROTECTED
      {
        path: 'dashboard',
        canActivate: [
          authGuard,
          roleGuard(['Master','Admin'])
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
                    .then(m => m.CampagneDetailComponent)
              },
              {
                path: 'sessione/1',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-1/sessione-1.component')
                    .then(m => m.Sessione1Component)
              },
              {
                path: 'sessione/2',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-2/sessione-2.component')
                    .then(m => m.Sessione2Component)
              },
              {
                path: 'sessione/3',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-3/sessione-3.component')
                    .then(m => m.Sessione3Component)
              },
              {
                path: 'sessione/4',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-4/sessione-4.component')
                    .then(m => m.Sessione4Component)
              },
              {
                path: 'sessione/5',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-5/sessione-5.component')
                    .then(m => m.Sessione5Component)
              },
              {
                path: 'sessione/6',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-6/sessione-6.component')
                    .then(m => m.Sessione6Component)
              },
              {
                path: 'sessione/7',
                loadComponent: () =>
                  import('./features/public/campagne/discesa-averno/sessione-7/sessione-7.component')
                    .then(m => m.Sessione7Component)
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
          roleGuard(['ADMIN'])
        ],
        loadComponent: () =>
          import('./features/admin/users/users.component')
            .then(m => m.UsersComponent),
      },

    ]
  },

  { path: '**', redirectTo: '' }

];
