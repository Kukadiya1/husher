import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'husher';

  itemsList: { name: string, imageUrl: string }[] = [
    {
      name: "Main Structure",
      imageUrl: "Media/images/product-item/image1.png"
    }
  ];
}
