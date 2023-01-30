import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  @ViewChild('placeHolder2', { read: ViewContainerRef })
  viewContainer2!: ViewContainerRef;
  constructor() {}
  ngOnInit(): void {
    this.load2();

  }
    async load2(): Promise<void> {

      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://samfe1.z13.web.core.windows.net/',
        exposedModule: './HomeComponent'
      });

      const ref = this.viewContainer.createComponent(m.HomePage);
      // const compInstance = ref.instance;

  }
  async load(): Promise<void> {
    console.log('adding new element');
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://samfe1.z13.web.core.windows.net/',
      exposedModule: './HomeComponent'
    });

    const ref = this.viewContainer2.createComponent(m.HomePage);
    // const compInstance = ref.instance;

}
}
