import {BasicProperty} from './attributes/BasicProperty';
import Size from './styles/Size';
import { Position } from "../entities/styles/Position";
import ZIndex from './styles/ZIndex';
import { TextWrap } from './styles/TextWrap';
import { MouseProperty } from './attributes/Picture';

export interface CheckBox extends BasicProperty, CheckBoxStyle {

    accelerator:string,
    controlSource:string,
    groupName:string,
    locked:boolean,
    tabIndex:number,
    tabStop:boolean,
    tripleState:boolean,
    value:boolean
    controlTipText: string;
}

export interface CheckBoxStyle extends Size,ZIndex,TextWrap,Position, MouseProperty {
    backColor: string,
    borderColor: string,
    borderStyle: string,
    font: string,
    textAlign: string,
    foreColor: string,
  
}