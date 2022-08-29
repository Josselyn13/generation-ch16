package com.jimg.principal;

import com.jimg.herencia.BasePadre;
import com.jimg.herencia.Hija;
import com.jimg.herencia.Hijo;

public class EjemploH {
    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        System.out.println("Atributo de Clase Base Padre ->" + objB.getA());
        System.out.println("Atributo de clase Hijo ->" + ho.getA());


    }
}
