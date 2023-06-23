using ARS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace ARS.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Booking()
        {
            return View();
        }
        //[HttpPost]
        //public ActionResult Booking()
        //{
        //    if (ModelState.IsValid) 
        //    {


        //        return RedirectToAction("Index", "Home");
        //    }
        //    else
        //    {
        //        return View("Booking");
        //    }
        //}




        public ActionResult Schedules()
        {

            return View();
        }


        public ActionResult Register()
        {
      
            return View();
        }
        [HttpPost]
        public ActionResult Register(Register model)
        {
            if (ModelState.IsValid)
            {
                // The model is valid, so you can proceed with saving the registration data or performing any other necessary actions
                // For example:
                // registrationRepository.SaveRegistration(model);

                return RedirectToAction("Index", "Home"); // Redirect to the index page or any other desired action
            }

            // If the model is not valid, return the registration form with validation errors
            return View(model);
        }



        public ActionResult Login()
        {
            return View();
        }
        private bool IsValidCredentials(string email, string password)
        {
            
            if (email == "example@example.com" && password == "password")
            {
                return true;
            }

            return false;
        }

        [HttpPost]
        public ActionResult Login(Model.Login login)
        {
            if (ModelState.IsValid)
            {
                if (IsValidCredentials(login.Email, login.Password))
                {
                    TempData["IsLoginSuccessful"] = true; // Set the flag for successful login

                    // Redirect to another page or refresh the current page
                    return View("~/ Views / Passenger / PassengerManagement.cshtml");
                }
                else
                {
                    // Credentials are invalid, show error message
                    ModelState.AddModelError("CustomError", "Invalid email or password.");
                }
            }
            
            // Return the view with the model to display the error messages
            return View(login);
        }




        public ActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Contact(Contact contact)
        {
            if(ModelState.IsValid)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return View(contact);
            }
        }

    }
}
