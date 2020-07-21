import { Visibility } from './styles/Visibility';
import { BasicButtonProperty } from './attributes/BasicProperty';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { TextWrap } from './styles/TextWrap';
import { MouseProperty,PictureControls } from './attributes/Picture';

export interface ToggleButton extends BasicButtonProperty,ToggleButtonStyle,PictureControls {
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:boolean
   
}

export interface ToggleButtonStyle extends Size,ZIndex,Position,TextWrap,Visibility,MouseProperty {
    
}