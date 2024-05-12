export const createResolver = (handleErrors) => {
    return (values) => ({
        values,
        errors: handleErrors(values, {}),
    });
};
export const createError = (message) => ({
    type: "required",
    message,
});
