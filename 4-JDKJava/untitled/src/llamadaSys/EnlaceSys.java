package llamadaSys;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiSaludo.Saludo;
import miFecha.Fecha;

import java.util.Scanner;

public class EnlaceSys {
    public void enlazar(){
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opción -> ");
        int op = sc.nextInt();

        do {

            op = sc.nextInt();


            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;
                case 2:
                    Persona p = new Persona("Alets",25,123);
                    p.setNombre("Joss");
                    p.setEdad(32);
                    p.setNss(14689);
                    System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
                    System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
                    System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());
                    break;
                case 3:
                    Fecha objF = new Fecha();
                    objF.setDia(25);
                    objF.setMes(8);
                    objF.setAnio(2022);
                    System.out.println(objF.formaF());
                    break;
                default:
                    System.out.println("Opción no válida ->");

            }

        } while (op < 5);
    }
}

