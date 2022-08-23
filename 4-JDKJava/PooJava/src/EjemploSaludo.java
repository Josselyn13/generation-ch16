public class EjemploSaludo {
    public static void main(String[] args) {
        //Instancia pasos:
        //declaración
        //construcción
        //invocación

        Saludo objSaludo;
        objSaludo = new Saludo();
        objSaludo.saludar();

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto: -> " + objSaludo.saludar0());
    }
}
