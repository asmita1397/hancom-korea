import { BasicButtonProperty } from './attributes/BasicProperty';
import ZIndex from './styles/ZIndex';
import { Visibility } from './styles/Visibility';
import { TextWrap } from './styles/TextWrap';
import { MouseProperty } from './attributes/Picture';
import { PictureControls } from "./attributes/Picture";
import { Position } from "./styles/Position";
import Size from './styles/Size';

export interface OptionButton extends OptionButtonProperty,OptionButtonStyle {

   
}

export interface OptionButtonProperty extends MouseProperty,BasicButtonProperty,PictureControls  {
    alignment:string,
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:string,
   

}


export interface OptionButtonStyle extends Size,Position,ZIndex,Visibility,TextWrap {
    
}