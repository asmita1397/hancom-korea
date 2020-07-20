import {BasicProperty} from './attributes/BasicProperty';
import {PictureTypesControls } from './attributes/Picture';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';

export interface Image extends BasicProperty,PictureTypesControls {

    controlTipText:string,
    style:ImageStyle

}

export interface ImageStyle extends Size,ZIndex,Position {
    backgroundColor: string,
    borderColor: string,
    border: string,
    borderStyle: string,
    color: string,
    cursor: string,
    boxShadow: string,
}