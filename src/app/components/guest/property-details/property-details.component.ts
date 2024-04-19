import { BusinessHelper } from './../../../services/business-helper';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Helper } from '../../../services/helper';
import { ChartModule, UIChart } from 'primeng/chart';
import { PropertyForAdminService, PropertyService } from '../../../api/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PropertyDetailsViewModelForUser } from '../../../api/models';
import { CurrencyPipe } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { MatDividerModule } from '@angular/material/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { AuthHelper } from '../../../services/auth-helper';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { PaymentPlanComponent } from '../../shared/payment-plan/payment-plan.component';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css',
  standalone: true,
  imports: [
    CarouselModule,
    GalleriaModule,
    ButtonModule,
    RouterModule,
    TabViewModule,
    MatDividerModule,
    SliderModule,
    FormsModule,
    ChartModule,
    TooltipModule,
    ConfirmComponent,
    PaymentPlanComponent,
    
  ],
  providers: [CurrencyPipe],
  encapsulation:ViewEncapsulation.None
})
export class PropertyDetailsComponent implements OnInit {
  propertyStatuses = BusinessHelper.propertyStatuses;
  helper = Helper;
  businessHelperStatic = BusinessHelper;
  isInAdminPanel = false;
  @ViewChild("chartElement") chartElement!: UIChart;
  propertyId?: string;
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
  displayModal: boolean = false;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private currency: CurrencyPipe,
    public authHelper:AuthHelper,
    public businessHelper:BusinessHelper,
    public router:Router,
    private _propertyForAdminService : PropertyForAdminService
  ) {
    this.isInAdminPanel = authHelper.isInAdminPanel(route)
  }
  
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
      labels: Helper.ascendingNumbersArray({ n: 20, step: 1 }),
      datasets: [
        {
          type: 'bar',
          label: 'Cumulative Rental Yield',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          data: this.increasingArray(20, rental, rental)
        },
        {
          type: 'bar',
          label: 'Cumulative Appreciation',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.increasingArray(20, appreciation, appreciation)
        },
        {
          type: 'bar',
          label: 'Your Investment',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          data: Helper.ascendingNumbersArray({ n: 20, fixedNumber: tokensPurchased })
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

  goToPropertiesPage(){
    this.router.navigate(['../..'], {relativeTo:this.route})
  }

  togglePropertyActivation(propertyId: string) {
    this
      ._propertyForAdminService
      .apiDashboardPropertyEnableAndDisablePut$Json({
        PropertyId: propertyId
      }).subscribe({
        next:()=>{
          this.initProperty()
        }
      })
  }

  showOrderModal() {
    this.displayModal = true;
  }
}


