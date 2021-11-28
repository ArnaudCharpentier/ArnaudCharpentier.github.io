import {NgModule} from "@angular/core";
import {ApplicationPipesModule} from "../../app-pipes";

@NgModule({
    imports: [ApplicationPipesModule],
    exports: [ApplicationPipesModule],
    declarations: []
})

export class SharedModule { }
