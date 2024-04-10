import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { DialogService } from "./dialog.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
@Injectable()
export class Helper {
    constructor(private dialog: DialogService) { }
    public static onFileUpload(file: File, formControl: FormControl | AbstractControl): void {
        formControl.setValue(file);
    }

    public static processFileUrl(fileUrl?: string | null, isFacility=false) {
        return fileUrl ? `${isFacility ? environment.Facilities : environment.staticFiles}/${fileUrl}` : "";
    }

    public static readonly passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


    public static generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    public static generateAvatar(name:string, bgColor:string|null=null, color:string|null=null){
        return `https://ui-avatars.com/api/?name=${name}&background=${bgColor??'3f51b5'}&color=${color??'fff'}`
      }
  
    public static getDateByYears(years: number): Date {
        let currentDate = new Date()
        let result = new Date(currentDate.getFullYear() - years, currentDate.getMonth(), currentDate.getDay());
        return result;
    }

    public static formControlIsTouched(form: FormGroup, formControlName: string) {
        return form.get(formControlName)?.dirty || form.get(formControlName)?.touched;
    }

    public static formControlInvalid(form: FormGroup, formControlName: string) {
        return this.formControlIsTouched(form, formControlName) && form.get(formControlName)?.invalid
    }

    public static checkAge(birthDate: Date) {
        let currentDate = new Date();
        const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
        const ageDate = new Date(diffInMilliseconds);
        return Math.abs(ageDate.getUTCFullYear() - 1970) >= 16;
    }

    public openImagePreview(image: string, external: boolean = false) {
        this.dialog.open("Image Preview", [], external ? Helper.processFileUrl(image) : image)
    }

    public static handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        return value;
    }
    public static ascendingNumbersArray(param: ascendingNumbersArrayParams) {
        let array: number[] = new Array(param.n ?? 30)
        for (let i = 0; i < (param.n ?? 30); i++) {
            array[i] = (param.fixedNumber ?? (i + (param.step ?? 1)));
        }
        return array;
    }

    public static randomNumbersArray(n = 30) {
        let array: number[] = new Array(n)
        for (let i = 0; i < n; i++) {
            array[i] = (Math.random() * 100);
        }
        return array;
    }
}

interface ascendingNumbersArrayParams { n?: number, fixedNumber?: number, step?: number }

