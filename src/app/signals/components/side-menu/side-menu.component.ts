import { Component, signal } from '@angular/core';

interface ItemMenu {
  title: string;
  route: string;
};

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<ItemMenu[]>([

    { title: 'contador', route: 'counter' },
    { title: 'Mutacion', route: 'properties' },
    { title: 'Usuario', route: 'user-ingo' },

  ]);

  /* public menuItems: ItemMenu[] = [
    { title: 'contador', route: 'counter' },
    { title: 'Mutacion', route: 'properties' },
    { title: 'Usuario', route: 'user-ingo' },
  ]; */

}
