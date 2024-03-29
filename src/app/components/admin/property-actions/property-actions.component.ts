import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { FacilityViewModelForAdmin, GovernorateAndCityViewModel, PropertyDetailsViewModelForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { Helper } from '../../../services/helper';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-property-actions',
  templateUrl: './property-actions.component.html',
  styleUrl: './property-actions.component.css'
})
export class PropertyActionsComponent implements OnInit {
  helper = Helper;
  validationErros:string[]=[]
  math=Math;
  propertyForm!: FormGroup;
  propertyTypes = BusinessHelper.propertyTypes;
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
  governorates: GovernorateAndCityViewModel[] = [];
  cities: GovernorateAndCityViewModel[] = [];
  selectedGov?: GovernorateAndCityViewModel;
  selectedCity?: GovernorateAndCityViewModel;
  constructor(
    private fb: FormBuilder,
    private propertyForAdminService: PropertyForAdminService,
    private governorateAndCityService: GovernorateAndCityService,
    private dialog: DialogService,
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
      location: new FormControl<string>('', [Validators.required]),
      governorateId: new FormControl<number | undefined>(undefined, [Validators.required]),
      cityId: new FormControl<number | undefined>(undefined, [Validators.required]),
      description: new FormControl<string>(this.text, [Validators.required]),
      unitPrice: new FormControl<number | undefined>(undefined, [Validators.required]),
      maintenanceCost: new FormControl<number | undefined>(undefined, [Validators.required]),
      transactionFees: new FormControl<number | undefined>(undefined, [Validators.required]),
      numberOfShares: new FormControl<number | undefined>(undefined, [Validators.required]),
      sharePrice: new FormControl<number | undefined>(undefined, [Validators.required]),
      annualRentalYield: new FormControl<number | undefined>(undefined, [Validators.required]),
      annualPriceAppreciation: new FormControl<number | undefined>(undefined, [Validators.required]),
      downPayment: new FormControl<number | undefined>(undefined, [Validators.required]),
      monthlyInstallment: new FormControl<number | undefined>(undefined, [Validators.required]),
      numberOfYears: new FormControl<number | undefined>(undefined, [Validators.required]),
      maintenaceInstallment: new FormControl<number | undefined>(undefined, [Validators.required]),
      deliveryInstallment: new FormControl<number | undefined>(undefined, [Validators.required]),
      type: new FormControl<number | undefined>(undefined, [Validators.required]),
      facilities: new FormControl<FacilityViewModelForAdmin[]>([])
    });
  }
  check() {
    console.log(this.propertyForm.value);

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
      .apiCitiesGetByGovernorateIdGet$Json({ "GovernorateId": this.propertyForm.controls['governorateId'].value })
      .subscribe({
        next: next => {
          this.cities = next.data ?? []
          if(this.cities.length) this.propertyForm.get('cityId')?.enable();
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
    return { facilityId: this.selectedFacility!.id!, description: this.selectedFacilityValue! }
  }
  addFacility(): void {
    this.facilitiesFormArray.value.push(this.createFacility());
    this.selectedFacility = undefined;
    this.selectedFacilityValue = "";
    console.log(this.propertyForm);

  }
  removeFacility(index: number): void {
    this.facilitiesFormArray.value.splice(index,1);
  }
  fiterFacilities(id: number) {
    return this.facilities.find(e => e.id == id)
  }

  setControllerValue(controlName:string ,value:unknown, percentage=false){
    if(percentage) (value as number)*=0.01;
    console.log(value);
    this.propertyForm.controls[controlName].setValue(value);
  }

  submitForm(){

    let formWithPercentages = this.propertyForm;
    let maintenanceCostControlValue = formWithPercentages.controls['maintenanceCost'].value;
    formWithPercentages.controls['maintenanceCost'].setValue(maintenanceCostControlValue*0.01)
    let transactionFeesControlValue = formWithPercentages.controls['transactionFees'].value;
    formWithPercentages.controls['transactionFees'].setValue(transactionFeesControlValue*0.01)
    if(this.checkFormValidity())
    this
    .propertyForAdminService
    .apiDashboardPropertyAddPost$Json({body:formWithPercentages.value})
    .subscribe();
  }

  openErrorsDialog() {
    this.dialog.open("Property Addition Form Errors", [this.validationErros]);
  }

  checkFormValidity(){
    if (this.propertyForm.invalid) {
      Object.keys(this.propertyForm.controls).forEach(controlName => {
        const control = this.propertyForm.get(controlName);
        if (control && control.errors) {
          this.validationErros.push(`${controlName[0].toUpperCase() + controlName.slice(1)} is invalid`);
        }
      });
      this.openErrorsDialog();
      return false;
    }
    return true;
  }
  transactionFeesPercentage:number=0;
  calculateTransactionFeesPercentage(){
    if(!this.propertyForm.controls['unitPrice'].value) return;
    let division =  this.propertyForm.controls['transactionFees'].value / this.propertyForm.controls['unitPrice'].value
    this.transactionFeesPercentage = division /100;
  }
  maintenanceCostPercentage:number=0;
  calculateMaintenanceCostPercentage(){    
    if(!this.propertyForm.controls['unitPrice'].value) return;
    let division =  this.propertyForm.controls['maintenanceCost'].value / this.propertyForm.controls['unitPrice'].value
    this.maintenanceCostPercentage = division /100;
  }
}
