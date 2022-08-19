public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en Java";
        String nombre = "Josselyn Ileana";
        String resultado = new String ("Curso en Java");
        System.out.println("resultado = " + resultado );

        boolean esIgual = curso == resultado;
        System.out.println("esigual = " + esIgual);

        esIgual = curso.equals(resultado);
        System.out.println("esigual = " + esIgual);

        String concat = curso +" "+ nombre;
        System.out.println("concat = " + concat);
        String dia = "Jueves";
        String concat1 = concat.concat(dia);

        System.out.println("concat1 = " + concat1);


    }
}