export const channelTypeToString = (type) => {
    let typeString = "Not Specified";

    type = parseInt(type)

    if (Number.isInteger(type)) {
        switch (type) {
            case 1:
                typeString = "Input, Not Specified";
                break;

            case 2:
                typeString = "Input, MK6";
                break;

            case 3:
                typeString = "Input, MK3";
                break;

            case 4:
                typeString = "Input, 4-20mA, 24V";
                break;

            case 5:
                typeString = "Input, 4-20mA, 0V";
                break;

            case 6:
                typeString = "Input, Voltage, 0V";
                break;

            case 7:
                typeString = "Input, Digital, 0V";
                break;

            case 8:
                typeString = "Input, Pulse, 0V";
                break;

            case 9:
                typeString = "Input, T102A";
                break;

            case 10:
                typeString = "Input, T102IR";
                break;

            case 11:
                typeString = "Input, Semiconductor";
                break;

            case 12:
                typeString = "Input, Thermal Conductivity";
                break;

            case 13:
                typeString = "Input, Photo Ionisation";
                break;

            case 14:
                typeString = "Input, Digital, 24V";
                break;

            case 15:
                typeString = "Input, 4-20mA, 24V, No Under Range";
                break;

            case 16:
                typeString = "Input, 4-20mA, 0V, No Under Range";
                break;

            case 17:
                typeString = "Input, SmartGAS";
                break;

            case 100:
                typeString = "Output, Not Specified";
                break;

            case 101:
                typeString = "Output, Relay";
                break;

            case 102:
                typeString = "Output, Visual";
                break;

            case 103:
                typeString = "Output, Audio";
                break;

            case 104:
                typeString = "Output, 4-20mA";
                break;

            case 105:
                typeString = "Output, Voltage";
                break;

            case 106:
                typeString = "Output, Digital";
                break;

            case 107:
                typeString = "Output, Display";
                break;

            case 110:
                typeString = "Output, SSR, Switched Positive";
                break;

            case 111:
                typeString = "Output, SSR, Switched Negative";
                break;

            case 112:
                typeString = "Output, SSR, Switched Negative, Dual";
                break;
        }
    } else {
        throw "type provided not valid integer";
    }

    return typeString;
};


export const pcbTypeToString = (type) => {
    let typeString = "Not Specified";

    if (Number.isInteger(type)) {
        switch (type) {
            case 1:
                typeString = "T750 Hub";
                break;

            case 2:
                typeString = "T750 Ann";
                break;

            case 3:
                typeString = "T750 I/O";
                break;

            case 4:
                typeString = "T750 Display";
                break;

            case 5:
                typeString = "T750 Sampler";
                break;

            case 6:
                typeString = "T650 Hub"
                break;

            case 7:
                typeString = "T750B";
                break;

            case 8:
                typeString = "T750B Display";
                break;

            case 9:
                typeString = "T750BAV Display";
                break;

            case 10:
                typeString = "T635 Display";
                break;

            case 11:
                typeString = "T635+ Mini Hub (B1)";
                break;

            case 12:
                typeString = "T635 Micro Mini Hub (B2)";
                break;

            case 13:
                typeString = "T635 Mini Hub (B3)";
                break;

            case 14:
                typeString = "T635 Mini Hub (B4)";
                break;

            case 15:
                typeString = "ESP32 Dongle";
                break;

            case 16:
                typeString = "T750+ Hub";
                break;
        }
    } else {
        throw "type provided not valid integer";
    }

    return typeString;
};



export function convert2BytesToUint16(n1, n2) {
    let nReturn = 0;

    nReturn |= (n2 << 8);
    nReturn |= n1;

    return nReturn;
}


export function convert3BytesToUint24(n1, n2, n3) {

    let nReturn = 0;
    let nTemp;

    nReturn |= (n3 << 16);
    nTemp = n2;
    nTemp = (nTemp << 8) & 0x00FF00;
    nReturn |= nTemp;
    nReturn |= (n1 & 0x0000FF);

    return nReturn;
}



export function convertUint24To3Bytes(n) {
    let arr = new Uint8Array(3);

    arr[0] = (n & 0x00FF);
    arr[1] = ((n >> 8) & 0x00FF);
    arr[2] = ((n >> 16) & 0x00FF);

    return arr;
}