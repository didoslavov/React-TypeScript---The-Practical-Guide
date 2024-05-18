import { type ReactNode } from 'react';

type HintBoxProps = {
    children: ReactNode;
    mode: 'hint';
};

type WarningBoxProps = {
    children: ReactNode;
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const isWarningBoxProps = (props: InfoBoxProps): props is WarningBoxProps => {
    return props.mode === 'warning';
};

const InfoBox = (props: InfoBoxProps) => {
    const { children, mode } = props;
    return (
        <aside
            className={`w-full border p-4 text-center mb-4 ${
                mode === 'hint'
                    ? 'border-emerald-200 text-emerald-200'
                    : isWarningBoxProps(props) && props.severity === 'low'
                    ? 'border-orange-300 text-orange-300'
                    : props.severity === 'medium'
                    ? 'border-purple-300 text-purple-300'
                    : props.severity === 'high' && 'border-red-500 text-red-500'
            }`}>
            {mode === 'warning' && <h2 className="font-bold text-lg mb-6">Warning</h2>}
            <p>{children}</p>
        </aside>
    );
};

export default InfoBox;
