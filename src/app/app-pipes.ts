import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'liste'})
export class ListePipe implements PipeTransform {
  transform(value: string): string[] {
    if(value !== undefined){
      if(value.indexOf(',') > -1)
        return value.split(',');
      else
        return [value];
    }
    return ;
  }
}

@NgModule({
    imports: [
        // dep modules
    ],
    declarations: [
      ListePipe
    ],
    exports: [
      ListePipe
    ]
})
export class ApplicationPipesModule {
}
