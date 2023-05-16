import React, { useState } from "react";
import Icon from "../../assets/Icon";
import { Text } from "../text";
import * as _ from './style';
import {colorsKeyOfType} from "../../styles/theme/color";

interface DropProps {
    arr: string[];
    value: string;
    change: React.Dispatch<React.SetStateAction<string>>;
    color?: colorsKeyOfType;
}

const DropDown = ({ arr, value, change, color }: DropProps) => {
    const [state, setState] = useState<boolean | undefined>();

    const setData = (v: string) => {
        if(v !== value) {
            change(v);
        }
    }

    return (
        <>
            {state && <_.Background onClick={() => setState(false)} />}
            <_.Container color={color} onClick={() => setState(!state)}>
                <Text font="Body3">{value}</Text>
                <Icon icon={state ? "up" : "down"} size={16}/>
                <_.Contents bool={state}>
                    {
                        arr.map((v, index) =>
                            <Text key={index} font="Body3" onClick={() => setData(v)}>{v}</Text>
                        )
                    }
                </_.Contents>
            </_.Container>
        </>
    )
}

export default DropDown;