import moment from 'moment-timezone';



export const dateFormat = (value: string, outformat = 'MM/DD/YYYY', inputFormat: string | null = null) => {
    if (!value) {
        return "";
    }
    if (inputFormat) {
        return moment(value, inputFormat).format(outformat);
    } else {
        return moment(value).format(outformat);

    }
}