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
    this.createPieChart();
    this.createLineChart()
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
            backgroundColor: 'rgb(255,240,100)'
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
              font: {
                size: 16
              }
            }
          },
          y: {
            ticks: {
              font: {
                size: 16
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

  private createPieChart(): void {
    const elem = document.getElementById("pie-chart") as HTMLCanvasElement;

    new Chart(elem, {
      type: 'pie',
      data: {
        labels: ["Online Advertising", "Conventions", "Print Advertising", "Sales Training"],
        datasets: [
          {
            data: [32, 65, 42, 23],
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            hoverOffset: 4
          }
        ]
      }
    });
  }

  private createLineChart(): void {
    const elem = document.getElementById("line-chart") as HTMLCanvasElement;

    new Chart(elem, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Accepted',
            data: [3000, 2800, 2850, 3256, 2230, 2783],
            borderColor: 'rgba(0,0,0,0.5)',
            backgroundColor: 'lime',
            pointHitRadius: 6
          },
          {
            label: 'Rejected',
            data: [127, 200, 283, 669, 137, 392],
            borderColor: 'rgba(0,0,0,0.5)',
            backgroundColor: 'red',
            pointHitRadius: 6
          }
        ]
      }
    });
  }
}
