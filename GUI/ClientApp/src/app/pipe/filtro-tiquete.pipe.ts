import { Pipe, PipeTransform } from '@angular/core';
import { Tiquete } from '../Tiquete/models/tiquete';

@Pipe({
  name: 'filtroTiquete'
})
export class FiltroTiquetePipe implements PipeTransform {

  transform(tiquete: Tiquete[], searchText: string): any {
    if (searchText == null) return tiquete;
   return tiquete.filter(p =>
   p.nombre.toLowerCase()
  .indexOf(searchText.toLowerCase()) !== -1);
    }
  
  

}
