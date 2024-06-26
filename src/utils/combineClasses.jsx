export const combineClasses = (class1, class2) => {
    const combinedClasses = {};
    const classKeys = Object.keys(class1);
    for (let i = 0; i < classKeys.length; i++) {
        const key = classKeys[i];
        combinedClasses[key] = `${class1[key]} ${class2[key]}`;
    }
    return combinedClasses;
}
