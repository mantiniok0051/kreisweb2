import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
    return blurInOut();
  }

function blurInOut() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({opacity:0, filter:'blur(30px)'}),
      animate('2s ease-in-out', style({transform: 'translateX(0%)', opacity:1, filter:'blur(0px)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%) ', opacity:1, filter:'blur(0px)'}),
      animate('1.5s ease-in-out', style({transform: 'translateX(0%) ', opacity:0.9, filter:'blur(30px)'})),
      animate('2.5s ease-in-out', style({opacity:0, filter:'blur(30px)'}))
    ])
  ]);
}

