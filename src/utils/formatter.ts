import moment from 'moment-timezone';



export const dateFormat = (value, outformat = 'MM/DD/YYYY', inputFormat: string | null = null) => {
    if (inputFormat) {
        return moment(value, inputFormat).format(outformat);
    } else {
        return moment(value).format(outformat);

    }
}