export const filterUndefined = (obj: any): any => {
  const isEmpty = (value: any) => {
    if (value === null || value === undefined || value === "") {
      return true;
    }
    return false;
  };

  if (obj === null || typeof obj === "undefined") {
    return {};
  }
  const objectCloned = { ...obj };
  return Object.entries(obj).reduce((acc, [key, value]: any) => {
    // Condition1
    if (isEmpty(value)) {
      delete acc[key];
    }
    // Condition2
    if (typeof value === "object" && !Array.isArray(value)) {
      if (value !== null && value !== undefined) {
        // Add this check
        const filteredValue = Object.entries(value).reduce(
          (valAcc: any, [innerKey, innerValue]: any) => {
            if (!isEmpty(innerValue)) {
              valAcc[innerKey] = innerValue;
            }
            return valAcc;
          },
          {},
        );

        if (Object.values(filteredValue).length > 0) {
          acc[key] = filteredValue;
        } else {
          delete acc[key];
        }
      }
    }
    // Condition3
    if (Array.isArray(value)) {
      // Handle array filtering here
      const filteredArray = value.filter((element: any) => !isEmpty(element));
      if (filteredArray.length > 0) {
        acc[key] = filteredArray;
      } else {
        delete acc[key];
      }
    }
    return acc;
  }, objectCloned);
};
