import { Visibility } from './styles/Visibility';
import { BasicButtonProperty } from './attributes/BasicProperty';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { TextWrap } from './styles/TextWrap';

export interface ToggleButton extends BasicButtonProperty {
    controlSource:string,
    groupName:string,
    tripleState:boolean,
    value:boolean
    style:TooggleButtonStyle
}

export interface TooggleButtonStyle extends Size,ZIndex,Position,TextWrap,Visibility {
    
}