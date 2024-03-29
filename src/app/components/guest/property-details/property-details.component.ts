import { Component, OnInit, ViewChild } from '@angular/core';
import { Helper } from '../../../services/helper';
import { UIChart } from 'primeng/chart';
import { PropertyService } from '../../../api/services';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailsViewModelForUser } from '../../../api/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css',
  providers:[CurrencyPipe]
})
export class PropertyDetailsComponent implements OnInit {
  helper=Helper;
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private currency:CurrencyPipe
  ) { }
  @ViewChild("chartElement") chartElement!: UIChart;
  propertyId?: number;
  chart: {
    data: any,
    options: any
  } = {
      data: undefined,
      options: undefined
    }
  estimationData = {
    tokensPurchased: 1,
    rentalYield: 1,
    appreciation: 1,
  }
  displayGalleria = false;
  currentIndex = 0;
  activeIndex = 0;
  // data: any;
  // options: any;
  responsiveOptions: any[] | undefined;
  property?: PropertyDetailsViewModelForUser;
  ngOnInit(): void {


    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.initProperty();
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    let tokensPurchased = this.estimationData.tokensPurchased * this.property!.sharePrice!;
    let rental = (this.estimationData.rentalYield * 0.01) * tokensPurchased;
    let appreciation = (this.estimationData.appreciation * 0.01) * tokensPurchased;
    this.chart.data = {
      labels: Helper.ascendingNumbersArray({ n: 30, step: 1 }),
      datasets: [
        {
          type: 'bar',
          label: 'Cumulative Rental Yield',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          data: this.increasingArray(30, rental, rental)
        },
        {
          type: 'bar',
          label: 'Cumulative Appreciation',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.increasingArray(30, appreciation, appreciation)
        },
        {
          type: 'bar',
          label: 'Your Investment',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          data: Helper.ascendingNumbersArray({ fixedNumber: tokensPurchased })
        }
      ]
    };

    this.chart.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,

        },
        legend: {
          labels: {
            color: textColor,
          },
          position: "bottom"
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
            callback: (value: number) => {
              return this.currency.transform(value, 'EGP', 'symbol-narrow');
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  public increasingArray(n = 30, start = 0, step = 0) {
    let array: number[] = new Array(n)
    for (let i = 0; i < n; i++) {
      array[i] = start += i ? step : 0
    }
    return array;
  }

  initProperty() {
    this.route.params.subscribe({
      next: next => {
        this.propertyId = next['id']
        this
          .propertyService
          .apiPropertyGetByIdGet$Json({ "PropertyId": this.propertyId! })
          .subscribe({
            next: next => {
              this.property = next.data
              this.initChart();
            }
          })
      }
    })
  }
}


