import Size from './styles/Size'
import ZIndex from './styles/ZIndex'
import { PictureControls, MouseProperty } from './attributes/Picture'
import { TextWrap } from './styles/TextWrap'
import { Visibility } from './styles/Visibility'

export class LabelEntity implements Label {
    name: string;
    type: string;
    accelerator: string;
    autoSize: boolean;
    caption: string;
    title: string;
    enabled: boolean;
    helpContextId: number;
    mouseIcon: string;
    picture: string;
    picturePosition: string;
    tabIndex: number;
    tabStop: boolean;
    tag: string;
    visible: boolean;
    isActive: boolean;
    left: string;
    top: string;
    width: string;
    height: string;
    zIndex: string;
    border: string;
    backColor: string;
    borderColor: string;
    font: string;
    foreColor: string;
    textAlign: string;
    specialEffect: string;
    wordWrap: string;
    overflow: string;
    whiteSpace: string;
    mousePointer: string;
    backStyle: string;
    constructor() {
        this.name = "Label1";
        this.type = "Label";
        this.accelerator = "";
        this.autoSize = false;
        this.caption = "Label1";
        this.title = "Label1";
        this.enabled = true;
        this.helpContextId = 0;
        this.mouseIcon = "(None)";
        this.picture = "(None)";
        this.picturePosition = "0 - fmPicturePositionLeftTop";
        this.tabIndex = 0;
        this.tabStop = false;
        this.tag = "";
        this.visible = true;
        this.isActive = false;
        this.left = "70px";
        this.top = "0px";
        this.width = "100px";
        this.height = "40px";
        this.zIndex = "1";
        this.border = "none";
        this.backColor = "white";
        this.borderColor = "ghostwhite";
        this.font = "Tahoma";
        this.foreColor = "black";
        this.textAlign = "left";
        this.specialEffect = "none";
        this.wordWrap = "break-word";
        this.overflow = "hidden";
        this.whiteSpace = "normal";
        this.mousePointer = "default";
        this.backStyle = ""
    }
}
export interface Label extends MouseProperty, PictureControls, LabelStyle {
    title: string,
    accelerator: string,
    tabIndex: number,
    tabStop: boolean,
    visible: boolean,

}

export interface LabelStyle extends ZIndex, Size, TextWrap, Visibility {

}
