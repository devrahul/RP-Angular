import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule,JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { ShortTitleService} from './services/short-title.service';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostService } from './services/posts/post.service';
import { ArticlesComponent } from './articles/articles.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { PhotosService } from './services/photos/photos.service';
import { UserService } from './services/users/user.service';
import { UserlistComponent } from './userlist/userlist.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { FAQComponent } from './faq/faq.component';
import { PhotostockComponent } from './photostock/photostock.component';
import { PhotostockServicesService } from './services/photostock-services.service';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { RandomUserService } from './services/random-user.service';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { CountryDataService } from './services/country-data.service';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SafePipe } from './utility/safe.pipe';
import { LimitPipe } from './utility/limit.pipe';

const appRoute : Routes  = [{ 
  path: '', redirectTo:'home', pathMatch: 'full',},
  { path: 'login',  component: SigninComponent,},
  { path: 'home',  component: HomeComponent,},
  { path: 'register',  component: SignupComponent,},
  { path: 'properties',  component: CribListingComponent,},
  { path : 'property/:id' , component : PropertydetailsComponent,},
  { path: 'addprop',  component: AddListingFormComponent,},
  { path: 'posts', component:ArticlesComponent,},
  { path : 'users', component: UserlistComponent,},
  { path : 'photostock', component : PhotostockComponent,},
  { path : 'search', component : SearchComponent,},
  { path : 'addnewuser', component : AddnewuserComponent,},
  { path: '**', component:PagenotfoundComponent,},
  ];

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PagenotfoundComponent,
    ArticlesComponent,
    PostComponent,
    SearchComponent,
    UserlistComponent,
    PropertydetailsComponent,
    FAQComponent,
    PhotostockComponent,
    PhotoCategoryComponent,
    RandomUserComponent,
    AddnewuserComponent,
    VideolistComponent,
    VideoDetailsComponent,
    SafePipe,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,JsonpModule,
    RouterModule.forRoot(appRoute, {useHash:true, enableTracing:false}),
  ],
  providers: [
    CribsService,
    UtilService,
    PostService,
    ShortTitleService,
    PhotosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
