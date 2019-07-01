import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/_services/general.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public title: string;
  public transparentHeader: boolean;
  public myStyle: object = {};
  public myParams: object = {};
  public width = 100;
  public height = 100;
  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService
  ) {
    this.route.data.subscribe(
      (data: { title: string; transparentHeader: boolean }) => {
        this.title = data.title;
        this.transparentHeader = data.transparentHeader;
        this.generalService.forwardTransparentHeaderFlag(
          this.transparentHeader
        );
      }
    );
  }

  ngOnInit() {
    this.myStyle = {
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover'
      }
    };
  }
}
