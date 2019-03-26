import { Component } from 'react';
export interface ToolButtonProps {
    path: string;
    listener: () => void;
}
export declare class ToolButton extends Component<ToolButtonProps> {
    constructor(props: ToolButtonProps);
    render(): JSX.Element;
}