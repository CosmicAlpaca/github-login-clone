import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  repos = [
    { owner: 'your-name', name: 'angular-clone', isPrivate: true },
    { owner: 'company', name: 'backend-service', isPrivate: true },
    { owner: 'your-name', name: 'portfolio', isPrivate: false },
    { owner: 'community', name: 'awesome-library', isPrivate: false },
  ];

  activities = [
    { actor: 'google', action: 'released', target: 'flutter v3.0', time: '2h ago' },
    { actor: 'microsoft', action: 'starred', target: 'openai/chatgpt', time: '5h ago' },
    { actor: 'facebook', action: 'forked', target: 'react/core', time: '1d ago' },
  ];
}
