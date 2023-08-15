import { Component, OnInit } from '@angular/core';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-component-for-test',
  standalone: true,
  template: `<p>my componenent</p>`,
  providers: [ComponentService],
})
export class ComponentForTestComponent implements OnInit {
  constructor(private readonly cmpS: ComponentService) {}

  ngOnInit() {
    this.useService();
  }

  useService() {
    this.cmpS.get().subscribe();
  }

  useService2(data: unknown) {
    this.cmpS.create(data).subscribe;
  }
}
