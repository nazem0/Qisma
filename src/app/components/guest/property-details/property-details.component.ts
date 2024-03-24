import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  displayGalleria=false;
  currentIndex = 0;
  activeIndex = 0;
  // data: any;
  // options: any;
  responsiveOptions: any[] | undefined;
  images=[
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
      numberOfShares: 100,
      pricePerShare: 10,
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
    // this.initChart();
    
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
  }
  // initChart() {
  //   const documentStyle = getComputedStyle(document.documentElement);
  //   const textColor = documentStyle.getPropertyValue('--text-color');
  //   const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  //   const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  //   this.data = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'Price Per Token',
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: documentStyle.getPropertyValue('--primary-600'),
  //         tension: 0
  //       }
  //     ]
  //   };

  //   this.options = {
  //     maintainAspectRatio: false,
  //     aspectRatio: 1,
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: textColor
  //         }
  //       }
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           color: textColorSecondary
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false
  //         }
  //       },
  //       y: {
  //         ticks: {
  //           color: textColorSecondary
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false
  //         }
  //       }
  //     }
  //   };
  // }
}

