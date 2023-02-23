import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NumericValueAccessor } from '@ionic/angular';

//Json2ts.com
//ergebnis reinhacken was aus console.log(res) kommt

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private http: HttpClient) {}

  getTopRatedSeries(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/tv/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getSerieDetails(id: string) {
    return this.http.get(
      `${environment.baseUrl}/tv/${id}?api_key=${environment.apiKey}`
    );
  }

  getSerieByName(name: string) {
    return this.http.get(
      `${environment.baseUrl}/search/tv?api_key=${environment.apiKey}&query=${name}`
    );
  }

  getTopRatedSeriesByGenre(page = 1, genre: string): Observable<ApiResult> {
    return this.http.get<ApiResult>( //Observable<ApiResult> = return type of this function
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}&with_genres=${genre}`
    );
  }

  getGenreList() {
    return this.http.get(
      `${environment.baseUrl}/genre/tv/list?api_key=${environment.apiKey}`
    );
  }

  getTopRatedSeriesByYear(page = 1, year: string): Observable<ApiResult> {
    return this.http.get<ApiResult>( //Observable<ApiResult> = return type of this function
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}&first_air_date_year=${year}`
    );
  }

  saveSerieToLocalStorage(serie: any) {
    let series = this.getSeriesFromLocalStorage();
    series.push(serie);
    localStorage.setItem('series', JSON.stringify(series));
  }

  getSeriesFromLocalStorage() {
    let series = localStorage.getItem('series');
    if (series) {
      return JSON.parse(series);
    } else {
      return [];
    }
  }
}
