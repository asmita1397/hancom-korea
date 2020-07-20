import { MouseIcon, PictureControls } from './attributes/Picture'
import Size from './styles/Size'
import ZIndex from './styles/ZIndex'
import { TextWrap } from './styles/TextWrap'
import { Visibility } from './styles/Visibility'
import { BasicButtonProperty } from './attributes/BasicProperty'

export interface CommandButton extends MouseIcon,PictureControls, BasicButtonProperty {

   
    takeFocusOnClick:boolean,
    style:CommandButtonStyle

}

export interface CommandButtonStyle extends Size,ZIndex,TextWrap,Visibility {
    borderStyle:string
}
