import { Component, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-maltratofisico',
  templateUrl: './maltratofisico.page.html',
  styleUrls: ['./maltratofisico.page.scss'],
})
export class MaltratofisicoPage implements OnInit {

  @ViewChild('accion',{read:ElementRef, static:false}) Baccion: ElementRef;

  constructor(private renderer:Renderer2, private element:ElementRef) { }

  ngOnInit() {
  }

  onClickAccion() {

     this.renderer.setStyle(this.Baccion.nativeElement, 'display','block');
    
   }
 

}
