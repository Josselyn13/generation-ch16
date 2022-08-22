import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //set
        //HashSet
        //no guardan los valores en el orden en el que se van agregando
        //set no permite elementos duplicados
        //la colección que funciona más rápido

        Set<String> miSet = new HashSet<>();
        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");

        boolean persona = miSet.remove("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));

        for(String nombre : miSet){
            System.out.println(nombre);
        }
    }
}
