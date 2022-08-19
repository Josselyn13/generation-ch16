import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta es la clase Edad");

        //Determinar si una persona es mayor de edad

        Scanner escaner = new Scanner(System.in); //instanciar
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close(); //cuando ya no se necesiten leer más datos

//if else
        if(edad >= 18){
            System.out.println("Eres mayor de edad");

        } else {
            System.out.println("Eres menor de edad");
        }

        //operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);


    }
}
