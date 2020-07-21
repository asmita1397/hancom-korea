import {BasicProperty} from './attributes/BasicProperty';
import {PictureTypesControls, MouseProperty } from './attributes/Picture';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';

export interface Image extends BasicProperty,PictureTypesControls,ImageStyle {

    controlTipText:string,
   

}

export interface ImageStyle extends Size,ZIndex,Position,MouseProperty {
    backColor: string,
    borderColor: string,
    border: string,
    borderStyle: string,
    foreColor: string,
    specialEffect: string,
}