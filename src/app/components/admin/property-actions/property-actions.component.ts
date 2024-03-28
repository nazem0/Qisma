import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FacilityViewModelForAdmin, GovernorateAndCityViewModel, PropertyDetailsViewModelForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { Helper } from '../../../services/helper';

@Component({
  selector: 'app-property-actions',
  templateUrl: './property-actions.component.html',
  styleUrl: './property-actions.component.css'
})
export class PropertyActionsComponent implements OnInit {
  helper = Helper;
  propertyForm!: FormGroup;
  propertyTypes = BusinessHelper.propertyTypes
  text: string = `
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
  `;

  facilities: FacilityViewModelForAdmin[] = [];
  selectedFacility?: FacilityViewModelForAdmin;
  selectedFacilityValue?: string;
  addedFacilities: {
    id: number,
    value: string
  }[] = []
  governorates: GovernorateAndCityViewModel[] = [];
  cities: GovernorateAndCityViewModel[] = [];
  selectedGov?: GovernorateAndCityViewModel;
  selectedCity?: GovernorateAndCityViewModel;
  constructor(
    private fb: FormBuilder,
    private propertyForAdminService: PropertyForAdminService,
    private governorateAndCityService: GovernorateAndCityService
  ) {
    this.initPropertyForm();
  }
  ngOnInit(): void {
    this.initGovs()
    this.initFacilities();
    // this.propertyForAdminService.apiDashboardPropertyAddPost$Json({body:{}})
  }
  initPropertyForm() {
    this.propertyForm = this.fb.group({
      location: '',
      governorateId: 0,
      cityId: 0,
      unitPrice: 0,
      description: '',
      maintenanceCost: 0,
      transactionFees: 0,
      numberOfShares: 0,
      sharePrice: 0,
      annualRentalYield: 0,
      annualPriceAppreciation: 0,
      downPayment: 0,
      monthlyInstallment: 0,
      numberOfYears: 0,
      maintenaceInstallment: 0,
      deliveryInstallment: 0,
      type: 1,
      facilities: this.fb.array([])
    });
  }
  check() {
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
  initFacilities() {
    this
      .propertyForAdminService
      .apiDashboardFacilityGetAllGet$Json()
      .subscribe({
        next: next => {
          this.facilities = next.data ?? []
        }
      })
  }
  get facilitiesFormArray() {
    return this.propertyForm.get('facilities') as FormArray;
  }
  createFacility() {
    
  }
  addFacility(): void {
    this.addedFacilities.push({ id: this.selectedFacility!.id!, value: this.selectedFacilityValue! })
    this.selectedFacility = undefined;
    this.selectedFacilityValue="";
  }
  removeFacility(index: number): void {
    this.addedFacilities.splice(index,1);
  }
  fiterFacilities(id:number){
    return this.facilities.find(e=>e.id == id)
  }
}
