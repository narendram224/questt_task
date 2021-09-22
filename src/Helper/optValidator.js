export default function otpValidator(values) {
    const errors = {};
       
            if(String(values['otp']).length===0)errors['otp'] ="Opt is required" 
            if(String(values['otp']).length>0&&String(values['otp']).length<5)errors['otp'] ="Please enter all opts" 
    return errors;
}