import { Visibility } from './styles/Visibility';
import { BasicButtonProperty } from './attributes/BasicProperty';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { Position } from "./styles/Position";
import { TextWrap } from './styles/TextWrap';
import { MouseProperty,PictureControls } from './attributes/Picture';

export interface ToggleButton extends BasicButtonProperty,ToggleButtonStyle,PictureControls {
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:string
   
}

export interface ToggleButtonStyle extends Size,ZIndex,Position,TextWrap,Visibility,MouseProperty {
    
}