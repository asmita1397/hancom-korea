import { Position } from './styles/Position';
import Size from './styles/Size';
import { TextWrap } from './styles/TextWrap';
import { Visibility } from './styles/Visibility';
import ZIndex from './styles/ZIndex'
import { MouseProperty } from './attributes/Picture';
import { Scroll} from './attributes/Scroll'
import { BasicBoxProperty } from './attributes/BasicProperty';

export interface TextBox extends BasicBoxProperty,MouseProperty,Scroll {

    autoSize: boolean,

    autoTab:boolean,
    autoWordSelect:boolean,
    dragBehaviour:string,
    enterFieldBehaviour:string,
    enterKeyBehaviour:boolean,
    hideSelection:boolean,
    integralHeight:boolean,
    maxLength:number,
    multiLine:boolean,
    passwordChar:string,
    tabKeyBehaviour:boolean,
  
    style:TextBoxStyle

}


export interface TextBoxStyle extends Position,Size,ZIndex,TextWrap,Visibility  {

}
