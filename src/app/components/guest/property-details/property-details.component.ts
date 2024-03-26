import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Helper } from '../../../services/helper';
import { UIChart } from 'primeng/chart';
import { PropertyService } from '../../../api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
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
  images = [
    "https://picsum.photos/900/700",
    "https://picsum.photos/901/700",
    "https://picsum.photos/900/701",
    "https://picsum.photos/902/700",
    "https://picsum.photos/900/702",
  ]
  financialDetails = {
    financials: {
      unitPrice: 1000,
      maintenanceCost: {
        amount: 200,
        percentage: 5,
      },
      adminFees: 50,
      numberOfShares: 30,
      pricePerShare: 50,
    },
    paymentPlan: {
      downpayment: 5000,
      monthlyInstallment: 200,
      numberOfYears: 5,
      maintenanceInstallment: 100,
      deliveryInstallment: 1000,
    },
    projectedAnnualReturn: 0.08, // 8%
  };
  property = {

    "assetName": "Beautiful House on Maple Street",
    "address": "123 Maple Street, Cityville, USA",
    "description": "This charming house is located in a quiet neighborhood close to parks and schools.",
    "property_type": "Single Family Home",
    "beds": 3,
    "baths": 2,
    "year_built": 2005,
    "sqft": 1800,
    "sale_price": 350000,
    "monthly_rent": 2500,
    "projected_annual_cash_flow": 20000,
    "projected_rental_yield": 7.14,
    "projected_annual_return": 5.71,
    "images": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    "documents": [
      {
        "title": "Property Brochure",
        "targetUrl": "https://example.com/property_brochure.pdf"
      },
      {
        "title": "Floor Plan",
        "targetUrl": "https://example.com/floor_plan.pdf"
      },
      {
        "title": "Home Inspection Report",
        "targetUrl": "https://example.com/inspection_report.pdf"
      }
    ]
  }
  ngOnInit(): void {

    // this.propertyService.apiPropertyGetByIdGet$Json({ "PropertyId": this.propertyId! })
    // .subscribe({
    //   next:next=>{
    //   }
    // })
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

    this.initChart();
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    let rental = (this.estimationData.rentalYield * 0.01) * this.financialDetails.financials.pricePerShare;
    let appreciation = (this.estimationData.appreciation * 0.01) * this.financialDetails.financials.pricePerShare;
    let tokensPurchased = this.estimationData.tokensPurchased * this.financialDetails.financials.pricePerShare;
    this.chart.data = {
      labels: Helper.ascendingNumbersArray({ n: 30, step: 1 }),
      datasets: [
        {
          type: 'bar',
          label: 'Rental Yield',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          data: this.increasingArray(30, rental, rental)
        },
        {
          type: 'bar',
          label: 'Appreciation',
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
            callback: function (value: number) {
              return '$' + value;
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

  initParams() {
    this.route.params.subscribe({
      next: next => {
        this.propertyId = next['id']
      }
    })
  }
}


