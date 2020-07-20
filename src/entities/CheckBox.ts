import BasicProperty from './attributes/BasicProperty';
import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import { TextWrap } from './styles/TextWrap';

export interface CheckBox extends BasicProperty {

    accelerator:string,
    controlSource:string,
    groupName:string,
    locked:boolean,
    tabindex:number,
    tabStop:boolean,
    tripleState:boolean,
    value:boolean
    style:CheckBoxStyle
}

export interface CheckBoxStyle extends Size,ZIndex,TextWrap,Position {
    backgroundColor: string,
    borderColor: string,
    borderStyle: string,
    fontFamily: string,
    textAlign: string,
    color: string,
    cursor: string,
}