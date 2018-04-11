/*
Things to consider:
- Should we allow users (all entities) to upload their photo/logo on the registration page? If yes, I can add that.
If not, they can add it in the "update account" page that we will need no matter what
- Does each entity have their own username or just the use of an email address? I added email address, but not any username
- The password part is there for show rn, when we integrate with Firebase that can be taken out
- Patients
    - Should patients be able to link to their insurance ID here or later by searching for their insurance and getting the insurance through our site?
        Will they be able to add insurance they got outside of our site to our site?
- Insurance
    - Right now their is only one box names 'schemes'- I will make this expandable so they can have as many schemes as they need
PLEASE WRITE ANY FEEDBACK IN HERE OR IN THE EMAIL SO THAT I CAN UPDATE THIS PAGE
Feedback:
-
-
Thanks! :)
*/

function userOptionsFunc(){
    var s = document.getElementById('useroptions');
            document.getElementById('addinformation').innerHTML = "";
    switch(s.value){
        case "patient":
            var patientStr =
            `
              Date of birth: <br><input type='date' name='DOB'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Sex: <select name='sex' form='registrationform'>
            <option value='prefernottospecify'>Prefer Not to Specify</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='other'>Other</option>
            </select><br><br>
            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = patientStr;

        case "pharmacy":
            var pharmacyStr =
            `Address: <br><input type='text' name='address1' size='35'><br>
            <input type='text' name='address2' size='35'><br>
            <input type='text' name='address3' size='35'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Website: <br><input type='text' name='website'><br><br>

            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = pharmacyStr;
            break;
        case "hospital":
            var hospitalStr =
            `Address: <br><input type='text' name='address1' size='35'><br>
            <input type='text' name='address2' size='35'><br>
            <input type='text' name='address3' size='35'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Website: <br><input type='text' name='website'><br><br>

            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = hospitalStr;
            break;
        case "insurance":
            var insuranceStr =
            `Address: <br><input type='text' name='address1' size='35'><br>
            <input type='text' name='address2' size='35'><br>
            <input type='text' name='address3' size='35'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Website: <br><input type='text' name='website'><br><br>

            Schemes: <br>
            <input type='text' name='schemes'><br><br>

            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = insuranceStr;
            break;
        case "doctor":
            var doctorStr =
            `Specialty: <br><input type='text' name='specialty'><br><br>

            Address: <br><input type='text' name='address1' size='35'><br>
            <input type='text' name='address2' size='35'><br>
            <input type='text' name='address3' size='35'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Website: <br><input type='text' name='website'><br><br>

            Fees: <br><input type='text' name='fees'><br><br>
            Description: <br><input type='text' name='description'><br><br>
            Certifications: <br><input type='text' name='certifications'><br><br>
            Sex: <br><input type='text' name='sex'><br><br>
            Date of Birth: <br><input type='text' name='DOB'><br><br>

            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = doctorStr;
            break;
        case "testcenter":
            var testcenterStr =
            `Address: <br><input type='text' name='address1' size='35'><br>
            <input type='text' name='address2' size='35'><br>
            <input type='text' name='address3' size='35'><br><br>
            Billing Address: <br><input type='text' name='billingaddress1' size='35'><br>
            <input type='text' name='billingaddress2' size='35'><br>
            <input type='text' name='billingaddress3' size='35'><br><br>
            Phone Number: <br><input type='text' name='phonenumber'><br><br>
            Website: <br><input type='text' name='website'><br><br>

            Email:<br><input type='text' name='email'><br><br>
            Password:<br><input type='text' name='password'><br><input type='submit'>`;

            document.getElementById('addinformation').innerHTML = testCenterStr;
            break;
        default:
            break;
    }

}
