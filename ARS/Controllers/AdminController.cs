using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ARS.Model;

namespace ARS.Controllers
{
    public class AdminController : Controller
    {
        

        // GET: Admin
        public ActionResult Dashboard()
        {
            return View();
        }
        public ActionResult BookingManagement()
        {
            return View();
        }
       

      

        public ActionResult PassengerManagement()
        {
           
            return View();
        }


       


public ActionResult FlightManagement()
        {
            return View();
        }
        public ActionResult CrewManagement()
        {
            return View();
        }
    }
}