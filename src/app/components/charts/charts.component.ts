import { Component, OnInit } from '@angular/core';
import { withRouterConfig } from '@angular/router';
import { Chart, ChartOptions, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
  }

  private createBarChart(): void {
    const elem = document.getElementById("bar-chart") as HTMLCanvasElement;

    new Chart(elem, {
      type: 'bar',
      data: {
        labels: ['January', 'Feburary', 'March', 'April'],
        datasets: [
          {
            data: [200, 145, 543, 409],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            max: 4,
            ticks: {
              color: 'white',
              font: {
                size: 20
              }
            }
          },
          y: {
            ticks: {
              color: 'white',
              font: {
                size: 20
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      } as ChartOptions
    });
  }

  private createPiChart() : void {
    
  }

}
