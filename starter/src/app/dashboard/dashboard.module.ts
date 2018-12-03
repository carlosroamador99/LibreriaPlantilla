import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogNewResourceComponent } from './dialog-new-resource/dialog-new-resource.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DialogeditdeleteuserComponent } from './dialogeditdeleteuser/dialogeditdeleteuser.component';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ListMagazineComponent } from './list-magazine/list-magazine.component';
import { ProfileComponent } from './profile/profile.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { ListCategoryComponent } from './list-category/list-category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
    
  ],
  declarations: [DashboardComponent, ListResourceComponent, DialogComponent, DialogNewResourceComponent, ListUserComponent,  DialogeditdeleteuserComponent, DialogCreateUserComponent, ListFilmComponent, ListBookComponent, ListMagazineComponent, ProfileComponent, ListCategoryComponent],
  entryComponents:[DialogComponent, DialogNewResourceComponent, DialogeditdeleteuserComponent, DialogCreateUserComponent]
})

export class DashboardModule {}
