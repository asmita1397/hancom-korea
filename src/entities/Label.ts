import Size from './styles/Size'
import ZIndex from './styles/ZIndex'
import { MouseIcon, PictureControls } from './attributes/Picture'
import { TextWrap } from './styles/TextWrap'
import { Visibility } from './styles/Visibility'

export interface Label extends MouseIcon,PictureControls {
    title:string,
    accelerator:string,
    tabindex:number,
    tabStop:boolean,
    visible:boolean,
    style: LabelStyle
    
}

export interface LabelStyle extends ZIndex,Size,TextWrap,Visibility {

}
