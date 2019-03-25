import { Profile } from './../model/search.model';
import { map, tap, switchMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  BASE_API: string = environment.config.BASE_API;

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(state): Observable<any> {
    const url = `${this.BASE_API}/users`;

    let params = new HttpParams();

    params = params.append('q', state.user);
    params = params.append('page', state.page);
    params = params.append('ref', 'simplesearch');
    params = params.append('type', 'Users');
    params = params.append('client_id', environment.config.clientId);
    params = params.append('client_secret', environment.config.clientSecret);
    params = params.append('per_page', environment.config.resultsPerPage); 
     
    return this.http.get(url, {params});
  }

  private getStarsCount(url) {
    return this.http.get(url).pipe(
      tap(items => {
      }),
      map(items => items['length'])
    );
  }

  loadProfileDetails(profile): any {

    const urlToFetchProfileDetails = `${profile.url}`;

    return this.http.get(urlToFetchProfileDetails)
    .pipe(
      switchMap((profile:any) => {
        return this.http.get(`${profile.url}/starred`)
        .pipe(
          map((starred) => {
            const bio = {
              name: profile.name,
              email: profile.email || null,
              company: profile.company || null,
              blog: profile.blog || null,
              location: profile.location || null,
              about: profile.bio || null
            }
            return new Profile(
              bio,
              profile.login,
              profile.avatar_url,
              profile.html_url,
              profile.updated_at,
              profile.followers,
              starred['length']
            )
          })
        )
      }),
     
    )

  }
}
