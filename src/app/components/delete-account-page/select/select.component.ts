import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
    selector: 'custom-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
    host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
    }
})
export class SelectComponent {

    @Input() countries: any;
    @Input() title: string;
    @Output() currentValueChange = new EventEmitter();

    public currentValue: any;
    public dropdownOpen: boolean = false;
    private currentIndex = -1;
    _filterText: string = '';
    filteredCountries: Country[];
    
    public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')};

    get filterText() {
        return this._filterText;
    }
    set filterText(value: string){
        this._filterText = value;
        this.filteredCountries = this.filterCountryByName(value);
    }

    constructor(
        private elem: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        this.currentValue = this.countries[0];

        this.renderer.listen('document', 'click', (event: Event) => {
            const clickedInside = this.elem.nativeElement.contains(event.target);
            if (!clickedInside) {
                this.closeDropdown();
            }
        });
    }


    handleKeyboardEvents($event: KeyboardEvent) {
        const arrowUp = $event.code === 'ArrowUp';
        const arrowDown = $event.code === 'ArrowDown';
        const escape = $event.code === 'Escape';

        (arrowUp || arrowDown)
        ? (arrowUp && this.currentIndex > 0)
            ? (this.currentIndex--, this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus())
            : (arrowDown && this.currentIndex < this.countries.length - 1)
            ? (this.currentIndex++, this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus())
            : null
        : (escape && this.closeDropdown());
    }
 
    closeDropdown() {
        this.dropdownElement.setAttribute('aria-expanded', "false");
        this.currentIndex = -1;
        this.dropdownOpen = false;

        this.filterText = '';

    }

    selectByIndex(i: number) {
        let value = this.countries[i];
        this.select(value);
    }

    select(value: any) {
        this.currentValue = value;
        this.closeDropdown();
        this.currentValueChange.emit(this.currentValue);
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? 'true' : 'false');
        this.filteredCountries = this.dropdownOpen ? this.countries : [];
    }

    ngOnDestroy(): void {
        this.renderer.destroy();
    }

    filterCountryByName(filterTerm: string) {
        if(this.countries.length === 0 || filterTerm === '') {
            return this.countries;
        } else {
            const filtered = this.countries.filter((country: Country) => {
                const countryName = this.quitarAcentosYCaracteresEspeciales(country.name_es)
                return countryName.toLowerCase().startsWith(filterTerm);
            })
            return filtered;
        }
    }

    quitarAcentosYCaracteresEspeciales(cadena: any) {
        return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
}