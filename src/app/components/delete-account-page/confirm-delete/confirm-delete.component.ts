import { Component, OnInit } from "@angular/core";
import AuthService from "src/app/services/auth.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language.service";
import { TranslateService } from "@ngx-translate/core";



@Component({
  selector: "app-confirm-delete",
  templateUrl: "./confirm-delete.component.html",
  styleUrls: ["./confirm-delete.component.css", "../shared.component.css"],
})
export class ConfirmDeleteComponent implements OnInit {
  
  public selectedOption: string = "";
  public otherReason: string = "";
  public loader: boolean = false;
  public translations: any;
  public options = [];
  userLoginOn: boolean = false;
  infoLink: string = '<a href="mailto:info@maatai.com" style="color: #26314D; font-weight: 600;">info@maatai.com</a>';

  constructor(
    private _authService: AuthService, 
    private sanitizer: DomSanitizer,
    public language: LanguageService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this._authService.isLoggedIn$.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });

    this._authService.loader.subscribe((state: boolean) => {
      this.loader = state;
    });

    this.getReasonsTranslation()
  }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onOtherReason(reason: string) { this.otherReason = reason }

  cancelEverything() {
    this._authService.cancelProcess('cancelProcess');
  }

  async submit() {
    const descriptionReason = this.selectedOption === 'other_input' ? this.otherReason: "";
    const deleteReason = JSON.stringify({key: this.selectedOption, description: descriptionReason})
    
    try {  
      await this._authService.leaveReason({ deleteReason });
      await this._authService.deleteUser('deleteAccount');
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  getReasonsTranslation() {
    this.translateService.get('deleteAccountConfirmDelete').subscribe(translation => {
      this.options = [
        {
          label: translation.dontUseTitle,
          value: "dont_use",
          description: `<span>${translation.dontUseTitleDesc1}</span>
            </br></br>
            <span>${this.getBrandName(translation.dontUseTitleDesc2)} ${this.infoLink}</span>`,
        },
        {
          label: translation.dontUnderstandTitle,
          value: "dont_understand",
          description: `<span>${this.getBrandName(translation.dontUnderstandDesc1)}</span>
            </br></br>
            <span>${translation.dontUnderstandDesc2} ${this.infoLink}?</span>`,
        },
        {
          label: translation.dontTrustTitle,
          value: "dont_trust",
          description: `<span>${this.getBrandName(translation.dontTrustDesc1)}</span>
            </br></br>
            <span>${translation.dontTrustDesc2}</span>
            <span>${translation.dontTrustDesc3} ${this.infoLink}?</span>`,
        },
        {
          label: translation.badExperienceTitle,
          value: "bad_experience",
          description: `<span>${this.getBrandName(translation.badExperienceDesc1)}</span>
            </br></br>
            <span>${translation.badExperienceDesc2}</span>
            </br></br>
            <span>${translation.dontTrustDesc3} ${this.infoLink} ${this.getBrandName(translation.badExperienceDesc4)}</span>`,
        },
        { label: translation.otherTitle, value: "other_input", description: "", withInput: true },
      ] 
    });
    
  }

  getBrandName(message: string) {
    return message.replace('{{a}}', '<b style="font-weight: 700;">').replace('{{b}}', '</b>');
  }
}
