import numeral from "numeral";

interface IFormatNum {
    (num: number, type?: "comma"): string;
}

const formatNum: IFormatNum = (num, type = "comma") => {
    switch (type) {
        case "comma": {
            return numeral(num).format("0,0");
        }
        default: {
            return num.toString();
        }
    }
};

export default formatNum;
