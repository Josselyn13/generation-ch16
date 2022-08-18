public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Hugo";
        String saludo = "Hola esto es ejemplo de variables";
        System.out.println(saludo + " " + nombre);

        char espacio = '\u0040';
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo: "+ Character.MAX_VALUE);
        System.out.println("char valor maximo: "+ Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("espacio = " + numeroEntero);
        System.out.println("char corresponde en byte: " + Integer.BYTES);
        System.out.println("char corresponde en bits: " + Integer.SIZE);
        System.out.println("char valor maximo: "+ Integer.MAX_VALUE);
        System.out.println("char valor maximo: "+ Integer.MIN_VALUE);

        float numeroFloat = 1;
        System.out.println("espacio = " + numeroFloat);
        System.out.println("char corresponde en byte: " + Float.BYTES);
        System.out.println("char corresponde en bits: " + Float.SIZE);
        System.out.println("char valor maximo: "+ Float.MAX_VALUE);
        System.out.println("char valor maximo: "+ Float.MIN_VALUE);

        double numeroDoble = 3.44567E39;
        System.out.println("espacio = " + numeroDoble);
        System.out.println("char corresponde en byte: " + Double.BYTES);
        System.out.println("char corresponde en bits: " + Double.SIZE);
        System.out.println("char valor maximo: "+ Double.MAX_VALUE);
        System.out.println("char valor maximo: "+ Double.MIN_VALUE);

        Boolean VarBooleano = (3-2 == 4);
        System.out.println("valorBoolean = " + VarBooleano);

    var miVar = 2;
        System.out.println("miVar = " + miVar);

    }
}
