import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { ScrollProperty } from './attributes/Scroll';
import { PictureTypesControls, MouseIcon } from './attributes/Picture';
import { BasicAttribute } from './attributes/BasicProperty';

export interface Frame extends BasicAttribute,ScrollProperty,PictureTypesControls,MouseIcon {

    caption: string,
    controlTipText:string,
    cycle:string
    style:FrameStyle

}

export interface FrameStyle extends Size,ZIndex,Position {
    borderStyle: string,
    backgroundColor: string,
    borderColor: string,
    fontFamily: string,
    color: string,
    cursor: string,
    boxShadow: string,
}