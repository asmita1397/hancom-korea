import {  PictureControls, MouseProperty } from './attributes/Picture'
import Size from './styles/Size'
import ZIndex from './styles/ZIndex'
import { TextWrap } from './styles/TextWrap'
import { Visibility } from './styles/Visibility'
import { BasicButtonProperty } from './attributes/BasicProperty'

export interface CommandButton extends MouseProperty,PictureControls, BasicButtonProperty, CommandButtonStyle {

   
    takeFocusOnClick:boolean,
    

}

export interface CommandButtonStyle extends Size,ZIndex,TextWrap,Visibility {
    borderStyle:string
}
