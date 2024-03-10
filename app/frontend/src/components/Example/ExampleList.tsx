import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "補償内容を教えてください。", value: "補償内容を教えてください。" },
    { text: "保険金が支払われる条件を教えてください。", value: "保険金の支払い条件を教えてください。" },
    { text: "保険金の請求に必要な書類は何ですか？", value: "保険金の請求に必要な書類は何ですか？" },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
