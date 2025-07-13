import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Const } from './const';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
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

  productInfo = [
    {
      imageUrl: "Media/images/product-info/info1.jpg",
      title: "Studio",
      subTitle: "You can now hear the ghost notes."
    },
    {
      imageUrl: "Media/images/product-info/info2.jpg",
      title: "Use it Anywhere!",
      subTitle: "To better isolate the snare and have a fat sound."
    },
    {
      imageUrl: "Media/images/product-info/info3.jpg",
      title: "Broadcast",
      subTitle: "For more control over the sound of your snare."
    }
  ];
  activeProcudtInfoIndex = 0;

  productSmallInfoImageUrl: string = null;

  get activeSetupItemImageUrl() {
    return this.setupItemList.find(f => f.isActive)?.imageUrl
  }

  constructor(public constService: Const) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.constService.preloadVideos();
      this.constService.preloadImages();
    }, 10);
    this.constService.mediaLoadedBehaviorSubject.subscribe((loaded) => {
      if (loaded) {
        console.log('Media loaded, starting animations');

        const handleClickOnce = (event: MouseEvent) => {
          let videoList = "#video-1, #video-2, #video-3, #video-4";
          document.querySelectorAll(videoList).forEach((video: HTMLVideoElement) => {
            video.play();
          })
          document.removeEventListener('click', handleClickOnce);
        };

        // Register click listener once
        document.addEventListener('click', handleClickOnce);


        let split = SplitText.create(".hero .content", { type: "words, chars" });
        gsap.from(split.words, {
          duration: 1,
          y: '100%',
          ease: "power2.out",
          autoAlpha: 0,
          stagger: 0.05
        });

        ScrollTrigger.create({
          trigger: '.product-info-section .content .relative',
          start: 'top 100%', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create('.product-info-section .content .relative', {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.05,
              opacity: 1
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-3',
          start: 'top 100%', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create([
              '.section-3 .item-1 .title',
              '.section-3 .item-1 .sub-content',
              '.section-3 .item-2 .title',
              '.section-3 .item-2 .sub-content',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: .5,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-4',
          start: 'top 100%', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create([
              '.feature-1 .sub-1',
              '.feature-1 .sub-2',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-4',
          start: 'top 130vh', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create([
              '.feature-2 .sub-1',
              '.feature-2 .sub-2',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-4',
          start: 'top 230vh', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create([
              '.feature-3 .sub-1',
              '.feature-3 .sub-2',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-4',
          start: 'top 330vh', // adjust based on when you want it to trigger
          once: true, // trigger only once
          onEnter: () => {
            const split2 = SplitText.create([
              '.feature-4 .sub-1',
              '.feature-4 .sub-2',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-6',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.section-6 .microphone-text',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: '100%',
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        gsap.from('.product-box-overlay .product-item', {
          scrollTrigger: {
            trigger: '.section-6',
            start: 'top 50%',
          },
          y: 0,
          duration: 1,
          stagger: 0.2, // 👈 0.2s delay between each item
          ease: 'power2.out'
        });

        ScrollTrigger.create({
          trigger: '.section-7',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.section-7 .specification-text',
              '.section-7 .specification',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: 10,
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-8',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.section-8 .main-text',
              '.section-8 .sub-detail .name',
              '.section-8 .sub-detail .role',
              '.section-8 .flex-sub-wrapper .sub-text',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: 40,
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.section-9',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.section-9 .main-text',
              '.section-9 .sub-text',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: 40,
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.05,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.footer',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.footer-wrapper .main-text',
              // '.footer-wrapper .grid-container div',
            ], {
              type: 'words, chars',
            });

            gsap.from(split2.words, {
              y: 10,
              autoAlpha: 0,
              duration: 1,
              opacity: 1,
              stagger: 0.01,
              ease: 'power2.out',
            });
          },
        });

        ScrollTrigger.create({
          trigger: '.footer',
          start: 'top 100%',
          onEnter: () => {
            const split2 = SplitText.create([
              '.footer-wrapper .grid-container div',
            ], {
              type: 'words',
            });

            gsap.from(split2.words, {
              y: 10,
              autoAlpha: 0,
              duration: .5,
              opacity: 1,
              stagger: 0.01,
              ease: 'power2.out',
            });
          },
        });
      }
    })


    // ScrollSmoother.create({
    //   wrapper: '#smooth-wrapper',
    //   content: '#smooth-content',
    //   smooth: 1.5, // how smooth the scroll is
    //   effects: true, // allow data-speed and parallax effects
    // });
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

  productInfoMouseMove(event) {
    const container = document.querySelector('.section-5') as HTMLElement;
    const containerTop = container.getBoundingClientRect().top;

    const imageY = event.clientY - containerTop - 20; // 20px offset so it appears above

    gsap.to('.section-5 .item-image', {
      y: imageY - 220,
      duration: 0.8,
      ease: 'power2.out',
    });
  }

  playBtnMouseMove(event) {
    const container = document.querySelector('.hero') as HTMLElement;
    const containerTop = container.getBoundingClientRect().top;
    const containerLeft = container.getBoundingClientRect().left;

    const imageY = event.clientY - containerTop - 20;
    const imageX = event.clientX - containerLeft - 20;

    gsap.to('.play-btn', {
      width: 50,
      height: 50,
      y: imageY,
      x: imageX,
      opacity: 1,
      duration: .2,
      ease: 'power2.out'
    });
  }

  playBtnMouseLeave() {
    gsap.to('.play-btn', {
      width: 0,
      height: 0,
      duration: .2,
      opacity: 0,
    });
  }
}
