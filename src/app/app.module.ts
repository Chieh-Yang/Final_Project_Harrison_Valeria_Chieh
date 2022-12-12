import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components

// Shopping Cart
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// Store-page 
import { StorePageComponent } from './store-page/store-page.component';
// Product
import { ProductComponent } from './product/product.component';
// Login
import { LoginComponent } from './components/login/login.component';

// Toolbar
// Menu
import { MatMenuModule } from '@angular/material/menu';
// Badge
import { MatBadgeModule } from '@angular/material/badge';
// BrowserAnimations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MatTool
import { MatToolbarModule } from '@angular/material/toolbar';
// Icon
import { MatIconModule } from '@angular/material/icon';
// Button
import { MatButtonModule } from '@angular/material/button';
// FormField
import { MatFormFieldModule } from '@angular/material/form-field';
// Input
import { MatInputModule } from '@angular/material/input';
// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// Router 
import { RouterModule } from '@angular/router';



// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StorePageComponent,
    ProductComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    RouterModule.forRoot([
      { path: 'product', component: StorePageComponent },
      { path: 'cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},
      { path: 'singUp', component: SignUpComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
