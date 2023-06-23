using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ARS.Model
{
    public class Register
    {
        [Required(ErrorMessage = "First name is required.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [RegularExpression(@"^.{8,}$", ErrorMessage = "Password should contain at least one uppercase letter and one number.")]
        public string Password { get; set; }

       [Required(ErrorMessage = "Date of Birth is required.")]
        [RegularExpression(@"^\d{2}-\d{2}-\d{4}$", ErrorMessage = "Please enter a valid date in the format DD-MM-YYYY.")]
        public string DOB { get; set; }

        [Required(ErrorMessage = "Gender is required.")]
        [RegularExpression(@"^(Male|Female|[mM]ale|[fF]emale)$", ErrorMessage = "Please enter a valid gender ('Male' or 'Female').")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "Mobile number is required.")]
        [RegularExpression(@"^^(03\d{9})$", ErrorMessage = "Please enter a valid mobile number starting with '03' or '92'.")]
        public string MobileNo { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        [RegularExpression(@"^.{10,}$", ErrorMessage = "Please enter your address'.")]
        public string Address { get; set; }
    }
}