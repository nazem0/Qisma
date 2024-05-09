import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
@Injectable({
    providedIn: 'root'
})
export class Helper {
    constructor() { }
    public static onFileUpload(file: File, formControl: FormControl | AbstractControl): void {
        formControl.setValue(file);
    }

    public static processFileUrl(fileUrl?: string | null, isFacility = false) {
        return fileUrl ? `${isFacility ? environment.Facilities : environment.staticFiles}/${fileUrl}` : null;
    }

    public static processOrderPdfFileUrl(fileUrl: string) {
        return `${environment.OrdersPdf}/${fileUrl}`
    }

    public static readonly passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


    public static generateAvatar(name: string, bgColor: string | null = null, color: string | null = null) {
        return `https://ui-avatars.com/api/?name=${name}&background=${bgColor ?? '0a6855'}&color=${color ?? 'fff'}`
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

    // public openImagePreview(image: string, external: boolean = false) {
    //     this.dialog.open("Image Preview", [], external ? Helper.processFileUrl(image)! : image)
    // }

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

    public static getBackgroundImage(imageUrl: string) {
        return `url('${Helper.processFileUrl(imageUrl)}')`;
    }

    public static returnCorrectedExternalUrl(url: string) {
        let httpProtocol = "http://";
        let httpsProtocol = "https://";
        if (url.startsWith(httpProtocol) || url.startsWith(httpsProtocol)) {
            return url;
        }
        else{
            return '//' + url
        }
    }
}

interface ascendingNumbersArrayParams { n?: number, fixedNumber?: number, step?: number }

