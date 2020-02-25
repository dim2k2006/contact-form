const genCategoryKey = (id) => `formvalues:form:${id}`;

export const saveFormValues = (values, id) => {
  try {
    const serializedValues = JSON.stringify(values);

    localStorage.setItem(genCategoryKey(id), serializedValues);
  } catch (error) {
    throw new Error(error);
  }
};

export const resetFormValues = (id) => {
  try {
    localStorage.removeItem(genCategoryKey(id));
  } catch (error) {
    throw new Error(error);
  }
};

export const loadFormValues = (id) => {
  try {
    const serializedValues = localStorage.getItem(genCategoryKey(id));

    if (serializedValues === null) return null;

    return JSON.parse(serializedValues);
  } catch (error) {
    return null;
  }
};
