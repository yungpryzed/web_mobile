import { Component } from '@angular/core';
import { ProfilePhoto } from '../profile-photo/profile-photo'; // Import dei figli (Questo è il componente padre)
import { UserBio } from '../user-bio/user-bio';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [ProfilePhoto, UserBio], // Dichiariamo i figli qua
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {}