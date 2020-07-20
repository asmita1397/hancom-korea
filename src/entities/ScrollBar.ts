import ZIndex from './styles/ZIndex';
import Size from './styles/Size';
import { MouseIcon } from './attributes/Picture';
import { BasicAttribute } from './attributes/BasicProperty';

export interface ScrollBar extends MouseIcon,BasicAttribute,ScrollBarStyle {

    controlSource:string,
    controlTipText:string,
    delay:number,
    largeChange:string,
    orientation:string,
    proportionalThumb:boolean,
    smallChange:number,
    value:number,
    style:ScrollBarStyle


}

export interface ScrollBarStyle extends ZIndex,Position,Size {
    backgroundColor: string,
    color: string,
    cursor: string,
    min:string,
    max:string
}