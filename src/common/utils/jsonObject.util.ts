export const ObjectPageContent = (data: object): string => {
    // Convert object to readable string format
    const stringifyObject = (obj, indent = '') => {
        if (!obj) return '';
        let result = '';
        // Process each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null) {
                // Handle nested objects with indentation
                result += `${key}: ,\n${stringifyObject(value, indent + '  ')}`;
            } else {
                // Handle primitive values
                result += `${key}: ${value} ,\n`;
            }
        }
        return result;
    };

    return stringifyObject(data);
};
