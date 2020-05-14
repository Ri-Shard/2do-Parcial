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
 public ActionResult<TiqueteViewModel> Post(TiqueteInputModel tiqueteInput)
        {
            Tiquete tiquete= MapearTiquete(tiqueteInput);
            var response = _tiqueteService .Guardar(tiquete);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Tiquete", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
                
            }
            return Ok(response.Tiquete);
        }

      [HttpGet]
      public IEnumerable<TiqueteViewModel> Get() {
          var tiquetes = _tiqueteService.ConsultarTodos().Select(u => new TiqueteViewModel(u));
          return tiquetes;
      }
        // GET: api/Cliente/5
        [HttpGet("{id}")]
        public ActionResult<TiqueteViewModel> Get(string id)
        {
            var tiquete =  _tiqueteService .BuscarxCod(id);
            if (tiquete == null) return NotFound();
            var tiqueteViewModel = new TiqueteViewModel(tiquete);
            return tiqueteViewModel;
        }

    }
}