import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';


const routes: Routes = [
   {
        path: '', //default
        component: TabsPage, //localhost/tabs/...
        children: [
            { path: 'tab1', loadChildren: '../pages/tab1/tab1.module#Tab1PageModule' },
            { path: 'tab2', loadChildren: '../pages/tab2/tab2.module#Tab2PageModule' },
            { path: 'tab3', loadChildren: '../pages/tab3/tab3.module#Tab3PageModule' },
        ]
        
    },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }