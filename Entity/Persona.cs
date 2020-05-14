using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Persona
    {
        [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Sexo { get; set; }
    }
}
    