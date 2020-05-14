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
    public class PersonaController : ControllerBase
    {
        private readonly PersonaService _personaService;
      
        public PersonaController(TiqueteContext context)
        {
        
            _personaService = new PersonaService(context);
        }
    }
}