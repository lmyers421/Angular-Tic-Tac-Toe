import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, BoardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tictactoe';
}
