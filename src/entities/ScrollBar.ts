import ZIndex from './styles/ZIndex';
import Size from './styles/Size';
import { MouseProperty } from './attributes/Picture';
import { BasicAttribute } from './attributes/BasicProperty';

export interface ScrollBar extends MouseProperty,BasicAttribute,ScrollBarStyle {

    controlSource:string,
    controlTipText:string,
    delay:number,
    largeChange:string,
    orientation:string,
    proportionalThumb:boolean,
    smallChange:number,
    value:number,
   


}

export interface ScrollBarStyle extends ZIndex,Position,Size {
    backColor: string,
    foreColor: string,
    min:string,
    max:string
}