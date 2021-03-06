import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.loading = true;
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
      console.log(topTracks);
      this.loading = false;
    });
  }
}
