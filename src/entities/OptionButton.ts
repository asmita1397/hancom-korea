import { BasicButtonProperty } from './attributes/BasicProperty';
import ZIndex from './styles/ZIndex';
import { Visibility } from './styles/Visibility';
import { TextWrap } from './styles/TextWrap';
import { MouseProperty } from './attributes/Picture';
import { PictureControls } from "./attributes/Picture";

export interface OptionButton extends OptionButtonProperty,OptionButtonStyle {

   
}

export interface OptionButtonProperty extends MouseProperty,BasicButtonProperty,PictureControls  {
    alignment:string,
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:boolean

}


export interface OptionButtonStyle extends Position,ZIndex,Visibility,TextWrap {
    
}