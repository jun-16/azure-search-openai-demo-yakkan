import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "この保険の概要を説明してください。", value: "この保険の概要を説明してください。" },
    { text: "保険金の請求に必要な書類は何ですか？", value: "保険金の請求に必要な書類は何ですか？" },
    { text: "1打目でカップにボールが入った場合に備えた特約を教えてください。", value: "1打目でカップにボールが入った場合に備えた特約を教えてください。" },
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
