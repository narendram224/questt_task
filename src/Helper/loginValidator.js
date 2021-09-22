export default function loginValidator(values) {
    const errors = {};
    if (String(values['mobile']).length===0) {
        errors['mobile']="Mobile no is required";
    }
    if (String(values['mobile']).length>0&&String(values['mobile']).length<10) {
        errors['mobile']="Mobile no must be 10";
    }
    if (String(values['mobile']).length>0&&String(values['mobile']).length>10) {
        errors['mobile']="Mobile no not greater than 10 character";
    }
    if (String(values['filter']).length===0) {
        errors['filter']="Mobile filter is required";
    }
    return errors;

}