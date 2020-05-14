using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class TiqueteService
    {
        private readonly TiqueteContext _context;
      
        public TiqueteService(TiqueteContext context)
        {
            _context=context;
        }

        public GuardarTiqueteResponse Guardar(Tiquete tiquete)
        {
            try
            {
             _context.Tiquetes.Add(tiquete);
             _context.SaveChanges();
                return new GuardarTiqueteResponse(tiquete);
            }
            catch (Exception e)
            {
                return new GuardarTiqueteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

                public class GuardarTiqueteResponse 
        {
            public GuardarTiqueteResponse(Tiquete tiquete)
            {
                Error = false;
                Tiquete = tiquete;
            }
            public GuardarTiqueteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Tiquete Tiquete { get; set; }
        }

                 public List<Tiquete> ConsultarTodos()
        {
            List<Tiquete> Tiquetes = _context.Tiquetes.ToList();
            return Tiquetes;
        }


                public Tiquete BuscarxCod(string cod)
        {
            Tiquete tiquete = _context.Tiquetes.Find(cod);
            return tiquete;
        }
}
}
