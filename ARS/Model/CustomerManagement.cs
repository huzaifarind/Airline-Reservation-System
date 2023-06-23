using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ARS.Model
{
    public class CustomerManagement
    {
        [Required(ErrorMessage = "First Name is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Mobile number is required.")]
        public string MobileNo { get; set; }
        [Required(ErrorMessage = "Cnic number is required.")]
        public string Cnic { get; set; }
        [Required(ErrorMessage = "Date Of Birth is required.")]
        public string Dob { get; set; }
        [Required(ErrorMessage = "Address is required.")]
        public string Address { get; set; }
        public string FrequentFlyer { get; set; }


    }
    }
