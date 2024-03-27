import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GovernorateAndCityViewModel, PropertyDetailsViewModelForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';

@Component({
  selector: 'app-property-actions',
  templateUrl: './property-actions.component.html',
  styleUrl: './property-actions.component.css'
})
export class PropertyActionsComponent implements OnInit {
  @Input() data!: PropertyDetailsViewModelForUser; // Input data object containing all properties\
  propertyTypes = BusinessHelper.propertyTypes
  text:string=`
  <h1>Title 1</h1>
  <ol>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
  </ol>
  <p><br></p>
  <h1>Title 2</h1>
  <ol>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
  </ol>
  `
  propertyForm!: FormGroup;
  governorates: GovernorateAndCityViewModel[] = [];
  cities: GovernorateAndCityViewModel[] = [];
  selectedGov?: GovernorateAndCityViewModel;
  selectedCity?: GovernorateAndCityViewModel;
  constructor(
    private formBuilder:FormBuilder,
    private propertyForAdminService:PropertyForAdminService,
    private governorateAndCityService:GovernorateAndCityService
  ){}
  ngOnInit(): void {
    this.initGovs()
    this.initPropertyForm();
    // this.propertyForAdminService.apiDashboardPropertyAddPost$Json({body:{}})
  }
  initPropertyForm(){
    this.propertyForm = this.formBuilder.group({
      adminFees: [null, [Validators.min(0)]],
    annualPriceAppreciation: [null, [Validators.required, Validators.min(0)]],
    annualRentalYield: [null, [Validators.required, Validators.min(0)]],
    cityId: [null, [Validators.required, Validators.min(1)]],
    deliveryInstallment: [null, [Validators.min(0)]],
    // descriptionDetails: this.fb.array([]), // Assuming DescriptionDetailsViewModel is an array
    downPayment: [null, [Validators.min(0)]],
    // facilities: this.fb.array([]), // Assuming AddPropertyFacilityViewModel is an array
    governorateId: [null, [Validators.required, Validators.min(1)]],
    location: ['', Validators.required],
    maintenaceInstallment: [null, [Validators.min(0)]],
    maintenanceCost: [null, [Validators.min(0)]],
    monthlyInstallment: [null, [Validators.min(0)]],
    numberOfShares: [null, [Validators.required, Validators.min(1)]],
    numberOfYears: [null, [Validators.min(1)]],
    sharePrice: [null, [Validators.required, Validators.min(0)]],
    totalPrice: [null, [Validators.required, Validators.min(0)]],
    type: [null, Validators.required]
    });
  }
  check(){
    console.log(this.text);
    
  }

  initGovs() {
    this
    .governorateAndCityService
      .apiGovernorateGetAllGet$Json()
      .subscribe({
        next: next => {
          this.governorates = next.data ?? []
        }
      })
  }
  initCity() {
    this
      .governorateAndCityService
      .apiCitiesGetByGovernorateIdGet$Json({ "GovernorateId": this.selectedGov?.id })
      .subscribe({
        next: next => {
          this.cities = next.data ?? []
        }
      })

  }
}
