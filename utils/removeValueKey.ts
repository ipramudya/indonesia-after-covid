const removeValueKey = (arr: []) =>
    // console.log(arr);
    arr.map((item: any) => {
        const keys = Object.keys(item);

        const newEntry = keys.reduce((accumulator, current) => {
            if (!item[current].hasOwnProperty("value")) {
                return { ...accumulator, [current]: item[current] };
            }

            return { ...accumulator, [current]: item[current].value };
        }, {});

        return newEntry;
    });

export default removeValueKey;
