import * as React from 'react';
export interface StudentMarkProps {
}
interface State {
    mark: number;
    message: string;
}
export declare class StudentMark extends React.Component<StudentMarkProps, Partial<State>> {
    state: {
        mark: any;
        message: string;
    };
    constructor(props: StudentMarkProps);
    render(): JSX.Element;
    private getStyle;
}
export {};