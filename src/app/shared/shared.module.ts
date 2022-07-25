import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatMenuModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
