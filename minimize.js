export default function (dataArray) {
    dataArray.forEach((str, index, arr) => {
        arr[index] = str.replace(/\s+/g,'');
    });
}