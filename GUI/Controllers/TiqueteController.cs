using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using GUI.Models;
using System.ComponentModel.DataAnnotations;
using System;
using Datos;
namespace GUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiqueteController : ControllerBase
    {
        private readonly TiqueteService _tiqueteService;
      
        public TiqueteController(TiqueteContext context)
        {
        
             _tiqueteService = new TiqueteService(context);
        }
    }
}