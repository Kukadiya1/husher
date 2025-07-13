import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BehaviorSubject } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);


@Injectable({
  providedIn: 'root'
})
export class Const {
  mediaLoadedBehaviorSubject = new BehaviorSubject<boolean>(false);
  mediaLoaded: number = 0;


  frames = {
    currentIndex: 1,
    maxIndex: 104,
  };

  loadedImages: number = 0;

  imagesList: HTMLImageElement[] = [];

  canvas: any;

  constructor() {

  }

  preloadImages() {
    this.canvas = document.getElementById('frame-feature');
    for (let i = 1; i <= this.frames.maxIndex; i++) {
      const image = new Image();
      image.src = `Media/images/canvas/image-${i}.png`;
      image.onload = () => {
        this.loadedImages++;

        if (this.loadedImages === this.frames.maxIndex) {
          console.log('All images loaded');
          this.loadImage(this.frames.currentIndex);
          this.startAnimation();
          this.mediaLoaded++;
          this.emitMediaLoaded();
        }
      }
      this.imagesList.push(image);
    }
  }

  videosList: string[] = [
    'Media/video/video1.mp4',
    'Media/video/video2.mp4',
    'Media/video/video3.mp4',
    'Media/video/video4.mp4'
  ];
  loadedVideo: number = 0;
  preloadVideos() {

    for (let i = 0; i < this.videosList.length; i++) {
      const video = document.createElement('video');
      video.src = this.videosList[i];
      video.preload = 'auto'; // force preload
      video.muted = true; // avoid autoplay issues (Chrome)

      // 📌 This ensures full preload (no buffering issue)
      video.addEventListener('canplaythrough', () => {
        this.loadedVideo++;
        console.log(`Video ${i + 1} loaded`);

        if (this.loadedVideo === this.videosList.length) {
          this.mediaLoaded++;
          this.emitMediaLoaded();
        }
      });
    }
  }

  loadImage(index: number) {
    if (index > 0 && index <= this.frames.maxIndex) {

      const ctx = this.canvas.getContext('2d');

      const image = this.imagesList[index - 1];

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      let scaleX = this.canvas.width / image.width;
      let scaleY = this.canvas.height / image.height;

      let scale = Math.max(scaleX, scaleY);

      const newWidth = image.width * scale;
      const newHeight = image.height * scale;

      const offsetX = (this.canvas.width - newWidth) / 2;
      const offsetY = (this.canvas.height - newHeight) / 2;

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.imageSmoothingQuality = 'high';
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(image, offsetX, offsetY, newWidth, newHeight);

      this.frames.currentIndex = index;
    }
  }

  emitMediaLoaded() {
    if (this.mediaLoaded === 2) {
      this.mediaLoadedBehaviorSubject.next(true);
    }
  }

  startAnimation() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-4',
        start: 'top top',
        end: 'bottom 80%',
        scrub: 1,
      }
    });

    tl.to(this.frames, {
      currentIndex: this.frames.maxIndex,
      snap: 'currentIndex',
      ease: 'none',
      duration: 1,
      onUpdate: () => {
        this.loadImage(Math.floor(this.frames.currentIndex));
      }
    });
  }

}
