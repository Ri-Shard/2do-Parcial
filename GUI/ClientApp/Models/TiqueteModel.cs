using Entity;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GUI.Models {

    public class TiquetenputModel {
        [Required(ErrorMessage = "El codigo  es requerido")]
        public string Codigo { get; set; }

        [Required(ErrorMessage = "La ruta es requerida")]
        public string Ruta { get; set; }

        [Required(ErrorMessage = "El Id del cliente  es requerido")]
        public string IdCliente { get; set; }
        
        [Required(ErrorMessage = "El nombre del cliente es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El valor es requerido")]
        public decimal Valor { get; set; }
    }   

    public class TiqueteViewModel : TiquetenputModel {
        public TiqueteViewModel () {

        }
        public TiqueteViewModel (Tiquete tiquete) {
            Codigo = tiquete.Codigo;
            Ruta = tiquete.Ruta;
            IdCliente = tiquete.IdCliente;
            Nombre = tiquete.Nombre;
            Valor = tiquete.Valor;
        }

    }
}