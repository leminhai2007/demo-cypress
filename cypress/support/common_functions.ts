export function compareCaseInsensitive(expectedString: string, actualString: string) {
    if (expectedString === null || expectedString === undefined) {
        if (actualString === null || actualString === undefined) {
            return true;
        } else {
            return false;
        }
    } else {
        return expectedString.toLowerCase() === actualString.toLowerCase();
    }
}

export function includeCaseInsensitive(expectedString: string, actualString: string) {
    if (expectedString === null || expectedString === undefined) {
        return false;
    } else {
        return expectedString.toLowerCase().includes(actualString.toLowerCase());
    }
}

export function convertE2eText(text: string) {
    const array = text.toUpperCase().split(' ');
    return array.join('_');
}
