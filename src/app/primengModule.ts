import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LightboxModule } from 'primeng/lightbox';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import {RadioButtonModule} from 'primeng/radiobutton';
import { PanelMenuModule } from 'primeng/panelmenu'; 
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
    imports: [
        TableModule,
        TabViewModule,
        DropdownModule,
        CheckboxModule,
        CalendarModule,
        DialogModule,
        InputTextModule,
        MultiSelectModule,
        ButtonModule,
        PanelMenuModule,
        ToastModule,
        ToggleButtonModule,
        PaginatorModule,
        SplitButtonModule,
        InputSwitchModule,
        LightboxModule,
        SidebarModule,
        GalleriaModule,
        RadioButtonModule,
        FieldsetModule
    ],
    exports: [
        TableModule,
        TabViewModule,
        DropdownModule,
        CheckboxModule,
        CalendarModule,
        DialogModule,
        InputTextModule,
        MultiSelectModule,
        ButtonModule,
        PanelMenuModule,
        ToastModule,
        ToggleButtonModule,
        PaginatorModule,
        SplitButtonModule,
        InputSwitchModule,
        LightboxModule,
        SidebarModule,
        GalleriaModule,
        RadioButtonModule,
        FieldsetModule
    ]

})
export class PrimengModule {
}