import ZIndex from './styles/ZIndex';
import Size from './styles/Size';
import { MouseProperty } from './attributes/Picture';
import { BasicAttribute } from './attributes/BasicProperty';
import { Position } from "./styles/Position";

export interface ScrollBar extends MouseProperty,BasicAttribute,ScrollBarStyle {

    controlSource:string,
    controlTipText:string,
    delay:number,
    largeChange:number,
    orientation:string,
    proportionalThumb:boolean,
    smallChange:number,
    value:string,
   
}

export interface ScrollBarStyle extends ZIndex,Position,Size {
    backColor: string,
    foreColor: string,
    min:number,
    max:number
}
