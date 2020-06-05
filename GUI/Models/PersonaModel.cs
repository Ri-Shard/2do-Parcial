using Entity;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GUI.Models {

    public class PersonaInputModel {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = " el nombre es requerido")]
        public string Nombre { get; set; }

        [SexoValidacion( ErrorMessage="El Sexo debe ser F o M")]
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
    public class SexoValidacion : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((value.ToString().ToUpper() == "M") || (value.ToString().ToUpper() == "F"))
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult(ErrorMessage);
            }
        }
    }

}