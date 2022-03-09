import numeral from "numeral";

interface IFormatNum {
    (num: number | undefined, type?: "comma" | "autoformat" | "percentage"): string;
}

const formatNum: IFormatNum = (num, type = "comma") => {
    if (!num) return "0";

    switch (type) {
        case "comma": {
            return numeral(num).format("0,0");
        }
        case "autoformat": {
            if (num < 10000 || num > 10000) {
                return numeral(num).format("0a");
            } else if (num < 1000) {
                return num.toString();
            }
            return numeral(num).format("0a");
        }
        case "percentage": {
            return `${num.toFixed(0)} %`;
        }
        default: {
            return num.toString();
        }
    }
};

export default formatNum;
