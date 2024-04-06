import { CustomPropertyForAdminService } from './../../../services/custom-property-for-admin.service';
import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import {
  AddPropertyFacilityViewModel,
  FacilityViewModelForAdmin,
  GovernorateAndCityViewModel,
  PropertyDetailsViewModelForAdmin,
  PropertyDetailsViewModelForUser,
} from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { Helper } from '../../../services/helper';
import { DialogService } from '../../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IndexableObject } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-property-actions',
  templateUrl: './property-actions.component.html',
  styleUrl: './property-actions.component.css',
})
export class PropertyActionsComponent implements OnInit {
  editPage = false;
  propertyId?: number;
  helper = Helper;
  readers: FileReader[] = [];
  inputArray: {id?:number, src:string|ArrayBuffer|null}[] = [];
  validationErros: string[] = [];
  files?: FileList;
  math = Math;
  propertyForm!: FormGroup;
  propertyTypes = BusinessHelper.propertyTypes;
  propertyStatuses = BusinessHelper.propertyStatuses;
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
  selectedType?: GovernorateAndCityViewModel;
  selectedStatus?: GovernorateAndCityViewModel;
  constructor(
    private fb: FormBuilder,
    private propertyForAdminService: PropertyForAdminService,
    private customPropertyForAdminService: CustomPropertyForAdminService,
    private governorateAndCityService: GovernorateAndCityService,
    private dialog: DialogService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.initEmptyPropertyForm();
    this.initGovs();
    this.initFacilities();
    this.getPropertyWithId();
    // this.propertyForAdminService.apiDashboardPropertyAddPost$Json({body:{}})
  }

  addPhotos($event: Event) {
    this.files = ($event.target as HTMLInputElement).files!;
    console.log(this.files);
    let blobFiles :Blob[]=[]
    for (let index = 0; index < this.files.length; index++) {
      this.readers[index] = new FileReader();
      this.readers[index].readAsDataURL(this.files.item(index) as Blob);
      blobFiles.push(this.files.item(index) as Blob)
      this.readers[index].onload = (_event: any) => {
        this.inputArray!.push({src:this.readers[index].result});
      };
    }
    console.log(blobFiles);
    
    this.propertyForm.get('propertyImages')?.setValue(blobFiles)
    if (this.editPage && this.propertyId) {
      this.propertyForAdminService.apiDashboardPropertyImagesAddPost$Json({
        body: {
          Images:blobFiles,
          PropertyId: this.propertyId
        }
      }).subscribe();
    }

  }

  delete(index: number, id?:number) {
    this.inputArray.splice(index, 1);
    this.propertyForm.get('propertyImages')?.value.splice(index, 1);
    if(id &&this.editPage && this.propertyId){
      this
      .propertyForAdminService
      .apiDashboardPropertyImageDeleteDelete$Json({
        PropertyImageId:id
      }).subscribe()
    }
  }
  initPropertyForm(propertyDetails: PropertyDetailsViewModelForAdmin) {
    console.log(propertyDetails);
    //Mapping
    Object.keys(propertyDetails).forEach((key) => {
      this.propertyForm
        .get(key)
        ?.setValue((propertyDetails as IndexableObject)[key]);
    });

    propertyDetails.propertyImages!.forEach((image) => {
      this.inputArray.push({id:image.id, src:this.helper.processFileUrl(image.imageUrl!)});
    });
    this.selectedGov = {
      id: propertyDetails.governorateId,
      name: propertyDetails.governorate,
    };
    this.initCity();
    this.selectedCity = {
      id: propertyDetails.cityId,
      name: propertyDetails.city,
    };
    let selectedTypeName = BusinessHelper.propertyTypes.find(
      (e) => e.id == propertyDetails.type
    )?.name;
    this.selectedType = { id: propertyDetails.type, name: selectedTypeName };
    let selectedStatusName = BusinessHelper.propertyStatuses.find(
      (e) => e.id == propertyDetails.status
    )?.name;
    this.selectedStatus = {
      id: propertyDetails.status,
      name: selectedStatusName,
    };
    this.calculateMaintenanceCost();
    this.calculateTransactionFees();
  }

  initEmptyPropertyForm() {
    this.propertyForm = this.fb.group({
      location: new FormControl<string>('', [Validators.required]),
      governorateId: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      cityId: new FormControl<number | null>(null, [Validators.required]),
      description: new FormControl<string>(this.text, [Validators.required]),
      unitPrice: new FormControl<number | null>(null, [Validators.required]),
      maintenanceCost: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      transactionFees: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      numberOfShares: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      sharePrice: new FormControl<number | null>(null, [Validators.required]),
      annualRentalYield: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      annualPriceAppreciation: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      downPayment: new FormControl<number | null>(null, [Validators.required]),
      monthlyInstallment: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      numberOfYears: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      maintenaceInstallment: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      deliveryInstallment: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      type: new FormControl<number | null>(null, [Validators.required]),
      status: new FormControl<number | null>(null, [Validators.required]),
      facilities: new FormControl<AddPropertyFacilityViewModel[]>([]),
      propertyImages: new FormControl<Blob[]>([]),
    });
  }
  check() {
    console.log(this.propertyForm.value);
  }

