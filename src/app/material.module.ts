import { NgModule } from '@angular/core';
import {
    MatInputModule
} from '@angular/material/input';
import {
    MatCardModule
} from '@angular/material/card';
import {
    MatButtonModule
} from '@angular/material/button';
import {
    MatFormFieldModule
} from '@angular/material/form-field';
import {
    MatToolbarModule
} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'



@NgModule({
    exports: [
        // Material Modules
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatExpansionModule
    ]
})
export class AppMaterialModules { }
