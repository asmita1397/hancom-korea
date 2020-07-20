import { BasicButtonProperty } from './attributes/BasicProperty';
import ZIndex from './styles/ZIndex';
import { Visibility } from './styles/Visibility';
import { TextWrap } from './styles/TextWrap';
import { MouseIcon } from './attributes/Picture';
import { PictureControls } from "./attributes/Picture";

export interface OptionButton extends OptionButtonProperty,OptionButtonStyle {

    style:OptionButtonStyle
}

export interface OptionButtonProperty extends MouseIcon,BasicButtonProperty,PictureControls  {
    alignment:string,
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:boolean

}


export interface OptionButtonStyle extends Position,ZIndex,Visibility,TextWrap {
    
}