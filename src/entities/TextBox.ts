import { Position } from './styles/Position';
import Size from './styles/Size';
import { TextWrap } from './styles/TextWrap';
import { Visibility } from './styles/Visibility';
import ZIndex from './styles/ZIndex'
import { MouseProperty } from './attributes/Picture';
import { Scroll} from './attributes/Scroll'
import { BasicBoxProperty } from './attributes/BasicProperty';

export interface TextBox extends BasicBoxProperty,MouseProperty,Scroll, TextBoxStyle {

    autoSize: boolean,

    autoTab:boolean,
    autoWordSelect:boolean,
    dragBehavior:string,
    enterFieldBehavior:string,
    enterKeyBehavior:boolean,
    hideSelection:boolean,
    integralHeight:boolean,
    maxLength:number,
    multiLine:boolean,
    passwordChar:string,
    tabKeyBehaviour:boolean,

}


export interface TextBoxStyle extends Position,Size,ZIndex,TextWrap,Visibility  {
    borderStyle: string
}