  initGovs() {
    this.governorateAndCityService.apiGovernorateGetAllGet$Json().subscribe({
      next: (next) => {
        this.governorates = next.data ?? [];
      },
    });
  }
  initCity() {
    this.governorateAndCityService
      .apiCitiesGetByGovernorateIdGet$Json({
        GovernorateId: this.propertyForm.controls['governorateId'].value,
      })
      .subscribe({
        next: (next) => {
          this.cities = next.data ?? [];
          if (this.cities.length) this.propertyForm.get('cityId')?.enable();
        },
      });
  }
  initFacilities() {
    this.propertyForAdminService
      .apiDashboardFacilityGetAllGet$Json()
      .subscribe({
        next: (next) => {
          this.facilities = next.data ?? [];
        },
      });
  }
  get facilitiesFormArray() {
    return this.propertyForm.get('facilities') as FormArray;
  }
  createFacility() {
    return {
      facilityId: this.selectedFacility?.id,
      description: this.selectedFacilityValue,
    };
  }
  addFacility(): void {
    if (!this.selectedFacilityValue) {
      this.snackBar.open('Facility Description is Required', 'X', {
        duration: 1200,
      });
      return;
    }
    let addedFacility = this.createFacility();
    this.facilitiesFormArray.value.push(addedFacility);
    this.selectedFacility = undefined;
    this.selectedFacilityValue = '';
    if (this.editPage && this.propertyId) {
      this.propertyForAdminService
        .apiDashboardPropertyFacilityAddPost$Json({
          Description: addedFacility.description,
          FacilityId: addedFacility.facilityId,
          PropertyId: this.propertyId,
        })
        .subscribe();
    }
  }
  removeFacility(index: number, id?: number): void {
    this.facilitiesFormArray.value.splice(index, 1);
    if (id) {
      this.propertyForAdminService
        .apiDashboardPropertyFacilityDeleteDelete$Json({
          PropertyFacilityId: id,
        })
        .subscribe();
    }
  }
  fiterFacilities(id: number) {
    return this.facilities.find((e) => e.id == id);
  }

  setControllerValue(controlName: string, value: unknown, percentage = false) {
    if (percentage) (value as number) *= 0.01;
    console.log(value);
    this.propertyForm.controls[controlName].setValue(value);
  }

  submitForm() {
    if (this.checkFormValidity())
      this.customPropertyForAdminService
        .addPropertyFromForm(this.getFormData())
        .subscribe();
  }
  getFormData() {
    // Initialize a new FormData object
    const formData = new FormData();

    // Assign values to form controls
    for (const controlName in this.propertyForm.controls) {
      if (this.propertyForm.controls.hasOwnProperty(controlName)) {
        const control = this.propertyForm.controls[controlName];
        formData.set(controlName, control.value);
      }
    }

    // Assuming facilities is an array, iterate over it and append each item
    this.propertyForm.controls['facilities'].value.forEach(
      (facility: AddPropertyFacilityViewModel, index: number) => {
        formData.append(
          `facilities[${index}].facilityId`,
          facility.facilityId!.toString()
        );
        formData.append(
          `facilities[${index}].description`,
          facility.description!
        );
      }
    );

    // Assuming propertyImages is an array of Blob objects, iterate over it and append each blob
    this.propertyForm.controls['propertyImages'].value.forEach(
      (image: Blob) => {
        formData.append('propertyImages', image);
      }
    );

    // Now you can use formData for further processing like sending it in a POST request
    return formData;
  }
  openErrorsDialog() {
    this.dialog.open('Property Addition Form Errors', [this.validationErros]);
  }

  checkFormValidity() {
    this.validationErros = [];
    if (this.propertyForm.invalid) {
      Object.keys(this.propertyForm.controls).forEach((controlName) => {
        const control = this.propertyForm.get(controlName);
        if (control && control.errors) {
          this.validationErros.push(
            `${controlName[0].toUpperCase() + controlName.slice(1)} is invalid`
          );
        }
      });
      this.openErrorsDialog();
    }
    return !this.validationErros.length;
  }
  transactionFees: number = 0;
  calculateTransactionFees() {
    console.log(this.propertyForm.controls['transactionFees'].value);
    if (!this.propertyForm.controls['unitPrice'].value) return;
    let dollars =
      this.propertyForm.controls['transactionFees'].value *
      this.propertyForm.controls['unitPrice'].value;
    this.transactionFees = dollars;
  }
  maintenanceCost: number = 0;
  calculateMaintenanceCost() {
    console.log(this.propertyForm.controls['maintenanceCost'].value);

    if (!this.propertyForm.controls['unitPrice'].value) return;
    let dollars =
      this.propertyForm.controls['maintenanceCost'].value *
      this.propertyForm.controls['unitPrice'].value;
    this.maintenanceCost = dollars;
  }

  getPropertyWithId() {
    let propertyIdParam = this.route.snapshot.paramMap.get('id');
    if (!propertyIdParam) {
      this.initEmptyPropertyForm();
      return;
    }
    this.propertyId = parseInt(propertyIdParam);
    this.editPage = true;
    this.propertyForAdminService
      .apiDashboardPropertyGetByIdGet$Json({ PropertyId: this.propertyId })
      .subscribe({
        next: (next) => {
          this.initPropertyForm(next.data!);
        },
      });
  }
}
