import Size from './styles/Size'
import ZIndex from './styles/ZIndex'
import {  PictureControls, MouseProperty } from './attributes/Picture'
import { TextWrap } from './styles/TextWrap'
import { Visibility } from './styles/Visibility'

export interface Label extends MouseProperty,PictureControls,LabelStyle {
    title:string,
    accelerator:string,
    tabindex:number,
    tabStop:boolean,
    visible:boolean,
    
}

export interface LabelStyle extends ZIndex,Size,TextWrap,Visibility {

}
