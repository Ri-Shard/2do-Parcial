﻿using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class PersonaService
    {
        private readonly TiqueteContext _context;
      
        public PersonaService(TiqueteContext context)
        {
            _context=context;
        }

        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
              var personaBus =_context.Personas.Find(persona.Identificacion);
                if (personaBus!= null) 
                {
                    return new GuardarPersonaResponse("Error la persona ya se encuentra registrada");
                }

             _context.Personas.Add(persona);
             _context.SaveChanges();
                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)
            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        
                public class GuardarPersonaResponse 
        {
            public GuardarPersonaResponse(Persona persona)
            {
                Error = false;
                Persona = persona;
            }
            public GuardarPersonaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Persona Persona { get; set; }
        }

                 public List<Persona> ConsultarTodos()
        {
            List<Persona> Personas = _context.Personas.ToList();
            return Personas;
        }

        
                public Persona Buscarxid(string id)
        {
            Persona persona = _context.Personas.Find(id);
            return persona;
        }

}
}
