import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { Position } from "./styles/Position";
import { ScrollProperty } from './attributes/Scroll';
import { PictureTypesControls,  MouseProperty } from './attributes/Picture';
import { BasicAttribute } from './attributes/BasicProperty';

export interface Frame extends BasicAttribute,ScrollProperty,PictureTypesControls,MouseProperty,FrameStyle {

    caption: string,
    controlTipText:string,
    cycle:string

}

export interface FrameStyle extends Size,ZIndex,Position {
    borderStyle: string,
    backColor: string,
    borderColor: string,
    font: string,
    foreColor: string,
    specialEffect: string,
}