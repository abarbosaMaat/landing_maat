import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
    selector: 'custom-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
    host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
    }
})
export class SelectComponent {

    @Input() options: any;
    @Input() title: string;
    @Output() currentValueChange = new EventEmitter();

    public currentValue: any;
    public dropdownOpen: boolean = false;
    public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')}

    private currentIndex = -1;

    constructor(
        private elem: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        this.currentValue = this.options[0];

        this.renderer.listen('document', 'click', (event: Event) => {
            const clickedInside = this.elem.nativeElement.contains(event.target);
            if (!clickedInside) {
                this.closeDropdown();
            }
        });
    }

    handleKeyboardEvents($event: KeyboardEvent) {
        if (this.dropdownOpen) {
            $event.preventDefault();
        } else {
            return;
        }
        if ($event.code === 'ArrowUp') {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
        } else if ($event.code === 'ArrowDown') {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else if (this.currentIndex < this.options.length-1) {
                this.currentIndex++;
            }
            this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
        } else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') && this.currentIndex >= 0) {
            this.selectByIndex(this.currentIndex);
        } else if ($event.code === 'Escape') {
            this.closeDropdown();
        }
    }

    closeDropdown() {
        this.dropdownElement.setAttribute('aria-expanded', "false");
        this.currentIndex = -1;
        this.dropdownOpen = false;
    }

    selectByIndex(i: number) {
        let value = this.options[i];
        this.select(value);
    }

    select(value: any) {
        this.currentValue = value;
        this.closeDropdown();
        this.currentValueChange.emit(this.currentValue);
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
    }

    ngOnDestroy(): void {
        this.renderer.destroy();
    }
}