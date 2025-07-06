import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightsaber-divider',
  templateUrl: './lightsaber-divider.component.html',
  styleUrls: ['./lightsaber-divider.component.scss']
})
export class LightsaberDividerComponent {
  @Input() color: 'blue' | 'red' | 'green' | 'purple' = 'blue';

}
