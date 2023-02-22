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

  getSerieByGenre(genre: string) {
    return this.http.get(
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&with_genres=${genre}`
    );
  }

  getGenreList() {
    return this.http.get(
      `${environment.baseUrl}/genre/tv/list?api_key=${environment.apiKey}`
    );
  }

  getSerieByLanguage(language: string) {
    return this.http.get(
      `${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&with_original_language=${language}`
    );
  }

  getLanguageList() {
    return this.http.get(
      `${environment.baseUrl}/configuration/languages?api_key=${environment.apiKey}`
    );
  }
}
