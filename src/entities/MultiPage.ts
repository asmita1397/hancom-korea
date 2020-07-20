import Size from "./styles/Size";
import ZIndex from "./styles/ZIndex";
import { Position } from "./styles/Position";
import { BasicTabProperty } from "./attributes/BasicProperty";

export interface MultiPage extends BasicTabProperty, MultiPageStyle {
  style: MultiPageStyle;
}

export interface MultiPageStyle extends Size, ZIndex, Position {
  backgroundColor: string;
  color: string;
  borderStyle: string;
}

