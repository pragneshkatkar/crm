export const validations = {
    //basic
    mobile: /^[0-9]{10}$/,
    landline: /^[0-9]{11}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    text: /^[a-zA-Z ]+$/,
    text_number: /^[a-zA-Z0-9 ]+$/,
    number: /^[0-9 ]+$/,
    url: new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"),
    
    // statutory
    pan: /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
    gst: /^([0][1-9]|[1-2][0-9]|[3][0-8])[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/,
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/
}