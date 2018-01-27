import { RouterModule, Routes } from '@angular/router';
import { PgBookmarksComponent } from './pg-bookmarks/pg-bookmarks.component';
import { PgPaginationComponent } from './pg-pagination/pg-pagination.component';
import { PgQuestionComponent } from './pg-question/pg-question.component';
import { CheckDeactivateGuard } from '../guards/can-deativate.guard';

const APP_ROUTES: Routes = [
    {
        path:'bookmark',
        component: PgBookmarksComponent,
        canDeactivate: [CheckDeactivateGuard]
    },
    {
        path:'pagination',
        component: PgPaginationComponent     
    },
    {
        path:'question',
        component: PgQuestionComponent        
    }
];

export  const routes = RouterModule.forRoot(
    APP_ROUTES, 
    {
        useHash: false,
        //enableTracing: true
    }
);
