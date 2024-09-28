// valid firstname f
export const isValidfullName = (firstName: string) => {
    return /^([A-z,',]{2,})+(\s)[A-z,',]{2,}$/.test(firstName);
};

// valid phone fuction
export const isValidPhoneNumber = (phoneNumber: string) => {
    const regex = /^\+998([-])?([ ])?(90|91|93|94|95|98|99|33|97|71|77)([-])?([ ])?(\d{3})([-])?([ ])?(\d{2})([-])?([ ])?(\d{2})$/;
    return regex.test(phoneNumber);
};