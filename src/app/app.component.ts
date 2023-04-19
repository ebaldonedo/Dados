import { Component } from '@angular/core';
import { interval,take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variables
  title = 'Dados';
  dadoIzquierda="../assets/img/dice2.png"
  dadoDerecha="../assets/img/dice4.png"
  dadoN="../assets/img/dice4.png"
  number1:number=0;
  number2:number=1;
  lanzamientos=0;
  victorias=0;
  porcentajeVic=1
  button=false

   delay() {
    var timer = interval(250)
    const takeFourNumbers = timer.pipe(take(12));
    takeFourNumbers.subscribe(()=>{
      //console.log(n*0.25)
      
      this.dadoIzquierda="../assets/img/dice"+(Math.round(Math.random()*5)+1)+".png"
      this.dadoDerecha="../assets/img/dice"+(Math.round(Math.random()*5)+1)+".png"
      
    })
    
    
    
    
  }
  

  TirarDados(){
    this.button=true
    this.lanzamientos++
    
    this.delay()
     
    //console.log(Math.round(Math.random()*5)+1);

    
    

    setTimeout(() => {
      this.button=false
     
    }, 3500);

    setTimeout(() => {
      this.number1=Math.round(Math.random()*5)+1;
    this.number2=Math.round(Math.random()*5)+1;
    this.dadoIzquierda="../assets/img/dice"+this.number1+".png"
    this.dadoDerecha="../assets/img/dice"+this.number2+".png"
      if (this.number1==this.number2) {
        this.victorias++;
      }
      this.porcentajeVic=(this.victorias/this.lanzamientos)*100;
      
    },3000);
    
  }
  ngOnInit(){
    
    
  }
  }
