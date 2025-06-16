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

  itemsList: { name: string, imageUrl: string, isActive: boolean }[] = [
    {
      name: "Main Structural Frame",
      imageUrl: "Media/images/product-item/image1.png",
      isActive: false
    },
    {
      name: "Bottom Neoprene Sound Barier",
      imageUrl: "Media/images/product-item/image2.png",
      isActive: false
    },
    {
      name: "Upper Neoprene Lip",
      imageUrl: "Media/images/product-item/image3.png",
      isActive: false
    },
    {
      name: "Interior Sound Damping Lining",
      imageUrl: "Media/images/product-item/image4.png",
      isActive: false
    },
    {
      name: "Velcro for Microphone",
      imageUrl: "Media/images/product-item/image5.png",
      isActive: false
    },
    {
      name: "Universal Clamp",
      imageUrl: "Media/images/product-item/image6.png",
      isActive: false
    },
    {
      name: "Screw",
      imageUrl: "Media/images/product-item/image7.png",
      isActive: false
    },
    {
      name: "Wing Nuts",
      imageUrl: "Media/images/product-item/image8.png",
      isActive: false
    },
    {
      name: "0.5 in Clamp Spacers",
      imageUrl: "Media/images/product-item/image9.png",
      isActive: false
    }
  ];

  setupItemList = [
    {
      name: "Side Address",
      imageUrl: "Media/images/microphone-setup/image1.jpg",
      isActive: true
    },
    {
      name: "Classic Dynamic",
      imageUrl: "Media/images/microphone-setup/image2.jpg",
      isActive: false
    },
    {
      name: "Side of the snare combo",
      imageUrl: "Media/images/microphone-setup/image3.jpg",
      isActive: false
    },
    {
      name: "Twin Perspective",
      imageUrl: "Media/images/microphone-setup/image4.jpg",
      isActive: false
    },
    {
      name: "Dynamic & Pencil Condenser",
      imageUrl: "Media/images/microphone-setup/image5.jpg",
      isActive: false
    },
    {
      name: "Stereo Source Snare",
      imageUrl: "Media/images/microphone-setup/image6.jpg",
      isActive: false
    }
  ];

  get activeSetupItemImageUrl() {
    return this.setupItemList.find(f => f.isActive)?.imageUrl
  }

  setActive(index: number) {
    this.setupItemList.forEach((f, i) => {
      if (i == index) {
        f.isActive = true;
      } else {
        f.isActive = false;
      }
    })
  }
}
