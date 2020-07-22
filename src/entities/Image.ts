import {BasicProperty} from './attributes/BasicProperty';
import {PictureTypesControls, MouseProperty } from './attributes/Picture';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { Position } from "./styles/Position";

export interface Image extends PictureTypesControls,ImageStyle {

    controlTipText:string,
    autoSize: boolean;

}

export interface ImageStyle extends Size,ZIndex,Position,MouseProperty {
    backColor: string,
    borderColor: string,
    border: string,
    borderStyle: string,
    foreColor: string,
    specialEffect: string,
}