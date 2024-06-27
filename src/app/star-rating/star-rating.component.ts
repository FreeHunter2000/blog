import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = Array(5).fill(false);

  ngOnInit() {
    this.updateStars();
  }

  updateStars() {
    this.stars = this.stars.map((_, index) => index < this.rating);
  }

  rate(rating: number) {
    if (!this.readonly) {
      this.rating = rating;
      this.updateStars();
      this.ratingChange.emit(this.rating);
    }
  }
}
