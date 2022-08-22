public class Triangulo {
    public static void main(String[] args) {


        String patron = "*****";
        StringBuilder cadena = new StringBuilder(patron);
        System.out.println(cadena);
        for (byte i = 4; i > 0; i--) {
            cadena = cadena.deleteCharAt(i); //borra un caracter en la posición que se indica
            System.out.println(cadena);
        }

    }
}