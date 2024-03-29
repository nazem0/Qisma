import { CustomPropertyForAdminService } from './../../../services/custom-property-for-admin.service';
import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AddPropertyFacilityViewModel, FacilityViewModelForAdmin, GovernorateAndCityViewModel, PropertyDetailsViewModelForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { Helper } from '../../../services/helper';
import { DialogService } from '../../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-property-actions',
  templateUrl: './property-actions.component.html',
  styleUrl: './property-actions.component.css'
})
export class PropertyActionsComponent implements OnInit {
  helper = Helper;
  readers: any[] = [];
  inputArray: any[] = [];
  validationErros: string[] = []
  files?: FileList;
  math = Math;
  propertyForm!: FormGroup;
  propertyTypes = BusinessHelper.propertyTypes;
  text: string = `
  <h2>Title 1</h2>
  <ol>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
  </ol>
  <p><br></p>
  <h2>Title 2</h2>
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
    private customPropertyForAdminService:CustomPropertyForAdminService,
    private governorateAndCityService: GovernorateAndCityService,
    private dialog: DialogService,
    private snackBar: MatSnackBar
  ) {
    this.initPropertyForm();
  }
  ngOnInit(): void {
    this.initGovs()
    this.initFacilities();
    // this.propertyForAdminService.apiDashboardPropertyAddPost$Json({body:{}})
  }

  addPhotos($event: Event) {
    this.files = ($event.target as HTMLInputElement).files!;
    console.log(this.files);

    for (let index = 0; index < this.files.length; index++) {
      this.readers[index] = new FileReader();
      this.readers[index].readAsDataURL(this.files.item(index) as Blob);
      this.propertyForm.get('propertyImages')?.value.push(this.files.item(index) as Blob)
      this.readers[index].onload = (_event: any) => {
        this.inputArray!.push(this.readers[index].result);
      };
    }
  }

  delete(index: number) {
    this.inputArray.splice(index, 1);
    this.propertyForm.get('propertyImages')?.value.splice(index, 1)
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
      facilities: new FormControl<AddPropertyFacilityViewModel[]>([]),
      propertyImages: new FormControl<Blob[]>([])
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
          if (this.cities.length) this.propertyForm.get('cityId')?.enable();
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
    return { facilityId: this.selectedFacility?.id, description: this.selectedFacilityValue }
  }
  addFacility(): void {
    if (!this.selectedFacilityValue) {
      this.snackBar.open('Facility Description is Required', 'X', { duration: 1200 });
      return;
    }
    this.facilitiesFormArray.value.push(this.createFacility());
    this.selectedFacility = undefined;
    this.selectedFacilityValue = "";
    console.log(this.propertyForm);

  }
  removeFacility(index: number): void {
    this.facilitiesFormArray.value.splice(index, 1);
  }
  fiterFacilities(id: number) {
    return this.facilities.find(e => e.id == id)
  }

  setControllerValue(controlName: string, value: unknown, percentage = false) {
    if (percentage) (value as number) *= 0.01;
    console.log(value);
    this.propertyForm.controls[controlName].setValue(value);
  }

  submitForm() {
    if (this.checkFormValidity())
    // this
    //   .propertyForAdminService
    //   .apiDashboardPropertyAddPost$Json({ body: this.propertyForm.value })
    //   .subscribe();
    this
      .customPropertyForAdminService
      .addPropertyFromForm(this.getFormData())
      .subscribe();
  }
  getFormData() {
    // Initialize a new FormData object
    const formData = new FormData();

    // Assign values to form controls
    formData.append('location', this.propertyForm.controls['location'].value);
    formData.append('governorateId', this.propertyForm.controls['governorateId'].value);
    formData.append('cityId', this.propertyForm.controls['cityId'].value);
    formData.append('description', this.propertyForm.controls['description'].value);
    formData.append('unitPrice', this.propertyForm.controls['unitPrice'].value);
    formData.append('maintenanceCost', this.propertyForm.controls['maintenanceCost'].value);
    formData.append('transactionFees', this.propertyForm.controls['transactionFees'].value);
    formData.append('numberOfShares', this.propertyForm.controls['numberOfShares'].value);
    formData.append('sharePrice', this.propertyForm.controls['sharePrice'].value);
    formData.append('annualRentalYield', this.propertyForm.controls['annualRentalYield'].value);
    formData.append('annualPriceAppreciation', this.propertyForm.controls['annualPriceAppreciation'].value);
    formData.append('downPayment', this.propertyForm.controls['downPayment'].value);
    formData.append('monthlyInstallment', this.propertyForm.controls['monthlyInstallment'].value);
    formData.append('numberOfYears', this.propertyForm.controls['numberOfYears'].value);
    formData.append('maintenaceInstallment', this.propertyForm.controls['maintenaceInstallment'].value);
    formData.append('deliveryInstallment', this.propertyForm.controls['deliveryInstallment'].value);
    formData.append('type', this.propertyForm.controls['type'].value);
    
    // Assuming facilities is an array, iterate over it and append each item
    this.propertyForm.controls['facilities'].value.forEach((facility: AddPropertyFacilityViewModel, index:number) => {
      formData.append(`facilities[${index}].facilityId`, facility.facilityId!.toString());
      formData.append(`facilities[${index}].description`, facility.description!);
    });

    // Assuming propertyImages is an array of Blob objects, iterate over it and append each blob
    this.propertyForm.controls['propertyImages'].value.forEach((image: Blob) => {
      formData.append('propertyImages', image);
    });

    // Now you can use formData for further processing like sending it in a POST request
    return formData;
  }
  openErrorsDialog() {
    this.dialog.open("Property Addition Form Errors", [this.validationErros]);
  }

  checkFormValidity() {
    this.validationErros = [];
    // if(this.propertyForm.get('propertyImages')?.value.length == 0){
    //   this.validationErros.push('PropertyImages Invalid')
    //   this.propertyForm
    // }
    if (this.propertyForm.invalid) {
      Object.keys(this.propertyForm.controls).forEach(controlName => {
        const control = this.propertyForm.get(controlName);
        if (control && control.errors) {
          this.validationErros.push(`${controlName[0].toUpperCase() + controlName.slice(1)} is invalid`);
        }
      });
      this.openErrorsDialog();
    }
    return !this.validationErros.length;
  }
  transactionFees: number = 0;
  calculateTransactionFees() {
    if (!this.propertyForm.controls['unitPrice'].value) return;
    let dollars = this.propertyForm.controls['transactionFees'].value * this.propertyForm.controls['unitPrice'].value
    this.transactionFees = dollars;
  }
  maintenanceCost: number = 0;
  calculateMaintenanceCost() {
    if (!this.propertyForm.controls['unitPrice'].value) return;
    let dollars = this.propertyForm.controls['maintenanceCost'].value * this.propertyForm.controls['unitPrice'].value
    this.maintenanceCost = dollars;
  }
}
