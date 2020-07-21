export interface Common {
/*   id: number; */
  name: string;
  type: string;
  visible: boolean;
  enabled: boolean;
  helpContextId: number;
  tag: string;
}


export interface BasicAttribute extends Common {
  tabIndex: number;
  tabStop: boolean;
}

export interface BasicProperty extends Common {
  caption: string;
  autoSize: boolean;

}

export interface BasicButtonProperty extends BasicAttribute {
  locked: boolean;
  accelerator: string;
  controlTipText: string;
}

export interface BasicRefProperty extends BasicAttribute {
    controlTipText:string,
    locked: boolean;
    value: string;
    imeMode: string;
    text: string;
}


export interface BasicBoxProperty extends BasicAttribute,BasicRefProperty {
  controlSource: string;
}

export interface BasicComboAndListBoxProperty {
  columnCount: number;
  columnHeads: boolean;
  columnWidths: string;
  listStyle: string;
  matchEntry: string;
  rowSource: string;
  textColumn: number;
  topIndex: number;
}

export interface BasicTabProperty extends BasicAttribute {
  tabOrientation: string;
  value: string;
  multiRow: boolean;
  tabFixedHeight: number;
  tabFixedWidth: number;
}
