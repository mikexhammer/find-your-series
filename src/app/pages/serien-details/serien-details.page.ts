import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serien-details',
  templateUrl: './serien-details.page.html',
  styleUrls: ['./serien-details.page.scss'],
})
export class SerienDetailsPage implements OnInit {
  serie: any;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.serieService.getSerieDetails(id as string).subscribe((res) => {
      console.log(res);
      this.serie = res;
    });
  }

  openHomepage() {
    window.open('www.themoviedb.org/tv/' + this.serie.id);
  }
}
