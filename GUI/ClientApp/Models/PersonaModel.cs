using Entity;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GUI.Models {

    public class PersonaInputModel {
        [Required(ErrorMessage = "El nombre  es requerido")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El Valor  es requerido")]
        public string Sexo { get; set; }
        

    }   

    public class PersonaViewModel : PersonaInputModel {
        public PersonaViewModel () {

        }
        public PersonaViewModel (Persona persona) {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
            Sexo = persona.Sexo;

        }

    }
}