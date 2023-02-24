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

  getSerieByName(name: string, page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/search/tv?api_key=${environment.apiKey}&page=${page}&query=${name}`
    );
  }

  getTopRatedSeriesByGenre(genre: string, page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>( //Observable<ApiResult> = return type of this function
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}&with_genres=${genre}`
    );
  }

  getGenreList() {
    return this.http.get(
      `${environment.baseUrl}/genre/tv/list?api_key=${environment.apiKey}`
    );
  }

  getTopRatedSeriesByYear(year: string, page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>( //Observable<ApiResult> = return type of this function
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}&first_air_date_year=${year}`
    );
  }

  saveSerieToLocalStorage(serie: any) {
    //if item is already in local storage, do not add it again
    let series = this.getSeriesFromLocalStorage();
    if (series.find((s: { id: any }) => s.id === serie.id)) {
      console.log('Serie bereits in Local Storage');
      return;
    }
    series.push(serie);
    localStorage.setItem('series', JSON.stringify(series));
  }

  getSeriesFromLocalStorage() {
    //get newest item first
    let series = localStorage.getItem('series');
    if (series) {
      return JSON.parse(series);
    } else {
      return [];
    }
  }

  deleteSerieFromLocalStorage(serie: any) {
    let series = this.getSeriesFromLocalStorage();
    let index = series.findIndex((s: { id: any }) => s.id === serie.id);
    series.splice(index, 1);
    localStorage.setItem('series', JSON.stringify(series));
  }

  serieAlreadyInLocalStorage(serie?: any) {
    console.log('Serie bereits in Local Storage?');
    console.log(serie.id);
    let series = this.getSeriesFromLocalStorage();
    if (series.find((s: { id: any }) => s.id === serie.id)) {
      console.log('JA!');
      return true;
    } else {
      console.log('Nein!');
      return false;
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
