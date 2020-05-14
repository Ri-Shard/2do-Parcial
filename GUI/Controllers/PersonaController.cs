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
      [HttpPost]

 public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput)
        {
            Persona persona = MapearPersona(personaInput);
            var response = _personaService.Guardar(persona);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Persona", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
                
            }
            return Ok(response.Persona);
        }

          private Persona  MapearPersona(PersonaInputModel personaInput)
        {
            var persona = new Persona
            {
                Identificacion = personaInput.Identificacion,
                Nombre = personaInput.Nombre,
                Sexo = personaInput.Sexo,
            };
            return persona;
        }

    }
}