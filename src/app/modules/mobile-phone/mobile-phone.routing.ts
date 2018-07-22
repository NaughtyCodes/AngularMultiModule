import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component';
import { MessageComponent } from './message/message.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: 'do/call',          component: CallComponent },
  { path: 'do/message',       component: MessageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
