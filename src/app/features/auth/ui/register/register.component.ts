import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    name = '';
    email = '';
    password = '';
    confirmPassword = '';
    phone = '';
    street = '';
    city = '';
    zip = '';
    country = '';

    onSubmit() {
        if (this.password !== this.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Register data:', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: {
                street: this.street,
                city: this.city,
                zip: this.zip,
                country: this.country
            }
        });

        alert('Registration successful (fake for now)');
    }
}
